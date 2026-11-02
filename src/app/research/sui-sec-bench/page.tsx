import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '../../editorial';
import { SUI_SEC_BENCH } from '@/lib/sui-sec-bench';
import { SOCIAL } from '@/lib/social';
import { DATA, CASES, frac, sum, short } from './data';
import ModelTable from './model-table';
import './sui-sec-bench.css';

const description = 'A preliminary pilot that tests local LLMs on Sui Move security tasks: detect, patch, and exploit.';
export const metadata: Metadata = {
  title: 'Sui Sec Bench: Pilot Results | Quincy Labs',
  description,
  openGraph: { title: 'Sui Sec Bench: Pilot Results', description, type: 'article' },
  twitter: { card: 'summary_large_image', site: SOCIAL.xHandle, title: 'Sui Sec Bench: Pilot Results', description },
};

const STATS = [
  { k: 'location', t: 'Named the right function', d: 'Detect, location only', hi: false },
  { k: 'patch_extended', t: 'Shipped a working patch', d: 'Builds, passes tests, blocks the exploit', hi: true },
  { k: 'exploit', t: 'Wrote a passing exploit test', d: 'Assisted, up to 5 iterations', hi: false },
];

const OUT = [
  { k: 'pass', label: 'Passed', color: 'var(--ssb-pass)' },
  { k: 'exploit_not_blocked', label: 'Exploit still works', color: 'var(--ssb-exploit)' },
  { k: 'build_failed', label: 'Did not build', color: 'var(--ssb-build)' },
  { k: 'functional_failed', label: 'Broke functional tests', color: 'var(--ssb-functional)' },
  { k: 'empty', label: 'Empty answer', color: 'var(--ssb-empty)' },
  { k: 'unparseable', label: 'Unparseable', color: 'var(--ssb-unparseable)' },
];

const models = Object.keys(DATA.models);

