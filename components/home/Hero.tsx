"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import Aurora from "@/components/ui/Aurora";
import {
  ArrowRight,
  Info,
  TrendingUp,
  Users,
  Target,
  LucideIcon,
} from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({
  value,
  label,
  suffix = "",
  icon: Icon,
}: {
  value: number;
  label: string;
  suffix?: string;
  icon: LucideIcon;
}) {
  const { count, setIsInView } = useCountUp(value, 2000);

  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="w-6 h-6 text-white opacity-80" />
      <div className="text-center">
        <div className="text-4xl font-bold text-white drop-shadow-lg">
          {count}
          {suffix}
        </div>
        <div className="mt-1 text-sm text-white opacity-90">{label}</div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full overflow-visible bg-gradient-subtle py-0 px-4 flex justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 blur-xs"
        style={{ backgroundImage: "url(/images/dc2.png)" }}
      />

      {/* Aurora effect */}
      <div className="absolute inset-0 z-10 opacity-50">
        <Aurora
          colorStops={["#0061dc", "#e42927", "#0061dc"]}
          amplitude={0.8}
          blend={0.9}
          speed={0.5}
        />
      </div>

      {/* Gradient overlay for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />

      <div className="frame-rails frame-rails--no-top-diamonds">
        <span className="frame-rail frame-rail--top" />
        <span className="frame-rail frame-rail--bottom" />
        <span className="frame-rail frame-rail--left" />
        <span className="frame-rail frame-rail--right" />
        <span className="frame-diamond frame-diamond--tl" />
        <span className="frame-diamond frame-diamond--tr" />
        <span className="frame-diamond frame-diamond--bl" />
        <span className="frame-diamond frame-diamond--br" />

        <div className="framed-shell framed-shell--transparent relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 inline-flex items-center rounded-full border border-neutral-100/70 bg-white/70 px-4 py-1.5 text-sm font-medium text-neutral-800 shadow-sm backdrop-blur"
            >
              <span className="mr-2 text-brand-red">●</span>
              Infraestructura Física Crítica
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl font-bold tracking-tight text-neutral-100 sm:text-6xl lg:text-7xl text-balance"
            >
              {HERO_CONTENT.headline}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 text-lg leading-8 text-neutral-100 sm:text-xl text-balance max-w-4xl mx-auto"
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                href="#servicios"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Ver Servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="#about"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Conocer Más
                <Info className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 text-neutral-800"
            >
              <StatItem
                value={10}
                label="Años de Experiencia"
                suffix="+"
                icon={TrendingUp}
              />
              <StatItem
                value={25}
                label="Años Combinados"
                suffix="+"
                icon={Users}
              />
              <StatItem
                value={100}
                label="Enfoque en Calidad"
                suffix="%"
                icon={Target}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
