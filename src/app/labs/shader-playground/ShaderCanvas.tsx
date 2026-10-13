'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

type ShaderEffect = 'displacement' | 'holographic' | 'pulse' | 'glitch' | 'none';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const shaderFragments: Record<ShaderEffect, string> = {
  none: `
    uniform sampler2D uTexture;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      gl_FragColor = texture2D(uTexture, vUv);
    }
  `,
  displacement: `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float wave = sin(uv.y * 10.0 + uTime * 2.0) * 0.01;
      float wave2 = sin(uv.x * 8.0 + uTime * 1.5) * 0.008;
      uv.x += wave;
      uv.y += wave2;

      // Mouse influence
      float dist = distance(uv, uMouse);
      float ripple = sin(dist * 20.0 - uTime * 4.0) * 0.02 * smoothstep(0.4, 0.0, dist);
      uv += ripple;

      gl_FragColor = texture2D(uTexture, uv);
    }
  `,
  holographic: `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
      vec4 tex = texture2D(uTexture, vUv);

      // Only apply effect to non-transparent pixels
      if (tex.a < 0.1) {
        gl_FragColor = tex;
        return;
      }

      // Rainbow shift based on position and time
      float hue = vUv.x * 0.3 + vUv.y * 0.3 + uTime * 0.5 + uMouse.x * 0.5;
      vec3 rainbow = vec3(
        sin(hue) * 0.5 + 0.5,
        sin(hue + 2.094) * 0.5 + 0.5,
        sin(hue + 4.188) * 0.5 + 0.5
      );

      // Mix original with holographic based on luminance
      float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
      vec3 holo = mix(tex.rgb, rainbow, 0.4 * lum);

      // Add shimmer
      float shimmer = sin(vUv.x * 50.0 + uTime * 3.0) * 0.1 + 0.9;
      holo *= shimmer;

      gl_FragColor = vec4(holo, tex.a);
    }
  `,
  pulse: `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
      // Breathing scale from center
      float breath = sin(uTime * 2.0) * 0.03;
      vec2 center = vec2(0.5);
      vec2 uv = center + (vUv - center) * (1.0 + breath);

      vec4 tex = texture2D(uTexture, uv);

      // Pulsing glow on edges
      float pulse = sin(uTime * 3.0) * 0.5 + 0.5;
      float edge = 1.0 - smoothstep(0.0, 0.1, tex.a) + smoothstep(0.9, 1.0, tex.a);

      // Cyan glow color
      vec3 glow = vec3(0.2, 0.9, 0.9) * pulse * 0.3;
      tex.rgb += glow * tex.a;

      gl_FragColor = tex;
    }
  `,
  glitch: `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    void main() {
      vec2 uv = vUv;

      // Periodic glitch trigger
      float glitchStrength = step(0.95, sin(uTime * 2.0)) * step(0.5, random(vec2(floor(uTime * 10.0))));

      // Horizontal slice displacement
      float slice = floor(vUv.y * 20.0);
      float offset = (random(vec2(slice, floor(uTime * 5.0))) - 0.5) * 0.1 * glitchStrength;
      uv.x += offset;

      // Chromatic aberration
      float aberration = 0.01 + glitchStrength * 0.02;
      vec4 r = texture2D(uTexture, uv + vec2(aberration, 0.0));
      vec4 g = texture2D(uTexture, uv);
      vec4 b = texture2D(uTexture, uv - vec2(aberration, 0.0));

      // Scanlines
      float scanline = sin(vUv.y * 400.0) * 0.04;

      vec4 color = vec4(r.r, g.g, b.b, max(max(r.a, g.a), b.a));
      color.rgb -= scanline;

      gl_FragColor = color;
    }
  `,
};

function ShaderPlane({
  texture,
  effect,
  mouse,
}: {
  texture: THREE.Texture;
  effect: ShaderEffect;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    [texture]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);
    }
  });

  const aspect = texture.image ? texture.image.width / texture.image.height : 1;
  const height = 3;
  const width = height * aspect;

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={shaderFragments[effect]}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

export default function ShaderCanvas({
  imageSrc,
  effect,
}: {
  imageSrc: string;
  effect: ShaderEffect;
}) {
  const texture = useLoader(THREE.TextureLoader, imageSrc);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouse.current.x = (e.clientX - rect.left) / rect.width;
    mouse.current.y = 1 - (e.clientY - rect.top) / rect.height;
  };

  return (
    <div
      ref={containerRef}
      className="shader-canvas"
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ShaderPlane texture={texture} effect={effect} mouse={mouse} />
      </Canvas>
    </div>
  );
}
