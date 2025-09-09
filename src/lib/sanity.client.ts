import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: 'ppd01mkw',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Set up a helper function for generating Image URLs with only the asset reference data in your documents.
const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => {
  return builder.image(source)
}

// Helper to check if we're in preview mode
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

export const getClient = (usePreview = false) =>
  usePreview ? previewClient : sanityClient