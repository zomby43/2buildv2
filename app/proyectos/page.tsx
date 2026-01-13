import type { Metadata } from 'next';
import { ProjectsHero } from '@/components/proyectos/ProjectsHero';

export const metadata: Metadata = {
  title: 'Proyectos - 2Build | Infraestructura Física Crítica',
  description: 'Próximamente: galería de nuestros proyectos de data centers e infraestructura crítica en Chile.',
};

export default function ProyectosPage() {
  return (
    <>
      <ProjectsHero />
    </>
  );
}
