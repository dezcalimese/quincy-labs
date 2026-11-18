'use client';
import { useEffect, useRef, useState } from 'react';

// Muted loop. With prefers-reduced-motion it does not play by itself and shows controls.
export default function LaunchVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      setReduced(mq.matches);
      const v = ref.current;
      if (!v) return;
      if (mq.matches) v.pause();
      else v.play().catch(() => {});
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);
  return (
    <figure className="sol-video">
      <video ref={ref} muted loop playsInline preload="metadata" poster={poster} controls={reduced} aria-label={label} width={1920} height={1080}>
        <source src={src} type="video/mp4" />
      </video>
    </figure>
  );
}
