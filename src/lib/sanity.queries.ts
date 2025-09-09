import { groq } from 'next-sanity'

// Blog Posts
export const postsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    readTime,
    featuredImage,
    featured,
    author->{
      name,
      role
    },
    tags
  }
`

export const postQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    content,
    readTime,
    featuredImage,
    featured,
    author->{
      name,
      role,
      profileImage,
      socialLinks
    },
    tags,
    seo
  }
`

export const featuredPostsQuery = groq`
  *[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
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

// Team Members
export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    profileImage,
    expertise,
    socialLinks,
    isLeadership,
    order,
    gradientColors,
    achievements
  }
`

export const leadershipTeamQuery = groq`
  *[_type == "teamMember" && isLeadership == true] | order(order asc) {
    _id,
    name,
    role,
    bio,
    profileImage,
    expertise,
    socialLinks,
    gradientColors,
    achievements
  }
`

// Research Projects
export const researchProjectsQuery = groq`
  *[_type == "researchProject"] | order(startDate desc) {
    _id,
    title,
    slug,
    category,
    description,
    status,
    startDate,
    endDate,
    keyFindings,
    technologies,
    featuredImage,
    collaborators[]->{
      name,
      role
    }
  }
`

export const researchProjectQuery = groq`
  *[_type == "researchProject" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    description,
    detailedContent,
    status,
    startDate,
    endDate,
    keyFindings,
    technologies,
    featuredImage,
    collaborators[]->{
      name,
      role,
      profileImage,
      socialLinks
    },
    relatedPosts[]->{
      title,
      slug,
      category,
      excerpt
    },
    publications,
    seo
  }
`

export const researchProjectsByCategoryQuery = groq`
  *[_type == "researchProject" && category == $category] | order(startDate desc) {
    _id,
    title,
    slug,
    category,
    description,
    status,
    startDate,
    endDate,
    keyFindings,
    technologies,
    featuredImage
  }
`

// Lab Projects
export const labProjectsQuery = groq`
  *[_type == "labProject"] | order(priority desc) {
    _id,
    title,
    subtitle,
    slug,
    description,
    icon,
    status,
    statusColor,
    features,
    technologies,
    featuredImage,
    metrics,
    priority
  }
`

export const labProjectQuery = groq`
  *[_type == "labProject" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    slug,
    description,
    fullDescription,
    icon,
    status,
    statusColor,
    features,
    technologies,
    team[]->{
      name,
      role,
      profileImage
    },
    githubUrl,
    demoUrl,
    documentationUrl,
    websiteUrl,
    launchDate,
    metrics,
    featuredImage,
    gallery,
    relatedResearch[]->{
      title,
      slug,
      category,
      description
    },
    relatedPosts[]->{
      title,
      slug,
      category,
      excerpt
    },
    seo
  }
`

// Case Studies
export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    industry,
    duration,
    challenge,
    results,
    metrics,
    technologies,
    featuredImage,
    featured,
    publishedAt
  }
`

export const featuredCaseStudiesQuery = groq`
  *[_type == "caseStudy" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    client,
    industry,
    metrics,
    featuredImage
  }
`

export const caseStudyQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    industry,
    duration,
    teamSize,
    challenge,
    solution,
    results,
    metrics,
    technologies,
    team[]->{
      name,
      role,
      profileImage
    },
    testimonial,
    featuredImage,
    gallery,
    relatedProjects[]->{
      title,
      slug,
      subtitle,
      description
    },
    publishedAt,
    seo
  }
`

// Site-wide queries
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    socialLinks,
    contactEmail
  }
`

// Search query
export const searchQuery = groq`
  *[_type in ["blogPost", "researchProject", "labProject", "caseStudy"] && 
    (title match $searchTerm + "*" || 
     excerpt match $searchTerm + "*" || 
     description match $searchTerm + "*")] {
    _type,
    _id,
    title,
    slug,
    "excerpt": coalesce(excerpt, description),
    category,
    publishedAt,
    featuredImage
  } | order(publishedAt desc)
`