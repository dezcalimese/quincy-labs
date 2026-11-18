import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '../../editorial';
import { SOLANA_SEC_BENCH } from '@/lib/solana-sec-bench';
import { SOCIAL } from '@/lib/social';
import { AlsoInSeries } from '../_sec-bench-series';
import { DATA, MODELS, CASES, frac, short, best, patchSplit, type Model } from './data';
import LaunchVideo from './launch-video';
import '../sui-sec-bench/sui-sec-bench.css';
import './solana-sec-bench.css';

const title = 'Solana Sec Bench: First Baseline Results';
const description = 'A preliminary pilot that tests local LLMs on Solana program security: find the bug, fix it, and prove it with an exploit test.';
export const metadata: Metadata = {
  title: `${title} | Quincy Labs`,
  description,
  openGraph: { title, description, type: 'article' },
  twitter: { card: 'summary_large_image', site: SOCIAL.xHandle, title, description },
};

const OF = DATA.of;
const STATS = [
  { k: 'find' as const, t: 'Find', d: 'Detect strict, includes the clean case' },
  { k: 'fix' as const, t: 'Fix', d: 'Builds, passes tests, blocks the exploit' },
  { k: 'prove' as const, t: 'Prove', d: 'Exploit test, agentic, with feedback' },
];

const OUT = [
  { k: 'pass', label: 'Correct', color: 'var(--ssb-pass)' },
  { k: 'tests_only', label: 'Passes tests, exploit still works', color: 'var(--ssb-exploit)' },
  { k: 'blocks_only', label: 'Blocks exploit, breaks build or tests', color: 'var(--ssb-functional)' },
  { k: 'neither', label: 'Neither', color: 'var(--ssb-empty)' },
] as const;

function Cell({ a, b, top }: { a: number; b: number; top?: boolean }) {
  const p = b ? a / b : 0;
  return (
    <div className={`ssb-cell${top ? ' sol-top' : ''}`}>
      <span className="ssb-v">{a}/{b}</span>
      <span className={`ssb-mini${top ? ' ssb-accent' : ''}`}><span style={{ width: `${(p * 100).toFixed(1)}%` }} /></span>
    </div>
  );
}

const col = (pick: (m: Model) => number) => {
  const top = best(pick);
  return (name: string) => ({ a: pick(DATA.models[name]), top: pick(DATA.models[name]) === top && top > 0 });
};
const findCol = col(m => m.detect.strict), fixCol = col(m => m.patch.correct), proveCol = col(m => m.exploit.agentic);

