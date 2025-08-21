"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      {/* Main Content Area with Header - naturally flows next to sidebar */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header />
        <main className="flex-1">
        <div className="p-4 md:p-8 lg:p-12 pt-2 md:pt-8">
          {/* Page Header */}
          {(title || description) && (
            <div className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-200 dark:border-gray-800">
              {title && (
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
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