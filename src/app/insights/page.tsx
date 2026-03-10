import { sanityClient } from '@/lib/sanity.client'
import { postsQuery } from '@/lib/sanity.queries'
import { BlogPostPreview } from '@/lib/sanity.types'
import { formatDate, getCategoryDisplayName } from '@/lib/sanity.utils'
import { getSubstackPosts, SubstackPost } from '@/lib/substack'
import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";
import { FaPenNib, FaChartLine, FaCode, FaArrowRight } from "react-icons/fa6";

export const revalidate = 3600 // revalidate Substack feed every hour

const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000
function isNewPost(publishedAt: string): boolean {
  return Date.now() - new Date(publishedAt).getTime() < THREE_DAYS_MS
}

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

type UnifiedPost = {
  _id: string
  title: string
  href: string
  publishedAt: string
  readTime: number
  excerpt: string
  author: string
  category: string
  source: 'sanity' | 'substack'
}

function unifyPosts(sanityPosts: BlogPostPreview[], substackPosts: SubstackPost[]): UnifiedPost[] {
  const fromSanity: UnifiedPost[] = sanityPosts.map((p) => ({
    _id: p._id,
    title: p.title,
    href: `/insights/${p.slug.current}`,
    publishedAt: p.publishedAt,
    readTime: p.readTime,
    excerpt: p.excerpt,
    author: p.author?.name || 'Quincy Labs',
    category: getCategoryDisplayName(p.category),
    source: 'sanity' as const,
  }))

  const fromSubstack: UnifiedPost[] = substackPosts.map((p) => ({
    _id: p._id,
    title: p.title,
    href: `/insights/substack/${p.slug}`,
    publishedAt: p.publishedAt,
    readTime: p.readTime,
    excerpt: p.excerpt,
    author: p.author,
    category: 'Substack',
    source: 'substack' as const,
  }))

  return [...fromSanity, ...fromSubstack].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

async function getRecentPosts() {
  try {
    return await sanityClient.fetch<BlogPostPreview[]>(postsQuery)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function InsightsPage() {
  const [sanityPosts, substackPosts] = await Promise.all([
    getRecentPosts(),
    getSubstackPosts(),
  ])

  const allPosts = unifyPosts(sanityPosts, substackPosts)

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
          <h2 className="text-2xl font-bold font-lora mb-6">Recent Posts</h2>
          {allPosts.length > 0 ? (
            <div className="space-y-6">
              {allPosts.map((post) => (
                <article
                  key={post._id}
                  className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-0"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className={`font-medium ${post.source === 'substack' ? 'text-orange-500' : ''}`}>
                        {post.category}
                      </span>
                      {isNewPost(post.publishedAt) && (
                        <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-500 rounded-full">
                          New
                        </span>
                      )}
                      <span>•</span>
                      <time>{formatDate(post.publishedAt)}</time>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  <Link href={post.href}>
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-500 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-2 text-blue-500 hover:underline text-sm"
                    >
                      Read more <FaArrowRight className="w-3 h-3" />
                    </Link>
                    <div className="text-sm text-gray-500">
                      by {post.author}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No posts available yet.</p>
              <p className="text-sm text-gray-400">
                Check back soon for our latest insights on AI, blockchain, and technology.
              </p>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold font-lora mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get our latest research insights and technical deep dives delivered to your inbox.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://0xlordgrace.substack.com/"
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
