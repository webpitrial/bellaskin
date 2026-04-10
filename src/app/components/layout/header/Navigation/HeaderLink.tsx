'use client'
import React, { useEffect, useState, Suspense, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const OFFSET = 80

const useActiveLink = (setActiveLink: (link: string) => void) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const updateActiveLink = () => {
      const fullPath = window.location.hash
        ? `${pathname}${window.location.hash}`
        : pathname
      setActiveLink(fullPath)
    }

    const handleScrollOffset = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition - OFFSET,
              behavior: 'smooth',
            })
          }, 0)
        }
      }
    }

    updateActiveLink()
    handleScrollOffset()

    window.addEventListener('hashchange', updateActiveLink)
    window.addEventListener('hashchange', handleScrollOffset)

    return () => {
      window.removeEventListener('hashchange', updateActiveLink)
      window.removeEventListener('hashchange', handleScrollOffset)
    }
  }, [pathname, searchParams, setActiveLink])
}

const HeaderLinkContent: React.FC<{ item: any }> = ({ item }) => {
  const [activeLink, setActiveLink] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false) // FIX: Touch detection state
  const pathname = usePathname() 
  const menuRef = useRef<HTMLLIElement>(null)

  useActiveLink(setActiveLink)
  
  useEffect(() => {
    // FIX: Listen for the first touch event to permanently mark device as a touch screen
    const handleTouch = () => setIsTouchDevice(true)
    window.addEventListener('touchstart', handleTouch, { once: true, passive: true })

    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside) // ADDED: Listen for taps outside on tablet
    
    return () => {
      window.removeEventListener('touchstart', handleTouch)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  const isActive = activeLink === item.href || (item.children && pathname.startsWith('/services'))

  const linkClasses = `px-3 py-1.5 font-medium transition-all duration-300 text-[15px] rounded-full flex items-center gap-1 ${
    isActive
      ? 'bg-brand-border-hover text-brand-dark' 
      : 'text-brand-body hover:bg-brand-border-hover/50 hover:text-brand-dark'
  }`

  if (!item.children) {
    return (
      <li>
        <Link href={item.href || '#'} className={linkClasses}>
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <li 
      ref={menuRef}
      className="relative"
      /* FIX: Only fire hover events if the user is on a desktop (mouse) device */
      onMouseEnter={() => !isTouchDevice && setIsOpen(true)}
      onMouseLeave={() => !isTouchDevice && setIsOpen(false)}
    >
      <button 
        /* FIX: Ensure default event prevention so mobile taps don't double-fire */
        onClick={(e) => {
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
        className={linkClasses}
      >
        {item.label}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <Icon icon="mdi:chevron-down" width="16" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: 10, rotateX: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top center" }}
            className="absolute top-full pt-6 w-[90vw] max-w-[600px] cursor-default left-0 translate-x-0 xl:left-1/2 xl:-translate-x-1/2"
          >
            <div className="bg-[#FDFBF7] rounded-[2rem] shadow-2xl border border-brand-border overflow-hidden relative z-[80] flex flex-col">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-6">
                
                {item.children.map((child: any, index: number) => {
                  if (!child) return null;

                  return (
                    <Link 
                      key={index} 
                      href={child.href || '#'}
                      onClick={() => setIsOpen(false)}
                      className="group flex flex-col p-3 rounded-2xl hover:bg-brand-border-hover transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-brand-dark font-sans text-xs">
                          {child.title}
                        </h4>
                        <Icon 
                          icon="mdi:arrow-top-right" 
                          className="opacity-0 group-hover:opacity-100 text-brand-dark transition-all transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" 
                          width="14" 
                        />
                      </div>
                      <p className="text-[11px] text-brand-body font-sans line-clamp-1">
                        {child.desc}
                      </p>
                    </Link>
                  )
                })}
              </div>

              <div className="w-full bg-brand-border-hover/30 border-t border-brand-border py-4 flex items-center justify-center">
                <Link 
                  href="/services" 
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-dark hover:text-brand-sage-hover transition-colors"
                >
                  View All Services <Icon icon="mdi:arrow-right" width="14" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

const HeaderLink: React.FC<{ item: any }> = ({ item }) => (
  <Suspense fallback={null}>
    <HeaderLinkContent item={item} />
  </Suspense>
)

export default HeaderLink