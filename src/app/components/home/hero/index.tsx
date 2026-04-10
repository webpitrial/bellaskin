'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import StarRating from '../../shared/star-rating'
import { Icon } from '@iconify/react'

interface HeroProps {
  isPreloaderDone: boolean;
}

function HeroSection({ isPreloaderDone }: HeroProps) {
  const avatars = [
    '/images/home/avatar-1.webp',
    '/images/home/avatar-2.webp',
    '/images/home/avatar-3.webp',
    '/images/home/avatar-4.webp'
  ];

  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    const checkHover = () => {
      setIsHoverable(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    };
    checkHover();
    window.addEventListener('resize', checkHover);
    
    return () => {
      window.removeEventListener('resize', checkHover);
    };
  }, []);

  // --- MAGNETIC 3D TILT LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

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

  // --- DRAMATIC ANIMATION VARIANTS ---
  const smoothEase = [0.22, 1, 0.36, 1]; 

  const textVariants = {
    initial: { y: 60, opacity: 0 },
    animate: (customDelay: number) => ({
      y: 0, 
      opacity: 1,
      transition: { duration: 1.8, ease: smoothEase, delay: customDelay }
    })
  };

  const imageBaseVariants = {
    initial: { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
    animate: { 
      scale: 1, 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 2.2, ease: smoothEase, delay: 0.2 } 
    }
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 xl:pt-0 xl:pb-0 xl:flex xl:items-center xl:justify-center overflow-hidden bg-transparent">
      
      <div className='w-full max-w-[82.8rem] mx-auto px-5 sm:px-7 relative z-10 pointer-events-none'>
        
        <div className='flex flex-col xl:flex-row-reverse items-center justify-between gap-12 xl:gap-8'>
          
          {/* ---------------- RIGHT COLUMN: IMAGE --------------- */}
          <div 
            className='w-full sm:w-[85%] md:w-[70%] xl:w-[45%] mx-auto xl:mx-0 relative pointer-events-auto'
            style={{ perspective: isHoverable ? "1200px" : "none" }}
          >
            <motion.div
              key={isPreloaderDone ? 'hero-content-active' : 'hero-content-wait'}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: isHoverable ? rotateX : 0,
                rotateY: isHoverable ? rotateY : 0,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-full"
            >
              
              {/* IMAGE BASE */}
              <motion.div 
                variants={imageBaseVariants}
                initial="initial"
                animate={isPreloaderDone ? "animate" : "initial"}
                style={{ z: isHoverable ? 20 : 0 }} 
                className='relative w-full h-[40vh] md:h-[50vh] xl:h-[65vh] min-h-[350px] max-h-[700px] rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shadow-2xl'
              >
                <Image
                  src="/images/home/hero-zoomed.webp" 
                  alt="Glowing Skin Treatment"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>

              {/* Floating Card 1: FDA Approved */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={isPreloaderDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 1.5, ease: smoothEase, delay: 0.8 }}
                style={{ z: isHoverable ? 60 : 0 }} 
                className="absolute top-4 sm:top-10 left-0 sm:-left-6 lg:-left-10 bg-white/80 backdrop-blur-md p-1.5 sm:p-3 rounded-lg sm:rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] border border-white flex items-center gap-2 sm:gap-3 max-w-[110px] sm:max-w-[180px] cursor-default"
              >
                <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-brand-dark border border-brand-border shadow-sm">
                  <Icon icon="mdi:shield-check-outline" className="w-3 h-3 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-brand-dark text-[9px] sm:text-[13px] leading-tight">FDA-Approved</span>
                  <span className="text-[7px] sm:text-[10px] text-brand-dark/80 font-semibold">Certified Tech</span>
                </div>
              </motion.div>

              {/* Floating Card 2: Medical Grade */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={isPreloaderDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 1.5, ease: smoothEase, delay: 1.0 }}
                style={{ z: isHoverable ? 80 : 0 }} 
                className="absolute bottom-6 sm:bottom-24 left-0 sm:-left-4 lg:-left-6 bg-white/80 backdrop-blur-md p-1.5 sm:p-3 rounded-lg sm:rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] border border-white flex items-center gap-2 sm:gap-3 max-w-[110px] sm:max-w-[190px] cursor-default"
              >
                <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-brand-dark border border-brand-border shadow-sm">
                  <Icon icon="mdi:flask-outline" className="w-3 h-3 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-brand-dark text-[9px] sm:text-[13px] leading-tight">Medical-Grade</span>
                  <span className="text-[7px] sm:text-[10px] text-brand-dark/80 font-semibold">Proven Results</span>
                </div>
              </motion.div>

              {/* Floating Card 3: Social Proof */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isPreloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.5, ease: smoothEase, delay: 1.2 }}
                style={{ z: isHoverable ? 50 : 0 }} 
                className="absolute -bottom-4 sm:-bottom-8 right-0 sm:-right-4 lg:-right-8 bg-white/80 backdrop-blur-md p-2 sm:p-4 rounded-lg sm:rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] border border-white flex flex-col gap-1 sm:gap-2 max-w-[125px] sm:max-w-[210px] cursor-default"
              >
                <div className='gap-0.5 sm:gap-1 flex flex-col'>
                  <p className='text-[8px] sm:text-[13px] font-bold text-brand-dark leading-tight'>
                    Trusted by 15K+ clients
                  </p>
                  <div className="scale-[0.6] sm:scale-90 origin-left">
                    <StarRating count={5} color='#F59E0B' />
                  </div>
                </div>

                <ul className='avatar flex flex-row items-center pt-0.5 sm:pt-1'>
                  {avatars.map((imgSrc, index) => (
                    <li key={index} className='-mr-1 sm:-mr-2.5 z-1 relative transition-transform hover:-translate-y-1'>
                      <Image
                        src={imgSrc}
                        alt={`Client Avatar ${index + 1}`}
                        width={34}
                        height={34}
                        quality={100}
                        className='rounded-full border sm:border-[2px] border-white object-cover w-4 h-4 sm:w-[34px] sm:h-[34px] shadow-sm bg-white'
                        unoptimized={true}
                      />
                    </li>
                  ))}
                </ul>
              </motion.div>

            </motion.div>
          </div>

          {/* ---------------- LEFT COLUMN: TEXT CONTENT --------------- */}
          <div className='w-full xl:w-1/2 flex flex-col items-center text-center xl:items-start xl:text-left pointer-events-auto'>
            
            <motion.div 
              custom={0.1}
              variants={textVariants}
              initial="initial"
              animate={isPreloaderDone ? "animate" : "initial"}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-brand-bg/80 backdrop-blur-sm text-brand-dark mb-4 xl:mb-6 text-[11px] sm:text-sm font-medium shadow-sm"
            >
              <Icon icon="mdi:sparkles" className="text-brand-sage-hover" width="16" height="16" />
              <span>Personalized Dermatology</span>
            </motion.div>

            <motion.h1 
              custom={0.3}
              variants={textVariants}
              initial="initial"
              animate={isPreloaderDone ? "animate" : "initial"}
              className='text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-serif leading-[1.05] text-brand-dark mb-3 xl:mb-5'
            >
              Reveal Your <br className="hidden xl:block"/>
              Natural Radiance
            </motion.h1>

            <motion.p 
              custom={0.5}
              variants={textVariants}
              initial="initial"
              animate={isPreloaderDone ? "animate" : "initial"}
              className='text-sm sm:text-base md:text-lg text-brand-body max-w-lg mb-8 xl:mb-10 leading-relaxed opacity-90'
            >
              Take your skincare routine to the next level with personalized treatment plans and expert guidance from board-certified specialists.
            </motion.p>

            <motion.div 
              custom={0.7}
              variants={textVariants}
              initial="initial"
              animate={isPreloaderDone ? "animate" : "initial"}
              className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto'
            >
              <Link href='/contact' className='group btn-cta px-8 py-3.5 w-full sm:w-auto shadow-sm text-sm'>
                Contact Us
              </Link>
              <Link 
                href='/services' 
                className='flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto rounded-full border border-brand-dark text-brand-dark bg-brand-bg/50 backdrop-blur-sm hover:bg-brand-dark hover:text-brand-bg transition-colors font-medium uppercase tracking-wide text-sm'
              >
                View All Services
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* STATIC SCROLL BUTTON */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isPreloaderDone ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        onClick={scrollToNextSection}
        className="hidden xl:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center cursor-pointer hover:!opacity-100 transition-opacity duration-300 z-20 pointer-events-auto px-3 py-1"
      >
        <span className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">Scroll</span>
        <Icon icon="ph:arrow-down-light" width="22" height="22" className="text-brand-dark mt-1" />
      </motion.div>

    </section>
  )
}

export default HeroSection;