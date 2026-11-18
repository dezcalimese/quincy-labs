import Link from 'next/link';
import { SEC_BENCH } from '@/lib/sec-bench';

// "Also in this series" link from one Sec Bench page to the others. No cross-page numbers: the cases differ.
export function AlsoInSeries({ current }: { current: string }) {
  const others = SEC_BENCH.benches.filter(b => b.href !== current);
  return (
    <section className="section-pad ssb-series" aria-label="Also in this series">
      <div className="ssb-series-label">Also in this series</div>
      {others.map(b => (
        <Link key={b.href} href={b.href} className="ssb-series-link">
          <span className="ssb-series-name">{b.name}</span>
          <span className="ssb-series-line">{b.line}</span>
          <span aria-hidden="true">↗</span>
        </Link>
      ))}
    </section>
  );
}
