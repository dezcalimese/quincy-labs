import ArticleLayout from '../../article-layout';
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

return (<ArticleLayout title={post.title} author={post.author} publishedAt={post.publishedAt} minutes={post.readTime} category="Substack" original={post.link}><SubstackContent html={post.content}/></ArticleLayout>);
}
