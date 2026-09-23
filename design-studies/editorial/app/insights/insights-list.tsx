'use client';
import {useState} from 'react';
import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs';
import posts from '../data/article-index.json';
const categories=['All insights','Research Notes','Technical Deep Dives','Macro & Markets'];
export default function InsightsList({initial='All insights'}:{initial?:string}){
 const [category,setCategory]=useState(initial);
 const list=category==='All insights'?posts:posts.filter(p=>p.category===category);
 return <Tabs value={category} onValueChange={v=>setCategory(String(v))} className="insights-browser"><div className="filter-heading"><TabsList aria-label="Filter articles by category" className="article-filters">{categories.map(c=><TabsTrigger value={c} key={c}>{c}</TabsTrigger>)}</TabsList><span className="eyebrow" aria-live="polite">{list.length} ARTICLES</span></div><TabsContent value={category}><div className="article-list">{list.map((p,i)=><a className="article-row" href={`/insights/substack/${p.slug}`} key={p.slug}><span className="article-num">{String(i+1).padStart(2,'0')}</span><div className="article-row-copy"><span className="eyebrow">{p.category}</span><h2>{p.title}</h2><p>{p.excerpt}</p></div><div className="article-byline"><time>{p.date}</time><span>{p.author}</span><span>{p.minutes} min read</span></div><span className="row-arrow" aria-hidden="true">↗</span></a>)}</div></TabsContent></Tabs>
}
