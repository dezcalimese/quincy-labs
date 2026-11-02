import raw from '../../../../data/sui-sec-bench/results.json';

type Counts = Record<string, number>;
type Cases = Record<string, { detect?: Counts; patch?: Counts; exploit?: Counts }>;
export type Results = {
  models: Record<string, { cases: Cases }>;
  thinking_on: Record<string, { cases: Cases }>;
  totals: Record<'as_run' | 'thinking_on', Record<string, string>>;
};

export const DATA = raw as unknown as Results;
export const CASES = ['SSB-0002', 'SSB-0003'];
export const short = (m: string) => m.split('/').pop() as string;
export const frac = (s: string) => {
  const [a, b] = String(s).split('/').map(Number);
  return { a, b, p: b ? a / b : 0 };
};
export const sum = (cases: Cases, task: 'detect' | 'patch' | 'exploit', key: string) =>
  CASES.reduce((s, c) => s + (cases[c]?.[task]?.[key] || 0), 0);
