import type {Metadata} from 'next';
import {getEditorialPosts} from '@/lib/editorial-posts';
import {formatDate} from '@/lib/sanity.utils';
import {PageIntro,SectionLabel} from '../editorial';
import {SettlementDiagram} from '../shared';
import InsightsList from './insights-list';
export const revalidate=3600;
export const metadata:Metadata={title:'Insights — Quincy Labs',description:'Research notes, technical explorations, and lessons from building.'};
export default async function Insights(){const posts=await getEditorialPosts(); const featured=posts.find(p=>p.href.endsWith('/building-in-public-monmouth-is-coming'))||posts[0];return <main id="main-content"><PageIntro label="Insights" title="Thinking in" accent="public." description="Research notes, technical explorations, and lessons from building. An open notebook from Quincy Labs."/>{featured&&<section className="featured-story section-pad"><div><SectionLabel number="01">SELECTED FROM THE LAB</SectionLabel><h2><a href={featured.href}>{featured.title}</a></h2><p>{featured.excerpt}</p><div className="featured-meta">{featured.author} · {formatDate(featured.publishedAt)} · {featured.minutes} min read</div><a className="text-link" href={featured.href}>Read the story ↗</a></div><a href={featured.href} aria-label={'Read '+featured.title}><SettlementDiagram/></a></section>}<section className="insight-index section-pad"><SectionLabel number="02">THE NOTEBOOK</SectionLabel><InsightsList posts={posts}/></section><section className="newsletter-line section-pad"><h2>Keep a place in your inbox.</h2><a className="text-link" href="https://quincylabs.substack.com/">Subscribe on Substack ↗</a></section></main>}
