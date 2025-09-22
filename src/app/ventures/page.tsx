import PageLayout from "@/app/_components/PageLayout";
import { FaChartLine, FaCoins, FaCube, FaDollarSign, FaRocket, FaShield, FaBitcoin, FaEthereum } from "react-icons/fa6";
import { SiBinance } from "react-icons/si";

const ventureHighlights = [
  {
    title: "Fantom (FTM)",
    description: "Initial $30K position scaled to $75K+",
    icon: <FaRocket className="w-6 h-6" />,
    result: "2.5x Return",
    strategy: "L1 Ecosystem Growth",
    color: "text-blue-500"
  },
  {
    title: "KuCoin Chain",
    description: "$100K entry scaled to $3M peak portfolio value",
    icon: <FaCoins className="w-6 h-6" />,
    result: "30x Peak",
    strategy: "Exchange Token Play",
    color: "text-green-500"
  },
  {
    title: "Metis Layer 2",
    description: "$100K position scaled to $3.3M peak",
    icon: <FaCube className="w-6 h-6" />,
    result: "33x Peak",
    strategy: "L2 Infrastructure",
    color: "text-purple-500"
  },
  {
    title: "XRP → NERDZ",
    description: "Early DeFi experiment with significant upside",
    icon: <FaDollarSign className="w-6 h-6" />,
    result: "$8K → $450K Peak",
    strategy: "Frontier DeFi",
    color: "text-orange-500"
  }
];

const portfolioMetrics = [
  {
    label: "Investment Period",
    value: "2020 – Present"
  },
  {
    label: "Peak Portfolio Value",
    value: "~$10M"
  },
  {
    label: "Asset Classes",
    value: "L1/L2, DeFi, NFTs, GPUs & Neo-Cloud"
  },
  {
    label: "Notable Holdings",
    value: "BAYC Mutant, Art Blocks"
  }
];

const currentHoldings = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: <FaBitcoin className="w-5 h-5" />,
    color: "text-orange-500"
  },
  {
    symbol: "ETH",
    name: "Ethereum", 
    icon: <FaEthereum className="w-5 h-5" />,
    color: "text-blue-500"
  },
  {
    symbol: "XRP",
    name: "XRP",
    icon: <FaCoins className="w-5 h-5" />,
    color: "text-blue-600"
  },
  {
    symbol: "BNB",
    name: "BNB",
    icon: <SiBinance className="w-5 h-5" />,
    color: "text-yellow-500"
  },
  {
    symbol: "VIRTUAL",
    name: "Virtuals Protocol",
    icon: <FaCube className="w-5 h-5" />,
    color: "text-purple-500"
  },
  {
    symbol: "HYPE",
    name: "Hyperliquid",
    icon: <FaRocket className="w-5 h-5" />,
    color: "text-green-500"
  },
  {
    symbol: "ASTER",
    name: "Aster",
    icon: <FaCoins className="w-5 h-5" />,
    color: "text-indigo-500"
  },
  {
    symbol: "AVNT",
    name: "Avantis",
    icon: <FaCube className="w-5 h-5" />,
    color: "text-teal-500"
  }
];

const learnings = [
  {
    icon: <FaChartLine className="w-5 h-5" />,
    title: "Market Cycle Management",
    description: "Experienced full venture cycles: entry, scale, exit, reinvestment, and loss management"
  },
  {
    icon: <FaShield className="w-5 h-5" />,
    title: "Risk Framework Development",
    description: "Developed unique insights into risk frameworks for crypto capital allocation, including custody and hack mitigation"
  },
  {
    icon: <FaRocket className="w-5 h-5" />,
    title: "Thesis-Driven Allocation",
    description: "Executed systematic allocations into high-growth L1/L2 ecosystems and emerging DeFi protocols"
  }
];

export default function VenturesPage() {
  return (
    <PageLayout
      title="Ventures"
      description="Self-directed on-chain venture portfolio and capital allocation experience"
    >
      <div className="space-y-16">
        {/* Introduction */}
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Quincy Labs Ventures (2020–Present)</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Founded and operated a personal venture arm under Quincy Labs Ventures, deploying capital into 
              early-stage blockchain ecosystems. This self-directed initiative provided deep hands-on experience 
              with crypto capital allocation, risk management, and market cycle dynamics.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Through thesis-driven allocations into high-growth L1/L2 ecosystems, DeFi protocols, NFTs, and emerging 
              infrastructure like GPUs & Neo-Cloud, managed peak portfolio values approaching $10M across multiple cycles.
            </p>
          </div>
        </section>

        {/* Current Holdings */}
        <section>
          <h2 className="text-2xl font-bold font-lora mb-8">Current Holdings</h2>
          <div className="grid grid-cols-4 gap-4">
            {currentHoldings.map((holding) => (
              <div key={holding.symbol} className="text-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-all">
                <div className={`${holding.color} mx-auto mb-2 flex justify-center`}>
                  {holding.icon}
                </div>
                <div className="text-sm font-bold mb-1">{holding.symbol}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{holding.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Metrics */}
        <section>
          <h2 className="text-2xl font-bold font-lora mb-8">Portfolio Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Investments */}
        <section>
          <h2 className="text-2xl font-bold font-lora mb-8">Notable Historical Investments</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {ventureHighlights.map((investment) => (
              <div
                key={investment.title}
                className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${investment.color}`}>
                    {investment.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-semibold ${investment.color}`}>
                      {investment.result}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      {investment.strategy}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{investment.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {investment.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Approach */}
        <section>
          <h2 className="text-2xl font-bold font-lora mb-8">Investment Methodology</h2>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="font-semibold mb-2">Daily Research</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Conducted daily market research, technical analysis, and sector deep dives into DeFi, NFTs, and L2 infrastructure
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-semibold mb-2">Thesis-Driven</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Executed systematic allocations based on fundamental analysis of ecosystem growth potential and technical merit
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="font-semibold mb-2">Active Management</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reinvested realized gains into frontier ecosystems while maintaining disciplined risk management frameworks
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section>
          <h2 className="text-2xl font-bold font-lora mb-8">Key Insights & Experience</h2>
          <div className="space-y-6">
            {learnings.map((learning) => (
              <div
                key={learning.title}
                className="flex items-start gap-4 p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900"
              >
                <div className="text-blue-500 dark:text-blue-400 mt-1">
                  {learning.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{learning.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {learning.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Management Experience */}
        <section>
          <h2 className="text-2xl font-bold font-lora mb-8">Risk Management & Recovery</h2>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <FaShield className="w-5 h-5 text-red-500" />
              Real-World Crisis Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Experienced significant portfolio drawdowns through custody hacks and market exploits, including:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>KuCoin Community Chain custody hack impacting $3M peak portfolio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Metis Layer 2 March 2022 exploit affecting $3.3M position</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Development of custody risk mitigation strategies and loss recovery frameworks</span>
              </li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              These experiences provided invaluable insights into crypto risk management, custody security, 
              and capital preservation strategies that inform current research and investment frameworks.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}