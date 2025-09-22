import PageLayout from "@/app/_components/PageLayout";
import { FaCloud, FaNetworkWired, FaShield, FaDollarSign, FaCube, FaCode, FaGithub, FaRocket } from "react-icons/fa6";
import Link from "next/link";

const coreFeatures = [
  {
    icon: <FaNetworkWired className="w-8 h-8" />,
    title: "Multi-Provider Orchestration",
    description: "Route AI workloads to E2B, Modal, Daytona, Apple Containers, or your own K8s—automatically picking the fastest and cheapest option.",
    features: [
      "Adapters for all major sandbox providers",
      "Automatic failover and retry logic",
      "Provider health monitoring",
      "Circuit breaking for reliability"
    ],
    color: "text-blue-500"
  },
  {
    icon: <FaDollarSign className="w-8 h-8" />,
    title: "Smart Cost Optimization",
    description: "Real-time arbitrage engine that analyzes pricing, performance, and availability across providers to minimize costs.",
    features: [
      "Real-time price comparison",
      "Spot capacity marketplace",
      "Predictive routing algorithms",
      "Cost analytics and reporting"
    ],
    color: "text-green-500"
  },
  {
    icon: <FaShield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Built-in security features and compliance tools for production AI workloads.",
    features: [
      "End-to-end encryption",
      "VPC isolation support",
      "SOC-2 compliant audit trails",
      "On-chain memory snapshots"
    ],
    color: "text-purple-500"
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Developer Experience",
    description: "Simple 5-line SDK that abstracts away provider complexity while maintaining full control.",
    features: [
      "Unified API across providers",
      "Streaming logs <100ms",
      "VS Code and JetBrains extensions",
      "Multi-language SDK support"
    ],
    color: "text-orange-500"
  }
];

const supportedProviders = [
  { name: "E2B", description: "Code Interpreter", status: "Live" },
  { name: "Modal", description: "Serverless Infrastructure", status: "Live" },
  { name: "Daytona", description: "Fast Workspaces", status: "Live" },
  { name: "Apple Containers", description: "Native Containerization", status: "Live" },
  { name: "Kubernetes", description: "Self-Hosted Clusters", status: "Live" },
  { name: "Morph", description: "Edge Computing", status: "Beta" }
];

const businessModel = [
  {
    tier: "Usage Fee",
    description: "5% margin on pass-through compute plus $0.001 per snapshot GB-hour",
    target: "Individual developers and small teams"
  },
  {
    tier: "Enterprise",
    description: "VPC-isolated router + SSO + custom pricing (starts $3k/mo)",
    target: "Large organizations with compliance needs"
  },
  {
    tier: "Marketplace",
    description: "2% cut on third-party capacity sold through Sandstorm",
    target: "Infrastructure providers"
  }
];

export default function SandstormPage() {
  return (
    <PageLayout
      title="Sandstorm"
      description="Vendor-agnostic sandbox routing layer for AI workloads"
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">One API to Rule Them All</h2>
            <p className="text-lg opacity-90 mb-6">
              Route AI workloads to E2B, Modal, Daytona, or your own K8s—automatically picking
              the fastest and cheapest option. Sandstorm is a vendor-agnostic Sandbox Routing
              Layer that provides unified access to all major compute providers.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-400 mb-2">{`// One SDK to rule them all`}</div>
              <div className="text-green-400">const result = await sandstorm.run(&#123;</div>
              <div className="text-blue-300 ml-4">code: `import numpy as np; print(np.random.rand(5))`,</div>
              <div className="text-blue-300 ml-4">language: 'python',</div>
              <div className="text-blue-300 ml-4">constraints: &#123; maxCost: 0.10, maxLatency: 5000 &#125;</div>
              <div className="text-green-400">&#125;);</div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">The Problem</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              AI teams juggle 4-5 sandbox clouds—E2B for quick REPLs, Modal for heavy jobs,
              Daytona for poly-lang editing, plus their own K8s when credits run dry.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Different SDKs for each provider</li>
              <li>• Manual cost optimization</li>
              <li>• Fragmented observability</li>
              <li>• Quota limit management</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">The Solution</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Sandstorm provides a single API that automatically routes to the optimal provider
              based on cost, performance, and availability constraints.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• One 5-line SDK for all providers</li>
              <li>• Smart arbitrage engine</li>
              <li>• Unified telemetry & billing</li>
              <li>• Automatic retry on failures</li>
            </ul>
          </div>
        </section>

        {/* Core Features */}
        <section>
          <h2 className="text-2xl font-lora mb-8">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <div className={`${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  {feature.features.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-lora mb-8">Architecture Overview</h2>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-4">Sandstorm Gateway</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <FaNetworkWired className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="font-semibold">Smart Routing</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <FaDollarSign className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="font-semibold">Cost Optimization</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <FaCube className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <div className="font-semibold">Unified Telemetry</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {supportedProviders.map((provider) => (
                <div key={provider.name} className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center">
                  <div className="font-bold text-lg">{provider.name}</div>
                  <div className="text-sm text-gray-500 mb-2">{provider.description}</div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    provider.status === 'Live'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  }`}>
                    {provider.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section>
          <h2 className="text-2xl font-lora mb-8">Business Model</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {businessModel.map((model) => (
              <div key={model.tier} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">{model.tier}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {model.description}
                </p>
                <p className="text-sm text-gray-500">
                  {model.target}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <h2 className="text-2xl font-lora mb-8">Development Roadmap</h2>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-green-600 dark:text-green-400">✅ Completed</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Core routing engine</li>
                  <li>• Rootless edge agent with Podman</li>
                  <li>• SDK with edge mode integration</li>
                  <li>• E2B, Modal, Daytona, Apple adapters</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-blue-600 dark:text-blue-400">🚧 In Progress</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Cost optimization algorithm</li>
                  <li>• Snapshot vault with on-chain anchoring</li>
                  <li>• Enterprise security features</li>
                  <li>• Provider marketplace</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold font-lora mb-4">Join the Future of AI Compute</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Sandstorm is building the Cloudflare of AI compute—a global edge network that routes
            every agent's code, memory, and data to the optimal execution substrate.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://github.com/zetsuchan/Sandstorm-Monorepo"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:opacity-80 transition-opacity"
            >
              <FaGithub className="w-5 h-5" />
              View on GitHub
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Get Early Access
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}