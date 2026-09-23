import Parser from 'rss-parser'
import {parseFragment, serialize, type DefaultTreeAdapterMap} from 'parse5'

interface SubstackFeed {
  url: string
  author: string // display name on the site
}

// Add new team Substack feeds here
const SUBSTACK_FEEDS: SubstackFeed[] = [
  { url: 'https://0xlordgrace.substack.com/feed', author: 'Quincy Labs' },
  { url: 'https://quincylabs.substack.com/feed', author: 'Henry' },
  { url: 'https://diaraylouden.substack.com/feed', author: 'Diamond' },
  { url: 'https://hwaryunai.substack.com/feed', author: 'Hwaryun AI' },
]

export interface SubstackPost {
  _id: string
  title: string
  slug: string
  link: string
  publishedAt: string
  excerpt: string
  content: string
  author: string
  readTime: number
  source: 'substack'
}

const parser = new Parser()

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
}

export function stripSubscribeWidget(html: string): string {
  // Parse nested feed markup before removing widgets; regex can truncate a
  // parent div and leave invalid HTML around the article.
  const fragment = parseFragment(html);
  function clean(parent: DefaultTreeAdapterMap['parentNode']) {
    parent.childNodes = parent.childNodes.filter(node => {
      if (!('tagName' in node)) return true;
      const classes = node.attrs.find(attr => attr.name === 'class')?.value || '';
      return !['script', 'style', 'form', 'input', 'button', 'iframe', 'object', 'embed'].includes(node.tagName)
        && !classes.split(/\\s+/).some(name => name.includes('subscription-widget'));
    });
    for (const node of parent.childNodes) {
      if ('tagName' in node) {
        node.attrs = node.attrs.filter(attr => !attr.name.startsWith('on') && attr.name !== 'srcdoc'
          && !(['href', 'src', 'action', 'xlink:href'].includes(attr.name) && /^[\\s\\u0000-\\u0020]*(javascript|vbscript|data):/i.test(attr.value)));
        clean(node);
      }
    }
  }
  clean(fragment);
  return serialize(fragment);
}

function estimateReadTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '')
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 250))
}

function extractExcerpt(html: string, maxLength = 200): string {
  const cleaned = stripSubscribeWidget(html)
  const text = decodeHtmlEntities(cleaned.replace(/<[^>]*>/g, '')).trim()
  if (text.length <= maxLength) return text
  // Cut at the last complete sentence within the limit
  const truncated = text.slice(0, maxLength)
  const lastSentenceEnd = Math.max(
    truncated.lastIndexOf('. '),
    truncated.lastIndexOf('? '),
    truncated.lastIndexOf('! '),
  )
  if (lastSentenceEnd > 50) {
    return truncated.slice(0, lastSentenceEnd + 1)
  }
  // Fallback: cut at last word boundary
  return truncated.replace(/\s+\S*$/, '') + '...'
}

function slugFromLink(link: string): string {
  const url = new URL(link)
  const parts = url.pathname.split('/').filter(Boolean)
  return parts[parts.length - 1] || ''
}

async function fetchFeed(feed: SubstackFeed): Promise<SubstackPost[]> {
  try {
    const parsed = await parser.parseURL(feed.url)

    return (parsed.items || []).map((item) => {
      const rawContent = item['content:encoded'] || item.content || ''
      const content = stripSubscribeWidget(rawContent)
      return {
        _id: `substack-${slugFromLink(item.link || '')}`,
        title: item.title || 'Untitled',
        slug: slugFromLink(item.link || ''),
        link: item.link || '',
        publishedAt: item.isoDate || item.pubDate || new Date().toISOString(),
        excerpt: extractExcerpt(rawContent),
        content,
        author: feed.author,
        readTime: estimateReadTime(content),
        source: 'substack' as const,
      }
    })
  } catch (error) {
    console.error(`Error fetching Substack feed (${feed.url}):`, error)
    return []
  }
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  const results = await Promise.all(SUBSTACK_FEEDS.map(fetchFeed))
  const allPosts = results.flat()

  // Sort all posts by date, newest first
  allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return allPosts
}

export async function getSubstackPost(slug: string): Promise<SubstackPost | null> {
  const posts = await getSubstackPosts()
  return posts.find((p) => p.slug === slug) || null
}