export default function SuiSecBench() {
  const t = DATA.totals.as_run;
  return (
    <main id="main-content" className="ssb">
      <section className="page-intro section-pad ssb-intro">
        <div className="intro-top">
          <Link href="/">Quincy Labs</Link><span>/ <Link href="/research">Research</Link> / Sui Sec Bench</span>
        </div>
        <nav className="ssb-subnav" aria-label="Sui Sec Bench sections">
          <a href="#results">Results</a><a href="#patch">Patches</a><a href="#method">Method</a><a href={SUI_SEC_BENCH.repo}>GitHub ↗</a><a href={SUI_SEC_BENCH.contributing}>Contributing a case ↗</a>
        </nav>
        <SectionLabel number="01">Pilot results · v1 · November 2026</SectionLabel>
        <h1 className="ssb-h1">Models find where the bug is.<br />So far, they <em>rarely fix it.</em></h1>
        <p className="ssb-lede">Sui Sec Bench tests local language models on Sui Move security work: find the bug, patch it, and write a test that shows it. This is a three-case pilot with six models.</p>
        <div className="ssb-banner"><i aria-hidden="true" />Preliminary. Small samples. Not a ranking.</div>
        <div className="ssb-stats">
          {STATS.map(s => {
            const f = frac(t[s.k]);
            return (
              <div className={`ssb-stat${s.hi ? ' ssb-hi' : ''}`} key={s.k}>
                <div className="ssb-n">{f.a}<small>/{f.b}</small></div>
                <div className="ssb-t">{s.t}</div>
                <div className="ssb-d">{s.d}</div>
                <div className="ssb-bar"><span style={{ width: `${(f.p * 100).toFixed(1)}%` }} /></div>
              </div>
            );
          })}
        </div>
        <p className="ssb-note" style={{ marginTop: 18 }}>SSB-0002 and SSB-0003, as run. Detect and patch: 3 single-shot samples per case per model. Exploit: 1 assisted agentic sample per case, up to 5 iterations, with a prompt that teaches the test format.</p>
      </section>

      <section id="results" className="section-pad ssb-section">
        <SectionLabel number="02">By model</SectionLabel>
        <h2>Location is easy. <em>The label and the fix are not.</em></h2>
        <p className="ssb-note">Totals across SSB-0002 and SSB-0003. &quot;Right function&quot; means the model named the correct <code>module::function</code>. &quot;Strict&quot; also needs the expected bug class.</p>
        <ModelTable />
      </section>

      <section id="patch" className="section-pad ssb-section">
        <SectionLabel number="03">Patch outcomes</SectionLabel>
        <h2>Why the patches <em>failed.</em></h2>
        <p className="ssb-note">Each bar is 6 samples (2 cases × 3). A patch passes only if it builds, passes functional tests, and stops the reference exploit.</p>
        <div className="ssb-legend">
          {OUT.map(o => <span key={o.k}><i style={{ background: o.color }} />{o.label}</span>)}
        </div>
        <div className="ssb-scroll">
        <table className="ssb-table">
          <thead><tr><th className="ssb-model-col">Model</th><th>Outcome</th></tr></thead>
          <tbody>
            {models.map(name => {
              const c = DATA.models[name].cases;
              const total = sum(c, 'patch', 'samples');
              const counts: Record<string, number> = { pass: sum(c, 'patch', 'original') };
              OUT.slice(1).forEach(o => (counts[o.k] = sum(c, 'patch', o.k)));
              const summary = OUT.filter(o => counts[o.k]).map(o => `${o.label}: ${counts[o.k]}`).join(', ');
              return (
                <tr key={name}>
                  <td className="ssb-m">{short(name)}</td>
                  <td>
                    <div className="ssb-stack">
                      {OUT.map((o, i) => counts[o.k] ? (
                        <div key={o.k} className="ssb-seg" title={`${o.label}: ${counts[o.k]}`}
                          aria-label={`${o.label}: ${counts[o.k]}`} role="img"
                          style={{ width: `${(counts[o.k] / total) * 100}%`, background: o.color, animationDelay: `${i * 60}ms` }} />
                      ) : null)}
                    </div>
                    <span className="ssb-sr">{summary}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </section>

      <section className="section-pad ssb-section">
        <SectionLabel number="04">Exploit iterations</SectionLabel>
        <h2>How many tries <em>to prove the bug.</em></h2>
        <p className="ssb-note">Assisted agentic mode, up to 5 iterations. Filled squares are attempts used; a teal square is the iteration where the test passed on the vulnerable package and failed on the fixed one.</p>
        <div className="ssb-scroll">
          <table className="ssb-table">
            <thead><tr><th className="ssb-model-col">Model</th>{CASES.map(id => <th key={id}>{id}</th>)}</tr></thead>
            <tbody>
              {models.map(name => (
                <tr key={name}>
                  <td className="ssb-m">{short(name)}</td>
                  {CASES.map(id => {
                    const e = DATA.models[name].cases[id]?.exploit || {};
                    const n = e.iterations || 0, ok = (e.correct || 0) > 0;
                    return (
                      <td key={id}>
                        <div className="ssb-iter">
                          <span className="ssb-dots" aria-hidden="true">
                            {[1, 2, 3, 4, 5].map(i => <i key={i} className={i < n ? 'f' : i === n ? (ok ? 'win' : 'f') : ''} />)}
                          </span>
                          <span className="ssb-m ssb-muted">{ok ? 'pass' : 'fail'} · {n} iter</span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="method" className="section-pad ssb-section">
        <SectionLabel number="05">Cases and method</SectionLabel>
        <h2>Three cases, <em>minimal rewrites.</em></h2>
        <div className="ssb-cases">
          <div className="ssb-case"><div className="ssb-id">SSB-0001</div><h3>Arithmetic</h3><p>Based on the Cetus incident. Target: <code>math::scale</code>. Used for baseline and exploit-prompt development, so its runs are not controlled comparisons.</p></div>
          <div className="ssb-case"><div className="ssb-id">SSB-0002</div><h3>Access control</h3><p>From OtterSec finding OS-MSI-ADV-00. Target: <code>fulfill::prepare_fulfill_winner</code>.</p></div>
          <div className="ssb-case"><div className="ssb-id">SSB-0003</div><h3>Input validation</h3><p>From OtterSec finding OS-LSI-ADV-02. Target: <code>consortium::configure_validator_set</code>.</p></div>
        </div>
        <h3 className="ssb-h3">Read this before you share a number</h3>
        <ul className="ssb-caveats">
          <li>Six local models served by LM Studio, 32,768 completion-token limit. No frontier API models yet.</li>
          <li>Strict detect mostly measures the bug-class label. <code>business-logic</code> versus <code>access-control</code> is a common disagreement.</li>
          <li>Exploit scores are assisted: the prompt teaches test polarity and structure, and models see test output. They do not measure unaided exploit ability. Models never see the fixed source.</li>
          <li>Thinking on changed scores in both directions. It made qwen3.8 hit the token limit on 5 of 6 patch samples.</li>
          <li>The public repo has grades and cases, not model outputs or exploit tests. See <a href={SUI_SEC_BENCH.responsibleUse}>Responsible use</a>.</li>
        </ul>
      </section>

      <section className="section-pad ssb-credits">
        <div>Sui Sec Bench by Quincy Labs. Thanks to OtterSec, Cetus, Mysten Labs, and the model teams.</div>
        <div className="ssb-links">
          <a className="text-link" href={SUI_SEC_BENCH.repo}>Repo ↗</a>
          <a className="text-link" href={SUI_SEC_BENCH.report}>Full report ↗</a>
          <a className="text-link" href={SUI_SEC_BENCH.contributing}>Contributing a case ↗</a>
          <a className="text-link" href={SOCIAL.x}>X ↗</a>
          <a className="text-link" href={SOCIAL.linkedin}>LinkedIn ↗</a>
        </div>
      </section>
    </main>
  );
}
