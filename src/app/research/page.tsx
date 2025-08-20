import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";
import { FaRobot, FaMicrochip, FaHeartPulse } from "react-icons/fa6";

const researchAreas = [
  {
    title: "Generative AI",
    description: "Memory engineering, RAG systems, and LLM optimization",
    icon: <FaRobot className="w-8 h-8" />,
    href: "/research/generative-ai",
    highlights: ["Memory Engineering", "RAG Architectures", "LLM Fine-tuning", "Agent Systems"]
  },
  {
    title: "Blockchain Infrastructure",
    description: "Monmouth L2, stablecoins, and execution extensions",
    icon: <FaMicrochip className="w-8 h-8" />,
    href: "/research/blockchain",
    highlights: ["Monmouth L2", "Stablecoin Mechanisms", "ExEx Development", "DeFi Protocols"]
  },
  {
    title: "Healthcare AI",
    description: "Monarch AI platform and sickle cell research",
    icon: <FaHeartPulse className="w-8 h-8" />,
    href: "/research/healthcare",
    highlights: ["Monarch AI", "Sickle Cell Analysis", "Medical Imaging", "Predictive Diagnostics"]
  }
];

export default function ResearchPage() {
  return (
    <PageLayout
      title="Research"
      description="Exploring the intersection of AI, blockchain, and healthcare"
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {researchAreas.map((area) => (
          <Link
            key={area.title}
            href={area.href}
            className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-4 text-blue-500 dark:text-blue-400">
              {area.icon}
            </div>
            
            <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
              {area.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {area.description}
            </p>
            
            <div className="space-y-1">
              {area.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <span className="mr-2">→</span>
                  {highlight}
                </div>
              ))}
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            At the Financial Reishi Research Institute, we focus on foundational research that bridges 
            theoretical advances with practical applications. Our work spans three critical domains where 
            emerging technologies can create transformative impact.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            We believe in open research, collaborative development, and building infrastructure that 
            enables the next generation of decentralized and intelligent systems.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}