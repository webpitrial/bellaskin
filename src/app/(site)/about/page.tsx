'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

// --- REUSABLE FADE-UP WRAPPER FOR LUXURIOUS SCROLL ANIMATIONS ---
const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

export default function AboutPage() {
  
  // --- UK-SPECIFIC PAGE DATA ---
  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "20K+", label: "Patients Treated" },
    { value: "CQC", label: "Registered Clinic" },
    { value: "99%", label: "Patient Satisfaction" }
  ];

  const careFeaturesLeft = [
    { title: "Comprehensive Consultation", desc: "In-depth clinical skin mapping using industry-leading diagnostic technology.", icon: "mdi:line-scan" },
    { title: "Bespoke Treatment Pathways", desc: "Tailored medical and aesthetic regimens designed strictly around your unique physiological needs.", icon: "mdi:clipboard-text-outline" }
  ];
  
  const careFeaturesRight = [
    { title: "MHRA & CE Approved", desc: "Utilising only the highest-grade, rigorously tested clinical products available in the UK.", icon: "mdi:flask-outline" },
    { title: "Dedicated Aftercare", desc: "Unwavering support from our British-trained clinical team throughout your recovery journey.", icon: "mdi:heart-pulse" }
  ];

  const doctorsTop = [
    { name: "Dr. Marcus Thorne", role: "Hair Restoration Lead", img: "/images/home/why-choose/doc-4.webp" },
    { name: "Sarah Jenkins, RN", role: "Senior Independent Nurse Prescriber", img: "/images/home/why-choose/doc-3.webp" }
  ];

  const doctorsBottom = [
    { name: "Dr. Eleanor Sterling", role: "Lead Consultant Dermatologist", img: "/images/home/why-choose/doc-1.webp" }, 
    { name: "Dr. Alistair Hughes", role: "Medical Aesthetic Director", img: "/images/home/why-choose/doc-2.webp" },
    { name: "Emma Croft", role: "Lead Clinical Laser Practitioner", img: "/images/home/why-choose/doc-5.webp" }
  ];

  const certificates = [
    { title: "GMC Specialist Register", org: "General Medical Council, UK", year: "Since 2010" },
    { title: "Full Board Membership", org: "British College of Aesthetic Medicine (BCAM)", year: "2015" },
    { title: "Clinical Excellence Award", org: "Aesthetics Awards UK", year: "2023" },
    { title: "CQC Outstanding Rating", org: "Care Quality Commission", year: "2024" }
];

  return (
    <main className="w-full bg-transparent overflow-hidden">

      {/* 1. HERO SECTION */}
      {/* Fixed mobile top padding: reduced from pt-32 to pt-24 */}
      <section className="w-full pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 px-5 sm:px-7 max-w-[82.8rem] mx-auto text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5D9CC] bg-[#E5D9CC]/30 mb-5 md:mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E]"></span>
            <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#141414]/80 font-sans">
              Our Heritage
            </span>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif text-[#141414] leading-[1.05] mb-6 md:mb-8 tracking-tight">
            Excellence in British <br className="hidden md:block"/> Clinical Dermatology
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex justify-center items-center mb-12 md:mb-16">
            <Link
              href={'/contact'}
              className='group btn-cta px-6 md:px-8 py-3.5 text-sm flex items-center justify-center gap-3 w-full sm:w-fit shadow-sm'
            >
               <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-90">
                <path d="M12 2C12 2 14.5 7 12 12C9.5 7 12 2 12 2Z" />
                <path d="M12 22C12 22 9.5 17 12 12C14.5 17 12 22 12 22Z" />
                <path d="M2 12C2 12 7 9.5 12 12C7 14.5 2 12 2 12Z" />
                <path d="M22 12C22 12 17 14.5 12 12C17 9.5 22 12 22 12Z" />
               </svg>
               Book Appointment
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="w-full aspect-[16/10] md:aspect-[21/9] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            {/* LCP Element: Kept priority=true for fastest possible initial load */}
            <Image 
              src="/images/about/hero.webp" 
              alt="Bella Skin Clinic Interior UK" 
              fill 
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover" 
              priority 
            />
          </div>
        </FadeUp>
      </section>

      {/* 2. OUR STORY */}
      <section id="our-story" className="w-full py-12 md:py-24 px-5 sm:px-7 max-w-[82.8rem] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full md:w-7/12 lg:w-3/5">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#141414] leading-[1.1] mb-5 md:mb-6">
                Pioneering aesthetic medicine in the heart of the UK.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-sm md:text-lg text-[#141414]/70 font-sans leading-relaxed mb-4 md:mb-6">
                Established with a vision to elevate the standards of British skincare, Bella Skin combines world-class medical dermatology with refined aesthetic precision. Operating from our state-of-the-art clinic, we bring Harley Street-level excellence to every consultation.
              </p>
              <p className="text-sm md:text-lg text-[#141414]/70 font-sans leading-relaxed mb-6 md:mb-8">
                Our GMC-registered practitioners and leading aestheticians are dedicated to providing bespoke, evidence-based treatments. We pride ourselves on a highly ethical, patient-first approach, ensuring supreme safety, absolute transparency, and transformative results for our patients across the United Kingdom.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto rounded-full border border-[#141414]/20 text-[#141414] hover:bg-[#141414] hover:text-[#F7F2EA] transition-all duration-300 text-xs font-semibold uppercase tracking-wider">
                Explore our treatments
                <Icon icon="mdi:arrow-right" />
              </Link>
            </FadeUp>
          </div>
          
          <div className="w-full md:w-5/12 lg:w-[40%] relative mx-auto">
            <FadeUp delay={0.3}>
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-xl">
                <Image 
                  src="/images/about/story.webp" 
                  alt="British Doctor consulting patient" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 40vw"
                  loading="lazy"
                  className="object-cover" 
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="w-full py-12 md:py-24 px-5 sm:px-7 max-w-[82.8rem] mx-auto">
        <FadeUp>
          <div className="relative w-full rounded-[2rem] md:rounded-[3rem] py-12 md:py-20 px-6 md:px-8 shadow-sm bg-[#E5D9CC]/40 border border-[#E5D9CC]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-[#141414]/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center">
                  {/* Changed to font-sans and font-semibold to match services page */}
                  <span className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-[#141414] mb-1 md:mb-2 tracking-tight">{stat.value}</span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#141414]/70 font-sans">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* 4. HOW WE CARE FOR YOU */}
      <section className="w-full py-12 md:py-24 px-5 sm:px-7 max-w-[82.8rem] mx-auto">
        <FadeUp>
          <div className="text-center mb-12 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5D9CC] bg-transparent mb-4">
              <span className="text-[10px] sm:text-xs font-semibold text-[#141414]/80 font-sans uppercase tracking-widest">
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#141414]">
              How we care for you
            </h2>
          </div>
        </FadeUp>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-10">
            {careFeaturesLeft.map((feature, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E5D9CC]/40 flex items-center justify-center mb-3 md:mb-4 text-[#141414]">
                    <Icon icon={feature.icon} className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#141414] font-sans mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-[#141414]/70 font-sans leading-relaxed">{feature.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="w-full lg:w-1/3 flex justify-center order-first lg:order-none mb-8 lg:mb-0">
            <FadeUp delay={0.2} className="w-full max-w-[280px] md:max-w-[320px] aspect-[3/4] md:aspect-[2/3] rounded-full overflow-hidden relative shadow-2xl border-4 border-white pointer-events-none">
              {/* Fully locked down looping video for seamless background playback */}
              <video 
                src="/images/about/treatment.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline
                controls={false}
                disablePictureInPicture
                className="object-cover w-full h-full select-none pointer-events-none" 
              />
            </FadeUp>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-10">
            {careFeaturesRight.map((feature, idx) => (
              <FadeUp key={idx} delay={0.2 + (idx * 0.1)}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E5D9CC]/40 flex items-center justify-center mb-3 md:mb-4 text-[#141414]">
                    <Icon icon={feature.icon} className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#141414] font-sans mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-[#141414]/70 font-sans leading-relaxed">{feature.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* 5. OUR EXPERT TEAM */}
      <section className="w-full py-16 md:py-24 bg-[#E5D9CC]/10">
        <div className="max-w-[82.8rem] mx-auto px-5 sm:px-7">
          <FadeUp>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#141414] mb-3 md:mb-4">Meet the Experts</h2>
              <p className="text-sm md:text-base text-[#141414]/70 font-sans">The dedicated minds behind your personalized care in the UK.</p>
            </div>
          </FadeUp>

          <div className="flex flex-col gap-6 md:gap-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto w-full">
              {doctorsTop.map((doc, idx) => (
                <FadeUp key={idx} delay={idx * 0.1} className="w-full">
                  <div className="group bg-white rounded-[2rem] p-3 pb-5 shadow-sm border border-[#141414]/5 hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                    <div className="w-full max-w-[260px] aspect-[5/4] sm:aspect-square rounded-[1.5rem] overflow-hidden mb-4 relative bg-[#F7F2EA] mx-auto">
                      <Image src={doc.img} alt={doc.name} fill sizes="(max-width: 768px) 100vw, 300px" loading="lazy" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-[#141414] mb-1">{doc.name}</h3>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#CBB79E] font-sans">{doc.role}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full">
              {doctorsBottom.map((doc, idx) => (
                <FadeUp key={idx} delay={0.2 + (idx * 0.1)} className="w-full">
                  <div className="group bg-white rounded-[2rem] p-3 pb-5 shadow-sm border border-[#141414]/5 hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                    <div className="w-full max-w-[240px] aspect-[5/4] sm:aspect-square rounded-[1.5rem] overflow-hidden mb-4 relative bg-[#F7F2EA] mx-auto">
                      <Image src={doc.img} alt={doc.name} fill sizes="(max-width: 768px) 100vw, 300px" loading="lazy" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-serif text-[#141414] mb-1">{doc.name}</h3>
                    <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-[#CBB79E] font-sans">{doc.role}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATES */}
      <section className="w-full py-16 md:py-24 px-5 sm:px-7 max-w-[48rem] mx-auto">
        <FadeUp>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#141414] mb-3 md:mb-4">Trusted Expertise</h2>
            <p className="text-sm md:text-base text-[#141414]/70 font-sans">Regulated and certified by leading UK authorities.</p>
          </div>
        </FadeUp>

        <div className="flex flex-col border-t border-[#141414]/10">
          {certificates.map((cert, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-4 py-5 md:py-8 border-b border-[#141414]/10 group hover:bg-[#E5D9CC]/20 transition-colors px-2 md:px-4 rounded-xl">
                <div className="flex flex-col">
                  <h4 className="text-base md:text-xl font-bold text-[#141414] font-sans">{cert.title}</h4>
                  <p className="text-xs md:text-sm text-[#141414]/60 font-sans mt-0.5 md:mt-1">{cert.org}</p>
                </div>
                <div className="text-[10px] md:text-sm font-bold text-[#141414]/50 font-sans tracking-widest bg-[#141414]/5 px-3 md:px-4 py-1 md:py-1.5 rounded-full w-fit">
                  {cert.year}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

    </main>
  )
}