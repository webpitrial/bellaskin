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
  { id: 'introduction',       num: '01', label: 'Introduction' },
  { id: 'medical-disclaimer', num: '02', label: 'Medical Disclaimer' },
  { id: 'appointments',       num: '03', label: 'Appointments & Cancellations' },
  { id: 'pricing',            num: '04', label: 'Pricing & Payments' },
  { id: 'refusal',            num: '05', label: 'Right to Refuse Treatment' },
  { id: 'minors',             num: '06', label: 'Treatment of Minors' },
  { id: 'liability',          num: '07', label: 'Limitation of Liability' },
  { id: 'law',                num: '08', label: 'Governing Law' },
]

export default function TermsOfServicePage() {
  const [activeId, setActiveId] = useState('introduction')

useEffect(() => {
    const handleScroll = () => {
      // Set the default to the first section
      let currentSection = SECTIONS[0].id;

      // Loop through all sections
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          // If the top of the section crosses the 300px mark (just below your sticky header),
          // it becomes the new active section.
          if (el.getBoundingClientRect().top <= 300) {
            currentSection = section.id;
          }
        }
      }
      
      // FIXED: Changed from setActiveSection to setActiveId
      setActiveId(currentSection);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call it once immediately on mount to set the correct initial state
    handleScroll();

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
      <section className="w-full pt-24 md:pt-40 pb-8 md:pb-16 px-5 sm:px-7 max-w-[82.8rem] mx-auto">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5D9CC] bg-[#E5D9CC]/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E]"></span>
            <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#141414]/80 font-sans">Legal</span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif text-[#141414] leading-[1.05] tracking-tight mb-4">Terms & Conditions</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="font-sans text-sm text-[#141414]/50">Last updated: 15 April 2026</p>
        </FadeUp>
      </section>

{/* ════════ BODY ════════ */}
      <section className="w-full pb-20 md:pb-24 px-5 sm:px-7 max-w-[82.8rem] mx-auto">
        
        {/* CHANGED: lg:flex-row to trigger the layout change only on desktops */}
        <div className="flex flex-col lg:flex-row items-start gap-0 lg:gap-24">

          {/* ── STICKY TOC (Hidden on Mobile/Tablet) ── */}
          {/* CHANGED: Added 'hidden lg:block' and removed all the messy mobile CSS */}
          <aside className="hidden lg:block sticky top-24 z-40 w-64 flex-shrink-0 h-max">
            <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#141414]/40 mb-6 px-2">Contents</p>
            <nav className="flex flex-col gap-1 hide-scroll">
              {SECTIONS.map(s => (
                <button 
                  key={s.id} 
                  onClick={() => scrollTo(s.id)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-left w-full ${
                    activeId === s.id ? 'bg-[#E5D9CC]/30 text-[#141414]' : 'bg-transparent text-[#141414]/70 hover:bg-[#141414]/5'
                  }`}
                >
                  <span className={`font-sans text-[10px] font-bold tracking-wider ${activeId === s.id ? 'text-[#CBB79E]' : 'text-[#141414]/40'}`}>{s.num}</span>
                  <span className="font-sans text-sm font-medium">{s.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* ── RIGHT: CONTENT ── */}
          {/* CHANGED: Added 'mx-auto lg:mx-0' to perfectly center the text on iPads and phones */}
          <article className="min-w-0 flex-1 w-full max-w-3xl mx-auto lg:mx-0">
          
          {/* ... the rest of your FadeUp content remains exactly the same below here! ... */}
            <FadeUp>
              <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-10">
                These terms and conditions govern your use of the Bella Skin clinic, our website, and any treatments or services provided by us. By booking an appointment or proceeding with a treatment, you agree to be bound by these clinical terms of service.
              </p>
              <div className="w-full h-px bg-[#141414]/10 mb-14" />
            </FadeUp>

            {/* 01 */}
            <FadeUp delay={0.1}>
              <div className="mb-14">
                <h2 id="introduction" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Introduction</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">Bella Skin operates from 15 Harley Street, London W1G 9QQ. All clinical and aesthetic services provided are subject to prior medical consultation and evaluation by our trained practitioners to ensure suitability and safety.</p>
              </div>
            </FadeUp>

            {/* 02 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="medical-disclaimer" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Medical Disclaimer</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">Aesthetic medicine and dermatology are not exact sciences. While we utilize industry-leading technology and highly skilled medical professionals, clinical outcomes vary based on individual biology, lifestyle, and adherence to aftercare.</p>
                <ul className="flex flex-col gap-3 font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> We cannot guarantee identical results to those seen in clinical photographs or other patients.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> Treatments provided by Bella Skin are elective and are not a substitute for emergency medical care.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 03 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="appointments" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Appointments & Cancellations</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">Clinical time is highly valuable. To ensure all patients have access to care, we enforce a strict scheduling policy:</p>
                <ul className="flex flex-col gap-3 font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> <strong>Deposits:</strong> A non-refundable booking fee may be required to secure consultation and treatment slots.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> <strong>Cancellations:</strong> We require a minimum of 48 hours' notice to cancel or reschedule an appointment without penalty.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> <strong>Late Arrivals:</strong> If you are more than 15 minutes late, your appointment may be cancelled to avoid disrupting the clinical schedule, and you will forfeit your booking fee.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 04 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="pricing" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Pricing & Payments</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">All prices listed on our website or marketing materials are starting guidelines. A definitive quote will only be provided following your in-person clinical assessment.</p>
                <ul className="flex flex-col gap-3 font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> Full payment is required immediately following the completion of your treatment.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> We accept all major credit/debit cards. We do not accept cash payments in the clinic for security reasons.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 05 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="refusal" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Right to Refuse Treatment</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed mb-4">Our primary commitment is to patient safety. Our medical practitioners reserve the right to refuse treatment to any individual if:</p>
                <ul className="flex flex-col gap-3 font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> The treatment is deemed medically unsuitable or unsafe for the patient.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> The patient has unrealistic expectations regarding clinical outcomes.</li>
                  <li className="flex gap-3"><Icon icon="mdi:rhombus-outline" className="w-3 h-3 text-[#CBB79E] mt-1.5 shrink-0 rotate-45" /> The patient behaves aggressively, abusively, or inappropriately towards our clinic staff.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 06 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="minors" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Treatment of Minors</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">Bella Skin strictly does not provide aesthetic injectables (such as Botox or dermal fillers) to anyone under the age of 18. Certain clinical dermatology treatments for acne may be provided to minors, but strictly require the physical presence and signed consent of a parent or legal guardian during all appointments.</p>
              </div>
            </FadeUp>

            {/* 07 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="liability" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Limitation of Liability</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">Bella Skin will not be held liable for any clinical complications or adverse reactions that arise as a direct result of a patient withholding medical information, failing to disclose medications, or refusing to follow explicit post-treatment aftercare instructions provided by our medical team.</p>
              </div>
            </FadeUp>

            {/* 08 */}
            <FadeUp>
              <div className="mb-14">
                <h2 id="law" className="font-serif text-2xl md:text-3xl text-[#141414] mb-4 scroll-mt-32">Governing Law</h2>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 leading-relaxed">These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to clinical services provided by Bella Skin will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              </div>
            </FadeUp>

            {/* CTA card */}
            <FadeUp>
              <div className="bg-[#E5D9CC]/20 border border-[#141414]/5 rounded-[2rem] p-8 md:p-12 flex flex-col gap-5 mt-10">
                <h3 className="font-serif text-2xl md:text-3xl text-[#141414] leading-snug m-0">Need clinical clarification?</h3>
                <p className="font-sans text-sm md:text-base text-[#141414]/70 m-0">If you have any questions regarding our terms of service or clinical policies before booking, our team is ready to assist you.</p>
                <Link href="/contact" className="group btn-cta px-6 py-3 text-sm flex items-center justify-center gap-2 w-fit shadow-sm mt-2">
                  Contact Us
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