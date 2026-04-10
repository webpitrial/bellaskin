import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react'

const NotFound = () => {
  return (
    <section className="w-full min-h-[85vh] flex items-center justify-center pt-24 pb-20 px-5 sm:px-7 bg-transparent overflow-hidden">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6 md:gap-8 relative">
        
        {/* Subtle Background Glow/Blob Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E5D9CC]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Small Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5D9CC] bg-white/50 backdrop-blur-sm shadow-sm mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E]"></span>
          <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#141414]/80 font-sans">
            Error 404
          </span>
        </div>

        {/* Huge Editorial 404 Number */}
        <h1 className="text-[7rem] md:text-[10rem] lg:text-[12rem] leading-none font-sans pb-5 text-[#141414] tracking-tighter mb-[-1rem] md:mb-[-2rem]">
          404
        </h1>

        {/* Text Content */}
        <div className="flex flex-col gap-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-[#141414]">
            Page not found
          </h2>
          <p className="text-sm md:text-base text-[#141414]/70 font-sans max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back to discovering your natural radiance.
          </p>
        </div>

        {/* Standardized Bella Skin CTA Button */}
        <Link
          href='/'
          className='group btn-cta px-8 py-4 text-sm flex items-center justify-center gap-3 mt-4 shadow-sm'
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-90">
            <path d="M12 2C12 2 14.5 7 12 12C9.5 7 12 2 12 2Z" />
            <path d="M12 22C12 22 9.5 17 12 12C14.5 17 12 22 12 22Z" />
            <path d="M2 12C2 12 7 9.5 12 12C7 14.5 2 12 2 12Z" />
            <path d="M22 12C22 12 17 14.5 12 12C17 9.5 22 12 22 12Z" />
          </svg>
          Back to Home
        </Link>
        
      </div>
    </section>
  )
}

export default NotFound