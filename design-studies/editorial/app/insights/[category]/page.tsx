import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {PageIntro} from '../../editorial';
import InsightsList from '../insights-list';
const categories:Record<string,string>={'research-notes':'Research Notes','tech-deep-dives':'Technical Deep Dives','macro-markets':'Macro & Markets'};
export async function generateMetadata({params}:{params:Promise<{category:string}>}):Promise<Metadata>{return {title:`${categories[(await params).category]||'Insights'} — Quincy Labs`}}
export default async function Category({params}:{params:Promise<{category:string}>}){const category=categories[(await params).category];if(!category)notFound();return <main id="main-content"><PageIntro label="Insights" title={category} description="Selected writing from the Quincy Labs notebook."/><section className="section-pad insight-index"><InsightsList initial={category}/></section></main>}
