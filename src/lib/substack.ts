import Parser from 'rss-parser'

interface SubstackFeed {
  url: string
  author: string // display name on the site
}

// Add new team Substack feeds here
const SUBSTACK_FEEDS: SubstackFeed[] = [
  { url: 'https://0xlordgrace.substack.com/feed', author: 'Quincy Labs' },
  { url: 'https://quincylabs.substack.com/feed', author: 'Henry' },
  { url: 'https://diaraylouden.substack.com/feed', author: 'Diamond' },
]

export interface SubstackPost {
  _id: string
  title: string
  slug: string
  link: string
  publishedAt: string
  excerpt: string
  content: string
  author: string
  readTime: number
  source: 'substack'
}

const parser = new Parser()

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
}

function stripSubscribeWidget(html: string): string {
  // Remove Substack's "Thanks for reading" + subscribe form blocks
  // These appear as <p> tags with subscribe CTAs followed by form elements
  return html
    // Remove subscribe form/widget divs
    .replace(/<div[^>]*class="[^"]*subscription-widget[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '')
    // Remove "Thanks for reading" paragraphs that lead into subscribe CTAs
    .replace(/<p[^>]*>Thanks for reading[^<]*Subscribe[^<]*<\/p>/gi, '')
    .replace(/<p[^>]*>Thanks for reading[^<]*!?\s*Subscribe[^<]*<\/p>/gi, '')
    // Remove standalone subscribe input/button combos
    .replace(/<div[^>]*>[\s\S]*?<input[^>]*placeholder="[^"]*email[^"]*"[^>]*>[\s\S]*?<button[^>]*>Subscribe<\/button>[\s\S]*?<\/div>/gi, '')
    // Remove any remaining subscribe buttons with surrounding form elements
    .replace(/<form[^>]*>[\s\S]*?Subscribe[\s\S]*?<\/form>/gi, '')
    // Clean up empty paragraphs left behind
    .replace(/<p[^>]*>\s*<\/p>/g, '')
}

function estimateReadTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '')
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 250))
}

function extractExcerpt(html: string, maxLength = 200): string {
  const cleaned = stripSubscribeWidget(html)
  const text = decodeHtmlEntities(cleaned.replace(/<[^>]*>/g, '')).trim()
  if (text.length <= maxLength) return text
  // Cut at the last complete sentence within the limit
  const truncated = text.slice(0, maxLength)
  const lastSentenceEnd = Math.max(
    truncated.lastIndexOf('. '),
    truncated.lastIndexOf('? '),
    truncated.lastIndexOf('! '),
  )
  if (lastSentenceEnd > 50) {
    return truncated.slice(0, lastSentenceEnd + 1)
  }
  // Fallback: cut at last word boundary
  return truncated.replace(/\s+\S*$/, '') + '...'
}

function slugFromLink(link: string): string {
  const url = new URL(link)
  const parts = url.pathname.split('/').filter(Boolean)
  return parts[parts.length - 1] || ''
}

async function fetchFeed(feed: SubstackFeed): Promise<SubstackPost[]> {
  try {
    const parsed = await parser.parseURL(feed.url)

    return (parsed.items || []).map((item) => {
      const rawContent = item['content:encoded'] || item.content || ''
      const content = stripSubscribeWidget(rawContent)
      return {
        _id: `substack-${slugFromLink(item.link || '')}`,
        title: item.title || 'Untitled',
        slug: slugFromLink(item.link || ''),
        link: item.link || '',
        publishedAt: item.isoDate || item.pubDate || new Date().toISOString(),
        excerpt: extractExcerpt(rawContent),
        content,
        author: feed.author,
        readTime: estimateReadTime(content),
        source: 'substack' as const,
      }
    })
  } catch (error) {
    console.error(`Error fetching Substack feed (${feed.url}):`, error)
    return []
  }
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  const results = await Promise.all(SUBSTACK_FEEDS.map(fetchFeed))
  const allPosts = results.flat()

  // Sort all posts by date, newest first
  allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return allPosts
}

export async function getSubstackPost(slug: string): Promise<SubstackPost | null> {
  const posts = await getSubstackPosts()
  return posts.find((p) => p.slug === slug) || null
}
