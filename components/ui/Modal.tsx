'use client';

import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { modalVariants, backdropVariants } from '@/lib/animations';
import React, { ReactNode, useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ open, onClose, children, title }: ModalProps) {
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

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
        <div
          className="modal-box max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {title && (
            <h3 className="text-xl font-almarai font-bold mb-4">{title}</h3>
          )}
          <div className="relative border-t border-slate-200 py-4"></div>
          <div className="font-almarai text-base leading-relaxed text-slate-600">
            {children}
          </div>
          <div className="relative border-b border-slate-200 py-4"></div>
          <div className="modal-action flex flex-col items-center mt-6">
            <button
              onClick={onClose}
              className="px-8 py-2 font-bold text-primary hover:bg-blue-50 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
