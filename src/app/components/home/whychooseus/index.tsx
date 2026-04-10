'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Magnet from '@/app/components/ui/Magnet';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const patientReviews = [
  {
    id: 1,
    text: "The clinical precision here is unmatched. My hyperpigmentation cleared up completely after a tailored laser regimen.",
    name: "Eleanor Vance",
    role: "Verified Patient",
    image: "/images/home/avatar-1.webp"
  },
  {
    id: 2,
    text: "I appreciate that they focus on long-term skin health first. The staff never pushed unnecessary procedures, only exactly what my skin needed.",
    name: "Chloe Sterling",
    role: "Verified Patient",
    image: "/images/home/avatar-2.webp"
  },
  {
    id: 3,
    text: "From the state-of-the-art equipment to the brilliant dermatologists, this clinic is the absolute standard for premium skincare.",
    name: "Sophia Lin",
    role: "Verified Patient",
    image: "/images/home/avatar-3.webp"
  },
  {
    id: 4,
    text: "Their bespoke anti-aging treatments look incredibly natural. For the first time in years, I feel confident leaving the house without makeup.",
    name: "Maya Patel",
    role: "Verified Patient",
    image: "/images/home/avatar-4.webp"
  }
];

export default function WhyChooseUsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  
  // State for the interactive Before/After Slider (0 to 100 percentage)
  const [sliderPos, setSliderPos] = useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % patientReviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-transparent py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[82.8rem] mx-auto px-5 sm:px-7">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5D9CC] bg-[#E5D9CC]/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E]"></span>
            <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#141414]/80">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#141414] leading-tight max-w-2xl">
            Care that puts <br/> your skin first.
          </h2>
        </motion.div>

        {/* --- BENTO GRID --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          
          {/* ================= COLUMN 1 ================= */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* 1. INTERACTIVE BEFORE/AFTER SLIDER */}
            <motion.div variants={fadeUpVariants} className="relative flex-[3] min-h-[400px] rounded-[2rem] overflow-hidden border border-[#E5D9CC]/50">
              
              {/* After Image (Background) */}
              <div className="absolute inset-0">
                <Image src="/images/home/why-choose/after.webp" alt="Post-Care Result" fill className="object-cover" />
              </div>
              
              {/* Before Image (Foreground with Clip-Path) */}
              <div 
                className="absolute inset-0 z-10"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <Image src="/images/home/why-choose/before.webp" alt="Pre-Care Condition" fill className="object-cover" />
              </div>

              {/* Slider Line & Handle */}
              <div 
                className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-md border border-white/60 rounded-full flex items-center justify-center shadow-lg pointer-events-none">
                  <Icon icon="ph:arrows-left-right-bold" className="text-white w-4 h-4 drop-shadow-md" />
                </div>
              </div>

              {/* Invisible HTML Range Input for dragging */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPos} 
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
                aria-label="Image comparison slider"
              />
              
              {/* UI Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent pointer-events-none z-10"></div>
              
              <div className="absolute top-6 left-6 right-6 flex justify-between z-40 pointer-events-none">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-md text-[10px] font-bold uppercase tracking-wider text-[#141414]">Pre-Care</span>
                <span className="px-3 py-1 bg-[#A8B5A2]/90 backdrop-blur-sm rounded-md text-[10px] font-bold uppercase tracking-wider text-white">Post-Care</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-40 pointer-events-none">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 drop-shadow-sm">Proven clinical outcomes</h3>
                <p className="text-white/80 text-xs font-medium leading-relaxed drop-shadow-sm">Drag to see evidence-based results.</p>
              </div>
            </motion.div>

            {/* 2. Bespoke Regimens */}
            <motion.div variants={fadeUpVariants} className="bg-[#FDFBF7] flex-[2] rounded-[2rem] p-8 border border-[#E5D9CC] flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 w-36 h-36 opacity-[0.03] transition-transform duration-700 group-hover:scale-110 pointer-events-none">
                 <Icon icon="ph:dna-light" width="100%" height="100%" color="#141414" />
              </div>
              <h3 className="text-2xl font-serif text-[#141414] mb-3 relative z-10">Bespoke Regimens</h3>
              <p className="text-sm text-[#141414]/70 relative z-10 max-w-[90%]">
                No two faces are identical. We engineer personalized protocols tailored exactly to your skin's biological needs.
              </p>
            </motion.div>

          </div>

        {/* ================= COLUMN 2 ================= */}
        <div className="flex flex-col gap-6 h-full">
            
            {/* 3. Gold-Standard Safety */}
            <motion.div variants={fadeUpVariants} className="bg-[#FDFBF7] flex-[2] rounded-[2rem] p-8 border border-[#E5D9CC] relative overflow-hidden group flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E5D9CC]/30 flex items-center justify-center text-[#141414]">
                    <Icon icon="ph:shield-check-bold" width="20" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A8B5A2]">Certified</span>
               </div>
               <h3 className="text-2xl font-serif text-[#141414] mb-2">Gold-Standard Tech</h3>
               <p className="text-sm text-[#141414]/70">
                 We exclusively utilize FDA-approved, medical-grade equipment to guarantee uncompromising safety and efficacy.
               </p>
            </motion.div>

            {/* 4. THE CENTER CTA */}
            <motion.div variants={fadeUpVariants} className="bg-[#141414] flex-[3] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#A8B5A2]/20 via-transparent to-transparent pointer-events-none"></div>
              
              <span className="bg-[#A8B5A2] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 relative z-10">
                Phase 1
              </span>
              
              <h3 className="text-3xl lg:text-4xl font-serif text-[#F7F2EA] mb-3 relative z-10">
                Comprehensive <br/> Skin Audit
              </h3>
              
              <p className="text-sm text-[#F7F2EA]/60 mb-8 relative z-10">
                Detailed biometric analysis and expert consultation at zero cost to you.
              </p>
              
              {/* MAGNETIC CTA BUTTON */}
              <Magnet 
                padding={40} 
                magnetStrength={3} 
                wrapperClassName="relative z-10" // Keeps it above the background gradient
              >
                <Link href="/contact" className="px-8 py-3.5 rounded-full bg-[#F7F2EA] text-[#141414] hover:bg-white transition-colors text-sm font-semibold w-full shadow-sm flex items-center justify-center gap-2">
                  Book Free Audit <Icon icon="ph:arrow-right-bold" />
                </Link>
              </Magnet>

            </motion.div>

          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="flex flex-col gap-6 h-full">
   
            {/* 5. Elite Practitioners (Flawless Flex Overlap Layout - Spaced Out) */}
            <motion.div variants={fadeUpVariants} className="bg-[#141414] flex-[2] rounded-[2rem] p-8 border border-[#282828] relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif text-[#F7F2EA] mb-2">Elite Practitioners</h3>
                <p className="text-sm text-[#F7F2EA]/70 mb-4 z-10 relative">Decades of combined dermatological mastery.</p>
              </div>

              {/* Clustered Flex Container */}
              <div className="relative w-full flex justify-center items-center mt-8 mb-4">
                
                {/* Doctor 1 (Far Left) */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
                  className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-[3px] border-[#141414] shadow-md z-10 mt-12"
                >
                  <Image src="/images/home/why-choose/doc-1.webp" alt="Dermatologist" fill className="object-cover" />
                </motion.div>
                
                {/* Doctor 2 (Mid Left) */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }} 
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }} 
                  // CHANGED: Reduced negative margin here
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[3px] border-[#141414] shadow-md z-20 -ml-3 md:-ml-4 mt-2"
                >
                  <Image src="/images/home/why-choose/doc-2.webp" alt="Dermatologist" fill className="object-cover" />
                </motion.div>

                {/* Doctor 3 (Center Largest) */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }} 
                  // CHANGED: Reduced negative margin here
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-[4px] border-[#141414] shadow-xl z-30 -ml-3 md:-ml-4 -mt-6"
                >
                  <Image src="/images/home/why-choose/doc-3.webp" alt="Dermatologist" fill className="object-cover" />
                </motion.div>

                {/* Doctor 5 (Mid Right) */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }} 
                  transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.8 }} 
                  // CHANGED: Reduced negative margin here
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[3px] border-[#141414] shadow-md z-20 -ml-3 md:-ml-4 mt-2"
                >
                  <Image src="/images/home/why-choose/doc-5.webp" alt="Dermatologist" fill className="object-cover" />
                </motion.div>

                {/* Doctor 4 (Far Right) */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }} 
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.2 }} 
                  // CHANGED: Reduced negative margin here
                  className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-[3px] border-[#141414] shadow-sm z-10 -ml-3 md:-ml-4 mt-12"
                >
                  <Image src="/images/home/why-choose/doc-4.webp" alt="Dermatologist" fill className="object-cover" />
                </motion.div>
                
              </div>
            </motion.div>

            {/* 6. Patient Stories & Stats */}
            <motion.div variants={fadeUpVariants} className="bg-[#FDFBF7] flex-[3] rounded-[2rem] p-8 border border-[#E5D9CC] flex flex-col items-center text-center justify-center relative">
              <h3 
                className="text-5xl text-[#141414] mb-1 leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                97%
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#A8B5A2] mb-6">Patient Satisfaction</p>

              {/* Fading Carousel */}
              <div className="w-full min-h-[160px] relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-xl p-5 shadow-sm border border-[#E5D9CC]/50"
                  >
                    <div className="flex gap-1 text-[#CBB79E] text-[10px] mb-3">
                      <Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" />
                    </div>
                    
                    <p className="text-[13px] text-[#141414]/80 leading-relaxed mb-4 italic">
                      "{patientReviews[currentReview].text}"
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-[#E5D9CC]">
                        <Image src={patientReviews[currentReview].image} alt={patientReviews[currentReview].name} width={32} height={32} className="object-cover w-full h-full" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-[#141414] leading-tight">{patientReviews[currentReview].name}</p>
                        <p className="text-[10px] text-[#141414]/50">{patientReviews[currentReview].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="flex gap-1.5 mt-6">
                {patientReviews.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentReview(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${idx === currentReview ? 'bg-[#141414]' : 'bg-[#E5D9CC]'}`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}