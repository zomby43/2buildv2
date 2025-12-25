'use client';

import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-neutral-800/15 bg-white/80 backdrop-blur-xl"
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/images/logo.svg"
              alt="2Build Logo"
              className="h-14 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-600 hover:text-brand-blue transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-medium text-neutral-600 hover:text-brand-blue transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/proyectos"
              className="text-sm font-medium text-neutral-600 hover:text-brand-blue transition-colors"
            >
              Proyectos
            </Link>
            <Button
              href={`mailto:${CONTACT_INFO.email}`}
              variant="primary"
              size="sm"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-900" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-neutral-800/15 bg-white"
          >
            <div className="section-container py-4 space-y-3">
              <Link
                href="/"
                className="block py-2 text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="block py-2 text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/proyectos"
                className="block py-2 text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <div className="mt-4">
                <Button
                  href={`mailto:${CONTACT_INFO.email}`}
                  variant="primary"
                  size="md"
                  fullWidth
                >
                  Contacto
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
