import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {PageIntro,ArticleBlocks} from '../editorial';
import pages from '../data/pages.json';
const sections:Record<string,keyof typeof pages>={philosophy:'about--philosophy',story:'about--story'};
export async function generateMetadata({params}:{params:Promise<{section:string}>}):Promise<Metadata>{return {title:`${pages[sections[(await params).section]]?.title||'About'} — Quincy Labs`}}
export default async function AboutSection({params}:{params:Promise<{section:string}>}){const {section}=await params;const p=pages[sections[section]];if(!p)notFound();return <main id="main-content"><PageIntro label="About" title={p.title} description={p.blocks[0]?.text||''}/><div className="document-layout section-pad"><aside className="document-nav"><a href="/about">← About Quincy Labs</a><a href={section==='story'?'/about/philosophy':'/about/story'}>{section==='story'?'Our philosophy':'Our story'} ↗</a></aside><div className="document-surface"><ArticleBlocks blocks={p.blocks.slice(1)}/><a className="text-link" href="/contact">Get in touch ↗</a></div></div></main>}
