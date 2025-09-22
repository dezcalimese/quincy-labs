import PageLayout from "@/app/_components/PageLayout";
import { FaMicrochip, FaCoins, FaCube, FaNetworkWired } from "react-icons/fa6";

const researchTopics = [
  {
    title: "Monmouth L2",
    icon: <FaMicrochip className="w-6 h-6" />,
    description: "AI-native Layer 2 blockchain optimized for intelligent contract execution",
    areas: [
      "AI-powered consensus mechanisms",
      "Smart contract optimization",
      "Cross-chain interoperability",
      "Zero-knowledge proofs"
    ]
  },
  {
    title: "Stablecoin Mechanisms",
    icon: <FaCoins className="w-6 h-6" />,
    description: "Novel approaches to algorithmic stability and decentralized monetary policy",
    areas: [
      "Algorithmic stability models",
      "Collateral optimization",
      "Dynamic fee structures",
      "Risk management protocols"
    ]
  },
  {
    title: "Execution Extensions (ExEx)",
    icon: <FaCube className="w-6 h-6" />,
    description: "Building modular execution environments for enhanced blockchain capabilities",
    areas: [
      "Parallel execution frameworks",
      "State transition optimization",
      "Custom execution environments",
      "Performance benchmarking"
    ]
  },
  {
    title: "DeFi Infrastructure",
    icon: <FaNetworkWired className="w-6 h-6" />,
    description: "Core infrastructure for next-generation decentralized financial systems",
    areas: [
      "Automated market makers",
      "Lending protocol design",
      "MEV mitigation strategies",
      "Governance mechanisms"
    ]
  }
];

export default function BlockchainPage() {
  return (
    <PageLayout
      title="Blockchain Research"
      description="Building the infrastructure for decentralized intelligence"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Our blockchain research focuses on creating the foundational infrastructure needed for 
            AI-native chains, advanced DeFi protocols, and scalable execution environments. We're 
            particularly interested in the intersection of artificial intelligence and blockchain technology.
          </p>
        </section>

        {/* Research Topics */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Core Research Areas</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {researchTopics.map((topic) => (
              <div 
                key={topic.title}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-purple-500 dark:text-purple-400">
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

        {/* Featured Project */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Featured: Monmouth L2</h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">The AI-Native Chain</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Monmouth represents our vision for an AI-first blockchain architecture. By integrating 
                  machine learning directly into consensus and execution layers, we're creating a platform 
                  that can adapt and optimize itself in real-time.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Sub-second finality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">AI-optimized gas pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">Native ML inference</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Technical Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500">Consensus</span>
                    <span className="font-mono text-sm">AI-PoS</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500">TPS</span>
                    <span className="font-mono text-sm">10,000+</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500">Block Time</span>
                    <span className="font-mono text-sm">0.5s</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-500">VM</span>
                    <span className="font-mono text-sm">EVM + ML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Open Source Contributions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-2">ElizaOS Cross-Chain Plugin</h4>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Cross-chain transactions plugin for ElizaOS leveraging Lit Protocol's Programmable Key Pairs 
                and threshold cryptography, enabling secure decentralized key management for AI agents
              </p>
            </div>
            {/* <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-2">ExEx Framework</h4>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Modular execution extension toolkit
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-2">DeFi Primitives</h4>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Core building blocks for DeFi protocols
              </p>
            </div> */}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}