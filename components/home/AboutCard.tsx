'use client';

import { motion } from 'framer-motion';
import { AboutCard as AboutCardType } from '@/types';
import { Users, Lightbulb, UserCircle } from 'lucide-react';

interface AboutCardProps {
  card: AboutCardType;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'users': Users,
  'lightbulb': Lightbulb,
  'user-circle': UserCircle,
};

export function AboutCard({ card }: AboutCardProps) {
  const IconComponent = iconMap[card.icon] || Users;

  return (
    <motion.div
      variants={cardVariants}
      className="group card-modern p-8"
    >
      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 text-neutral-900 group-hover:bg-gradient-to-br group-hover:from-brand-red group-hover:to-brand-blue group-hover:text-white transition-all duration-300">
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-neutral-900 mb-3">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-neutral-600 leading-relaxed">
        {card.description}
      </p>
    </motion.div>
  );
}
