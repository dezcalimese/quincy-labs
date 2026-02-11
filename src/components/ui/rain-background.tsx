"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useRef, useMemo } from "react";
import { animate, createScope, createSpring } from "animejs";
import { useMobileDetect } from "@/hooks/useMobileDetect";

interface StaticStarData {
  el: HTMLElement;
  pctX: number;
  pctY: number;
  currentOffsetX: number;
  currentOffsetY: number;
  targetOffsetX: number;
  targetOffsetY: number;
}

interface ShootingStarData {
  wrapper: HTMLElement;
  el: HTMLElement;
  currentOffsetX: number;
  currentOffsetY: number;
  targetOffsetX: number;
  targetOffsetY: number;
}

interface RainBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  dropCount?: number;
  colors?: string[];
}

export const RainBackground = ({
  className,
  children,
  dropCount = 150,
  colors = ["#00BFFF", "#00CED1", "#00FFFF", "#87CEEB", "#5F9EA0", "#48D1CC"],
  ...props
}: RainBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<any>(null);
  const isInitializedRef = useRef(false);
  const isMobile = useMobileDetect();
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const staticStarDataRef = useRef<StaticStarData[]>([]);
  const shootingStarDataRef = useRef<ShootingStarData[]>([]);
  const rafRef = useRef<number>(0);
  const orbRef = useRef<HTMLDivElement>(null);

  const adjustedDropCount = useMemo(() => {
    return isMobile ? Math.floor(dropCount * 0.3) : dropCount;
  }, [dropCount, isMobile]);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;
    if (isInitializedRef.current && isMobile) return;

    const container = containerRef.current;

    // Create static stars (smaller, twinkling)
    staticStarDataRef.current = [];
    shootingStarDataRef.current = [];
    const staticStarCount = Math.floor(adjustedDropCount * 0.7);
    for (let i = 0; i < staticStarCount; i++) {
      const star = document.createElement("div");
      star.className = "static-star";

      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];

      star.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${left}%;
        top: ${top}%;
        opacity: ${Math.random() * 0.9 + 0.6};
        box-shadow: 0 0 ${size * 3}px ${color},
                    0 0 ${size * 6}px ${color}90,
                    0 0 ${size * 10}px ${color}60,
                    0 0 ${size * 15}px ${color}30;
        will-change: opacity, transform;
      `;

      container.appendChild(star);

      staticStarDataRef.current.push({
        el: star,
        pctX: left,
        pctY: top,
        currentOffsetX: 0,
        currentOffsetY: 0,
        targetOffsetX: 0,
        targetOffsetY: 0,
      });
    }

    // Create shooting stars wrapped in force-field containers
    const shootingStarCount = Math.floor(adjustedDropCount * 0.3);
    for (let i = 0; i < shootingStarCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 6 + 4;
      const left = Math.random() * 120 - 20;
      const top = Math.random() * 50 - 50;

      // Wrapper holds position + force field offset
      const wrapper = document.createElement("div");
      wrapper.className = "shooting-star-wrapper";
      wrapper.style.cssText = `
        position: absolute;
        left: ${left}%;
        top: ${top}%;
        will-change: transform;
      `;

      // Inner element gets anime.js animations
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      shootingStar.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        opacity: 0;
        border-radius: 50%;
        box-shadow: 0 0 ${size * 4}px ${color},
                    0 0 ${size * 8}px ${color}90,
                    0 0 ${size * 12}px ${color}60,
                    ${-size * 10}px ${-size * 2}px ${size * 20}px ${color}40,
                    ${-size * 20}px ${-size * 4}px ${size * 30}px ${color}20;
        filter: blur(0.3px);
        will-change: transform, opacity;
      `;

      if (Math.random() > 0.7) {
        shootingStar.style.boxShadow += `, 0 0 ${size * 20}px ${color}80`;
        shootingStar.classList.add('bright-star');
      }

      wrapper.appendChild(shootingStar);
      container.appendChild(wrapper);

      shootingStarDataRef.current.push({
        wrapper,
        el: shootingStar,
        currentOffsetX: 0,
        currentOffsetY: 0,
        targetOffsetX: 0,
        targetOffsetY: 0,
      });
    }

    // Create scoped animations
    scopeRef.current = createScope({ root: containerRef.current }).add(self => {

      // Animate twinkling static stars
      const staticStars = container.querySelectorAll('.static-star');
      staticStars.forEach((star, i) => {
        const duration = isMobile ? 3000 + Math.random() * 2000 : 2000 + Math.random() * 3000;
        const delay = isMobile ? i * 100 : i * 50;

        animate(star, {
          opacity: [
            { to: Math.random() * 0.4 + 0.5, duration: isMobile ? 1500 : 1000 },
            { to: Math.random() * 0.3 + 0.7, duration: isMobile ? 1500 : 1000 }
          ],
          duration: duration,
          delay: delay,
          loop: true,
          direction: 'alternate',
          easing: 'inOut(2)'
        });
      });

      // Animate shooting stars (targets inner elements, not wrappers)
      const shootingStars = container.querySelectorAll('.shooting-star');
      shootingStars.forEach((star, i) => {
        const fallDistance = window.innerHeight + 200;
        const diagonalDistance = isMobile ? 200 + Math.random() * 100 : 300 + Math.random() * 200;
        const animDuration = isMobile ? 3000 + Math.random() * 1000 : 2000 + Math.random() * 1000;
        const animDelay = isMobile ? i * 600 + Math.random() * 8000 : i * 300 + Math.random() * 5000;

        animate(star, {
          translateY: `${fallDistance}px`,
          translateX: `${diagonalDistance}px`,
          opacity: [
            { to: 0, duration: 0 },
            { to: 1, duration: isMobile ? 300 : 200 },
            { to: 0.8, duration: isMobile ? 1500 : 1000 },
            { to: 0, duration: isMobile ? 1200 : 800 }
          ],
          scale: [
            { to: 1, duration: isMobile ? 300 : 200 },
            { to: 0.3, duration: isMobile ? 2700 : 1800 }
          ],
          duration: animDuration,
          delay: animDelay,
          loop: true,
          easing: 'easeInQuad'
        });
      });

    });

    isInitializedRef.current = true;

    // Cleanup
    return () => {
      if (scopeRef.current) {
        scopeRef.current.revert();
      }
      if (container) {
        container.innerHTML = "";
      }
      isInitializedRef.current = false;
    };
  }, [adjustedDropCount, colors, isMobile]);

  // Mouse force field interaction (desktop only)
  useEffect(() => {
    if (isMobile || typeof window === "undefined") return;

    const FORCE_RADIUS = 140;
    const FORCE_STRENGTH = 55;
    const LERP_SPEED = 0.08;
    const RETURN_SPEED = 0.04;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        orbRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      if (orbRef.current) {
        orbRef.current.style.opacity = "0";
      }
    };

    const applyForce = (
      targetOffsetX: number,
      targetOffsetY: number,
      currentOffsetX: number,
      currentOffsetY: number,
      speed: number
    ) => {
      const newX = currentOffsetX + (targetOffsetX - currentOffsetX) * speed;
      const newY = currentOffsetY + (targetOffsetY - currentOffsetY) * speed;
      return { newX, newY };
    };

    const updateParticles = () => {
      const { x: mx, y: my } = mouseRef.current;
      const container = containerRef.current;
      if (!container) {
        rafRef.current = requestAnimationFrame(updateParticles);
        return;
      }

      const rect = container.getBoundingClientRect();
      const mouseActive = mx > -9000;

      // Update static stars (use percentage-based positions)
      for (const star of staticStarDataRef.current) {
        const sx = rect.left + (star.pctX / 100) * rect.width;
        const sy = rect.top + (star.pctY / 100) * rect.height;

        const dx = sx + star.currentOffsetX - mx;
        const dy = sy + star.currentOffsetY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < FORCE_RADIUS && mouseActive) {
          const force = (1 - dist / FORCE_RADIUS) ** 2 * FORCE_STRENGTH;
          const angle = Math.atan2(dy, dx);
          star.targetOffsetX = Math.cos(angle) * force;
          star.targetOffsetY = Math.sin(angle) * force;
        } else {
          star.targetOffsetX = 0;
          star.targetOffsetY = 0;
        }

        const speed = star.targetOffsetX === 0 && star.targetOffsetY === 0
          ? RETURN_SPEED
          : LERP_SPEED;
        const { newX, newY } = applyForce(
          star.targetOffsetX, star.targetOffsetY,
          star.currentOffsetX, star.currentOffsetY, speed
        );
        star.currentOffsetX = newX;
        star.currentOffsetY = newY;

        if (Math.abs(newX) > 0.1 || Math.abs(newY) > 0.1) {
          star.el.style.transform = `translate(${newX}px, ${newY}px)`;
        } else if (star.el.style.transform) {
          star.el.style.transform = "";
          star.currentOffsetX = 0;
          star.currentOffsetY = 0;
        }
      }

      // Update shooting stars (use getBoundingClientRect for current animated position)
      for (const star of shootingStarDataRef.current) {
        const elRect = star.el.getBoundingClientRect();
        // Skip if the element is not visible (opacity 0 / offscreen)
        if (elRect.width === 0 || elRect.height === 0) continue;

        const sx = elRect.left + elRect.width / 2;
        const sy = elRect.top + elRect.height / 2;

        const dx = sx + star.currentOffsetX - mx;
        const dy = sy + star.currentOffsetY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < FORCE_RADIUS && mouseActive) {
          const force = (1 - dist / FORCE_RADIUS) ** 2 * FORCE_STRENGTH;
          const angle = Math.atan2(dy, dx);
          star.targetOffsetX = Math.cos(angle) * force;
          star.targetOffsetY = Math.sin(angle) * force;
        } else {
          star.targetOffsetX = 0;
          star.targetOffsetY = 0;
        }

        const speed = star.targetOffsetX === 0 && star.targetOffsetY === 0
          ? RETURN_SPEED
          : LERP_SPEED;
        const { newX, newY } = applyForce(
          star.targetOffsetX, star.targetOffsetY,
          star.currentOffsetX, star.currentOffsetY, speed
        );
        star.currentOffsetX = newX;
        star.currentOffsetY = newY;

        if (Math.abs(newX) > 0.1 || Math.abs(newY) > 0.1) {
          star.wrapper.style.transform = `translate(${newX}px, ${newY}px)`;
        } else if (star.wrapper.style.transform) {
          star.wrapper.style.transform = "";
          star.currentOffsetX = 0;
          star.currentOffsetY = 0;
        }
      }

      rafRef.current = requestAnimationFrame(updateParticles);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(updateParticles);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  return (
    <div
      className={cn(
        "fixed inset-0 overflow-hidden pointer-events-none",
        className
      )}
      {...props}
    >
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(0, 191, 255, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(135, 206, 235, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at center, rgba(0, 191, 255, 0.05) 0%, transparent 100%)
          `,
          zIndex: -1,
        }}
      />
      {/* Mouse orb / force field glow */}
      {!isMobile && (
        <div
          ref={orbRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 0.3s ease",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-35px",
              left: "-35px",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, rgba(0, 191, 255, 0.07) 40%, transparent 70%)`,
              filter: "blur(6px)",
            }}
          />
        </div>
      )}
      {children}
    </div>
  );
};
