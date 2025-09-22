import PageLayout from "@/app/_components/PageLayout";
import { FaMicrochip, FaRobot, FaShield, FaChartLine } from "react-icons/fa6";

export default function MonmouthPage() {
  return (
    <PageLayout
      title="Monmouth"
      description="The world's first AI-native blockchain infrastructure"
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">AI-Native Layer 2 Blockchain</h2>
            <p className="text-lg opacity-90">
              Monmouth reimagines blockchain architecture from the ground up, integrating artificial 
              intelligence at every layer to create a self-optimizing, intelligent network that adapts 
              to user needs in real-time.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Core Innovations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaRobot className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Consensus Mechanism</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Revolutionary consensus protocol that uses machine learning to predict and prevent 
                network congestion, optimize gas fees, and ensure fair transaction ordering.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Predictive fee optimization</li>
                <li>• Intelligent mempool management</li>
                <li>• Adaptive block sizes</li>
                <li>• MEV mitigation through AI</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaMicrochip className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Native ML Execution</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Execute machine learning models directly on-chain with specialized opcodes and 
                optimized runtime for AI workloads.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• On-chain inference</li>
                <li>• Model verification</li>
                <li>• Federated learning support</li>
                <li>• GPU-accelerated nodes</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaShield className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Security & Privacy</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Advanced cryptographic techniques combined with AI-powered threat detection for 
                unparalleled security.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Zero-knowledge ML proofs</li>
                <li>• Homomorphic encryption</li>
                <li>• AI threat detection</li>
                <li>• Privacy-preserving smart contracts</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaChartLine className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance Metrics</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Industry-leading performance with sub-second finality and massive throughput for 
                enterprise applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• 10,000+ TPS</li>
                <li>• 0.5 second block time</li>
                <li>• 99.99% uptime SLA</li>
                <li>• $0.001 average tx cost</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Technical Architecture</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Layer Stack</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded">
                    <span>Application Layer</span>
                    <span className="text-sm text-gray-500">dApps, Smart Contracts, APIs</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded">
                    <span>AI Execution Layer</span>
                    <span className="text-sm text-gray-500">ML Runtime, Inference Engine</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded">
                    <span>Consensus Layer</span>
                    <span className="text-sm text-gray-500">AI-PoS, Validator Network</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded">
                    <span>Data Layer</span>
                    <span className="text-sm text-gray-500">State Management, Storage</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded">
                    <span>Network Layer</span>
                    <span className="text-sm text-gray-500">P2P, LibP2P, Gossip Protocol</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-semibold mb-2">Autonomous Agents</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Deploy AI agents that can transact, govern, and evolve on-chain
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💹</div>
              <h3 className="font-semibold mb-2">Intelligent DeFi</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Self-optimizing protocols with AI-driven risk management
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-semibold mb-2">AI Gaming</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Dynamic NPCs and procedural content generation on-chain
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Secure, privacy-preserving medical AI applications
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Data Markets</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Decentralized AI training data and model marketplaces
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-semibold mb-2">AI Governance</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                DAOs with intelligent proposal analysis and voting
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        {/* <section>
          <h2 className="text-2xl font-lora mb-6">Development Roadmap</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Q1 2024 - Architecture Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Core protocol design and whitepaper publication
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                ⚡
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Q2 2024 - Testnet Alpha</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Private testnet launch with select partners
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Q3 2024 - Public Testnet</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Open testnet with developer tools and documentation
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Q4 2024 - Mainnet Launch</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Production network deployment with initial dApps
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </PageLayout>
  );
}