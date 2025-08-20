import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";
import { FaPenNib, FaChartLine, FaCode, FaArrowRight } from "react-icons/fa6";

const categories = [
  {
    title: "Research Notes",
    description: "Deep dives into our ongoing research projects and findings",
    icon: <FaPenNib className="w-6 h-6" />,
    href: "/insights/research-notes",
    color: "text-blue-500"
  },
  {
    title: "Macro & Markets",
    description: "Analysis of market trends and macroeconomic factors",
    icon: <FaChartLine className="w-6 h-6" />,
    href: "/insights/macro-markets",
    color: "text-green-500"
  },
  {
    title: "Tech Deep Dives",
    description: "Technical tutorials and implementation guides",
    icon: <FaCode className="w-6 h-6" />,
    href: "/insights/tech-deep-dives",
    color: "text-purple-500"
  }
];

const recentPosts = [
  {
    title: "Memory Engineering for Large Language Models",
    category: "Research Notes",
    date: "March 15, 2024",
    excerpt: "Exploring novel approaches to extend LLM context windows through hierarchical memory structures and attention mechanisms.",
    readTime: "12 min read"
  },
  {
    title: "The AI-Native Blockchain Thesis",
    category: "Macro & Markets",
    date: "March 10, 2024",
    excerpt: "Why the next generation of blockchains will have artificial intelligence built into their core architecture.",
    readTime: "8 min read"
  },
  {
    title: "Building Agent Wallets: A Technical Guide",
    category: "Tech Deep Dives",
    date: "March 5, 2024",
    excerpt: "Step-by-step implementation of self-custodial wallets for autonomous AI agents with practical code examples.",
    readTime: "15 min read"
  },
  {
    title: "Sickle Cell Crisis Prediction Using ML",
    category: "Research Notes",
    date: "February 28, 2024",
    excerpt: "How we achieved 72-hour advance warning for vaso-occlusive crises using multimodal patient data.",
    readTime: "10 min read"
  },
  {
    title: "DeFi's Next Evolution: Intelligent Protocols",
    category: "Macro & Markets",
    date: "February 20, 2024",
    excerpt: "The convergence of DeFi and AI will create self-optimizing financial protocols that adapt to market conditions.",
    readTime: "6 min read"
  }
];

export default function InsightsPage() {
  return (
    <PageLayout
      title="Insights"
      description="Thoughts on AI, blockchain, and the future of technology"
    >
      <div className="space-y-12">
        {/* Categories */}
        <section>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className={`${category.color} mb-3`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <article 
                key={index}
                className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-0"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="font-medium">{post.category}</span>
                    <span>•</span>
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-500 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {post.excerpt}
                </p>
                <Link 
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-500 hover:underline text-sm"
                >
                  Read more <FaArrowRight className="w-3 h-3" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get our latest research insights and technical deep dives delivered to your inbox.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://quincylabs.substack.com/"
                target="_blank"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Subscribe on Substack
              </Link>
              <Link
                href="https://mirror.xyz/quincy-labs"
                target="_blank"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Read on Mirror
              </Link>
            </div>
          </div>
        </section>

        {/* Archive Link */}
        <section className="text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-blue-500 hover:underline"
          >
            View all posts <FaArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </PageLayout>
  );
}