import PageLayout from "@/app/_components/PageLayout";
import { FaRobot, FaMemory, FaDatabase, FaBrain } from "react-icons/fa6";

const researchTopics = [
  {
    title: "Memory Engineering",
    icon: <FaMemory className="w-6 h-6" />,
    description: "Developing advanced memory architectures for LLMs to maintain context over extended interactions",
    areas: [
      "Long-term memory systems",
      "Context compression techniques",
      "Semantic memory indexing",
      "Memory retrieval optimization"
    ]
  },
  {
    title: "RAG Systems",
    icon: <FaDatabase className="w-6 h-6" />,
    description: "Building robust Retrieval-Augmented Generation pipelines for enhanced knowledge integration",
    areas: [
      "Vector database optimization",
      "Hybrid search strategies",
      "Document chunking algorithms",
      "Real-time knowledge updates"
    ]
  },
  {
    title: "LLM Optimization",
    icon: <FaBrain className="w-6 h-6" />,
    description: "Fine-tuning and optimizing large language models for specialized domains",
    areas: [
      "Parameter-efficient fine-tuning",
      "Model quantization techniques",
      "Inference acceleration",
      "Multi-modal integration"
    ]
  },
  {
    title: "Agent Systems",
    icon: <FaRobot className="w-6 h-6" />,
    description: "Creating autonomous AI agents capable of complex reasoning and tool use",
    areas: [
      "Tool-use frameworks",
      "Multi-agent coordination",
      "Goal-oriented planning",
      "Self-improvement mechanisms"
    ]
  }
];

export default function GenerativeAIPage() {
  return (
    <PageLayout
      title="Generative AI Research"
      description="Advancing the frontier of language models and intelligent systems"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Our Generative AI research focuses on pushing the boundaries of what's possible with 
            large language models, from enhancing their memory capabilities to building sophisticated 
            agent systems that can autonomously solve complex problems.
          </p>
        </section>

        {/* Research Topics */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Active Research Areas</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {researchTopics.map((topic) => (
              <div 
                key={topic.title}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-500 dark:text-blue-400">
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold">{topic.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {topic.description}
                </p>
                
                <ul className="space-y-2">
                  {topic.areas.map((area) => (
                    <li key={area} className="flex items-start text-sm text-gray-500 dark:text-gray-500">
                      <span className="mr-2 mt-1">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Current Projects */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Current Projects</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-3">Sandstorm</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A vendor-agnostic Sandbox Routing Layer that provides one 5-line SDK (sandstorm.run(code, spec)) 
              that dispatches to E2B, Daytona, Modal, Apple Containers, Morph, your own Kubernetes cluster, 
              or rootless edge agents. Features smart arbitrage engine for optimal backend selection, 
              unified telemetry & billing, and pluggable policies for custom isolation rules.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-sm">Sandbox Routing</span>
              <span className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-sm">Smart Arbitrage</span>
              <span className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-sm">Unified Telemetry</span>
              <span className="px-3 py-1 bg-white dark:bg-gray-900 rounded-full text-sm">Pluggable Policies</span>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Recent Publications</h2>
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400 text-lg">Coming Soon</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}