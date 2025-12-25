'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '@/types/service';
import { Button } from '@/components/ui/Button';
import {
  X,
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

interface ServiceModalProps {
  service: Service | null;
  open: boolean;
  onClose: () => void;
}

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

export function ServiceModal({ service, open, onClose }: ServiceModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!service || typeof window === 'undefined') return null;

  const Icon = iconMap[service.icon] || SearchCheck;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
        <div
          className="relative bg-white rounded-2xl shadow-large max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="absolute top-4 right-4">
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="!p-2"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="p-8">
            {/* Icon badge */}
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-red to-brand-blue text-white">
              <Icon className="w-7 h-7" />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-neutral-900 mb-6">
              {service.title}
            </h3>

            {/* Description */}
            <div className="prose prose-neutral max-w-none">
              <p className="text-lg leading-relaxed text-neutral-600">
                {service.fullDescription}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <Button
                href={`mailto:contacto@2build.cl?subject=Consulta sobre ${service.title}`}
                variant="primary"
                size="md"
              >
                Solicitar Información
              </Button>
            </div>
          </div>
        </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
