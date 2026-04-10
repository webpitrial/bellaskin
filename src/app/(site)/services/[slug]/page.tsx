import { notFound } from 'next/navigation'
import { getServiceBySlug, servicesData } from '@/lib/data/services' 
import ServiceClient from './ServiceClient'

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

// 1. We type params as a Promise, and make the function async
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. We await the params to unpack the data inside it
  const resolvedParams = await params;
  
  // 3. Now we can safely use the slug!
  const service = getServiceBySlug(resolvedParams.slug)

  if (!service) {
    notFound()
  }

  // Filter out the current service, but keep all the rest!
  const otherServices = servicesData.filter(s => s.slug !== resolvedParams.slug);

  return <ServiceClient service={service} otherServices={otherServices} />
}