import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { servicesData } from '@/lib/data/services'

export default function AllServicesPage() {
  return (
    <main className="w-full min-h-screen pt-24 md:pt-28 pb-16">
      <div className="max-w-[82.8rem] mx-auto px-5 sm:px-7">
        
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#141414] mb-4 md:mb-6">Our Services</h1>
          <p className="text-base md:text-lg text-[#141414]/70 max-w-2xl mx-auto font-sans">
            Explore our comprehensive range of clinical and aesthetic dermatology treatments designed to reveal your natural radiance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <Link 
              key={service.id} 
              href={`/services/${service.slug}`} 
              className="group flex flex-col bg-white/80 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#141414]/5"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#E5D9CC]/20">
                <Image 
                  src={service.image || "/images/home/services/s1.webp"} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* REMOVED: group-hover:text-[#CBB79E] */}
                <h3 className="text-2xl font-serif text-[#141414] mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-[#141414]/70 mb-6 font-sans line-clamp-2 flex-grow">{service.shortDescription}</p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#141414] mt-auto">
                  Learn More <Icon icon="mdi:arrow-right" className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </main>
  )
}