"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useRef, useMemo } from "react";
import { animate, createScope, createSpring } from "animejs";
import { useMobileDetect } from "@/hooks/useMobileDetect";

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
  
  const adjustedDropCount = useMemo(() => {
    return isMobile ? Math.floor(dropCount * 0.3) : dropCount;
  }, [dropCount, isMobile]);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;
    if (isInitializedRef.current && isMobile) return;

    const container = containerRef.current;
    
    // Create static stars (smaller, twinkling)
    const staticStarCount = Math.floor(adjustedDropCount * 0.7);
    for (let i = 0; i < staticStarCount; i++) {
      const star = document.createElement("div");
      star.className = "static-star";
      
      const size = Math.random() * 4 + 2; // Much thicker stars
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
        opacity: ${Math.random() * 0.9 + 0.6}; /* Higher opacity for visibility */
        box-shadow: 0 0 ${size * 3}px ${color},
                    0 0 ${size * 6}px ${color}90,
                    0 0 ${size * 10}px ${color}60,
                    0 0 ${size * 15}px ${color}30;
        will-change: opacity;
      `;
      
      container.appendChild(star);
    }
    
    // Create shooting stars (larger, moving diagonally)
    const shootingStarCount = Math.floor(adjustedDropCount * 0.3);
    for (let i = 0; i < shootingStarCount; i++) {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 6 + 4; // Much thicker shooting stars
      const left = Math.random() * 120 - 20;
      const top = Math.random() * 50 - 50;
      
      // Create star with trailing effect
      shootingStar.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        left: ${left}%;
        top: ${top}%;
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
      
      // Add extra bright stars occasionally
      if (Math.random() > 0.7) {
        shootingStar.style.boxShadow += `, 0 0 ${size * 20}px ${color}80`;
        shootingStar.classList.add('bright-star');
      }
      
      container.appendChild(shootingStar);
    }

    // Create scoped animations
    scopeRef.current = createScope({ root: containerRef.current }).add(self => {
      
      // Animate twinkling static stars (simplified for mobile)
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
      
      // Animate shooting stars (less frequent on mobile)
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
          zIndex: -1
        }}
      />
      {children}
    </div>
  );
};