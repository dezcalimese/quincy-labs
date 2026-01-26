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
    <header className="flex flex-col space-y-4 md:space-y-6 lg:flex-row justify-between items-center p-4 md:p-6 lg:p-8 relative z-20">
      {/* Left side - Logo & Title */}
      <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
        {/* Desktop hamburger - only shows when sidebar is collapsed */}
        {isCollapsed && (
          <button
            type="button"
            onClick={() => setIsCollapsed(false)}
            className="hidden lg:inline-flex p-2.5 hover:bg-secondary rounded-lg transition-all duration-base ease-out-expo relative z-50 cursor-pointer border border-transparent hover:border-border"
            title="Open menu"
            aria-label="Open menu"
          >
            <FiMenu className="w-5 h-5 pointer-events-none" />
          </button>
        )}

        {/* Logo and title */}
        <Link
          href="/"
          className="flex items-center gap-3 md:gap-4 ml-12 lg:ml-0 group"
        >
          <Image
            src="/quincy-logo.svg"
            alt="Quincy Labs Logo"
            width={40}
            height={40}
            className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 dark:invert transition-transform duration-base ease-out-expo group-hover:scale-105"
          />
          <span className="font-lora text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Quincy Labs
          </span>
        </Link>

        {/* Mode toggle on mobile */}
        <div className="lg:hidden">
          <ModeToggle />
        </div>
      </div>

      {/* Right side - Social links */}
      <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
        <Button
          variant="outline"
          asChild
          className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm w-full sm:w-auto border-border/50 hover:border-cyan-500/50 hover:shadow-glow-sm transition-all duration-base ease-out-expo"
        >
          <Link
            href="https://quincylabs.substack.com/"
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            <span className="tracking-mono-wide">Join our</span>
            <BsSubstack className="w-4 h-4 text-[#FF6719]" />
          </Link>
        </Button>

        <Button
          variant="outline"
          asChild
          className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm w-full sm:w-auto border-border/50 hover:border-cyan-500/50 hover:shadow-glow-sm transition-all duration-base ease-out-expo"
        >
          <Link
            href="https://x.com/Quincy_Labs"
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            <span className="tracking-mono-wide">Follow on</span>
            <FaXTwitter className="w-4 h-4" />
          </Link>
        </Button>

        {/* Mode toggle on desktop */}
        <div className="hidden lg:flex items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
