import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  coverImage?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  category: 'Essay' | 'Build Log' | 'Research' | 'Micro-thought'
  tags: string[]
  body: any[]
  readingTime?: number
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    coverImage,
    category,
    tags,
    readingTime
  }`
  
  return await sanityClient.fetch(query)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    coverImage,
    category,
    tags,
    body,
    readingTime
  }`
  
  return await sanityClient.fetch(query, { slug })
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    coverImage,
    category,
    tags,
    readingTime
  }`
  
  return await sanityClient.fetch(query, { category })
}
