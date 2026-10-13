'use client';

import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { PageIntro } from '../../editorial';

const ShaderCanvas = dynamic(() => import('./ShaderCanvas'), {
  ssr: false,
  loading: () => <div className="shader-loading">Loading WebGL...</div>
});

type ShaderEffect = 'displacement' | 'holographic' | 'pulse' | 'glitch' | 'none';

const effects: { id: ShaderEffect; label: string; description: string }[] = [
  { id: 'none', label: 'Original', description: 'No effect applied' },
  { id: 'displacement', label: 'Displacement', description: 'Underwater wave distortion with mouse ripples' },
  { id: 'holographic', label: 'Holographic', description: 'Rainbow iridescence that shifts with movement' },
  { id: 'pulse', label: 'Pulse', description: 'Breathing scale with cyan edge glow' },
  { id: 'glitch', label: 'Glitch', description: 'Chromatic aberration with periodic slice displacement' },
];

export default function ShaderPlayground() {
  const [effect, setEffect] = useState<ShaderEffect>('displacement');
  const [logo, setLogo] = useState<'monmouth' | 'rcs'>('monmouth');

  const imageSrc = logo === 'monmouth'
    ? '/img/monmouth-jellyfish.png'
    : '/img/red-cell-systems.png';

  return (
    <main id="main-content">
      <PageIntro
        label="Labs"
        title="Shader Playground"
        description="Explore WebGL shader effects for the Monmouth and RCS logos. Move your mouse over the canvas to interact."
      />

      <section className="shader-playground section-pad">
        <div className="shader-controls">
          <div className="control-group">
            <span className="control-label">Logo</span>
            <div className="button-group">
              <button
                className={logo === 'monmouth' ? 'active' : ''}
                onClick={() => setLogo('monmouth')}
              >
                Monmouth
              </button>
              <button
                className={logo === 'rcs' ? 'active' : ''}
                onClick={() => setLogo('rcs')}
              >
                RCS
              </button>
            </div>
          </div>

          <div className="control-group">
            <span className="control-label">Effect</span>
            <div className="effect-buttons">
              {effects.map((e) => (
                <button
                  key={e.id}
                  className={effect === e.id ? 'active' : ''}
                  onClick={() => setEffect(e.id)}
                  title={e.description}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="shader-viewport">
          <Suspense fallback={<div className="shader-loading">Loading WebGL...</div>}>
            <ShaderCanvas key={`${logo}-${effect}`} imageSrc={imageSrc} effect={effect} />
          </Suspense>
        </div>

        <div className="effect-description">
          <strong>{effects.find((e) => e.id === effect)?.label}</strong>
          <p>{effects.find((e) => e.id === effect)?.description}</p>
        </div>
      </section>

      <style jsx global>{`
        .shader-playground {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .shader-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .control-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: hsl(var(--muted-foreground));
        }

        .button-group,
        .effect-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .shader-controls button {
          padding: 0.5rem 1rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
          color: hsl(var(--foreground));
          font-family: inherit;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .shader-controls button:hover {
          border-color: hsl(var(--accent));
        }

        .shader-controls button.active {
          background: hsl(var(--accent));
          color: hsl(var(--accent-foreground));
          border-color: hsl(var(--accent));
        }

        .shader-viewport {
          aspect-ratio: 4/3;
          background: hsl(var(--muted));
          border: 1px solid hsl(var(--border));
          overflow: hidden;
        }

        .shader-canvas {
          width: 100%;
          height: 100%;
        }

        .shader-canvas canvas {
          width: 100% !important;
          height: 100% !important;
        }

        .shader-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: hsl(var(--muted-foreground));
        }

        .effect-description {
          padding: 1rem;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
        }

        .effect-description strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        .effect-description p {
          margin: 0;
          color: hsl(var(--muted-foreground));
          font-size: 0.875rem;
        }
      `}</style>
    </main>
  );
}