export default function SolanaSecBench() {
  return (
    <main id="main-content" className="ssb">
      <section className="page-intro section-pad ssb-intro">
        <div className="intro-top">
          <Link href="/">Quincy Labs</Link><span>/ <Link href="/research">Research</Link> / Solana Sec Bench</span>
        </div>
        <nav className="ssb-subnav" aria-label="Solana Sec Bench sections">
          <a href="#results">Results</a><a href="#cases">Per case</a><a href="#patch">Patches</a><a href="#exploit">Exploits</a><a href="#method">Method</a><a href={SOLANA_SEC_BENCH.repo}>GitHub ↗</a>
        </nav>
        <SectionLabel number="01">First baseline · November 2026</SectionLabel>
        <h1 className="ssb-h1">Finding, fixing and proving<br />are <em>different skills.</em></h1>
        <p className="ssb-lede">Solana Sec Bench tests local language models on Solana program security: find the bug, fix it, and write a test that proves it. This is a three-case pilot with five open-weight models.</p>
        <div className="ssb-banner"><i aria-hidden="true" />Preliminary. Small samples. Not a ranking.</div>
        <div className="ssb-stats">
          {STATS.map(s => {
            const f = frac(DATA.totals[s.k]);
            return (
              <div className="ssb-stat" key={s.k}>
                <div className="ssb-n">{f.a}<small>/{f.b}</small></div>
                <div className="ssb-t">{s.t}</div>
                <div className="ssb-d">{s.d}</div>
                <div className="ssb-bar"><span style={{ width: `${(f.p * 100).toFixed(1)}%` }} /></div>
              </div>
            );
          })}
        </div>
        <LaunchVideo src="/video/solana-sec-bench-launch-16x9.mp4" poster="/video/solana-sec-bench-poster.jpg" label="Solana Sec Bench launch video. No sound." />
        <p className="ssb-note" style={{ marginTop: 18 }}>Totals for five models, 3 samples per case. Find covers SOL-0001, SOL-0002 and the clean SOL-0003. Fix and Prove cover SOL-0001 and SOL-0002.</p>
      </section>

      <section id="results" className="section-pad ssb-section">
        <SectionLabel number="02">Find, fix, prove</SectionLabel>
        <h2>The best finder <em>proved nothing.</em></h2>
        <p className="ssb-note">Find is detect strict, of {OF.detect}. Fix is patch correct, of {OF.patch}. Prove is exploit agentic, of {OF.exploit}. Teal marks the top score in each column. Find includes a clean control, where the right answer is no bug.</p>
        <div className="ssb-scroll">
          <table className="ssb-table">
            <thead><tr><th className="ssb-model-col">Model</th><th>Find</th><th>Fix</th><th>Prove</th></tr></thead>
            <tbody>
              {MODELS.map(n => {
                const f = findCol(n), x = fixCol(n), p = proveCol(n);
                return (
                  <tr key={n}>
                    <td className="ssb-m">{short(n)}</td>
                    <td><Cell a={f.a} b={OF.detect} top={f.top} /></td>
                    <td><Cell a={x.a} b={OF.patch} top={x.top} /></td>
                    <td><Cell a={p.a} b={OF.exploit} top={p.top} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="sol-line"><strong>gpt-oss-20b found the most and proved nothing.</strong> The two models that proved the most, flint and qwen3.8-27b, fixed less, and flint raised a false alarm on the clean case every time.</p>
      </section>

      <section id="cases" className="section-pad ssb-section">
        <SectionLabel number="03">Per case</SectionLabel>
        <h2>Who found it, fixed it, <em>proved it.</em></h2>
        <p className="ssb-note">Each cell is out of 3 samples. Found is the right function (detect, located). Fixed is a correct patch. Proved is a correct agentic exploit.</p>
        <div className="sol-pair">
          {CASES.map(id => (
            <div key={id}>
              <h3><span className="ssb-id">{id}</span>{id === 'SOL-0001' ? 'Anchor, access-control' : 'Pinocchio, account-validation'}</h3>
              <div className="ssb-scroll">
                <table className="ssb-table">
                  <thead><tr><th>Model</th><th>Found</th><th>Fixed</th><th>Proved</th></tr></thead>
                  <tbody>
                    {MODELS.map(n => {
                      const c = DATA.models[n].cases[id];
                      return (
                        <tr key={n}>
                          <td className="ssb-m">{short(n)}</td>
                          <td><Cell a={c.found} b={OF.case} /></td>
                          <td><Cell a={c.fixed} b={OF.case} /></td>
                          <td><Cell a={c.proved} b={OF.case} /></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <p className="sol-line">Every model found SOL-0001 every time, but no model went 3/3 on all three columns for any case. SOL-0002, the Pinocchio case where every check is written by hand, was fixed once in 15 samples.</p>
      </section>

      <section className="section-pad ssb-section">
        <SectionLabel number="04">Detect</SectionLabel>
        <h2>Right function, <em>right class.</em></h2>
        <p className="ssb-note">Strict needs the right function and bug class. Located needs only the right function. Pinpointed also needs the right account named as the subject. The {OF.detect} samples include {OF.clean} on the clean SOL-0003, where correct means reporting no bug.</p>
        <div className="ssb-scroll">
          <table className="ssb-table">
            <thead><tr><th className="ssb-model-col">Model</th><th>Strict</th><th>Lenient</th><th>Located</th><th>Pinpointed</th><th>False alarms, clean case</th></tr></thead>
            <tbody>
              {MODELS.map(n => {
                const d = DATA.models[n].detect;
                return (
                  <tr key={n}>
                    <td className="ssb-m">{short(n)}</td>
                    <td className="sol-num">{d.strict}/{OF.detect}</td>
                    <td className="sol-num">{d.lenient}/{OF.detect}</td>
                    <td className="sol-num">{d.located}/{OF.detect}</td>
                    <td className="sol-num">{d.pinpointed}/{OF.detect}</td>
                    <td><Cell a={d.false_alarms_clean} b={OF.clean} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="sol-line">Flint&apos;s 6/9 is all six bug-case samples right and all three clean samples wrong (3/3 false alarms). Ornith raised one false alarm (1/3). Strict, located and pinpointed differ by at most one sample.</p>
      </section>

      <section id="patch" className="section-pad ssb-section">
        <SectionLabel number="05">Patch</SectionLabel>
        <h2>Blocking the exploit <em>is not enough.</em></h2>
        <p className="ssb-note">Each bar is {OF.patch} samples (2 cases × 3). A patch is correct only if it builds, passes the functional tests and blocks the withheld reference exploit.</p>
        <div className="ssb-legend">
          {OUT.map(o => <span key={o.k}><i style={{ background: o.color }} />{o.label}</span>)}
        </div>
        <div className="ssb-scroll">
          <table className="ssb-table">
            <thead><tr><th className="ssb-model-col">Model</th><th>Correct</th><th>Builds, passes tests</th><th>Blocks exploit</th><th>Outcome</th></tr></thead>
            <tbody>
              {MODELS.map(n => {
                const p = DATA.models[n].patch;
                const split = patchSplit(p, OF.patch);
                const summary = OUT.filter(o => split[o.k]).map(o => `${o.label}: ${split[o.k]}`).join(', ');
                return (
                  <tr key={n}>
                    <td className="ssb-m">{short(n)}</td>
                    <td className="sol-num">{p.correct}/{OF.patch}</td>
                    <td className="sol-num">{p.builds_and_passes}/{OF.patch}</td>
                    <td className="sol-num">{p.blocks_exploit}/{OF.patch}</td>
                    <td style={{ minWidth: 160 }}>
                      <div className="ssb-stack">
                        {OUT.map((o, i) => split[o.k] ? (
                          <div key={o.k} className="ssb-seg" title={`${o.label}: ${split[o.k]}`} aria-label={`${o.label}: ${split[o.k]}`} role="img"
                            style={{ width: `${(split[o.k] / OF.patch) * 100}%`, background: o.color, animationDelay: `${i * 60}ms` }} />
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
        <p className="sol-line">Flint&apos;s patches blocked the reference exploit 5 times out of 6, but only once without breaking the program&apos;s own tests. That is the failure patch grading is designed to catch.</p>
      </section>

      <section id="exploit" className="section-pad ssb-section">
        <SectionLabel number="06">Exploit</SectionLabel>
        <h2>Feedback <em>made the difference.</em></h2>
        <p className="ssb-note">Single-shot is one answer per sample. Agentic is up to 5 attempts with test output from the vulnerable program. Did not compile counts single-shot samples.</p>
        <div className="ssb-scroll">
          <table className="ssb-table">
            <thead><tr><th className="ssb-model-col">Model</th><th>Single-shot</th><th>Agentic</th><th>Did not compile</th></tr></thead>
            <tbody>
              {MODELS.map(n => {
                const e = DATA.models[n].exploit, p = proveCol(n);
                return (
                  <tr key={n}>
                    <td className="ssb-m">{short(n)}</td>
                    <td><Cell a={e.single_shot} b={OF.exploit} /></td>
                    <td><Cell a={e.agentic} b={OF.exploit} top={p.top} /></td>
                    <td className="sol-num">{e.no_compile}/{OF.exploit}</td>
                  </tr>
                );
              })}
              <tr className="sol-total">
                <td className="ssb-m">Total</td>
                <td className="sol-num">{DATA.totals.exploit_single_shot}</td>
                <td className="sol-num">{DATA.totals.prove}</td>
                <td className="sol-num">{DATA.totals.no_compile}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="ssb-caveats" style={{ marginTop: 20 }}>
          <li><strong>Compiling is the first hurdle.</strong> 16 of 30 single-shot samples never compiled. The most common error was calling a test helper the wrong way (<code>svm.funded_keypair(...)</code> instead of the free function <code>funded_keypair(&amp;mut svm, ...)</code>).</li>
          <li>qwen3.8-27b ran out of tokens single-shot: all 6 samples used the full budget and left no answer. With feedback it reached 3/6.</li>
          <li>For flint, qwen3.8-27b and gemma: 0/18 single-shot, 8/18 agentic.</li>
          {Object.entries(DATA.replaced).map(([n]) => (
            <li key={n} className="ssb-muted"><code>{short(n)}</code> was in the first exploit run and was replaced by Ornith. It is not in the totals.</li>
          ))}
        </ul>
        <h3 className="ssb-h3">Follow-up: one exploit prompt fix</h3>
        <p className="ssb-note">One added line says that <code>funded_keypair</code> and <code>program_account</code> are free functions. Rerun with flint, qwen3.8-27b and gemma, agentic, same settings.</p>
        <div className="ssb-scroll">
          <table className="ssb-table">
            <thead><tr><th className="ssb-model-col"></th><th>Baseline prompt</th><th>Fixed prompt</th></tr></thead>
            <tbody>
              {DATA.prompt_fix.rows.map(r => (
                <tr key={r.label}><td>{r.label}</td><td className="sol-num">{r.baseline}</td><td className="sol-num">{r.fixed}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="sol-line">The fix removed the error it targeted, but other compile errors remain, and the solve count did not change beyond noise. The repo now ships the fixed prompt.</p>
      </section>

      <section id="method" className="section-pad ssb-section">
        <SectionLabel number="07">Cases and method</SectionLabel>
        <h2>Three cases, <em>graded by code.</em></h2>
        <div className="ssb-cases">
          <div className="ssb-case"><div className="ssb-id">SOL-0001</div><h3>Access control</h3><p>Anchor program. Used for detect, patch and exploit.</p></div>
          <div className="ssb-case"><div className="ssb-id">SOL-0002</div><h3>Account validation</h3><p>Pinocchio program, where every check is written by hand. Used for detect, patch and exploit.</p></div>
          <div className="ssb-case"><div className="ssb-id">SOL-0003</div><h3>Clean control</h3><p>Anchor program with no bug. Used for detect only. The right answer is no bug.</p></div>
        </div>
        <ul className="ssb-caveats" style={{ marginTop: 28 }}>
          <li>Grading runs code in LiteSVM, not a judge model.</li>
          <li>Detect and patch are single-shot. Exploit runs single-shot and agentic: up to 5 attempts, where the model sees only its test&apos;s output on the vulnerable program, plus a pass/fail bit for the fixed program. It never sees the fixed program.</li>
          <li>An exploit is correct when its test passes on the vulnerable program and fails on the fixed one.</li>
          <li>Settings: 32,768 max tokens, sec-bench-core 0.3.0, models served locally with LM Studio&apos;s default context, one model at a time, November 2026. Prompts are in tag <code>baseline-2026-11</code>.</li>
        </ul>
        <h3 className="ssb-h3">Caveats</h3>
        <ul className="ssb-caveats">
          <li><strong>3 samples per cell, 2 or 3 cases.</strong> One or two samples either way can be chance.</li>
          <li><strong>Reasoning:</strong> four models produced reasoning text (qwen3.8-27b had thinking on in its saved LM Studio settings); gpt-oss-20b did not. 13 detect or patch samples used the full 32,768-token budget.</li>
          <li><strong>gpt-oss-20b&apos;s exploit runs</strong> used Ollama (single-shot) and LM Studio (agentic), so its two exploit rows are not strictly comparable. Its detect and patch runs both used LM Studio.</li>
          <li><strong>Local open-weight models only.</strong> No hosted frontier models were run.</li>
          <li><strong>Dev cases are public</strong>, so future models may have seen them. Treat these numbers as a starting point, not a measure of what any model can do.</li>
        </ul>
      </section>

      <AlsoInSeries current="/research/solana-sec-bench" />

      <section className="section-pad ssb-credits">
        <div>Solana Sec Bench by Quincy Labs. Built on sec-bench-core.</div>
        <div className="ssb-links">
          <a className="text-link" href={SOLANA_SEC_BENCH.repo}>Repo ↗</a>
          <a className="text-link" href={SOLANA_SEC_BENCH.results}>Full results ↗</a>
          <a className="text-link" href={SOLANA_SEC_BENCH.core}>sec-bench-core ↗</a>
          <a className="text-link" href={SOCIAL.x}>X ↗</a>
          <a className="text-link" href={SOCIAL.linkedin}>LinkedIn ↗</a>
        </div>
      </section>
    </main>
  );
}
