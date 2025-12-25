'use client';

import { motion } from 'framer-motion';
import { Service } from '@/types/service';
import {
  ArrowRight,
  SearchCheck,
  Ruler,
  Building2,
  Zap,
  Award,
  ShieldCheck,
  ClipboardCheck,
  Network,
  LucideIcon
} from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
};

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  SearchCheck,
  Ruler,
  Building2,
  Zap,
  Award,
  ShieldCheck,
  ClipboardCheck,
  Network
};

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || SearchCheck;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group card-modern p-6 flex flex-col"
    >
      {/* Icon badge */}
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 text-neutral-900 transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
        {service.title}
      </h3>

      {/* Short description or placeholder */}
      <p className="text-sm text-neutral-600 line-clamp-2 flex-grow">
        {service.fullDescription.substring(0, 100)}...
      </p>

      {/* Arrow icon */}
      <div className="mt-4 flex items-center text-sm font-medium text-neutral-900 group-hover:text-brand-blue group-hover:translate-x-1 transition-all">
        Ver más
        <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </motion.div>
  );
}
