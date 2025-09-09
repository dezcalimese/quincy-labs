"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSidebar } from "./SidebarContext";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className="min-h-screen">
      <Sidebar />
      
      {/* Main Content Area with Header - adjusts margin when sidebar is open */}
      <div className={`flex flex-col transition-all duration-300 ${!isCollapsed ? 'lg:ml-72' : ''}`}>
        <Header />
        <main className="flex-1">
        <div className="p-4 md:p-8 lg:p-12 pt-2 md:pt-8">
          {/* Page Header */}
          {(title || description) && (
            <div className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-200 dark:border-gray-800">
              {title && (
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-lora text-gray-900 dark:text-white">
                  {title}
                </h1>
              )}
              {description && (
                <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              )}
            </div>
          )}
          
          {/* Page Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
        </main>
      </div>
    </div>
  );
}