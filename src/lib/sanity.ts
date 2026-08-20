import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  category: 'Essay' | 'Build Log' | 'Micro-thought'
  tags: string[]
  body: any[]
  readingTime?: number
}

export interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  longDescription: string
  status: 'live' | 'building'
  tags: string[]
  github?: string
  demo?: string
  featured: boolean
  date: string
}

export interface Product {
  _id: string
  title: string
  slug: { current: string }
  description: string
  longDescription: string
  status: 'live' | 'building'
  tags: string[]
  productUrl?: string
  github?: string
  featured: boolean
  date: string
  price?: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
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
    category,
    tags,
    readingTime
  }`

  return await sanityClient.fetch(query, { category })
}

export async function getAllProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    longDescription,
    status,
    tags,
    github,
    demo,
    featured,
    date
  }`

  return await sanityClient.fetch(query)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    longDescription,
    status,
    tags,
    github,
    demo,
    featured,
    date
  }`

  return await sanityClient.fetch(query, { slug })
}

export async function getAllProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    longDescription,
    status,
    tags,
    productUrl,
    github,
    featured,
    date,
    price
  }`

  return await sanityClient.fetch(query)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    longDescription,
    status,
    tags,
    productUrl,
    github,
    featured,
    date,
    price
  }`

  return await sanityClient.fetch(query, { slug })
}
