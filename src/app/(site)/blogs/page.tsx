'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { blogsData } from '@/lib/data/blogs'

export default function BlogsPage() {
  const featuredPost = blogsData[0];
  const remainingPosts = blogsData.slice(1);

  // ── ANIMATION SETTINGS (Slow, Buttery, On-Scroll) ──
  const fadeUp = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    // Fixed bottom padding to ensure it flows perfectly into the next section/footer
    <main className="w-full min-h-screen pt-28 md:pt-36 pb-16 lg:pb-24 bg-transparent">
      <div className="max-w-[82.8rem] mx-auto px-5 sm:px-7">
        
        {/* ── HEADER ── */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-[#141414] tracking-tight mb-6">Clinical Journal</h1>
          <p className="text-base md:text-lg text-[#141414]/70 max-w-2xl font-sans">
            Expert education, procedural guides, and aesthetic standards directly from the Bella Skin medical team.
          </p>
        </motion.div>

        {/* ── 1. FEATURED ARTICLE ── */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUp} 
          className="mb-20 md:mb-28"
        >
          <Link href={`/blogs/${featuredPost.slug}`} className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Featured Image */}
            <div className="w-full lg:w-[60%] aspect-[16/10] relative rounded-[2rem] overflow-hidden bg-[#E5D9CC]/20 shadow-sm border border-[#141414]/5">
              <Image 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                fill 
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                priority 
              />
            </div>
            
            {/* Featured Text */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-[#141414] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {featuredPost.category}
                </span>
                <span className="text-xs font-semibold text-[#141414]/40 uppercase tracking-widest">{featuredPost.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#141414] leading-[1.15] mb-6 transition-colors duration-500">
                {featuredPost.title}
              </h2>
              <p className="text-base text-[#141414]/70 mb-10 font-sans leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#141414]">
                Read Article <Icon icon="mdi:arrow-right" className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500 text-[#CBB79E]" />
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="w-full h-px bg-[#141414]/10 mb-20 md:mb-28" />

        {/* ── 2. VERTICAL LIST LAYOUT ── */}
        <h3 className="text-3xl font-serif text-[#141414] mb-12">Latest Articles</h3>
        
        {/* Changed from grid to flex-col for a vertical list */}
        <div className="flex flex-col gap-12 md:gap-16">
          {remainingPosts.map((post) => (
            <motion.div 
              key={post.id} 
              initial="hidden" 
              whileInView="visible" 
              // triggers animation only when element is 100px into the viewport
              viewport={{ once: true, margin: "-100px" }} 
              variants={fadeUp}
            >
              <Link href={`/blogs/${post.slug}`} className="group flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                
                {/* List Image: 1/3 width on desktop */}
                <div className="w-full md:w-1/3 aspect-[16/10] md:aspect-[4/3] relative rounded-[1.5rem] overflow-hidden bg-[#E5D9CC]/20 shadow-sm border border-[#141414]/5 shrink-0">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md text-[#141414] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* List Text: 2/3 width on desktop */}
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-[#141414]/40 uppercase tracking-widest mb-4">
                    {post.date} &nbsp;•&nbsp; {post.readTime}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-serif text-[#141414] mb-4 transition-colors duration-500  leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#141414]/70 font-sans leading-relaxed line-clamp-2 md:line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#141414]/70 group-hover:text-[#141414] transition-colors">
                    Read More <Icon icon="mdi:arrow-right" className="transform group-hover:translate-x-1 transition-transform duration-500" />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}