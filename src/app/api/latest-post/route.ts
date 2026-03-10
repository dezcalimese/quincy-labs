import { NextResponse } from 'next/server'
import { getSubstackPosts } from '@/lib/substack'
import { sanityClient } from '@/lib/sanity.client'
import { postsQuery } from '@/lib/sanity.queries'
import { BlogPostPreview } from '@/lib/sanity.types'

export const revalidate = 3600

const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000

export async function GET() {
  const [sanityPosts, substackPosts] = await Promise.all([
    sanityClient.fetch<BlogPostPreview[]>(postsQuery).catch(() => []),
    getSubstackPosts(),
  ])

  const allPosts = [
    ...sanityPosts.map((p) => ({
      title: p.title,
      href: `/insights/${p.slug.current}`,
      publishedAt: p.publishedAt,
    })),
    ...substackPosts.map((p) => ({
      title: p.title,
      href: `/insights/substack/${p.slug}`,
      publishedAt: p.publishedAt,
    })),
  ].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  const latest = allPosts[0]

  if (!latest) {
    return NextResponse.json({ hasNew: false })
  }

  const isNew = Date.now() - new Date(latest.publishedAt).getTime() < THREE_DAYS_MS

  return NextResponse.json({
    hasNew: isNew,
    title: latest.title,
    href: latest.href,
    publishedAt: latest.publishedAt,
  })
}
