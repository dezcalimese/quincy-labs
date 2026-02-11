import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";
import { FaRobot, FaMicrochip, FaHeartPulse, FaArrowRight } from "react-icons/fa6";

const researchAreas = [
  {
    title: "Generative AI",
    description: "Memory engineering, RAG systems, and LLM optimization",
    icon: <FaRobot className="w-7 h-7" />,
    href: "/research/generative-ai",
    highlights: ["Memory Engineering", "RAG Architectures", "LLM Fine-tuning", "Agent Systems"],
    color: "cyan"
  },
  {
    title: "Blockchain Infrastructure",
    description: "Monmouth settlement chain, stablecoins, and agent infrastructure",
    icon: <FaMicrochip className="w-7 h-7" />,
    href: "/research/blockchain",
    highlights: ["Monmouth", "Stablecoin Mechanisms", "ERC-8004", "Agent Infrastructure"],
    color: "gold"
  },
  {
    title: "Healthcare AI",
    description: "Monarch AI platform and sickle cell research",
    icon: <FaHeartPulse className="w-7 h-7" />,
    href: "/research/healthcare",
    highlights: ["Monarch AI", "Sickle Cell Analysis", "Medical Imaging", "Predictive Diagnostics"],
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
      description="Exploring the intersection of AI, blockchain, and healthcare through foundational research"
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
            At the Financial Reishi Research Institute, we focus on foundational research that bridges
            theoretical advances with practical applications. Our work spans three critical domains where
            emerging technologies can create transformative impact.
          </p>
          <p className="text-muted-foreground text-body leading-relaxed">
            We believe in open research, collaborative development, and building infrastructure that
            enables the next generation of decentralized and intelligent systems.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
