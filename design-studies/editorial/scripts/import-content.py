"""Import a checked local snapshot of Quincy public pages. No remote scripts are kept."""
from pathlib import Path
from html.parser import HTMLParser
from html import escape, unescape
from urllib.parse import urlparse
import re,json
SRC=Path('/tmp/quincy-pages');OUT=Path('app/data')
class Node:
 def __init__(self,tag='',attrs=None):self.tag=tag;self.attrs=dict(attrs or []);self.children=[]
 def text(self):return ''.join(c if isinstance(c,str) else c.text() for c in self.children)
 def all(self,tag=None):
  out=[]
  for c in self.children:
   if isinstance(c,Node):
    if tag is None or c.tag==tag:out.append(c)
    out+=c.all(tag)
  return out
class Tree(HTMLParser):
 def __init__(self,s):
  super().__init__(convert_charrefs=True);self.root=Node('root');self.stack=[self.root];self.feed(s)
 def handle_starttag(self,t,a):
  n=Node(t,a);self.stack[-1].children.append(n)
  if t not in ['img','br','hr','input','meta','link','source','wbr','area','embed']:self.stack.append(n)
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==t:self.stack=self.stack[:i];break
 def handle_data(self,s):self.stack[-1].children.append(s)
def cleantext(s):return re.sub(r'\s+',' ',s).strip()
def safeurl(s):return s if s.startswith(('https://','http://','mailto:','/','#')) and not s.startswith('//') else ''
allowed={'p','h2','h3','h4','h5','ul','ol','li','strong','em','b','i','blockquote','pre','code','a','img','figure','figcaption','br','hr','table','thead','tbody','tr','th','td','sup','sub'}
drop={'script','style','svg','button','form','input','iframe','video','audio'}
def sanitize(n):
 if isinstance(n,str):return escape(n)
 if n.tag in drop:return ''
 inner=''.join(sanitize(c) for c in n.children)
 if n.tag not in allowed:return inner
 attrs=''
 if n.tag=='a':
  u=safeurl(n.attrs.get('href',''));attrs=' href="'+escape(u,quote=True)+'"' if u else ''
 if n.tag=='img':
  u=safeurl(n.attrs.get('src',''))
  if not u:return ''
  attrs=' src="'+escape(u,quote=True)+'" alt="'+escape(n.attrs.get('alt',''),quote=True)+'" loading="lazy"'
  for k in ['width','height']:
   if n.attrs.get(k,'').isdigit():attrs+=f' {k}="{n.attrs[k]}"'
 if n.tag in ['img','br','hr']:return '<'+n.tag+attrs+'>'
 return '<'+n.tag+attrs+'>'+inner+'</'+n.tag+'>'
index=Tree((SRC/'insights.html').read_text()).root
posts=[]
for a in index.all('article'):
 links=[n.attrs.get('href','') for n in a.all('a') if '/insights/substack/' in n.attrs.get('href','')]
 if not links:continue
 title=cleantext(a.all('h3')[0].text());date=cleantext(a.all('time')[0].text());excerpt=cleantext(a.all('p')[0].text());txt=cleantext(a.text());minutes=re.search(r'(\d+)\s*min read',txt);author=txt.split('by ')[-1]
 slug=links[0].split('/')[-1];path=SRC/f'insights--substack--{slug}.html';raw=path.read_text();tree=Tree(raw).root
 original=next((n.attrs.get('href') for n in tree.all('a') if 'View original' in n.text()),'https://quincylabs.substack.com/')
 start=re.search(r'<div class="substack-content[^\"]*">',raw)
 content=''
 if start:
  fragment=raw[start.end():];end=fragment.find('<div class="bg-gradient-to-r')
  if end<0:end=fragment.find('</article>')
  if end>=0:fragment=fragment[:end]
  content=sanitize(Tree(fragment).root)
 category='Research Notes'
 if any(w in title.lower() for w in ['openclaw','cli agent','exporter','mcps','codex','opus']):category='Technical Deep Dives'
 elif any(w in title.lower() for w in ['macro','hwaryun','bitcoin','defi','yield','perps','amm','capital','markets']):category='Macro & Markets'
 posts.append(dict(slug=slug,title=title,date=date,minutes=int(minutes[1]) if minutes else 5,author=author,excerpt=excerpt,category=category,original=original,html=content))
assert all(p['html'] for p in posts), 'Missing article body'
OUT.joinpath('articles.json').write_text(json.dumps(posts,ensure_ascii=False))
OUT.joinpath('article-index.json').write_text(json.dumps([{k:v for k,v in p.items() if k!='html'} for p in posts],ensure_ascii=False))
# Other pages keep their meaningful text and semantic groups, without old layout or scripts.
pages={}
for path in SRC.glob('*.html'):
 if path.name.startswith('insights'):continue
 root=Tree(path.read_text()).root;m=root.all('main');main=m[0] if m else root
 h1=main.all('h1');title=cleantext(h1[0].text()) if h1 else path.stem
 blocks=[]
 def walk(n):
  if isinstance(n,str):return
  if n.tag in ['script','style','svg']:return
  if n.tag in ['h2','h3','h4','p','li']:
   text=cleantext(n.text())
   if text:blocks.append({'tag':n.tag,'text':text})
   return
  for c in n.children:walk(c)
 walk(main)
 pages[path.stem]={'title':title,'blocks':blocks,'links':[{'href':a.attrs.get('href',''),'text':cleantext(a.text())} for a in main.all('a') if safeurl(a.attrs.get('href',''))]}
OUT.joinpath('pages.json').write_text(json.dumps(pages,ensure_ascii=False))
print('Imported',len(posts),'complete articles and',len(pages),'source pages')
