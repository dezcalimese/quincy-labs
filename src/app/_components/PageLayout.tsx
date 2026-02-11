"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSidebar } from "./SidebarContext";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  eyebrow?: string;
}

export default function PageLayout({ children, title, description, eyebrow }: PageLayoutProps) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen">
      <Sidebar />

      {/* Main Content Area with Header */}
      <div className={`flex flex-col transition-all duration-slow ease-out-expo ${!isCollapsed ? 'lg:ml-72' : ''}`}>
        <Header />
        <main className="flex-1">
          <div className="p-4 md:p-8 lg:p-12 pt-2 md:pt-8">
            {/* Page Header with staggered animation */}
            {(title || description) && (
              <div className="mb-8 md:mb-12 pb-6 md:pb-8 border-b border-border/50">
                {eyebrow && (
                  <p className="text-eyebrow mb-3 opacity-0 animate-fade-down">
                    {eyebrow}
                  </p>
                )}
                {title && (
                  <h1 className="text-display-md md:text-display-lg lg:text-[2rem] font-lora opacity-0 animate-fade-up stagger-1">
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="mt-4 text-base md:text-lg text-muted-foreground text-body max-w-3xl opacity-0 animate-fade-up stagger-2">
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Page Content */}
            <div className="relative z-10 opacity-0 animate-fade-up stagger-3">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
