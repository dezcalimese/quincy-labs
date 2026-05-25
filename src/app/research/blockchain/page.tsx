import PageLayout from "@/app/_components/PageLayout";
import { FaMicrochip, FaCoins, FaRobot, FaNetworkWired } from "react-icons/fa6";

const researchTopics = [
  {
    title: "Monmouth",
    icon: <FaMicrochip className="w-6 h-6" />,
    description: "Agent-native settlement blockchain built on Commonware (BFT Simplex consensus) with REVM execution",
    areas: [
      "BLS12-381 threshold consensus",
      "Agent transaction classification",
      "Custom AI/cross-chain precompiles",
      "ERC-8004 agent identity registries"
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
    title: "Agent Infrastructure",
    icon: <FaRobot className="w-6 h-6" />,
    description: "On-chain primitives enabling autonomous AI agents to transact safely across blockchain ecosystems",
    areas: [
      "Agent identity and reputation",
      "Capability validation registries",
      "Cross-chain message passing",
      "Intent parsing and routing"
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
      title="Agent Settlement Research"
      description="Blockchain coordination, execution guarantees, and settlement infrastructure for autonomous agents"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Our settlement research focuses on building the coordination and execution layer for 
            autonomous agents — from agent-native blockchains and on-chain identity to cross-chain 
            operations and execution guarantees.
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
                      <span className="mr-2 mt-1">&bull;</span>
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
          <h2 className="text-2xl font-lora mb-6">Featured: Monmouth</h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Settlement Infrastructure for Autonomous Agents</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Monmouth is settlement infrastructure for autonomous AI agents — enabling identity, 
                  coordination, payments, verification, and execution guarantees across blockchain 
                  ecosystems. Built on Commonware with BFT Simplex consensus and REVM v34 execution.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">&check;</span>
                    <span className="text-sm">Agent transaction classifier with confidence scoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">&check;</span>
                    <span className="text-sm">AI inference & vector search precompiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">&check;</span>
                    <span className="text-sm">ERC-8004 identity, reputation & validation registries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">&check;</span>
                    <span className="text-sm">1,362+ Rust tests, 61 Solidity tests</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Technical Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500">Consensus</span>
                    <span className="font-mono text-sm">BFT Simplex (BLS12-381)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500">Block Time</span>
                    <span className="font-mono text-sm">2s</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500">Gas Limit</span>
                    <span className="font-mono text-sm">30M</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500">Hardfork</span>
                    <span className="font-mono text-sm">Prague</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-500">Execution</span>
                    <span className="font-mono text-sm">REVM v34</span>
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
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
