import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";
import { FaGithub, FaNpm, FaCode, FaRocket } from "react-icons/fa6";

const dropkits = [
  {
    name: "Agent Wallets",
    description: "Self-custodial cryptocurrency wallets for autonomous AI agents",
    language: "TypeScript",
    stars: "2.3k",
    status: "stable",
    features: [
      "Multi-chain support",
      "Hardware security module integration",
      "Automated transaction signing",
      "Rate limiting & safety checks"
    ],
    links: {
      github: "https://github.com/quincy-labs/agent-wallets",
      npm: "@quincy/agent-wallets"
    }
  },
  {
    name: "RAG Pipeline",
    description: "Production-ready Retrieval-Augmented Generation framework",
    language: "Python",
    stars: "1.8k",
    status: "beta",
    features: [
      "Vector database adapters",
      "Document processing pipeline",
      "Hybrid search strategies",
      "Performance monitoring"
    ],
    links: {
      github: "https://github.com/quincy-labs/rag-pipeline",
      pypi: "quincy-rag"
    }
  },
  {
    name: "ExEx Framework",
    description: "Modular execution extensions for blockchain networks",
    language: "Rust",
    stars: "890",
    status: "alpha",
    features: [
      "Custom execution environments",
      "State transition verification",
      "Performance benchmarking",
      "Plugin architecture"
    ],
    links: {
      github: "https://github.com/quincy-labs/exex-framework",
      crates: "exex"
    }
  },
  {
    name: "ML Contracts",
    description: "Smart contract library for on-chain machine learning",
    language: "Solidity",
    stars: "1.2k",
    status: "stable",
    features: [
      "On-chain inference",
      "Model verification",
      "Federated learning",
      "Gas optimization"
    ],
    links: {
      github: "https://github.com/quincy-labs/ml-contracts",
      npm: "@quincy/ml-contracts"
    }
  },
  {
    name: "Health SDK",
    description: "HIPAA-compliant SDK for healthcare AI applications",
    language: "TypeScript",
    stars: "450",
    status: "beta",
    features: [
      "FHIR integration",
      "Privacy-preserving ML",
      "Clinical decision support",
      "Audit logging"
    ],
    links: {
      github: "https://github.com/quincy-labs/health-sdk",
      npm: "@quincy/health-sdk"
    }
  },
  {
    name: "DeFi Primitives",
    description: "Core building blocks for decentralized finance protocols",
    language: "Solidity",
    stars: "670",
    status: "stable",
    features: [
      "AMM implementations",
      "Lending pools",
      "Yield strategies",
      "Oracle integrations"
    ],
    links: {
      github: "https://github.com/quincy-labs/defi-primitives",
      npm: "@quincy/defi"
    }
  }
];

export default function DropkitsPage() {
  return (
    <PageLayout
      title="Dropkits"
      description="Open-source tools and libraries for the developer community"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Dropkits are production-ready, open-source tools and libraries that emerge from our 
            research. Each kit is designed to solve real problems developers face when building 
            AI and blockchain applications. All our tools are MIT licensed and actively maintained.
          </p>
        </section>

        {/* Stats */}
        <section>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Projects</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">8.5k</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">GitHub Stars</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-500 mb-2">2.1M</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Downloads</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-500 mb-2">450+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Contributors</p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Dropkits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dropkits.map((kit) => (
              <div 
                key={kit.name}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{kit.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                        {kit.language}
                      </span>
                      <span className="text-xs text-gray-500">⭐ {kit.stars}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        kit.status === 'stable' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : kit.status === 'beta'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}>
                        {kit.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {kit.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {kit.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-500 dark:text-gray-500">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <Link
                    href={kit.links.github}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded text-sm hover:opacity-80 transition-opacity"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </Link>
                  {kit.links.npm && (
                    <code className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                      {kit.links.npm}
                    </code>
                  )}
                  {kit.links.pypi && (
                    <code className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                      pip install {kit.links.pypi}
                    </code>
                  )}
                  {kit.links.crates && (
                    <code className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                      cargo add {kit.links.crates}
                    </code>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Demo Apps */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Demo Applications</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Explore our demo applications to see Dropkits in action. Each demo includes 
              full source code and deployment instructions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                <div className="text-2xl mb-2">🤖</div>
                <h4 className="font-semibold mb-1">AI Trading Bot</h4>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                  Autonomous DeFi trading agent using Agent Wallets
                </p>
                <Link 
                  href="https://demo.quincy-labs.com/trading-bot"
                  target="_blank"
                  className="text-sm text-blue-500 hover:underline"
                >
                  View Demo →
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                <div className="text-2xl mb-2">📚</div>
                <h4 className="font-semibold mb-1">Knowledge Assistant</h4>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                  RAG-powered research assistant with citations
                </p>
                <Link 
                  href="https://demo.quincy-labs.com/knowledge"
                  target="_blank"
                  className="text-sm text-blue-500 hover:underline"
                >
                  View Demo →
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                <div className="text-2xl mb-2">🏥</div>
                <h4 className="font-semibold mb-1">Health Checker</h4>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                  Symptom analysis using the Health SDK
                </p>
                <Link 
                  href="https://demo.quincy-labs.com/health"
                  target="_blank"
                  className="text-sm text-blue-500 hover:underline"
                >
                  View Demo →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contributing */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Contributing</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400">
              We welcome contributions from the community! Whether you're fixing bugs, adding features, 
              or improving documentation, your help makes these tools better for everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <FaCode className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <h3 className="font-semibold mb-2">Code</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Submit PRs for bug fixes and new features
              </p>
            </div>
            <div className="text-center">
              <FaGithub className="w-8 h-8 mx-auto mb-3 text-purple-500" />
              <h3 className="font-semibold mb-2">Issues</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Report bugs and request features on GitHub
              </p>
            </div>
            <div className="text-center">
              <FaRocket className="w-8 h-8 mx-auto mb-3 text-green-500" />
              <h3 className="font-semibold mb-2">Deploy</h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Share your projects built with Dropkits
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Start Building Today</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            All Dropkits are free, open-source, and ready to use in your projects. 
            Join thousands of developers building the future of AI and blockchain.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://github.com/quincy-labs"
              target="_blank"
              className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:opacity-80 transition-opacity"
            >
              View on GitHub
            </Link>
            <Link
              href="https://docs.quincy-labs.com"
              target="_blank"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Read the Docs
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}