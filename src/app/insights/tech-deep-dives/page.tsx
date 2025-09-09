import { sanityClient } from '@/lib/sanity.client'
import { BlogPostPreview } from '@/lib/sanity.types'
import { formatDate } from '@/lib/sanity.utils'
import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";
import { FaArrowRight, FaCalendar, FaClock, FaArrowLeft } from "react-icons/fa6";

async function getTechDeepDivesPosts() {
  try {
    const query = `
      *[_type == "blogPost" && category == "tech-deep-dives"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        category,
        excerpt,
        readTime,
        featuredImage,
        author->{
          name,
          role
        }
      }
    `
    return await sanityClient.fetch<BlogPostPreview[]>(query)
  } catch (error) {
    console.error('Error fetching tech deep dives posts:', error)
    return []
  }
}

export default async function TechDeepDivesPage() {
  const posts = await getTechDeepDivesPosts()

  return (
    <PageLayout
      title="Tech Deep Dives"
      description="Technical tutorials and implementation guides"
    >
      <div className="space-y-8">
        {/* Back to insights */}
        <div className="mb-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-blue-500 hover:underline"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to All Insights
          </Link>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Our technical deep dives provide comprehensive tutorials, code examples, and implementation 
            guides for building with cutting-edge AI and blockchain technologies. From architecture 
            patterns to optimization techniques, we share practical knowledge from our engineering teams.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <article 
                key={post._id}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="w-4 h-4" />
                    <time>{formatDate(post.publishedAt)}</time>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FaClock className="w-4 h-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                  {post.author && (
                    <>
                      <span>•</span>
                      <span>by {post.author.name}</span>
                    </>
                  )}
                </div>
                
                <Link href={`/insights/${post.slug.current}`}>
                  <h2 className="text-2xl font-bold mb-3 hover:text-blue-500 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/insights/${post.slug.current}`}
                  className="inline-flex items-center gap-2 text-blue-500 hover:underline font-medium"
                >
                  Read full article <FaArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No tech deep dives available yet. Our technical articles will be published here and on our external platforms.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://quincylabs.substack.com/"
                target="_blank"
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded transition-colors"
              >
                Read on Substack
              </Link>
              <Link
                href="https://mirror.xyz/quincy-labs"
                target="_blank"
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Read on Mirror
              </Link>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}