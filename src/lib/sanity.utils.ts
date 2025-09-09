import { format, formatDistanceToNow, parseISO } from 'date-fns'

/**
 * Format a date string for display
 */
export function formatDate(dateString: string): string {
  const date = parseISO(dateString)
  return format(date, 'MMMM d, yyyy')
}

/**
 * Format a date as relative time (e.g., "2 days ago")
 */
export function formatRelativeDate(dateString: string): string {
  const date = parseISO(dateString)
  return formatDistanceToNow(date, { addSuffix: true })
}

/**
 * Get category display name from slug
 */
export function getCategoryDisplayName(categorySlug: string): string {
  const categoryMap: Record<string, string> = {
    'research-notes': 'Research Notes',
    'macro-markets': 'Macro & Markets',
    'tech-deep-dives': 'Tech Deep Dives',
    'generative-ai': 'Generative AI',
    'blockchain': 'Blockchain',
    'healthcare': 'Healthcare',
  }
  return categoryMap[categorySlug] || categorySlug
}

/**
 * Get status display properties
 */
export function getStatusDisplay(status: string): { color: string; emoji: string } {
  const statusMap: Record<string, { color: string; emoji: string }> = {
    // Research project statuses
    'planning': { color: 'text-purple-500', emoji: '🔵' },
    'active': { color: 'text-green-500', emoji: '🟢' },
    'review': { color: 'text-yellow-500', emoji: '🟡' },
    'completed': { color: 'text-blue-500', emoji: '✅' },
    'on-hold': { color: 'text-red-500', emoji: '🔴' },
    
    // Lab project statuses
    'concept': { color: 'text-purple-500', emoji: '🔮' },
    'development': { color: 'text-yellow-500', emoji: '🔨' },
    'beta': { color: 'text-blue-500', emoji: '🧪' },
    'maintenance': { color: 'text-gray-500', emoji: '🛠️' },
    'deprecated': { color: 'text-red-500', emoji: '⚠️' },
  }
  
  return statusMap[status] || { color: 'text-gray-500', emoji: '❓' }
}

/**
 * Get industry display name and color
 */
export function getIndustryDisplay(industry: string): { name: string; color: string } {
  const industryMap: Record<string, { name: string; color: string }> = {
    'healthcare': { name: 'Healthcare', color: 'text-green-500' },
    'defi': { name: 'DeFi/Blockchain', color: 'text-blue-500' },
    'ai-ml': { name: 'AI/ML', color: 'text-purple-500' },
    'enterprise': { name: 'Enterprise', color: 'text-gray-500' },
    'research': { name: 'Research', color: 'text-orange-500' },
    'open-source': { name: 'Open Source', color: 'text-pink-500' },
  }
  
  return industryMap[industry] || { name: industry, color: 'text-gray-500' }
}

/**
 * Generate SEO metadata from content
 */
export function generateSEOMetadata(content: {
  title: string
  description?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
    noIndex?: boolean
  }
  featuredImage?: any
}) {
  return {
    title: content.seo?.metaTitle || content.title,
    description: content.seo?.metaDescription || content.description,
    keywords: content.seo?.keywords?.join(', '),
    robots: content.seo?.noIndex ? 'noindex' : undefined,
    openGraph: {
      title: content.seo?.metaTitle || content.title,
      description: content.seo?.metaDescription || content.description,
      images: content.featuredImage ? [content.featuredImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.seo?.metaTitle || content.title,
      description: content.seo?.metaDescription || content.description,
      images: content.featuredImage ? [content.featuredImage] : undefined,
    },
  }
}

/**
 * Create a URL slug from text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

/**
 * Truncate text to a specific length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).replace(/\s+\w*$/, '') + '...'
}

/**
 * Get reading time estimate from text
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const wordCount = text.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Check if a URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://')
}

/**
 * Get icon component name from icon string
 */
export function getIconComponent(iconName: string): string {
  const iconMap: Record<string, string> = {
    'microchip': 'FaMicrochip',
    'medical': 'FaNotesMedical',
    'code': 'FaCode',
    'rocket': 'FaRocket',
    'flask': 'FaFlask',
    'bolt': 'FaBolt',
    'shield': 'FaShield',
    'wrench': 'FaWrench',
  }
  
  return iconMap[iconName] || 'FaRocket'
}