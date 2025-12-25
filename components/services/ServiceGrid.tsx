"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Service } from "@/types/service";
import { ServiceCard } from "./ServiceCard";
import { ServiceModal } from "./ServiceModal";
import { SERVICES_SECTION } from "@/lib/constants";
import Particles from "@/components/ui/Particles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function ServiceGrid() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section
      id="servicios"
      className="relative w-full py-0 bg-gradient-to-b from-white to-[#e52a28] overflow-visible px-0 desktop:px-4 flex justify-center"
    >
      {/* Particles Background */}
      <div className="absolute inset-0">
        <Particles
          particleCount={100}
          particleColors={["#ffffff", "#ffffff", "#ffffff"]}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          sizeRandomness={0.5}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="frame-rails frame-rails--stacked relative z-10">
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl text-balance">
              {SERVICES_SECTION.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-700 text-balance">
              {SERVICES_SECTION.description}
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => handleServiceClick(service)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
