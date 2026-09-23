'use client';
import {useState} from 'react';
import type {EditorialPost} from '@/lib/editorial-posts';
import {formatDate} from '@/lib/sanity.utils';
const categories=[['all','All insights'],['research-notes','Research Notes'],['tech-deep-dives','Technical Deep Dives'],['macro-markets','Macro & Markets'],['substack','Substack']];
export default function InsightsList({posts,initial='all'}:{posts:EditorialPost[];initial?:string}){
 const [category,setCategory]=useState(initial);
 const list=category==='all'?posts:posts.filter(p=>p.categoryKey===category);
 return <div className="insights-browser"><div className="filter-heading"><div className="article-filters editorial-filters" role="group" aria-label="Filter articles by category">{categories.map(([key,label])=><button type="button" key={key} aria-pressed={category===key} onClick={()=>setCategory(key)}>{label}</button>)}</div><span className="eyebrow" aria-live="polite">{list.length} ARTICLES</span></div><div className="article-list">{list.map((p,i)=><a className="article-row" href={p.href} key={p.id}><span className="article-num">{String(i+1).padStart(2,'0')}</span><div className="article-row-copy"><span className="eyebrow">{p.category}</span><h2>{p.title}</h2><p>{p.excerpt}</p></div><div className="article-byline"><time dateTime={p.publishedAt}>{formatDate(p.publishedAt)}</time><span>{p.author}</span><span>{p.minutes} min read</span></div><span className="row-arrow" aria-hidden="true">↗</span></a>)}</div>{list.length===0&&<p className="empty-posts">No articles are available in this category. Please check back soon.</p>}</div>;
}
