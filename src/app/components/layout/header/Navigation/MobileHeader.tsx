'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react'; 
import { motion, AnimatePresence } from 'framer-motion';

interface MobileHeaderProps {
    items: any[]; 
    isOpen: boolean;
    onClose: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ items, isOpen, onClose }) => {
    // State to track which menu item is expanded
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleExpand = (label: string) => {
        setExpandedItem(expandedItem === label ? null : label);
    };

    return (
        <div 
            className={`fixed inset-0 z-[60] bg-brand-bg w-full h-[100dvh] flex flex-col overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-8 invisible pointer-events-none'
            }`}
        >
            <nav className="flex-1 px-6 pt-24 pb-12 flex flex-col justify-start">
                <ul className="flex flex-col">
                    {items.map((item, index) => {
                        const hasChildren = item.children && item.children.length > 0;
                        const isExpanded = expandedItem === item.label;

                        return (
                            <li 
                                key={index} 
                                className="border-b border-brand-border transform transition-all duration-500"
                                style={{ 
                                    transitionDelay: isOpen ? `${(index + 1) * 75}ms` : '0ms',
                                    opacity: isOpen ? 1 : 0,
                                    transform: isOpen ? 'translateY(0)' : 'translateY(16px)'
                                }}
                            >
                                {hasChildren ? (
                                    <div className="flex flex-col w-full">
                                        {/* Trigger for the dropdown */}
                                        <button 
                                            onClick={() => toggleExpand(item.label)}
                                            className="flex items-center justify-between w-full py-6 text-brand-dark text-3xl font-medium uppercase tracking-wide text-left"
                                        >
                                            {item.label}
                                            <Icon 
                                                icon="mdi:chevron-down" 
                                                className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                                                width="32" 
                                            />
                                        </button>

                                        {/* Sub-menu (Individual Services) */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.ul 
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden flex flex-col gap-2 pb-6 pl-4"
                                                >
                                                    {item.children.map((child: any, childIdx: number) => (
                                                        <li key={childIdx}>
                                                            <Link 
                                                                href={child.href} 
                                                                onClick={onClose}
                                                                className="flex items-center gap-3 py-3 text-brand-dark/70 hover:text-brand-sage-hover transition-colors text-xl font-medium uppercase tracking-wider"
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-sage-hover"></span>
                                                                {child.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    {/* Link to main services page */}
                                                    <li className="pt-2">
                                                        <Link 
                                                            href="/services"
                                                            onClick={onClose}
                                                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-dark/50 hover:text-brand-dark"
                                                        >
                                                            All Services <Icon icon="mdi:arrow-right" />
                                                        </Link>
                                                    </li>
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link 
                                        href={item.href} 
                                        onClick={onClose}
                                        className="block py-6 text-brand-dark hover:text-brand-sage-hover transition-colors text-3xl font-medium uppercase tracking-wide"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                    
                    {/* Unified Mobile Call to Action */}
                    <li 
                        className="pt-10 transform transition-all duration-500"
                        style={{ 
                            transitionDelay: isOpen ? `${(items.length + 1) * 75}ms` : '0ms',
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? 'translateY(0)' : 'translateY(16px)'
                        }}
                    >
                        <Link
                            href={'/contact'}
                            onClick={onClose}
                            className='w-full group btn-cta text-xl py-5 shadow-xl'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-90">
                              <path d="M12 2C12 2 14.5 7 12 12C9.5 7 12 2 12 2Z" />
                              <path d="M12 22C12 22 9.5 17 12 12C14.5 17 12 22 12 22Z" />
                              <path d="M2 12C2 12 7 9.5 12 12C7 14.5 2 12 2 12Z" />
                              <path d="M22 12C22 12 17 14.5 12 12C17 9.5 22 12 22 12Z" />
                            </svg>
                            Book Appointment
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Footer / Utility Links */}
            <div className="px-6 py-8 bg-brand-dark text-brand-bg flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-semibold tracking-widest">
                <div className="flex space-x-6">
                    {/* Changed links to Privacy Policy and Terms of Service */}
                    <Link href="/privacy-policy" onClick={onClose} className="hover:text-brand-sage transition-colors">PRIVACY POLICY</Link>
                    <Link href="/terms" onClick={onClose} className="hover:text-brand-sage transition-colors">TERMS</Link>
                </div>
                
                {/* Social Icons Updated to Instagram, Facebook, LinkedIn, X */}
                <div className="flex space-x-6">
                    <a href="#" aria-label="Instagram" className="hover:text-brand-sage transition-colors">
                        <Icon icon="mdi:instagram" width="24" height="24" />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-brand-sage transition-colors">
                        <Icon icon="mdi:facebook" width="24" height="24" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-brand-sage transition-colors">
                        <Icon icon="mdi:linkedin" width="24" height="24" />
                    </a>
                    <a href="#" aria-label="X (Twitter)" className="hover:text-brand-sage transition-colors">
                        <Icon icon="ri:twitter-x-fill" width="22" height="22" />
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default MobileHeader;