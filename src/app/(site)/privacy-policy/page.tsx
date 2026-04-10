'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

const SECTIONS = [
  { id: 'who-we-are',    num: '01', label: 'Who We Are' },
  { id: 'what-we-collect', num: '02', label: 'Information We Collect' },
  { id: 'how-we-use',    num: '03', label: 'How We Use Your Information' },
  { id: 'legal-basis',   num: '04', label: 'Legal Basis for Processing' },
  { id: 'data-sharing',  num: '05', label: 'Data Sharing' },
  { id: 'retention',     num: '06', label: 'Data Retention' },
  { id: 'your-rights',   num: '07', label: 'Your Rights' },
  { id: 'security',      num: '08', label: 'Data Security' },
  { id: 'cookies',       num: '09', label: 'Cookies' },
  { id: 'contact',       num: '10', label: 'Contact Us' },
]

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState('who-we-are')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 240; // Offset for sticky headers
      let currentSection = SECTIONS[0].id;

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollY) {
          currentSection = section.id;
        }
      }
      setActiveId(currentSection);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth < 768 ? 140 : 120;
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    }
  }

  return (
    <main className="w-full bg-transparent">
      <style>{`.hide-scroll::-webkit-scrollbar { display: none; } .hide-scroll { scrollbar-width: none; }`}</style>

      {/* ════════ HERO ════════ */}
      <section className="w-full pt-32 md:pt-40 pb-8 md:pb-16 px-5 sm:px-7 max-w-[82.8rem] mx-auto">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5D9CC] bg-[#E5D9CC]/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E] animate-pulse"></span>
            <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#141414]/80 font-sans">Legal</span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif text-[#141414] leading-[1.05] tracking-tight mb-4">Privacy Policy</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="font-sans text-sm text-[#141414]/50">Last updated: 15 April 2026</p>
        </FadeUp>
      </section>

      {/* ════════ BODY ════════ */}
      <section className="w-full pb-20 md:pb-24 px-5 sm:px-7 max-w-[82.8rem] mx-auto">
        
        {/* CRITICAL FIX: items-start prevents flex children from stretching */}
        <div className="flex flex-col md:flex-row items-start gap-0 md:gap-16 lg:gap-24">

          {/* ── STICKY TOC ── */}
          {/* CRITICAL FIX: Added h-max so it doesn't match the article height */}
          <aside className="sticky top-[72px] md:top-24 z-40 w-full md:w-64 flex-shrink-0 h-max bg-[#F7F2EA]/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-4 md:py-0 border-b border-[#141414]/10 md:border-none mb-8 md:mb-0 -mx-5 px-5 sm:-mx-7 sm:px-7 md:mx-0 md:px-0">
            <p className="hidden md:block font-sans text-[10px] font-bold tracking-widest uppercase text-[#141414]/40 mb-6 px-2">Contents</p>
            <nav className="flex flex-row md:flex-col gap-2 md:gap-1 overflow-x-auto md:overflow-visible hide-scroll">
              {SECTIONS.map(s => (
                <button 
                  key={s.id} 
                  onClick={() => scrollTo(s.id)}
                  className={`flex-shrink-0 flex items-center gap-3 px-4 py-2 md:px-3 md:py-2.5 rounded-full md:rounded-xl transition-colors text-left ${
                    activeId === s.id ? 'bg-[#141414] md:bg-[#E5D9CC]/30 text-white md:text-[#141414]' : 'bg-white/50 md:bg-transparent text-[#141414]/70 hover:bg-[#141414]/5'
                  }`}
                >
                  <span className={`font-sans text-[10px] font-bold tracking-wider ${activeId === s.id ? 'text-[#CBB79E]' : 'text-[#141414]/40'}`}>{s.num}</span>
                  <span className="font-sans text-xs md:text-sm font-medium whitespace-nowrap md:whitespace-normal">{s.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* ── RIGHT: CONTENT ── */}
          <article className="min-w-0 flex-1 w-full max-w-3xl">
            <FadeUp>
              <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-10">
                Bella Skin is committed to protecting your privacy and handling your sensitive medical and personal data with the utmost care. This policy explains how we collect, use, and protect your information when you visit our clinic, use our website, or undergo clinical treatments with us in the United Kingdom.
              </p>
              <div className="w-full h-px bg-[#141414]/10 mb-14" />
            </FadeUp>

            {/* 01 */}
            <FadeUp delay={0.1}>
              <div className="mb-14">
                <h2 id="who-we-are" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Who We Are</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">Bella Skin is a Care Quality Commission (CQC) registered clinical dermatology and aesthetic medicine practice. When this policy refers to "Bella Skin", "we", or "us", it refers to our registered clinical practice operating out of London.</p>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">Our clinic is located at 15 Harley Street, London W1G 9QQ, United Kingdom. For data protection purposes, we are the designated Data Controller.</p>
              </div>
            </FadeUp>

            {/* 02 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="what-we-collect" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Information We Collect</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">As a medical practice, we collect both standard personal data and special category (medical) data:</p>
                <ul className="flex flex-col gap-3 font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> <strong>Identity Data:</strong> Full name, date of birth, gender, and photographic ID.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> <strong>Contact Data:</strong> Email address, telephone numbers, and home address.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> <strong>Medical Data:</strong> Complete medical history, current medications, allergies, previous procedures, and clinical photographs.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> <strong>Financial Data:</strong> Payment details and billing addresses.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 03 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="how-we-use" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">How We Use Your Information</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">We use your information strictly for clinical and operational purposes:</p>
                <ul className="flex flex-col gap-3 font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> To safely assess your suitability for clinical and aesthetic treatments.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> To maintain accurate, legally required medical records of your treatments.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> To manage your appointments and provide post-treatment aftercare.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 04 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="legal-basis" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Legal Basis for Processing</h2>
                <ul className="flex flex-col gap-3 font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> <strong>Healthcare Provision:</strong> Processing medical data is necessary for preventative medicine and health care.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> <strong>Consent:</strong> Where you have explicitly consented to specific treatments.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> <strong>Contract:</strong> To fulfil our obligations in delivering the services you booked.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 05 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="data-sharing" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Data Sharing & Confidentiality</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">Your medical confidentiality is absolute. We will never sell your data. We only share data with verified third parties essential to your care, such as external medical laboratories and encrypted clinical software providers.</p>
              </div>
            </FadeUp>

            {/* 06 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="retention" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Medical Data Retention</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">By law, as a healthcare provider in the UK, we are required to retain your medical records for a statutory period. Adult medical records are securely retained for a minimum of 8 years following the last clinical consultation.</p>
              </div>
            </FadeUp>

            {/* 07 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="your-rights" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Your UK GDPR Rights</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">You possess standard rights including Access (requesting a copy of your notes), Correction, and Erasure of non-medical data.</p>
              </div>
            </FadeUp>

            {/* 08 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="security" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Data Security</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">All patient records are stored on highly secure, encrypted clinical servers. Physical access to our clinic and servers is strictly restricted.</p>
              </div>
            </FadeUp>

            {/* 09 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="cookies" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Cookies</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">Our website utilizes essential cookies to ensure secure online booking and website functionality. We do not use aggressive third-party trackers.</p>
              </div>
            </FadeUp>

            {/* 10 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="contact" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Contact Us</h2>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex gap-4 items-center">
                    <span className="font-sans text-[11px] font-bold text-[#141414]/40 uppercase tracking-widest w-16">Email</span>
                    <a href="mailto:privacy@bellaskin.co.uk" className="font-sans text-sm text-[#CBB79E] font-semibold">privacy@bellaskin.co.uk</a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="font-sans text-[11px] font-bold text-[#141414]/40 uppercase tracking-widest w-16">Phone</span>
                    <span className="font-sans text-sm text-[#141414]/80">+44 20 7123 4567</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* CTA card */}
            <FadeUp>
              <div className="bg-[#E5D9CC]/20 border border-[#141414]/5 rounded-[2rem] p-8 md:p-12 flex flex-col gap-5 mt-10">
                <h3 className="font-serif text-2xl md:text-3xl text-[#141414] leading-snug m-0">Questions about your data?</h3>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 m-0">Our clinical team is happy to clarify anything in this policy.</p>
                <Link href="/contact" className="group btn-cta px-6 py-3 text-sm flex items-center justify-center gap-2 w-fit shadow-sm mt-2">
                  Contact the Clinic
                  <Icon icon="mdi:arrow-right" className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeUp>

          </article>
        </div>
      </section>
    </main>
  )
}