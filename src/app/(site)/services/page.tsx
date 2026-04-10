'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { servicesData } from '@/lib/data/services'

export default function AllServicesPage() {
  // ── ANIMATION VARIANTS (SLOWED DOWN) ──
  const fadeUp = {
    // Increased 'y' slightly so it travels further over the longer duration
    hidden: { opacity: 0, y: 40 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      // Increased duration from 0.8s to 1.2s for a much softer, elegant reveal
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Increased from 0.15s to 0.3s. This creates a distinct, elegant pause before the next card animates.
        staggerChildren: 0.3,
      }
    }
  };

  return (
    <main className="w-full min-h-screen pt-24 md:pt-28 pb-20 md:pb-24 bg-transparent">
      <div className="max-w-[82.8rem] mx-auto px-5 sm:px-7">
        
        {/* ── HEADER SECTION ── */}
        <motion.div 
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5D9CC] bg-[#E5D9CC]/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#141414]/80 font-sans">
                Aesthetic Excellence
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={fadeUp} 
            className="text-5xl md:text-6xl lg:text-[5rem] font-serif text-[#141414] leading-[1.05] tracking-tight mb-6"
          >
            Our Services
          </motion.h1>
          
          <motion.p 
            variants={fadeUp} 
            className="text-base md:text-lg text-[#141414]/70 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Explore our comprehensive range of clinical and aesthetic dermatology treatments designed to reveal your natural, effortless radiance.
          </motion.p>
        </motion.div>

        {/* ── SERVICES GRID ── */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={fadeUp} className="flex h-full">
              <Link 
                href={`/services/${service.slug}`} 
                className="group flex flex-col w-full bg-white/60 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 border border-[#141414]/5 hover:border-[#E5D9CC]/60"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#E5D9CC]/20">
                  <Image 
                    src={service.image || "/images/home/services/s1.webp"} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  {/* Subtle overlay to soften the image slightly */}
                  <div className="absolute inset-0 bg-[#141414]/5 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
                </div>

                {/* Text Content Container */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-[#141414] mb-4 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-[#141414]/70 mb-8 font-sans leading-relaxed line-clamp-3 flex-grow">
                    {service.shortDescription}
                  </p>
                  
                  <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#141414] mt-auto">
                    <span className="relative overflow-hidden flex items-center gap-2">
                      Discover Treatment
                      <Icon 
                        icon="mdi:arrow-right" 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500 text-[#CBB79E]" 
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </main>
  )
}