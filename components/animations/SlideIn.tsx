'use client';

import { motion } from 'framer-motion';
import { slideUpVariants } from '@/lib/animations';
import { ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SlideIn({ children, className = '', delay = 0 }: SlideInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={slideUpVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
