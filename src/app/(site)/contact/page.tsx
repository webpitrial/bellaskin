'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

// Import services data for the dropdown
import { servicesData } from '@/lib/data/services'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion'

// --- REUSABLE FADE-UP WRAPPER FOR SCROLL ANIMATIONS ---
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

export default function ContactPage() {
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  // Clinic Time Slots
  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'
  ];

  const faqList = [
    {
      faq_que: "How do I book my initial consultation?",
      faq_ans: "You can request an appointment using the contact form above, or by calling our clinic directly. Once your request is received, our patient coordinator will reach out within 24 hours to match you with the appropriate specialist."
    },
    {
      faq_que: "Are there specific days reserved only for treatments?",
      faq_ans: "Yes. To ensure our patients receive uninterrupted, focused care during procedures, Fridays and Saturdays are strictly reserved for scheduled treatments and procedures only. Our OPD (Outpatient Department) and initial consultations are held from Monday to Thursday."
    },
    {
      faq_que: "Do you offer virtual skin assessments?",
      faq_ans: "We do offer preliminary virtual consultations for patients travelling from outside of London. However, a comprehensive in-person clinical assessment is required before any medical-grade treatments can commence."
    },
    {
      faq_que: "What is your cancellation policy for booked slots?",
      faq_ans: "We require a minimum of 48 hours' notice to cancel or reschedule an appointment. Cancellations made within 48 hours will incur a fee, as these dedicated clinical slots are highly sought after."
    }
  ];

  return (
    <main className="w-full bg-transparent overflow-hidden">

      {/* 1. HEADER SECTION */}
      {/* FIXED: Reduced mobile top padding from pt-32 to pt-20 and tightened pb */}
      <section className="w-full pt-20 md:pt-32 lg:pt-40 pb-6 md:pb-12 px-5 sm:px-7 max-w-[82.8rem] mx-auto text-center">
        <FadeUp>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#141414] leading-[1.05] tracking-tight">
            Get in touch
          </h1>
        </FadeUp>
      </section>

      {/* 2. FORM & CLINIC HOURS */}
      <section className="w-full py-6 md:py-12 px-5 sm:px-7 max-w-[82.8rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:h-[760px]">
          
          {/* Left: Detailed Booking Form */}
          <FadeUp delay={0.1} className="w-full lg:w-1/2 h-full">
            <div className="bg-white/90 backdrop-blur-md border border-[#141414]/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 shadow-xl h-full flex flex-col justify-center relative z-20">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-serif text-[#141414] mb-3">Book your session</h2>
                <p className="text-sm md:text-base text-[#141414]/70 font-sans">Request an appointment with our specialists.</p>
              </div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" required className="w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm" />
                <input type="email" placeholder="Email Address" required className="w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm" />
                
                <input type="tel" placeholder="Phone Number" required className="w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm" />
                <select required className="w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm appearance-none text-[#141414] cursor-pointer">
                  <option value="">Select Therapy</option>
                  {servicesData.map((service) => (
                     <option key={service.id} value={service.title}>{service.title}</option>
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

                <textarea placeholder="Notes / Additional Information" rows={3} className="md:col-span-2 w-full bg-[#F7F2EA]/50 border border-[#141414]/10 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#CBB79E] transition-colors font-sans text-sm resize-none"></textarea>
                
                <div 
                  className="md:col-span-2 flex items-start gap-3 cursor-pointer mt-1"
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

                <button type="submit" className="md:col-span-2 group btn-cta px-6 md:px-8 py-3 md:py-4 text-sm flex items-center justify-center gap-2 md:gap-3 mt-3">
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

          {/* Right: Image & Clinic Hours */}
          <FadeUp delay={0.2} className="w-full lg:w-1/2 h-[500px] lg:h-full relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl">
            <Image 
              src="/images/contact/clinic-reception.webp" 
              alt="Bella Skin Reception" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover" 
            />
            {/* Glassmorphism Hours Overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-[1.5rem] p-6 md:p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-serif text-white mb-6">Clinic hours</h3>
              <div className="flex flex-col gap-4 font-sans text-sm md:text-base">
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-medium">Mon - Thu <span className="text-[10px] uppercase tracking-wider opacity-90 ml-2">(OPD & Treatments)</span></span>
                  <span className="font-semibold">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-medium">Fri - Sat <span className="text-[10px] uppercase tracking-wider opacity-90 ml-2">(Treatments Only)</span></span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* 3. FIND OUR CLINIC (Interactive Google Map) */}
      <section className="w-full py-16 md:py-24 px-5 sm:px-7 max-w-[82.8rem] mx-auto">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#141414] mb-3">Find our clinic</h2>
            <p className="text-sm md:text-base text-[#141414]/70 font-sans">Located in the prestigious medical district of London.</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border border-[#141414]/10 bg-[#E5D9CC]/20">
            
            {/* Live Google Maps Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.684145946115!2d-0.1491745230353198!3d51.51901841029241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad581373a6d%3A0xc48512217c0fb70c!2s15%20Harley%20St%2C%20London%20W1G%209QQ%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(20%) contrast(1.1) opacity(0.9)" }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0"
            ></iframe>
            
            {/* Floating Glassmorphism Address Card */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 max-w-[400px] bg-white/90 backdrop-blur-xl border border-white/40 p-6 md:p-8 rounded-[1.5rem] shadow-2xl z-10 pointer-events-none">
              <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[#141414]">Bella Skin London</h3>
              <div className="flex items-start gap-3 text-sm md:text-base text-[#141414]/80 font-sans mb-3">
                <Icon icon="mdi:map-marker-outline" className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#CBB79E]" />
                <p>15 Harley Street<br/>London W1G 9QQ<br/>United Kingdom</p>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-base text-[#141414]/80 font-sans mb-3">
                <Icon icon="mdi:phone-outline" className="w-5 h-5 text-[#CBB79E]" />
                <p>+44 20 7123 4567</p>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-base text-[#141414]/80 font-sans">
                <Icon icon="mdi:email-outline" className="w-5 h-5 text-[#CBB79E]" />
                <p>hello@bellaskin.co.uk</p>
              </div>
              
              <a 
                href="https://maps.google.com/?q=15+Harley+Street+London" 
                target="_blank" 
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#141414] text-[#F7F2EA] hover:bg-[#CBB79E] hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider w-full pointer-events-auto"
              >
                Get Directions
                <Icon icon="mdi:arrow-top-right" className="w-4 h-4" />
              </a>
            </div>

          </div>
        </FadeUp>
      </section>

      {/* 4. FAQs SECTION (Using Radix/shadcn Accordion) */}
      <section className="w-full py-16 md:py-24 px-5 sm:px-7 max-w-[48rem] mx-auto mb-10">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#141414] mb-3">Quick ways to connect</h2>
            <p className="text-sm md:text-base text-[#141414]/70 font-sans">Everything you need to know about booking with us.</p>
          </div>
        </FadeUp>

        {/* Applying the specific background and borders you requested */}
        <FadeUp delay={0.1}>
          <div className="bg-[#E5D9CC]/20 rounded-[2rem] p-6 md:p-10 border border-[#141414]/5">
            <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
              {faqList.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-[#141414]/15 bg-transparent last:border-0"
                >
                  <AccordionTrigger 
                    className="hover:no-underline py-6 px-2 md:px-4 group-hover:cursor-pointer text-left bg-transparent hover:bg-transparent data-[state=open]:bg-transparent"
                  >
                    <h4 className="text-lg md:text-xl font-medium text-[#141414] pr-6 font-sans">
                      {item.faq_que}
                    </h4>
                  </AccordionTrigger>
                  
                  <AccordionContent 
                    className="pb-8 pt-2 px-2 md:px-4 bg-transparent"
                  >
                    <p className="text-[15px] md:text-base leading-relaxed text-[#141414]/70 max-w-[95%] font-sans">
                      {item.faq_ans}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeUp>
      </section>

    </main>
  )
}