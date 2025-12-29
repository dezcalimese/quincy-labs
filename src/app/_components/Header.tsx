"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { useSidebar } from "./SidebarContext";

const Header: React.FC = () => {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  
  return (
    <header className="flex flex-col space-y-4 md:space-y-8 lg:flex-row justify-between items-center p-4 md:p-6 lg:p-8 relative z-20">
      <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
        {/* Desktop hamburger - only shows when sidebar is collapsed */}
        {isCollapsed && (
          <button
            type="button"
            onClick={() => {
              console.log("Hamburger clicked!");
              setIsCollapsed(false);
            }}
            className="hidden lg:inline-flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative z-50 cursor-pointer"
            title="Open menu"
            aria-label="Open menu"
          >
            <FiMenu className="w-6 h-6 pointer-events-none" />
          </button>
        )}
        {/* Responsive title with padding for mobile menu button */}
        <div className="flex font-lora items-center gap-2 md:gap-3 text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap ml-12 lg:ml-0">
          <Image
            src="/quincy-logo.svg"
            alt="Quincy Labs Logo"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 dark:invert"
          />
          Quincy Labs
        </div>
        {/* Mode toggle on mobile - visible in header */}
        <div className="lg:hidden">
          <ModeToggle />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
        <Button variant="outline" className="px-4 py-2 sm:px-6 sm:py-[1.2rem] text-base sm:text-lg w-full sm:w-auto">
          <Link
            href="https://quincylabs.substack.com/"
            target="_blank"
            className="flex items-center justify-center"
          >
            Join our <BsSubstack className="ml-2 sm:ml-3 -mt-0.25 w-4 h-4" />
          </Link>
        </Button>
        <Button variant="outline" className="px-4 py-2 sm:px-6 sm:py-[1.2rem] text-base sm:text-lg w-full sm:w-auto">
          <Link
            href="https://x.com/Quincy_Labs"
            target="_blank"
            className="flex items-center justify-center"
          >
            Follow on <FaXTwitter className="ml-2 sm:ml-3 -mt-0.25 w-4 h-4" />
          </Link>
        </Button>
        {/* Mode toggle on desktop */}
        <div className="hidden lg:block">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
