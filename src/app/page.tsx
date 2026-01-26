"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaArrowUpRightFromSquare, FaArrowRight, FaFlask, FaCubes, FaBookOpen } from "react-icons/fa6";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import { useSidebar } from "./_components/SidebarContext";

export default function Home() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen">
      <Sidebar />

      <div className={`flex flex-col transition-all duration-slow ease-out-expo ${!isCollapsed ? 'lg:ml-72' : ''}`}>
        <Header />
        <main className="flex-1 h-[calc(100vh-64px)] overflow-hidden">
          {/* Hero Section - Compact vertical layout */}
          <section className="h-full flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
            <div className="relative z-10 flex flex-col place-items-center max-w-5xl mx-auto">
              {/* Hero Image with blur-in animation */}
              <div className="opacity-0 animate-blur-in">
                <Image
                  className="w-full h-auto max-w-[900px]"
                  src="/img/silbern-isometric.png"
                  alt="Silbern"
                  width={1600}
                  height={1067}
                  sizes="(max-width: 900px) 100vw, 900px"
                  priority
                />
              </div>

              {/* Tagline with staggered fade-up */}
              <div className="mt-4 text-center">
                <p className="opacity-0 animate-fade-up stagger-3 text-lg md:text-xl lg:text-2xl text-body text-muted-foreground dark:text-white">
                  Financial Reishi Research Institute
                </p>
              </div>
            </div>

            {/* CTA Buttons with staggered entrance */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto px-4 sm:px-0">
              <Button
                variant="outline"
                className="opacity-0 animate-fade-up stagger-4 px-5 py-4 md:px-6 md:py-5 text-base relative z-10 w-full sm:w-auto border-border/50 hover:border-cyan-500/50 hover:shadow-glow-sm transition-all duration-base ease-out-expo"
              >
                <Link
                  href="https://cal.com/henry-ogedegbe-jr"
                  target="_blank"
                  className="flex items-center justify-center gap-3"
                >
                  <span>Schedule a call</span>
                  <FaArrowUpRightFromSquare className="w-4 h-4 opacity-60" />
                </Link>
              </Button>
              <Button
                className="opacity-0 animate-fade-up stagger-5 px-5 py-4 md:px-6 md:py-5 text-base relative z-10 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white shadow-glow-sm hover:shadow-glow transition-all duration-base ease-out-expo"
              >
                <Link
                  href="/research"
                  className="flex items-center justify-center gap-3"
                >
                  <span>Explore Research</span>
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Quick Links - Compact cards row */}
            <div className="grid grid-cols-3 gap-3 mt-6 w-full max-w-3xl px-4">
              {/* Research Card */}
              <Link
                href="/research"
                className="group card-enhanced p-3 md:p-4 opacity-0 animate-fade-up stagger-6"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500/20 transition-colors duration-base">
                    <FaFlask className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base font-lora group-hover:text-cyan-500 transition-colors duration-base">
                    Research
                  </span>
                  <FaArrowRight className="w-3 h-3 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-base" />
                </div>
                <p className="text-xs text-muted-foreground mt-2 leading-snug">
                  AI, blockchain, healthcare
                </p>
              </Link>

              {/* Labs Card */}
              <Link
                href="/labs"
                className="group card-enhanced p-3 md:p-4 opacity-0 animate-fade-up stagger-7"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-500 group-hover:bg-gold-500/20 transition-colors duration-base">
                    <FaCubes className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base font-lora group-hover:text-gold-500 transition-colors duration-base">
                    Labs
                  </span>
                  <FaArrowRight className="w-3 h-3 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-base" />
                </div>
                <p className="text-xs text-muted-foreground mt-2 leading-snug">
                  Monmouth, Monarch, Sandstorm
                </p>
              </Link>

              {/* Insights Card */}
              <Link
                href="/insights"
                className="group card-enhanced p-3 md:p-4 opacity-0 animate-fade-up stagger-8"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors duration-base">
                    <FaBookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base font-lora group-hover:text-emerald-500 transition-colors duration-base">
                    Insights
                  </span>
                  <FaArrowRight className="w-3 h-3 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-base" />
                </div>
                <p className="text-xs text-muted-foreground mt-2 leading-snug">
                  Tech and market perspectives
                </p>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
