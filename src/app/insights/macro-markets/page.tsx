import {getEditorialPosts} from '@/lib/editorial-posts';
import {PageIntro} from '../../editorial';
import InsightsList from '../insights-list';
export const revalidate=3600;
export const metadata={title:'Macro & Markets — Quincy Labs'};
export default async function Page(){return <main id="main-content"><PageIntro label="Insights" title="Macro & Markets" description="Explore our latest writing and research."/><section className="insight-index section-pad"><InsightsList posts={await getEditorialPosts()} initial="macro-markets"/></section></main>}
