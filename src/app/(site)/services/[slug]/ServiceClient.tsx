'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Icon } from '@iconify/react'

// --- REUSABLE FADE-UP WRAPPER ---
const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

export default function ServiceClient({ service, otherServices }: { service: any, otherServices: any[] }) {
  
  // --- STATE FOR CUSTOM CHECKBOX ---
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  // --- INTENSIFIED MAGNETIC 3D TILT LOGIC ---
  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    const checkHover = () => {
      setIsHoverable(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    };
    checkHover();
    window.addEventListener('resize', checkHover);
    return () => window.removeEventListener('resize', checkHover);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoverable) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // --- GENERATE CLINIC TIME SLOTS ---
  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'
  ];

  return (
    <main className="w-full bg-transparent relative">
      
      {/* 1. FULL-SCREEN SERVICE HERO */}
      <section className="relative w-full min-h-screen pt-28 pb-16 xl:pt-0 xl:pb-0 xl:flex xl:items-center xl:justify-center z-10">
        <div className="max-w-[82.8rem] w-full mx-auto px-5 sm:px-7 flex flex-col xl:flex-row-reverse items-center justify-between gap-12 xl:gap-8 z-10">
          
          {/* Right Image Container */}
          <div 
            className="w-full sm:w-[85%] md:w-[70%] xl:w-[45%] mx-auto xl:mx-0 relative z-20"
            style={{ perspective: isHoverable ? "1200px" : "none" }}
          >
            <FadeUp delay={0.2} className="w-full">
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX: isHoverable ? rotateX : 0,
                  rotateY: isHoverable ? rotateY : 0,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full h-[40vh] md:h-[50vh] xl:h-[65vh] min-h-[350px] max-h-[700px] rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <Image 
                  src={service.heroImage || service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
            </FadeUp>
          </div>

          {/* Left Text Content */}
          <div className="w-full xl:w-1/2 flex flex-col items-center text-center xl:items-start xl:text-left z-10">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-bg/80 backdrop-blur-sm text-brand-dark mb-4 xl:mb-6 text-[11px] sm:text-sm font-medium shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E]"></span>
                <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#141414]/80 font-sans">
                  Treatment Profile
                </span>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-serif leading-[1.05] text-brand-dark mb-3 xl:mb-5">
                {service.title}
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.4}>
              <p className="text-sm sm:text-base md:text-lg text-brand-body max-w-xl mb-8 leading-relaxed opacity-90 mx-auto xl:mx-0">
                {service.shortDescription}
              </p>
            </FadeUp>

            {/* DYNAMIC STATS ROW (3 Items, Font Sans Numbers) */}
            {service.stats && (
              <FadeUp delay={0.45} className="w-full mb-10 xl:mb-12">
                <div className="flex flex-wrap justify-center xl:justify-start gap-8 md:gap-14 border-y border-[#141414]/10 py-6">
                  {service.stats.map((stat: any, idx: number) => (
                    <div key={idx} className="flex flex-col items-center xl:items-start">
                      {/* Changed to font-sans and font-semibold */}
                      <span className="text-2xl md:text-3xl font-sans font-semibold text-[#141414] leading-none mb-1">
                        {stat.value}
                      </span>
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#141414]/60 font-sans">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            )}
            
            <FadeUp delay={0.5}>
              <a href="#booking-form" className="group btn-cta px-8 py-3.5 w-full sm:w-auto shadow-sm text-sm flex items-center justify-center gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-90">
                  <path d="M12 2C12 2 14.5 7 12 12C9.5 7 12 2 12 2Z" />
                  <path d="M12 22C12 22 9.5 17 12 12C14.5 17 12 22 12 22Z" />
                  <path d="M2 12C2 12 7 9.5 12 12C7 14.5 2 12 2 12Z" />
                  <path d="M22 12C22 12 17 14.5 12 12C17 9.5 22 12 22 12Z" />
                </svg>
                Book Appointment
              </a>
            </FadeUp>
          </div>
          
        </div>
      </section>

      {/* 2. THE PROCESS */}
      <section className="w-full py-16 md:py-24 relative z-10">
        <div className="max-w-[82.8rem] mx-auto px-5 sm:px-7">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-[#141414] mb-3">The Process</h2>
              <p className="text-sm md:text-base text-[#141414]/70 font-sans">What to expect during your visit.</p>
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {service.process?.map((step: any, idx: number) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="flex flex-col border-t border-[#141414]/10 pt-6">
                  <span className="text-[#CBB79E] font-serif text-2xl mb-3">{step.step}</span>
                  <h4 className="text-lg md:text-xl font-bold text-[#141414] mb-2 font-sans">{step.title}</h4>
                  <p className="text-sm md:text-base text-[#141414]/70 leading-relaxed font-sans">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO IS IT FOR & TREATMENT AREAS */}
      <section className="w-full py-16 md:py-24 relative z-10">
        <div className="max-w-[82.8rem] mx-auto px-5 sm:px-7">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            <FadeUp delay={0.1}>
              <div className="bg-[#1C1F1B] rounded-[2rem] p-8 md:p-12 h-full shadow-lg relative z-20">
                <h3 className="text-2xl md:text-3xl font-serif text-[#F7F2EA] mb-6">Who is it for?</h3>
                <ul className="flex flex-col gap-4">
                  {service.whoIsItFor?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-[#CBB79E]">
                        <Icon icon="mdi:check-circle-outline" width="20" height="20" />
                      </div>
                      <span className="text-sm md:text-base text-[#F7F2EA]/80 font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-[#1C1F1B] rounded-[2rem] p-8 md:p-12 h-full shadow-lg relative z-20">
                <h3 className="text-2xl md:text-3xl font-serif text-[#F7F2EA] mb-6">Treatment Areas</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {service.treatmentAreas?.map((area: string, idx: number) => (
                    <div key={idx} className="px-4 md:px-5 py-2.5 rounded-full border border-[#F7F2EA]/20 bg-[#F7F2EA]/5 flex items-center gap-2">
                      <Icon icon="mdi:crosshairs-gps" className="text-[#CBB79E] w-4 h-4" />
                      <span className="text-xs md:text-sm font-medium text-[#F7F2EA] font-sans">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* 4. BOOK APPOINTMENTS FORM */}
      <section className="w-full py-16 md:py-24 relative z-10">
        <div className="max-w-[82.8rem] mx-auto px-5 sm:px-7">
          <FadeUp>
            <div id="booking-form" className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md border border-[#141414]/5 rounded-[2.5rem] p-8 md:p-14 shadow-xl relative z-20">
              <div className="text-center mb-8 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-serif text-[#141414] mb-3">Book your session</h2>
                <p className="text-sm md:text-base text-[#141414]/70 font-sans">Request an appointment for {service.title}.</p>
              </div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" required className="w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm" />
                <input type="email" placeholder="Email Address" required className="w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm" />
                
                <input type="tel" placeholder="Phone Number" required className="w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm" />
                <select required className="w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm appearance-none text-[#141414] cursor-pointer">
                  <option value="">Select Therapy</option>
                  <option value={service.title}>{service.title}</option>
                  {otherServices.map((other) => (
                     <option key={other.id} value={other.title}>{other.title}</option>
                  ))}
                </select>

                <input 
                  type="date" 
                  required 
                  onClick={(e) => {
                    try { e.currentTarget.showPicker() } catch (err) {} 
                  }}
                  className="w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm text-[#141414]/70 cursor-pointer" 
                />
                
                <select required className="w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm appearance-none text-[#141414]/70 cursor-pointer">
                  <option value="">Select Time</option>
                  {timeSlots.map((time, idx) => (
                     <option key={idx} value={time}>{time}</option>
                  ))}
                </select>

                <textarea placeholder="Notes / Additional Information" rows={4} className="md:col-span-2 w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm resize-none"></textarea>
                
                <div 
                  className="md:col-span-2 flex items-start gap-3 cursor-pointer mt-2"
                  onClick={() => setIsTermsChecked(!isTermsChecked)}
                >
                  <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-[#141414]/30 overflow-hidden flex-shrink-0">
                    <input 
                      type="checkbox" 
                      required 
                      checked={isTermsChecked}
                      onChange={() => setIsTermsChecked(!isTermsChecked)}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                    />
                    <motion.div 
                      initial={false} 
                      animate={{ backgroundColor: isTermsChecked ? '#141414' : 'transparent' }} 
                      className="absolute inset-0 transition-colors duration-200"
                    />
                    <motion.svg 
                      initial={false} 
                      animate={{ pathLength: isTermsChecked ? 1 : 0, opacity: isTermsChecked ? 1 : 0 }} 
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-3 h-3 text-[#F7F2EA] z-10 relative" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </motion.svg>
                  </div>
                  <span className="text-xs md:text-sm text-[#141414]/70 font-sans leading-relaxed">
                    I agree to the Terms & Conditions and allow Bella Skin to contact me regarding this appointment.
                  </span>
                </div>

                <button type="submit" className="md:col-span-2 group btn-cta px-6 md:px-8 py-3 md:py-4 text-sm flex items-center justify-center gap-2 md:gap-3 mt-4">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-90">
                    <path d="M12 2C12 2 14.5 7 12 12C9.5 7 12 2 12 2Z" />
                    <path d="M12 22C12 22 9.5 17 12 12C14.5 17 12 22 12 22Z" />
                    <path d="M2 12C2 12 7 9.5 12 12C7 14.5 2 12 2 12Z" />
                    <path d="M22 12C22 12 17 14.5 12 12C17 9.5 22 12 22 12Z" />
                  </svg>
                  Book Appointment
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 5. EXPLORE MORE TREATMENTS */}
      {otherServices.length > 0 && (
        <section className="w-full py-16 md:py-24 relative z-10">
          <div className="max-w-[82.8rem] mx-auto px-5 sm:px-7">
            <FadeUp>
              <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#141414]">Explore more treatments</h2>
                <Link href="/services" className="text-sm font-bold uppercase tracking-wider text-[#141414] hover:text-[#CBB79E] transition-colors flex items-center gap-2 border-b border-[#141414]/20 pb-1">
                  View All <Icon icon="mdi:arrow-right" />
                </Link>
              </div>
            </FadeUp>
            
            <div className="flex flex-col w-full border-t border-[#141414]/10">
              {otherServices.map((other, idx) => (
                <FadeUp key={other.id} delay={idx * 0.1}>
                  <Link 
                    href={`/services/${other.slug}`} 
                    className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-[#141414]/10 py-6 md:py-8 px-2 md:px-4 hover:bg-[#E5D9CC]/20 transition-colors rounded-xl md:rounded-2xl"
                  >
                    <div className="flex items-start md:items-center gap-4 md:gap-8 z-10 relative w-full md:w-auto">
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-[#141414]/20 flex items-center justify-center bg-white text-[#141414] flex-shrink-0 group-hover:bg-[#141414] group-hover:text-white transition-all duration-300">
                        <Icon icon={other.icon || "ph:sparkle-light"} className="w-5 h-5 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-3xl font-serif text-[#141414] mb-1 md:mb-2">{other.title}</h4>
                        <p className="text-[#141414]/60 font-sans max-w-lg text-xs md:text-sm pr-6 md:pr-8">{other.shortDescription}</p>
                      </div>
                    </div>

                    <div className="hidden md:block absolute right-[25%] top-1/2 -translate-y-1/2 w-[200px] lg:w-[240px] aspect-[4/5] rounded-[2rem] overflow-hidden opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 z-20 shadow-2xl pointer-events-none origin-center">
                      <Image src={other.image} alt={other.title} fill className="object-cover" />
                    </div>

                    <div className="hidden md:flex w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#141414]/20 items-center justify-center text-[#141414] group-hover:bg-[#CBB79E] group-hover:border-[#CBB79E] group-hover:text-white transition-all duration-300 z-10 relative flex-shrink-0">
                      <Icon icon="mdi:arrow-top-right" width="24" className="transform group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  )
}