'use client';

import { motion } from 'framer-motion';
import { aboutCards } from '@/data/about';
import { AboutCard } from './AboutCard';
import { ABOUT_SECTION } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-0 bg-neutral-50/80 border-y border-neutral-800/10 px-4 flex justify-center overflow-visible"
    >
      <div className="frame-rails frame-rails--stacked">
        <span className="frame-rail frame-rail--top" />
        <span className="frame-rail frame-rail--bottom" />
        <span className="frame-rail frame-rail--left" />
        <span className="frame-rail frame-rail--right" />
        <span className="frame-diamond frame-diamond--tl" />
        <span className="frame-diamond frame-diamond--tr" />
        <span className="frame-diamond frame-diamond--bl" />
        <span className="frame-diamond frame-diamond--br" />

        <div className="framed-shell framed-shell--grid">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl text-balance">
              {ABOUT_SECTION.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 text-balance">
              {ABOUT_SECTION.subtitle}
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {aboutCards.map((card) => (
              <AboutCard key={card.id} card={card} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
