'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Construction, ArrowLeft } from 'lucide-react';

export function ProjectsHero() {
  return (
    <section className="relative w-full overflow-visible bg-[#0661df] py-0 px-0 desktop:px-4 flex justify-center min-h-[70vh]" style={{ paddingTop: 0, paddingBottom: 0 }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 blur-xs"
        style={{ backgroundImage: "url(/images/dc2.png)" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center py-24 px-4 max-w-4xl mx-auto">
          {/* Icon animado */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <Construction className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2"
          >
            <span className="mr-2 text-brand-red">●</span>
            <span className="text-sm font-medium text-white">En construcción</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-balance mb-6"
          >
            Proyectos
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-lg text-white/90 mb-8"
          >
            Próximamente presentaremos nuestra galería de proyectos de infraestructura física crítica y data centers realizados en Chile.
          </motion.p>

          {/* Message adicional */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-xl text-white/90 text-sm leading-relaxed mb-8"
          >
            Estamos trabajando en documentar nuestros proyectos más destacados. Aquí podrás conocer en detalle los desafíos, soluciones y resultados de nuestros trabajos en infraestructura crítica.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              href="/"
              variant="secondary"
              size="lg"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Volver al inicio
            </Button>
            <Button
              href={`mailto:contacto@2build.cl`}
              variant="primary"
              size="lg"
            >
              Contactar
            </Button>
          </motion.div>
      </div>
    </section>
  );
}
