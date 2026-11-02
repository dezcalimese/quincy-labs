'use client';
import { useState } from 'react';
import { DATA, sum, short } from './data';

type Run = 'as_run' | 'thinking_on';

function Cell({ a, b, accent }: { a: number; b: number; accent?: boolean }) {
  const p = b ? a / b : 0;
  return (
    <div className="ssb-cell">
      <span className="ssb-v">{a}/{b}</span>
      <span className={`ssb-mini${accent ? ' ssb-accent' : ''}`}>
        <span style={{ width: `${(p * 100).toFixed(1)}%` }} />
      </span>
    </div>
  );
}

export default function ModelTable() {
  const [run, setRun] = useState<Run>('as_run');
  const runs: [Run, string][] = [['as_run', 'As run'], ['thinking_on', 'Thinking on']];
  return (
    <>
      <div className="ssb-toggle" role="group" aria-label="Run">
        {runs.map(([k, label]) => (
          <button key={k} type="button" aria-pressed={run === k} onClick={() => setRun(k)}>{label}</button>
        ))}
      </div>
      <div className="ssb-scroll">
        <table className="ssb-table">
          <thead>
            <tr><th>Model</th><th>Right function</th><th>Strict detect</th><th>Patch</th><th>Exploit (assisted)</th></tr>
          </thead>
          <tbody>
            {Object.keys(DATA.models).map(name => {
              const rerun = run === 'thinking_on' && DATA.thinking_on[name];
              const c = rerun ? DATA.thinking_on[name].cases : DATA.models[name].cases;
              const ds = sum(c, 'detect', 'samples'), ps = sum(c, 'patch', 'samples'), es = sum(c, 'exploit', 'samples');
              return (
                <tr key={name}>
                  <td className="ssb-m">{short(name)}{rerun && <span className="ssb-flag">THINKING ON</span>}</td>
                  <td><Cell a={sum(c, 'detect', 'location_ok')} b={ds} /></td>
                  <td><Cell a={sum(c, 'detect', 'strict')} b={ds} /></td>
                  <td><Cell a={sum(c, 'patch', 'v2')} b={ps} accent /></td>
                  <td><Cell a={sum(c, 'exploit', 'correct')} b={es} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="ssb-note" aria-live="polite" style={{ marginTop: 14 }}>
        {run === 'thinking_on'
          ? 'Only bonsai-27b and qwen3.8-27b were rerun with thinking on. The other rows are the original run.'
          : 'Patch uses the extended tests (tests_v2).'}
      </p>
    </>
  );
}
