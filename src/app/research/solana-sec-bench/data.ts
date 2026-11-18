import raw from '../../../../data/solana-sec-bench/results.json';

type Detect = { strict: number; lenient: number; located: number; pinpointed: number; false_alarms_clean: number };
type Patch = { correct: number; builds_and_passes: number; blocks_exploit: number };
type Exploit = { single_shot: number; agentic: number; no_compile: number };
type CaseRow = { found: number; fixed: number; proved: number };
export type Model = { detect: Detect; patch: Patch; exploit: Exploit; cases: Record<string, CaseRow> };
export type Results = {
  of: { detect: number; clean: number; patch: number; exploit: number; case: number };
  totals: Record<'find' | 'fix' | 'prove' | 'exploit_single_shot' | 'no_compile', string>;
  models: Record<string, Model>;
  replaced: Record<string, { note: string; exploit: Exploit }>;
  prompt_fix: { models: string[]; rows: { label: string; baseline: string; fixed: string }[] };
};

export const DATA = raw as unknown as Results;
export const MODELS = Object.keys(DATA.models);
export const CASES = ['SOL-0001', 'SOL-0002'] as const;
export const short = (m: string) => m.split('/').pop() as string;
export const frac = (s: string) => {
  const [a, b] = String(s).split('/').map(Number);
  return { a, b, p: b ? a / b : 0 };
};
export const best = (pick: (m: Model) => number) => Math.max(...MODELS.map(n => pick(DATA.models[n])));

// Patch outcomes. "Correct" means it builds, passes the tests AND blocks the exploit,
// so the other buckets follow from the three counts in RESULTS.md.
export function patchSplit(p: Patch, of: number) {
  const testsOnly = p.builds_and_passes - p.correct;
  const blocksOnly = p.blocks_exploit - p.correct;
  return { pass: p.correct, tests_only: testsOnly, blocks_only: blocksOnly, neither: of - p.correct - testsOnly - blocksOnly };
}
