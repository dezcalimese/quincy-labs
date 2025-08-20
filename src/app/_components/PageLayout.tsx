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
        <div className="p-8 lg:p-12">
          {/* Page Header */}
          {(title || description) && (
            <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
              {title && (
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {title}
                </h1>
              )}
              {description && (
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
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