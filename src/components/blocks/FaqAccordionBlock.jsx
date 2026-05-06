import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: 'var(--color-border, #e2e8f0)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 md:py-6 text-left bg-transparent border-0 cursor-pointer focus:outline-none focus-visible:ring-2 group"
        style={{ fontFamily: 'var(--font-heading)' }}
        aria-expanded={isOpen}
      >
        <span
          className="text-sm md:text-base font-semibold leading-snug transition-colors duration-150"
          style={{ color: isOpen ? 'var(--color-primary, #0ea5e9)' : 'var(--color-text, #0f172a)' }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-lg font-light mt-0.5"
          style={{ color: 'var(--color-primary, #0ea5e9)', display: 'inline-block', lineHeight: 1 }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="pb-5 md:pb-6 text-sm md:text-base leading-relaxed pr-8"
              style={{ color: 'var(--color-muted, #64748b)' }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqAccordionBlock({
  heading = 'Frequently Asked Questions',
  faqs = [],
}) {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = i => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section
      className="py-12 md:py-24 px-4 md:px-8"
      style={{ background: '#fff' }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight text-center mb-8 md:mb-12"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text, #0f172a)' }}
        >
          {heading}
        </h2>

        <div
          className="border px-4 md:px-8"
          style={{
            borderRadius: 'var(--radius-card, 1rem)',
            borderColor: 'var(--color-border, #e2e8f0)',
            background: 'var(--color-surface, #f8fafc)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
