import {getEditorialPosts} from '@/lib/editorial-posts';
import {PageIntro} from '../../editorial';
import InsightsList from '../insights-list';
export const revalidate=3600;
export const metadata={title:'Technical Deep Dives — Quincy Labs'};
export default async function Page(){return <main id="main-content"><PageIntro label="Insights" title="Technical Deep Dives" description="Explore our latest writing and research."/><section className="insight-index section-pad"><InsightsList posts={await getEditorialPosts()} initial="tech-deep-dives"/></section></main>}
