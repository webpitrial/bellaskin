'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import HeaderLink from './Navigation/HeaderLink'
import { headerData } from './Navigation/Menudata'
import MobileHeader from './Navigation/MobileHeader'
import { Icon } from '@iconify/react/dist/iconify.js'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const handleScroll = () => {
    setSticky(window.scrollY >= 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* REDUCED OUTSIDE PADDING: py-2 when sticky, py-4 otherwise */}
      <header className={`fixed top-0 z-[70] w-full px-4 sm:px-6 transition-all duration-300 ${sticky ? 'py-2' : 'py-4'}`}>
        
        {/* REDUCED INSIDE PADDING: py-2 */}
        <div className={`mx-auto max-w-7xl bg-[#FDFBF7]/85 backdrop-blur-md rounded-full px-6 py-2 transition-all flex items-center justify-between border border-[#F2EAE1] ${sticky ? 'shadow-md shadow-black/5' : 'shadow-sm'}`}>
          
          {/* Left: Navigation Links */}
          <div className='hidden lg:flex flex-1'>
            <ul className='flex gap-2'>
              {headerData.map((item, index) => (
                <HeaderLink key={index} item={item} />
              ))}
            </ul>
          </div>

          {/* Center: Logo */}
          <div className='flex-shrink-0 flex justify-center lg:flex-1'>
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              {/* REDUCED LOGO HEIGHT: h-6 instead of h-7 */}
              <Image 
                src="/images/logo/Logo.png" 
                alt="Bella Skin" 
                width={160} 
                height={40} 
                className="h-6 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right: Book Appointment Button & Mobile Toggle */}
          <div className='flex items-center justify-end flex-1 gap-4'>
            
            {/* REDUCED BUTTON HEIGHT: py-2 */}
            <Link
              href={'/contact'}
              className='hidden lg:flex group btn-cta px-5 py-2 text-sm'>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-90">
                <path d="M12 2C12 2 14.5 7 12 12C9.5 7 12 2 12 2Z" />
                <path d="M12 22C12 22 9.5 17 12 12C14.5 17 12 22 12 22Z" />
                <path d="M2 12C2 12 7 9.5 12 12C7 14.5 2 12 2 12Z" />
                <path d="M22 12C22 12 17 14.5 12 12C17 9.5 22 12 22 12Z" />
               </svg>
               Book Appointment
            </Link>

            {/* Mobile Menu Button - Animated CSS Hamburger */}
            <div className='lg:hidden flex items-center'>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-brand-dark w-8 h-8 relative focus:outline-none flex flex-col justify-center items-center"
                aria-label="Toggle menu"
              >
                <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${sidebarOpen ? 'rotate-45 delay-75' : '-translate-y-1.5'}`} />
                <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${sidebarOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${sidebarOpen ? '-rotate-45 delay-75' : 'translate-y-1.5'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <MobileHeader items={headerData} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}

export default Header