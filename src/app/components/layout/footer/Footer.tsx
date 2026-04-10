import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Footer = () => {
  // We only need the scroll state now
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 400);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='pt-12 relative'>
      {/* ... the rest of your beautiful footer JSX stays exactly the same! ... */}      
      {/* =========================================
          PRE-FOOTER CTA SECTION 
          ========================================= */}
      <div className='max-w-[82.8rem] mx-auto px-5 sm:px-7'>
        <div className='bg-[#F3EBE1] rounded-[2rem] p-8 sm:p-10 lg:p-16 mb-16 lg:mb-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden shadow-sm'>
          
          <div className='w-full lg:w-1/2 z-10 flex flex-col items-center text-center lg:items-start lg:text-left'>
            <h2 className='text-4xl md:text-5xl lg:text-[4rem] font-serif text-brand-dark mb-4 leading-tight'>
              Transform your <br className="hidden lg:block" /> skin with us
            </h2>
            <p className='text-brand-body mb-8 max-w-md text-base md:text-lg'>
              Book a consultation with our dermatology specialists and take the first step toward lasting results.
            </p>
            <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
              <Link href="/contact" className='btn-cta px-6 py-3 text-sm flex items-center gap-2'>
                <Icon icon="mdi:calendar-check" width="18" height="18" />
                Book an Appointment
              </Link>
              <Link href="/services" className='bg-transparent border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-bg px-6 py-3 rounded-full transition-colors font-medium uppercase tracking-wide text-sm flex items-center gap-2'>
                <Icon icon="mdi:sparkles" width="18" height="18" />
                Our Service
              </Link>
            </div>
          </div>

          <div className='hidden lg:block absolute right-0 top-0 w-1/2 h-full'>
            <div className="relative w-full h-full z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F3EBE1] via-[#F3EBE1]/60 to-transparent z-10" />
              <Image 
                src="/images/cta/cta-bg.webp" 
                alt="Skincare routine" 
                fill
                className="object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MAIN FOOTER LINKS & BOTTOM BAR 
          ========================================= */}
      <div className="w-full bg-brand-bg relative z-20 pb-6">
        <div className='max-w-[82.8rem] mx-auto px-5 sm:px-7 pt-4'>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-brand-border'>
            
            {/* Column 1: Brand & Badges */}
            <div className='lg:col-span-4 flex flex-col items-center text-center md:items-start md:text-left gap-6'>
              <Link href="/" className="inline-block hover:opacity-90 transition-opacity duration-300">
                <Image 
                  src="/images/logo/Logo.png" 
                  alt="Bella Skin" 
                  width={200} 
                  height={60} 
                  className="h-10 w-auto object-contain" 
                />
              </Link>
              <p className='text-brand-body opacity-80 max-w-[16rem] mx-auto md:mx-0 leading-relaxed'>
                Empowering individuals with innovative skincare solutions. Let's create lasting results together.
              </p>
              <div className='flex justify-center md:justify-start gap-4 mt-2'>
                <div className='flex items-center gap-1.5 text-brand-dark text-sm font-medium'>
                  <Icon icon="mdi:check-decagram-outline" width="18" height="18" className="text-brand-sage-hover" />
                  FDA Approved
                </div>
                <div className='flex items-center gap-1.5 text-brand-dark text-sm font-medium'>
                  <Icon icon="mdi:shield-check-outline" width="18" height="18" className="text-brand-sage-hover" />
                  Board Certified
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className='lg:col-span-3 flex flex-col items-center text-center md:items-start md:text-left gap-5'>
              <h4 className='font-serif text-[1.75rem] text-brand-dark'>Services</h4>
              <ul className='flex flex-col items-center md:items-start gap-3.5'>
                {[
                  'Acne & Blemish Control', 
                  'Anti-Aging Treatments', 
                  'Laser Hair Removal', 
                  'Skin Rejuvenation', 
                  'Hair Restoration', 
                  'Medical Dermatology'
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={`/services/${item.toLowerCase().replace(/ & | /g, '-')}`} className='text-brand-body hover:text-brand-sage-hover transition-colors text-[15px]'>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Links */}
            <div className='lg:col-span-2 flex flex-col items-center text-center md:items-start md:text-left gap-5'>
              <h4 className='font-serif text-[1.75rem] text-brand-dark'>Links</h4>
              <ul className='flex flex-col items-center md:items-start gap-3.5'>
                {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className='text-brand-body hover:text-brand-sage-hover transition-colors text-[15px]'>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Details */}
            <div className='lg:col-span-3 flex flex-col items-center text-center md:items-start md:text-left gap-5'>
              <h4 className='font-serif text-[1.75rem] text-brand-dark'>Contact Details</h4>
              <div className='flex flex-col items-center md:items-start gap-5 text-[15px]'>
                <div className='flex flex-col xl:flex-row items-center xl:items-start gap-2 xl:gap-3 text-brand-body'>
                  <Icon icon="mdi:map-marker-outline" width="22" height="22" className="flex-shrink-0 mt-0 xl:mt-0.5 text-brand-sage-hover" />
                  <p>15 Harley Street<br/>London W1G 9QQ<br/>United Kingdom</p>
                </div>
                
                <Link href="tel:+442071234567" className='flex flex-col xl:flex-row items-center gap-2 xl:gap-3 text-brand-body hover:text-brand-sage-hover transition-colors'>
                  <Icon icon="mdi:phone-outline" width="22" height="22" className="flex-shrink-0 text-brand-sage-hover" />
                  <p>+44 20 7123 4567</p>
                </Link>
                
                <Link href="mailto:hello@bellaskin.co.uk" className='flex flex-col xl:flex-row items-center gap-2 xl:gap-3 text-brand-body hover:text-brand-sage-hover transition-colors'>
                  <Icon icon="mdi:email-outline" width="22" height="22" className="flex-shrink-0 text-brand-sage-hover" />
                  <p>hello@bellaskin.co.uk</p>
                </Link>
              </div>
            </div>

          </div>

          {/* BOTTOM BAR WITH LEGAL LINKS */}
          <div className='flex flex-col lg:flex-row justify-between items-center py-8 gap-6 text-[14px] text-brand-body relative'>
            
            <div className='opacity-80 text-center lg:text-left'>
              Designed by{' '}
              <Link 
                href="https://webpaitech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-brand-dark hover:text-brand-sage-hover transition-colors"
              >
                Webpai Tech
              </Link>
            </div>

            <div className='flex gap-3'>
              <Link href="#" target="_blank" className='flex items-center justify-center w-10 h-10 rounded-full bg-brand-border/40 hover:bg-brand-border transition-colors text-brand-dark'>
                <Icon icon="mdi:instagram" width="20" height="20" />
              </Link>
              <Link href="#" target="_blank" className='flex items-center justify-center w-10 h-10 rounded-full bg-brand-border/40 hover:bg-brand-border transition-colors text-brand-dark'>
                <Icon icon="mdi:facebook" width="20" height="20" />
              </Link>
              <Link href="#" target="_blank" className='flex items-center justify-center w-10 h-10 rounded-full bg-brand-border/40 hover:bg-brand-border transition-colors text-brand-dark'>
                <Icon icon="mdi:linkedin" width="20" height="20" />
              </Link>
              <Link href="#" target="_blank" className='flex items-center justify-center w-10 h-10 rounded-full bg-brand-border/40 hover:bg-brand-border transition-colors text-brand-dark'>
                <Icon icon="ri:twitter-x-line" width="18" height="18" />
              </Link>
            </div>

            <div className='opacity-80 text-center lg:text-right flex flex-col sm:flex-row items-center gap-4 justify-end'>
               <div className='flex gap-4 border-b sm:border-b-0 sm:border-r border-brand-dark/20 pb-2 sm:pb-0 sm:pr-4'>
                 <Link href="/privacy-policy" className="hover:text-brand-sage-hover transition-colors">Privacy Policy</Link>
                 <Link href="/terms" className="hover:text-brand-sage-hover transition-colors">Terms of Service</Link>
               </div>
               <span>© {new Date().getFullYear()} Bella Skin. All Rights Reserved</span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer