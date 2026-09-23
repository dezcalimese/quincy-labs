import articleCategories from './article-categories.json';
import {cache} from 'react';
import {sanityClient} from './sanity.client';
import {postsQuery} from './sanity.queries';
import type {BlogPostPreview} from './sanity.types';
import {getCategoryDisplayName} from './sanity.utils';
import {getSubstackPosts} from './substack';
export type EditorialPost={id:string;title:string;href:string;publishedAt:string;minutes:number;excerpt:string;author:string;category:string;categoryKey:string};
export const getEditorialPosts=cache(async():Promise<EditorialPost[]>=>{
 const [sanity,substack]=await Promise.all([sanityClient.fetch<BlogPostPreview[]>(postsQuery).catch(error=>{console.error('Sanity posts unavailable',error);return [];}),getSubstackPosts()]);
 return [...sanity.map(p=>({id:p._id,title:p.title,href:'/insights/'+p.slug.current,publishedAt:p.publishedAt,minutes:p.readTime,excerpt:p.excerpt,author:p.author?.name||'Quincy Labs',category:getCategoryDisplayName(p.category),categoryKey:p.category})),...substack.map(p=>({id:p._id+':'+p.link,title:p.title,href:'/insights/substack/'+p.slug,publishedAt:p.publishedAt,minutes:p.readTime,excerpt:p.excerpt,author:p.author,category:getCategoryDisplayName((articleCategories as Record<string,string>)[p.slug]||'Substack'),categoryKey:(articleCategories as Record<string,string>)[p.slug]||'substack'}))].sort((a,b)=>Date.parse(b.publishedAt)-Date.parse(a.publishedAt));
});
