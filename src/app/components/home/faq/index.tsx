'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

// --- CUSTOM INTERACTIVE FAQ ACCORDION (Matches Contact Page) ---
const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-[#141414]/15 last:border-0">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 px-2 md:px-4 text-left group transition-colors bg-transparent"
      >
        <span className="text-lg md:text-xl font-medium text-[#141414] font-sans pr-6">
          {question}
        </span>
        <div className={`w-6 h-6 rounded-full flex flex-shrink-0 items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#CBB79E]' : 'text-[#141414]'}`}>
          <Icon icon={isOpen ? "mdi:minus" : "mdi:plus"} className="w-6 h-6" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden px-2 md:px-4"
          >
            <p className="text-[15px] md:text-base leading-relaxed text-[#141414]/70 max-w-[95%] font-sans pb-8 pt-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Hardcoding the dermatology clinic FAQs to override the old agency API data
const clinicFaqs = [
  {
    faq_que: "What is the downtime after a laser resurfacing treatment?",
    faq_ans: "Downtime varies depending on the intensity of the laser used. For mild non-ablative treatments, you may experience 1-2 days of slight redness. For deeper ablative lasers, expect 5-7 days of recovery time."
  },
  {
    faq_que: "Do you offer consultations for first-time patients?",
    faq_ans: "Absolutely. We begin every new patient journey with our Comprehensive Skin Audit. This ensures we deeply understand your unique biological skin needs before recommending any tailored procedure."
  },
  {
    faq_que: "Are your aesthetic treatments painful?",
    faq_ans: "Patient comfort is our top priority. We utilize medical-grade topical anesthetics and advanced cooling technologies to ensure your experience is as painless and relaxing as possible."
  },
  {
    faq_que: "How long does it take to see results from the anti-aging regimen?",
    faq_ans: "While some treatments like dermal fillers offer immediate visible changes, skin-conditioning regimens (like microneedling or chemical peels) typically show their full, radiant results after 3 to 4 weeks as cellular turnover occurs."
  },
  {
    faq_que: "Are your skincare products and treatments safe for sensitive skin?",
    faq_ans: "Yes. All of our protocols are customized. During your initial audit, we assess your skin barrier health and select FDA-approved treatments specifically formulated to avoid triggering rosacea, eczema, or hypersensitivity."
  }
];

export default function FaqSection() {
  const [faqList] = useState(clinicFaqs);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-transparent py-16 md:py-24">
      <div className="w-full max-w-[64rem] mx-auto px-5 sm:px-7">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5D9CC] bg-[#E5D9CC]/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBB79E]"></span>
            <span className="uppercase tracking-widest text-[10px] sm:text-xs font-semibold text-[#141414]/80 font-sans">
              Clear your doubts
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#141414] leading-tight mb-4">
            Frequently Asked <br/> <span className="italic text-[#141414]/70">Questions</span>
          </h2>
        </motion.div>

        {/* Accordion List with the Contact Page styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* New wrapper matching the Contact page design */}
          <div className="bg-[#E5D9CC]/20 rounded-[2rem] p-6 md:p-10 border border-[#141414]/5">
            <div className="w-full flex flex-col gap-2">
              {faqList.map((item, index) => (
                <FAQItem 
                  key={index}
                  question={item.faq_que}
                  answer={item.faq_ans}
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}