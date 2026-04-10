'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

export default function BlogClient({ blog }: { blog: any }) {
  // Slow, luxurious animation settings
  const fadeUp = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  return (
    <main className="w-full pt-24 md:pt-24 pb-10 bg-transparent overflow-hidden">
      
      {/* ── 1. ARTICLE HEADER ── */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer}
        className="max-w-4xl mx-auto px-5 sm:px-7 mb-10 text-center md:text-left"
      >
        <motion.div variants={fadeUp}>
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#141414]/50 hover:text-[#CBB79E] transition-colors mb-8 font-sans">
            <Icon icon="mdi:arrow-left" /> Back to Journal
          </Link>
        </motion.div>
        
        <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-start gap-3 mb-6">
          <span className="px-3 py-1 bg-[#CBB79E]/10 text-[#CBB79E] border border-[#CBB79E]/20 text-[10px] font-bold uppercase tracking-widest rounded-full">
            {blog.category}
          </span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#141414] leading-[1.1] tracking-tight mb-8">
          {blog.title}
        </motion.h1>

        {/* Author / Date / Read Time block */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 text-xs md:text-sm font-sans text-[#141414]/70 md:border-l-2 border-[#CBB79E] md:pl-4">
          <p>By <strong className="text-[#141414]">{blog.author}</strong></p>
          <span className="hidden md:block w-1 h-1 rounded-full bg-[#141414]/20" />
          <p>{blog.date}</p>
          <span className="hidden md:block w-1 h-1 rounded-full bg-[#141414]/20" />
          <p className="font-semibold text-[#CBB79E]">{blog.readTime}</p>
        </motion.div>
      </motion.div>

      {/* ── 2. HERO IMAGE ── */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeUp}
        className="w-full max-w-[82.8rem] mx-auto px-5 sm:px-7 mb-16 md:mb-24"
      >
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-[#E5D9CC]/20 shadow-sm border border-[#141414]/5">
          <Image 
            src={blog.image} 
            alt={blog.title} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>
      </motion.div>

      {/* ── 3. ARTICLE CONTENT ── */}
      <motion.article 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeUp}
        className="max-w-3xl mx-auto px-5 sm:px-7 mb-16"
      >
        <div 
          /* FIXED TYPOGRAPHY CLASSES: 
            Changed hover:[&_a] to [&_a:hover] so only the specific hovered link changes color.
          */
          className="
            font-sans text-[1.05rem] md:text-lg text-[#141414]/80 leading-[1.8] md:leading-[2]
            [&>p]:mb-8 
            [&>h3]:font-serif [&>h3]:text-3xl [&>h3]:text-[#141414] [&>h3]:mt-16 [&>h3]:mb-6
            [&>ul]:mb-12 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-4 [&>ul]:pl-0
            [&>ul>li]:relative [&>ul>li]:pl-6
            [&>ul>li::before]:content-['✦'] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:text-[#CBB79E] [&>ul>li::before]:text-sm [&>ul>li::before]:top-2
            [&_a]:text-[#CBB79E] [&_a:hover]:text-[#141414] [&_a]:transition-colors [&_a]:underline [&_a]:underline-offset-4 [&_a]:font-semibold
          "
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />
        
        {/* Author / Share Footer */}
        <div className="mt-20 pt-10 border-t border-[#141414]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 rounded-full bg-[#E5D9CC]/30 border border-[#CBB79E]/30 flex items-center justify-center text-[#141414] font-serif text-2xl">
               {blog.author.charAt(0)}
             </div>
             <div>
               <p className="text-[#141414] font-bold text-sm">Written by {blog.author}</p>
               <p className="text-[#141414]/60 text-xs mt-1">{blog.readTime} • Bella Skin Medical Team</p>
             </div>
          </div>
          
          <Link href="/contact" className="group flex items-center gap-3 px-8 py-4 bg-[#141414] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#CBB79E] transition-colors duration-500">
            Book a Consultation 
            <Icon icon="mdi:arrow-right" className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.article>

    </main>
  )
}