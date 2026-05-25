import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";
import { FaRobot, FaMicrochip, FaHeartPulse, FaArrowRight } from "react-icons/fa6";

const researchAreas = [
  {
    title: "Agent Infrastructure",
    description: "Memory, RAG, inference, and runtime systems for autonomous agents",
    icon: <FaRobot className="w-7 h-7" />,
    href: "/research/generative-ai",
    highlights: ["Memory Engineering", "RAG Architectures", "Inference Optimization", "Agent Runtime Systems"],
    color: "cyan"
  },
  {
    title: "Agent Settlement",
    description: "Monmouth, blockchain coordination, and execution guarantees",
    icon: <FaMicrochip className="w-7 h-7" />,
    href: "/research/blockchain",
    highlights: ["Monmouth", "Execution Guarantees", "ERC-8004", "On-Chain Coordination"],
    color: "gold"
  },
  {
    title: "Longitudinal Intelligence",
    description: "Red Cell Systems, healthcare memory, and patient-owned AI systems",
    icon: <FaHeartPulse className="w-7 h-7" />,
    href: "/research/healthcare",
    highlights: ["Red Cell Systems", "Healthcare Intelligence", "Biomarker Analytics", "Disease-Focused AI"],
    color: "emerald"
  }
];

const colorVariants: Record<string, { bg: string; text: string; hover: string; gradient: string }> = {
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-500",
    hover: "group-hover:text-cyan-500",
    gradient: "from-cyan-500 to-cyan-600"
  },
  gold: {
    bg: "bg-gold-500/10",
    text: "text-gold-500",
    hover: "group-hover:text-gold-500",
    gradient: "from-gold-400 to-gold-500"
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
    hover: "group-hover:text-emerald-500",
    gradient: "from-emerald-500 to-emerald-600"
  }
};

export default function ResearchPage() {
  return (
    <PageLayout
      eyebrow="Explore"
      title="Research"
      description="Building the primitives for autonomous agents — from inference and memory to settlement and healthcare intelligence"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {researchAreas.map((area, index) => {
          const colors = colorVariants[area.color];
          return (
            <Link
              key={area.title}
              href={area.href}
              className="group card-enhanced p-6 md:p-8"
              style={{ animationDelay: `${(index + 4) * 50}ms` }}
            >
              {/* Icon & Arrow Row */}
              <div className="flex items-start justify-between mb-5">
                <div className={`p-3 rounded-xl ${colors.bg} ${colors.text} group-hover:scale-105 transition-transform duration-base ease-out-expo`}>
                  {area.icon}
                </div>
                <FaArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-base ease-out-expo" />
              </div>

              {/* Title */}
              <h2 className={`text-display-xs font-lora mb-2 transition-colors duration-base ${colors.hover}`}>
                {area.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-muted-foreground text-body mb-5">
                {area.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {area.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center text-sm text-muted-foreground/80">
                    <span className={`mr-2 ${colors.text} opacity-60`}>→</span>
                    <span className="tracking-mono-tight">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Bottom gradient line */}
              <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-base ease-out-expo origin-left rounded-b-xl`} />
            </Link>
          );
        })}
      </div>

      {/* Our Approach Section */}
      <section className="mt-16 md:mt-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-cyan-500/50 rounded-full" />
          <h2 className="text-eyebrow">Philosophy</h2>
        </div>
        <h3 className="text-display-sm md:text-display-md font-lora mb-6">Our Approach</h3>
        <div className="max-w-3xl space-y-4">
          <p className="text-muted-foreground text-body leading-relaxed">
            Quincy Labs is an AI infrastructure lab building agent-native systems across compute, 
            memory, inference, and decentralized coordination. Our research spans three interconnected 
            domains that form a single thesis: autonomous agents need purpose-built infrastructure.
          </p>
          <p className="text-muted-foreground text-body leading-relaxed">
            We build open research, production-grade systems, and the primitives that enable 
            the next generation of autonomous, intelligent infrastructure.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
