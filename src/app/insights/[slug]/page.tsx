import ArticleLayout from '../article-layout';
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

export const revalidate = 3600;

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
  
return (<ArticleLayout title={post.title} author={post.author?.name||'Quincy Labs'} publishedAt={post.publishedAt} minutes={post.readTime} category={getCategoryDisplayName(post.category)}>{post.featuredImage&&<Image src={urlFor(post.featuredImage).width(1200).url()} alt={post.featuredImage.alt||post.title} width={1200} height={675}/>}<PortableTextRenderer value={post.content||[]}/></ArticleLayout>);
}
