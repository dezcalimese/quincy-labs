"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";
import {
  FiChevronDown,
  FiChevronRight,
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
        icon: <FiLayers className="w-3.5 h-3.5" />
      },
      {
        label: "Agent Infrastructure",
        href: "/research/generative-ai",
        icon: <FaRobot className="w-3.5 h-3.5" />
      },
      {
        label: "Agent Settlement",
        href: "/research/blockchain",
        icon: <FaMicrochip className="w-3.5 h-3.5" />
      },
      {
        label: "Longitudinal Intelligence",
        href: "/research/healthcare",
        icon: <FaHeartPulse className="w-3.5 h-3.5" />
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
        icon: <FiLayers className="w-3.5 h-3.5" />
      },
      {
        label: "Monmouth",
        href: "/labs/monmouth",
        icon: <FaMicrochip className="w-3.5 h-3.5" />
      },
      {
        label: "Red Cell Systems",
        href: "/labs/red-cell-systems",
        icon: <FaNotesMedical className="w-3.5 h-3.5" />
      },
      {
        label: "Sandstorm",
        href: "/labs/sandstorm",
        icon: <FaCloud className="w-3.5 h-3.5" />
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
        icon: <FiLayers className="w-3.5 h-3.5" />
      },
      {
        label: "Research Notes",
        href: "/insights/research-notes",
        icon: <FaPenNib className="w-3.5 h-3.5" />
      },
      {
        label: "Macro & Markets",
        href: "/insights/macro-markets",
        icon: <FaChartLine className="w-3.5 h-3.5" />
      },
      {
        label: "Tech Deep Dives",
        href: "/insights/tech-deep-dives",
        icon: <FaCode className="w-3.5 h-3.5" />
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
        icon: <FaUsers className="w-3.5 h-3.5" />
      },
      {
        label: "Philosophy",
        href: "/about/philosophy",
        icon: <FaCompass className="w-3.5 h-3.5" />
      },
      {
        label: "Story",
        href: "/about/story",
        icon: <FiBookOpen className="w-3.5 h-3.5" />
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
              group flex items-center gap-3 px-4 py-2.5 text-sm
              transition-all duration-base ease-out-expo
              hover:bg-secondary/80 rounded-lg mx-2
              ${active
                ? "bg-secondary text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
              }
              ${depth > 0 ? "pl-10" : ""}
            `}
          >
            <span className={`transition-colors duration-base ${active ? "text-cyan-500" : "group-hover:text-cyan-500"}`}>
              {item.icon}
            </span>
            <span className="tracking-mono-tight">{item.label}</span>
            {active && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-500" />
            )}
          </Link>
        ) : (
          <button
            onClick={() => hasChildren && toggleSection(item.label)}
            className={`
              group flex items-center justify-between w-[calc(100%-1rem)] mx-2 px-4 py-2.5 text-sm
              transition-all duration-base ease-out-expo
              hover:bg-secondary/80 rounded-lg
              text-muted-foreground hover:text-foreground
            `}
          >
            <div className="flex items-center gap-3">
              <span className="group-hover:text-cyan-500 transition-colors duration-base">
                {item.icon}
              </span>
              <span className="tracking-mono-tight">{item.label}</span>
            </div>
            {hasChildren && (
              <span className="transition-transform duration-base ease-out-expo">
                {isExpanded ? (
                  <FiChevronDown className="w-4 h-4" />
                ) : (
                  <FiChevronRight className="w-4 h-4" />
                )}
              </span>
            )}
          </button>
        )}

        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-0.5">
            {item.children!.map(child => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      {!isMobileOpen && (
        <button
          onClick={() => setIsMobileOpen(true)}
          className="fixed top-4 left-4 z-[60] p-2.5 rounded-lg bg-card shadow-elevated lg:hidden border border-border/50 hover:border-cyan-500/30 transition-all duration-base ease-out-expo"
          aria-label="Open menu"
        >
          <FiMenu size={22} />
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-base"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 h-screen z-50
          bg-card/95 backdrop-blur-md border-r border-border/50
          transform transition-all duration-slow ease-out-expo
          w-72
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          ${!isCollapsed ? "lg:translate-x-0" : "lg:-translate-x-full lg:w-0"}
        `}
      >
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="p-5 border-b border-border/50">
            <div className="flex items-start justify-between">
              <Link href="/" className="flex-1 group" onClick={() => setIsMobileOpen(false)}>
                <div className="flex items-center gap-3">
                  <Image
                    src="/quincy-logo.svg"
                    alt="Quincy Labs Logo"
                    width={36}
                    height={36}
                    className="w-10 h-10 dark:invert transition-transform duration-base ease-out-expo group-hover:scale-105"
                  />
                  <div>
                    <h2 className="font-lora text-xl font-bold tracking-tight">
                      Quincy Labs
                    </h2>
                    <p className="text-eyebrow mt-0.5">
                      AI Infrastructure Lab
                    </p>
                  </div>
                </div>
              </Link>

              {/* Close button for mobile */}
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  setIsCollapsed(true);
                }}
                className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-all duration-base ease-out-expo ml-3 flex-shrink-0"
                title="Close sidebar"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Close button for desktop */}
              <button
                onClick={() => setIsCollapsed(true)}
                className="hidden lg:block p-2 hover:bg-secondary rounded-lg transition-all duration-base ease-out-expo ml-3 flex-shrink-0"
                title="Close sidebar"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="py-4 space-y-1">
            {navItems.map(item => renderNavItem(item))}
          </nav>
        </div>
      </aside>
    </>
  );
}
