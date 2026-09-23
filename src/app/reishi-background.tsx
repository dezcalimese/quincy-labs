'use client';

import { useEffect, useRef } from 'react';

// Colours, particle balance, motion range, and pointer falloff follow the
// RainBackground served by quincylabs.org. Web Animations drives the rain;
// React does not re-render on animation frames.
const COLORS = ['#00BFFF', '#00CED1', '#00FFFF', '#87CEEB', '#5F9EA0', '#48D1CC'];
type Particle = { wrapper: HTMLDivElement; dot: HTMLDivElement; x: number; y: number; offsetX: number; offsetY: number; falling: boolean };

export default function ReishiBackground() {
  const root = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = root.current;
    if (!host) return;
    const mobile = window.matchMedia('(max-width: 768px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let particles: Particle[] = [];
    let animations: Animation[] = [];
    let frame = 0;
    let pointer = { x: -9999, y: -9999 };
    let lastFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let resizeTimer: ReturnType<typeof setTimeout>;
    const clear = () => {
      cancelAnimationFrame(frame);
      animations.forEach(animation => animation.cancel());
      animations = [];
      particles = [];
      host.replaceChildren();
    };
    const animatePointer = (now: number) => {
      const step = Math.min((now - lastFrame) / 16.67 || 1, 3);
      lastFrame = now;
      // Read positions before writing transforms to avoid repeated layout work.
      const boxes = particles.map(particle => particle.falling ? particle.dot.getBoundingClientRect() : null);
      for (const [index, particle] of particles.entries()) {
        const box = boxes[index];
        const x = box ? box.left + box.width / 2 : particle.x * width / 100 + particle.offsetX;
        const y = box ? box.top + box.height / 2 : particle.y * height / 100 + particle.offsetY;
        const dx = x - pointer.x, dy = y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const strength = distance < 140 ? Math.pow(1 - distance / 140, 2) * 55 : 0;
        const angle = Math.atan2(dy, dx);
        const factor = 1 - Math.pow(1 - (strength ? .08 : .04), step);
        particle.offsetX += (Math.cos(angle) * strength - particle.offsetX) * factor;
        particle.offsetY += (Math.sin(angle) * strength - particle.offsetY) * factor;
        particle.wrapper.style.transform = `translate(${particle.offsetX}px, ${particle.offsetY}px)`;
      }
      frame = requestAnimationFrame(animatePointer);
    };
    const setup = () => {
      clear();
      width = window.innerWidth; height = window.innerHeight;
      const isMobile = mobile.matches;
      const count = isMobile ? 45 : 150;
      const stationary = Math.floor(count * .7);
      for (let i = 0; i < count; i++) {
        const falling = i >= stationary && !reduced.matches;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const size = falling ? 4 + Math.random() * 6 : 2 + Math.random() * 4;
        const x = falling ? Math.random() * 120 - 20 : Math.random() * 100;
        const y = falling ? Math.random() * 50 - 50 : Math.random() * 100;
        const wrapper = document.createElement('div');
        const dot = document.createElement('div');
        wrapper.style.cssText = `position:absolute;left:${x}%;top:${y}%;will-change:transform`;
        dot.style.cssText = `width:${size}px;height:${size}px;border-radius:50%;background:${color};opacity:.65;box-shadow:0 0 ${size*3}px ${color},0 0 ${size*6}px ${color}90,0 0 ${size*10}px ${color}60,0 0 ${size*15}px ${color}30;will-change:transform,opacity`;
        wrapper.appendChild(dot); host.appendChild(wrapper);
        particles.push({wrapper,dot,x,y,offsetX:0,offsetY:0,falling});
        if (reduced.matches) continue;
        if (falling) {
          const drift = isMobile ? 200 + Math.random()*100 : 300 + Math.random()*200;
          const duration = isMobile ? 3000 + Math.random()*1000 : 2000 + Math.random()*1000;
          const delay = (i-stationary)*(isMobile ? 600 : 300)+Math.random()*(isMobile ? 8000 : 5000);
          dot.style.opacity = '0';
          dot.style.boxShadow += `,${-size*10}px ${-size*2}px ${size*20}px ${color}40`;
          animations.push(dot.animate([
            {transform:'translate(0,0) scale(1)',opacity:0,offset:0},
            {opacity:1,offset:.1},
            {opacity:.8,offset:.55},
            {transform:`translate(${drift}px,${height+200}px) scale(.3)`,opacity:0,offset:1},
          ],{duration,delay,iterations:Infinity,easing:'ease-in'}));
        } else {
          animations.push(dot.animate([{opacity:.5+Math.random()*.4},{opacity:.7+Math.random()*.3}],{
            duration:2000+Math.random()*3000,delay:i*(isMobile?100:50),iterations:Infinity,direction:'alternate',easing:'ease-in-out',
          }));
        }
      }
      if (glow.current) glow.current.style.opacity = '0';
      if (document.hidden) animations.forEach(animation=>animation.pause());
      else if (!isMobile && !reduced.matches) frame=requestAnimationFrame(animatePointer);
    };
    const move = (event: PointerEvent) => {
      if (mobile.matches || reduced.matches || event.pointerType === 'touch') return;
      pointer={x:event.clientX,y:event.clientY};
      if (glow.current) {glow.current.style.transform=`translate(${event.clientX}px,${event.clientY}px)`;glow.current.style.opacity='1';}
    };
    const leave = () => {pointer={x:-9999,y:-9999};if(glow.current)glow.current.style.opacity='0';};
    const visibility = () => {
      cancelAnimationFrame(frame);
      animations.forEach(animation=>document.hidden?animation.pause():animation.play());
      if (!document.hidden && !mobile.matches && !reduced.matches) {lastFrame=0;frame=requestAnimationFrame(animatePointer);}
    };
    const resize = () => {clearTimeout(resizeTimer);resizeTimer=setTimeout(setup,180);};
    setup();
    window.addEventListener('resize',resize);
    document.addEventListener('pointermove',move,{passive:true});
    document.addEventListener('pointerleave',leave);
    document.addEventListener('visibilitychange',visibility);
    reduced.addEventListener('change',setup);
    return () => {
      clear();clearTimeout(resizeTimer);
      window.removeEventListener('resize',resize);
      document.removeEventListener('pointermove',move);
      document.removeEventListener('pointerleave',leave);
      document.removeEventListener('visibilitychange',visibility);
      reduced.removeEventListener('change',setup);
    };
  },[]);
  return <div className="reishi-background" aria-hidden="true"><div ref={root} className="reishi-particles"/><div ref={glow} className="reishi-pointer"/></div>;
}
