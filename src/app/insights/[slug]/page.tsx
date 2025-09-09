import { sanityClient } from '@/lib/sanity.client'
import { postQuery, postsQuery } from '@/lib/sanity.queries'
import { BlogPost } from '@/lib/sanity.types'
import { formatDate, getCategoryDisplayName } from '@/lib/sanity.utils'
import PageLayout from '@/app/_components/PageLayout'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaCalendar, FaClock, FaTag, FaArrowLeft } from 'react-icons/fa6'

interface Props {
  params: Promise<{
    slug: string
  }>
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await sanityClient.fetch<BlogPost[]>(`
    *[_type == "blogPost"] {
      slug
    }
  `)
  
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await sanityClient.fetch<BlogPost>(postQuery, { slug })
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords?.join(', '),
    robots: post.seo?.noIndex ? 'noindex' : undefined,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.featuredImage ? [urlFor(post.featuredImage).url()] : undefined,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.featuredImage ? [urlFor(post.featuredImage).url()] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await sanityClient.fetch<BlogPost>(postQuery, { slug })
  
  if (!post) {
    notFound()
  }
  
  return (
    <PageLayout 
      title={post.title}
      description={post.excerpt}
    >
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

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <Image
              src={urlFor(post.featuredImage).width(800).height(400).url()}
              alt={post.featuredImage.alt || post.title}
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
              {getCategoryDisplayName(post.category)}
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

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{post.excerpt}</p>

          {/* Author Info */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            {post.author.profileImage && (
              <Image
                src={urlFor(post.author.profileImage).width(60).height(60).url()}
                alt={post.author.name}
                width={60}
                height={60}
                className="rounded-full"
              />
            )}
            <div>
              <div className="font-semibold">{post.author.name}</div>
              <div className="text-sm text-gray-500">{post.author.role}</div>
              {post.author.socialLinks && (
                <div className="flex gap-2 mt-1">
                  {post.author.socialLinks.linkedin && (
                    <Link 
                      href={post.author.socialLinks.linkedin}
                      target="_blank"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      LinkedIn
                    </Link>
                  )}
                  {post.author.socialLinks.twitter && (
                    <Link 
                      href={post.author.socialLinks.twitter}
                      target="_blank"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Twitter
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          {post.content && <PortableTextRenderer value={post.content} />}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <FaTag className="w-4 h-4" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Enjoyed this post?</h3>
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
      </article>
    </PageLayout>
  )
}