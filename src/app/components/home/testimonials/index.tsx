'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const testimonials = [
  {
    id: 1,
    text: "My acne finally cleared after years of trying everything. The treatment plan was simple, clear, and effective. The team truly cares about your long-term results.",
    name: "Sofia Hale",
    role: "Actress",
    image: "/images/home/testimonials/avatar-1.webp"
  },
  {
    id: 2,
    text: "The personalized approach made all the difference. They didn’t rush anything and created a regimen that completely restored my natural glow.",
    name: "Olivia Chen",
    role: "Creative Director",
    image: "/images/home/testimonials/avatar-2.webp"
  },
  {
    id: 3,
    text: "As a guy, I was hesitant about aesthetic treatments. The team made me feel completely comfortable, and the laser hair removal was incredibly precise.",
    name: "Marcus Thorne",
    role: "Architect",
    image: "/images/home/testimonials/avatar-3.webp" 
  },
  {
    id: 4,
    text: "Absolutely phenomenal experience. The clinic feels like a luxury spa, and the clinical results for my hyperpigmentation speak for themselves.",
    name: "Emma Robertson",
    role: "Entrepreneur",
    image: "/images/home/testimonials/avatar-4.webp"
  },
  {
    id: 5,
    text: "I've struggled with rosacea for a decade. Their advanced light therapy protocols brought my redness down by 90% in just a few months.",
    name: "Julian Rossi",
    role: "Executive Chef",
    image: "/images/home/testimonials/avatar-5.webp" 
  },
  {
    id: 6,
    text: "Their bespoke anti-aging treatments look incredibly natural. For the first time in years, I feel confident leaving the house without makeup.",
    name: "Maya Patel",
    role: "Tech Executive",
    image: "/images/home/testimonials/avatar-6.webp"
  },
  {
    id: 7,
    text: "The scalp health and hair restoration treatments saved my confidence. The practitioners explain the science behind everything they do.",
    name: "David Kim",
    role: "Financial Analyst",
    image: "/images/home/testimonials/avatar-7.webp" 
  },
  {
    id: 8,
    text: "I appreciate that they focus on long-term skin health first. They never push unnecessary procedures, only exactly what your skin needs.",
    name: "Chloe Sterling",
    role: "Verified Patient",
    image: "/images/home/testimonials/avatar-8.webp"
  },
  {
    id: 9,
    text: "My annual skin health screenings here are thorough and professional. The doctors take their time and ensure you are fully educated.",
    name: "James Alistair",
    role: "Pilot",
    image: "/images/home/testimonials/avatar-9.webp" 
  },
  {
    id: 10,
    text: "The chemical peels completely transformed my skin texture. It’s smoother, brighter, and my makeup applies flawlessly now.",
    name: "Sarah Jenkins",
    role: "Educator",
    image: "/images/home/testimonials/avatar-10.webp"
  }
]

// Smooth sliding variants for the carousel
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Moves by 2 cards at a time, creating a "page" effect
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  // Selects the 2 cards to display
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <section className="w-full bg-transparent py-12 md:py-16">
      <div className="w-full max-w-[82.8rem] mx-auto px-5 sm:px-7">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-[#1C1F1B] rounded-[2.5rem] md:rounded-[3.5rem] p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center shadow-2xl"
        >

          {/* 1. LEFT SIDE: IMAGE WITH GRADIENT OVERLAY */}
          <div className="hidden lg:block lg:w-[40%] relative">
            <div className="w-full aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-lg ">
              <Image 
                src="/images/home/testimonials/main.webp" 
                alt="Glowing Skin" 
                fill 
                className="object-cover"
              />
              {/* Seamless dark gradient that matches the background color perfectly */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F1B] via-[#1C1F1B]/40 to-transparent z-10"></div>
              
              {/* Clean, readable text with avatars removed */}
              <div className="absolute bottom-12 left-0 w-full flex flex-col items-center justify-center text-[#F7F2EA] z-20">
                <h4 className="text-6xl font-sans mb-2 text-[#CBB79E] drop-shadow-lg">4.9</h4>
                <div className="flex gap-1.5 text-[#CBB79E] text-sm mb-3 drop-shadow-md">
                  <Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#CBB79E] font-bold opacity-90 drop-shadow-md">
                  Clients Rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CAROUSEL */}
          <div className="w-full lg:w-[60%] flex flex-col h-full overflow-hidden">
            
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-14">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F7F2EA]/20 bg-[#F7F2EA]/5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E]"></span>
                  <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#F7F2EA]/80">
                    Testimonials
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F7F2EA] leading-tight">
                  What our <br className="hidden sm:block"/> patients say.
                </h2>
              </div>

              <div className="flex gap-3 pb-2 z-10">
                <button 
                  onClick={prevSlide} 
                  className="w-12 h-12 flex-shrink-0 rounded-full border border-[#F7F2EA]/20 flex items-center justify-center text-[#F7F2EA] hover:bg-[#F7F2EA] hover:text-[#1C1F1B] transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <Icon icon="ph:arrow-left" width="20" />
                </button>
                <button 
                  onClick={nextSlide} 
                  className="w-12 h-12 flex-shrink-0 rounded-full border border-[#F7F2EA]/20 flex items-center justify-center text-[#F7F2EA] hover:bg-[#F7F2EA] hover:text-[#1C1F1B] transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <Icon icon="ph:arrow-right" width="20" />
                </button>
              </div>
            </div>

            {/* SMOOTH SLIDING CAROUSEL */}
            <div className="relative w-full min-h-[300px]">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full absolute top-0 left-0"
                >
                  {visibleTestimonials.map((testimonial, idx) => (
                    <div 
                      key={testimonial.id}
                      className={`bg-[#F7F2EA] rounded-[1.5rem] p-8 flex-col justify-between h-[300px] shadow-md ${idx === 1 ? 'hidden md:flex' : 'flex'}`}
                    >
                      <div>
                        <div className="flex gap-1 text-[#CBB79E] text-xs mb-6">
                          <Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" /><Icon icon="ph:star-fill" />
                        </div>
                        <p className="text-[#141414]/80 text-[13px] md:text-sm leading-relaxed mb-8 italic line-clamp-4">
                          "{testimonial.text}"
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full overflow-hidden relative border border-[#E5D9CC] flex-shrink-0">
                          <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h5 className="font-bold text-[#141414] text-xs uppercase tracking-wide">{testimonial.name}</h5>
                          <p className="text-[10px] text-[#141414]/60 mt-0.5">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>

        </motion.div>
      </div>
    </section>
  )
}