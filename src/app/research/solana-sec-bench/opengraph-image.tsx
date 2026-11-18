import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = "Solana Sec Bench first baseline: Finding, fixing and proving are different skills. Find 31/45, Fix 9/30, Prove 8/30.";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Site tokens from editorial.css and globals.css.
const bg = 'hsl(40, 20%, 98%)', ink = 'hsl(20, 20%, 8%)', muted = 'hsl(20, 10%, 45%)', line = 'hsl(40, 15%, 88%)';
const accent = 'hsl(185, 80%, 32%)', signal = 'hsl(185, 70%, 48%)';

const STATS = [
  { n: '31', d: '45', t: 'Find', hi: false },
  { n: '9', d: '30', t: 'Fix', hi: false },
  { n: '8', d: '30', t: 'Prove (with feedback)', hi: false },
];

export default async function Image() {
  const font = (f: string) => readFile(join(process.cwd(), 'public/fonts/editorial', f));
  const [serif, serifItalic, sans, sansBold] = await Promise.all([font('font-5.ttf'), font('font-4.ttf'), font('font-0.ttf'), font('font-2.ttf')]);
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: bg, color: ink, padding: '56px 72px', fontFamily: 'DM Sans' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: muted }}>
          <span style={{ display: 'flex' }}><span style={{ color: accent, marginRight: 16 }}>01</span>SOLANA SEC BENCH · FIRST BASELINE</span>
          <span>QUINCY LABS</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'DM Serif Display', fontSize: 76, lineHeight: 1.06, letterSpacing: -3, marginTop: 40 }}>
          <span>Finding, fixing and proving</span>
          <span style={{ display: 'flex' }}>are&nbsp;<span style={{ fontStyle: 'italic', color: accent }}>different skills.</span></span>
        </div>
        <div style={{ display: 'flex', marginTop: 'auto', borderTop: `2px solid ${ink}` }}>
          {STATS.map((s, i) => (
            <div key={s.t} style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: 22, paddingLeft: i ? 28 : 0, borderLeft: i ? `1px solid ${line}` : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', fontFamily: 'DM Serif Display', fontSize: 80, lineHeight: 1, color: s.hi ? signal : ink }}>
                {s.n}<span style={{ fontSize: 36, color: muted }}>/{s.d}</span>
              </div>
              <div style={{ fontSize: 24, fontWeight: 600, marginTop: 10 }}>{s.t}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'DM Serif Display', data: serif, style: 'normal', weight: 400 },
        { name: 'DM Serif Display', data: serifItalic, style: 'italic', weight: 400 },
        { name: 'DM Sans', data: sans, style: 'normal', weight: 400 },
        { name: 'DM Sans', data: sansBold, style: 'normal', weight: 600 },
      ],
    },
  );
}
