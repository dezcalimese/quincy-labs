import { getSubstackPost, getSubstackPosts } from '@/lib/substack'
import { formatDate } from '@/lib/sanity.utils'
import PageLayout from '@/app/_components/PageLayout'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaCalendar, FaClock, FaArrowLeft, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import SubstackContent from '@/components/SubstackContent'

export const revalidate = 3600 // revalidate every hour

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getSubstackPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await getSubstackPost(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

export default async function SubstackPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getSubstackPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <PageLayout title={post.title} description={post.excerpt}>
      <article className="max-w-4xl mx-auto">
        {/* Back to insights */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-blue-500 hover:underline"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full">
              Substack
            </span>
            <div className="flex items-center gap-1">
              <FaCalendar className="w-4 h-4" />
              <time>{formatDate(post.publishedAt)}</time>
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-lora mb-4">{post.title}</h1>

          {/* Author + Original Link */}
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div>
              <div className="font-semibold">{post.author}</div>
              <div className="text-sm text-gray-500">via Substack</div>
            </div>
            <Link
              href={post.link}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-blue-500 hover:underline"
            >
              View original <FaArrowUpRightFromSquare className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* Article Content - rendered from RSS HTML */}
        <SubstackContent html={post.content} />

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Enjoyed this post?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Get our latest research insights and technical deep dives delivered
            to your inbox.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://0xlordgrace.substack.com/"
              target="_blank"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Subscribe on Substack
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  )
}
