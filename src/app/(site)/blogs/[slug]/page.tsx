import { notFound } from 'next/navigation'
import { getBlogBySlug, blogsData } from '@/lib/data/blogs'
import { Metadata } from 'next'
import BlogClient from './BlogClient'

// Dynamically generate SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return { title: 'Post Not Found | Bella Skin' };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.keywords,
  };
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) notFound();

  // Pass the data to our animated client component
  return <BlogClient blog={blog} />
}