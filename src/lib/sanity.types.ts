import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface SanityImage extends Image {
  alt?: string
  caption?: string
}

export interface SocialLinks {
  linkedin?: string
  twitter?: string
  github?: string
  website?: string
  email?: string
}

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  openGraphImage?: SanityImage
  canonicalUrl?: string
  noIndex?: boolean
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  bio: string
  profileImage?: SanityImage
  expertise?: string[]
  socialLinks?: SocialLinks
  isLeadership: boolean
  order?: number
  gradientColors?: {
    from: string
    to: string
  }
  achievements?: Array<{
    achievement: string
  }>
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  category: 'research-notes' | 'macro-markets' | 'tech-deep-dives'
  author: TeamMember
  excerpt: string
  content?: PortableTextBlock[]
  readTime: number
  tags?: string[]
  featuredImage?: SanityImage
  featured: boolean
  seo?: SEO
}

export interface ResearchProject {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: 'generative-ai' | 'blockchain' | 'healthcare'
  description: string
  detailedContent?: PortableTextBlock[]
  status: 'planning' | 'active' | 'review' | 'completed' | 'on-hold'
  startDate?: string
  endDate?: string
  keyFindings?: Array<{
    finding: string
    impact?: 'high' | 'medium' | 'low'
  }>
  technologies?: string[]
  collaborators?: TeamMember[]
  relatedPosts?: BlogPost[]
  publications?: Array<{
    title: string
    url?: string
    venue?: string
    date?: string
  }>
  featuredImage?: SanityImage
  seo?: SEO
}

export interface LabProject {
  _id: string
  title: string
  subtitle: string
  slug: {
    current: string
  }
  description: string
  fullDescription?: PortableTextBlock[]
  icon: string
  status: 'concept' | 'development' | 'beta' | 'active' | 'maintenance' | 'deprecated'
  statusColor: string
  features: string[]
  technologies?: string[]
  team?: TeamMember[]
  githubUrl?: string
  demoUrl?: string
  documentationUrl?: string
  websiteUrl?: string
  launchDate?: string
  metrics?: Array<{
    label: string
    value: string
    description?: string
  }>
  featuredImage?: SanityImage
  gallery?: SanityImage[]
  relatedResearch?: ResearchProject[]
  relatedPosts?: BlogPost[]
  priority: number
  seo?: SEO
}

export interface CaseStudy {
  _id: string
  title: string
  slug: {
    current: string
  }
  client: string
  industry: 'healthcare' | 'defi' | 'ai-ml' | 'enterprise' | 'research' | 'open-source'
  duration?: string
  teamSize?: number
  challenge: PortableTextBlock[]
  solution: PortableTextBlock[]
  results: PortableTextBlock[]
  metrics?: Array<{
    metric: string
    value: string
    description?: string
  }>
  technologies?: string[]
  team?: TeamMember[]
  testimonial?: {
    quote: string
    author: string
    role: string
    company?: string
  }
  featuredImage?: SanityImage
  gallery?: SanityImage[]
  relatedProjects?: LabProject[]
  publishedAt: string
  featured: boolean
  seo?: SEO
}

export interface SiteSettings {
  siteTitle: string
  siteDescription: string
  socialLinks: SocialLinks
  contactEmail: string
}

// Utility types for API responses
export type BlogPostPreview = Pick<BlogPost, '_id' | 'title' | 'slug' | 'publishedAt' | 'category' | 'excerpt' | 'readTime' | 'featuredImage' | 'featured' | 'author' | 'tags'>

export type ResearchProjectPreview = Pick<ResearchProject, '_id' | 'title' | 'slug' | 'category' | 'description' | 'status' | 'startDate' | 'endDate' | 'keyFindings' | 'technologies' | 'featuredImage'>

export type LabProjectPreview = Pick<LabProject, '_id' | 'title' | 'subtitle' | 'slug' | 'description' | 'icon' | 'status' | 'statusColor' | 'features' | 'technologies' | 'featuredImage' | 'metrics' | 'priority'>

export type CaseStudyPreview = Pick<CaseStudy, '_id' | 'title' | 'slug' | 'client' | 'industry' | 'duration' | 'metrics' | 'featuredImage' | 'featured' | 'publishedAt'>

export type SearchResult = {
  _type: 'blogPost' | 'researchProject' | 'labProject' | 'caseStudy'
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  category?: string
  publishedAt?: string
  featuredImage?: SanityImage
}