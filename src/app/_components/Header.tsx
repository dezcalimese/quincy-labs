"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { useSidebar } from "./SidebarContext";

const Header: React.FC = () => {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  
  return (
    <header className="flex flex-col space-y-8 lg:flex-row justify-between items-center p-8 relative z-20">
      <div className="flex items-center gap-4">
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
        <div className="text-5xl font-bold whitespace-nowrap">Quincy Labs</div>
      </div>
      <div className="flex space-x-4">
        {" "}
        <Button variant="outline" className="px-6 py-[1.2rem] text-lg">
          <Link
            href="https://quincylabs.substack.com/"
            target="_blank"
            className="flex items-center"
          >
            Join our <BsSubstack className="ml-3 -mt-0.25 w-4 h-4" />
          </Link>
        </Button>
        <Button variant="outline" className="px-6 py-[1.2rem] text-lg">
          <Link
            href="https://x.com/Quincy_Labs"
            target="_blank"
            className="flex items-center"
          >
            Follow on <FaXTwitter className="ml-3 -mt-0.25 w-4 h-4" />
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
