'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { servicesData } from '@/lib/data/services' 

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1, 
      delayChildren: 0.1
    } 
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-transparent py-16 md:py-24">
      <div className="w-full max-w-[82.8rem] mx-auto px-5 sm:px-7">
        
        {/* --- HEADER --- */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5D9CC] bg-[#E5D9CC]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E]"></span>
              <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#141414]/80">
                Services
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#141414] leading-tight">
              Our treatments
            </h2>
          </div>

          <Link 
            href="/services" 
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#141414]/20 text-[#141414] hover:bg-[#141414] hover:text-[#F7F2EA] transition-all duration-300 text-sm font-medium w-fit"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-90">
              <path d="M12 2C12 2 14.5 7 12 12C9.5 7 12 2 12 2Z" />
              <path d="M12 22C12 22 9.5 17 12 12C14.5 17 12 22 12 22Z" />
              <path d="M2 12C2 12 7 9.5 12 12C7 14.5 2 12 2 12Z" />
              <path d="M22 12C22 12 17 14.5 12 12C17 9.5 22 12 22 12Z" />
            </svg>
            View all treatments
          </Link>
        </motion.div>

        {/* --- SERVICE BLOCKS (3-COLUMN GRID) --- */}
        {/* Changed lg:grid-cols-2 to lg:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              key={service.id}
              className="flex flex-col gap-5 p-6 lg:p-8 border border-[#E5D9CC] rounded-[2rem] bg-[#F7F2EA] transition-colors duration-500 hover:border-[#CBB79E] group"
            >
              
              {/* 1. Featured Image */}
              <motion.div variants={childVariants} className="w-full aspect-[16/10] relative rounded-2xl overflow-hidden bg-[#E5D9CC]/50 shadow-inner">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </motion.div>
              
              {/* 2. Header & Text Content */}
              <motion.div variants={childVariants} className="flex flex-col items-start gap-4 pt-2">
                {/* Slightly smaller icon for the 3-column layout */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-[#E5D9CC] flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-sm">
                  <Icon icon={service.icon} className="text-[#141414] w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  {/* Slightly smaller heading text */}
                  <h3 className="text-xl md:text-2xl font-serif text-[#141414]">
                    {service.title}
                  </h3>
                  <p className="text-[#282828] text-sm leading-relaxed opacity-90">
                    {service.shortDescription}
                  </p>
                </div>
              </motion.div>

              {/* 3. Detail Button */}
              <motion.div variants={childVariants} className="mt-auto pt-4">
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#141414]/10 text-[#141414] hover:bg-[#141414] hover:text-[#F7F2EA] transition-all duration-300 text-xs font-semibold uppercase tracking-wider w-fit shadow-sm"
                >
                  View Detail
                  <Icon icon="ph:arrow-right" className="w-4 h-4" />
                </Link>
              </motion.div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
} 