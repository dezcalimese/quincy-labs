import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";
import { FaMicrochip, FaNotesMedical, FaCode, FaRocket } from "react-icons/fa6";

const labsProjects = [
  {
    title: "Monmouth",
    subtitle: "AI-Native Blockchain",
    description: "Next-generation Layer 2 with native AI execution and intelligent consensus",
    icon: <FaMicrochip className="w-8 h-8" />,
    href: "/labs/monmouth",
    status: "In Development",
    statusColor: "text-yellow-500",
    features: ["AI Consensus", "Smart Execution", "10K+ TPS", "Sub-second finality"]
  },
  {
    title: "Monarch",
    subtitle: "Healthcare Intelligence",
    description: "Comprehensive AI platform for clinical decision support and patient care",
    icon: <FaNotesMedical className="w-8 h-8" />,
    href: "/labs/monarch",
    status: "Beta Testing",
    statusColor: "text-blue-500",
    features: ["Clinical AI", "Risk Prediction", "HIPAA Compliant", "Real-time Analysis"]
  },
  {
    title: "Dropkits",
    subtitle: "Developer Tools",
    description: "Open-source tools and infrastructure for AI and blockchain development",
    icon: <FaCode className="w-8 h-8" />,
    href: "/labs/dropkits",
    status: "Active",
    statusColor: "text-green-500",
    features: ["Agent Wallets", "SDK Libraries", "Testing Tools", "Demo Apps"]
  }
];

export default function LabsPage() {
  return (
    <PageLayout
      title="Labs"
      description="Building the future through experimental projects and cutting-edge technology"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Quincy Labs is where our research meets reality. We build production-grade systems that 
            demonstrate the practical applications of our theoretical work, creating tools and platforms 
            that push the boundaries of what's possible.
          </p>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {labsProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <span className={`text-xs font-semibold ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-1 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </section>

        {/* Innovation Pipeline */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Innovation Pipeline</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-semibold mb-1">Research</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Fundamental exploration
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛠️</div>
                <h3 className="font-semibold mb-1">Prototype</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Proof of concept
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold mb-1">Launch</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Beta deployment
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-semibold mb-1">Scale</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Global adoption
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We're always looking for talented researchers, engineers, and partners who share our 
            vision of building transformative technology.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="https://github.com/quincy-labs"
              target="_blank"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View on GitHub
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}