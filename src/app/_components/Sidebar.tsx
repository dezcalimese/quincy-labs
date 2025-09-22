"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";
import { 
  FiChevronDown, 
  FiChevronRight,
  FiChevronLeft,
  FiHome, 
  FiLayers, 
  FiBookOpen,
  FiUser,
  FiMail,
  FiMenu,
  FiX
} from "react-icons/fi";
import {
  FaFlask,
  FaMicrochip,
  FaHeartPulse,
  FaRobot,
  FaNotesMedical,
  FaCubes,
  FaPenNib,
  FaChartLine,
  FaCode,
  FaUsers,
  FaCompass,
  FaPhone,
  FaMoneyBillTrendUp,
  FaCloud
} from "react-icons/fa6";

type NavItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <FiHome className="w-4 h-4" />
  },
  {
    label: "Research",
    icon: <FaFlask className="w-4 h-4" />,
    children: [
      {
        label: "Overview",
        href: "/research",
        icon: <FiLayers className="w-3 h-3" />
      },
      {
        label: "Generative AI",
        href: "/research/generative-ai",
        icon: <FaRobot className="w-3 h-3" />
      },
      {
        label: "Blockchain",
        href: "/research/blockchain",
        icon: <FaMicrochip className="w-3 h-3" />
      },
      {
        label: "Healthcare",
        href: "/research/healthcare",
        icon: <FaHeartPulse className="w-3 h-3" />
      }
    ]
  },
  {
    label: "Labs",
    icon: <FaCubes className="w-4 h-4" />,
    children: [
      {
        label: "Overview",
        href: "/labs",
        icon: <FiLayers className="w-3 h-3" />
      },
      {
        label: "Monmouth",
        href: "/labs/monmouth",
        icon: <FaMicrochip className="w-3 h-3" />
      },
      {
        label: "Monarch",
        href: "/labs/monarch",
        icon: <FaNotesMedical className="w-3 h-3" />
      },
      {
        label: "Sandstorm",
        href: "/labs/sandstorm",
        icon: <FaCloud className="w-3 h-3" />
      }
    ]
  },
  {
    label: "Insights",
    icon: <FiBookOpen className="w-4 h-4" />,
    children: [
      {
        label: "All Posts",
        href: "/insights",
        icon: <FiLayers className="w-3 h-3" />
      },
      {
        label: "Research Notes",
        href: "/insights/research-notes",
        icon: <FaPenNib className="w-3 h-3" />
      },
      {
        label: "Macro & Markets",
        href: "/insights/macro-markets",
        icon: <FaChartLine className="w-3 h-3" />
      },
      {
        label: "Tech Deep Dives",
        href: "/insights/tech-deep-dives",
        icon: <FaCode className="w-3 h-3" />
      }
    ]
  },
  {
    label: "Ventures",
    href: "/ventures",
    icon: <FaMoneyBillTrendUp className="w-4 h-4" />
  },
  {
    label: "About",
    icon: <FiUser className="w-4 h-4" />,
    children: [
      {
        label: "Team",
        href: "/about",
        icon: <FaUsers className="w-3 h-3" />
      },
      {
        label: "Philosophy",
        href: "/about/philosophy",
        icon: <FaCompass className="w-3 h-3" />
      },
      {
        label: "Story",
        href: "/about/story",
        icon: <FiBookOpen className="w-3 h-3" />
      }
    ]
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <FiMail className="w-4 h-4" />
  }
];

export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const pathname = usePathname();

  const toggleSection = (label: string) => {
    setExpandedSections(prev =>
      prev.includes(label)
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const renderNavItem = (item: NavItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.label);
    const active = item.href && isActive(item.href);

    return (
      <div key={item.label} className="w-full">
        {item.href ? (
          <Link
            href={item.href}
            onClick={() => setIsMobileOpen(false)}
            className={`
              flex items-center gap-3 px-4 py-2.5 text-sm
              transition-all duration-200
              hover:bg-gray-100 dark:hover:bg-gray-800
              ${active 
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold border-l-4 border-blue-500" 
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }
              ${depth > 0 ? "pl-10" : ""}
            `}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ) : (
          <button
            onClick={() => hasChildren && toggleSection(item.label)}
            className={`
              flex items-center justify-between w-full px-4 py-2.5 text-sm
              transition-all duration-200
              hover:bg-gray-100 dark:hover:bg-gray-800
              text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
            `}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
            {hasChildren && (
              <span className="transition-transform duration-200">
                {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            )}
          </button>
        )}
        
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children!.map(child => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Menu Toggle - Only show when sidebar is closed */}
      {!isMobileOpen && (
        <button
          onClick={() => setIsMobileOpen(true)}
          className="fixed top-4 left-4 z-[60] p-2 rounded-lg bg-white dark:bg-gray-900 shadow-lg lg:hidden border border-gray-200 dark:border-gray-700"
          aria-label="Open menu"
        >
          <FiMenu size={24} />
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}


      {/* Sidebar - Show on mobile when open, on desktop when not collapsed */}
      <aside
        className={`
          fixed top-0 h-screen z-50
          bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
          transform transition-all duration-300 ease-in-out
          w-72
          ${/* Mobile behavior */ ''}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          ${/* Desktop behavior */ ''}
          ${!isCollapsed ? "lg:translate-x-0" : "lg:-translate-x-full lg:w-0"}
        `}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">Quincy Labs</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Financial Reishi Research Institute
                </p>
              </div>
              {/* Close button for mobile */}
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  setIsCollapsed(true);
                }}
                className="lg:hidden p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors ml-4 flex-shrink-0"
                title="Close sidebar"
              >
                <FiX className="w-5 h-5" />
              </button>
              {/* Close button for desktop */}
              <button
                onClick={() => setIsCollapsed(true)}
                className="hidden lg:block p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors ml-4 flex-shrink-0"
                title="Close sidebar"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>
        
        <nav className="py-4">
          {navItems.map(item => renderNavItem(item))}
        </nav>

          {/* Optional Creative Routes */}
          {/* <div className="mt-8 p-4 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
              Coming Soon
            </p>
            <div className="space-y-2">
              <Link
                href="/library"
                className="block text-sm text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400"
              >
                📚 Library
              </Link>
              <Link
                href="/playground"
                className="block text-sm text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400"
              >
                🎮 Playground
              </Link>
              <Link
                href="/ontology"
                className="block text-sm text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400"
              >
                🗺️ Ontology Map
              </Link>
            </div>
          </div> */}
        </div>
      </aside>
    </>
  );
}