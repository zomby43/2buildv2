import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: '1',
    slug: 'due-diligence',
    title: 'Due Diligence - Técnica',
    fullDescription: 'Evaluamos a fondo cada proyecto desde el diseño hasta su ejecución, identificando riesgos y asegurando su viabilidad técnica y operativa. Nuestro enfoque garantiza que cada paso esté alineado con los estándares más altos, siendo clave para proyectos críticos como data centers.',
    image: '/images/services/1.jpg',
    order: 1,
    icon: 'SearchCheck'
  },
  {
    id: '2',
    slug: 'test-fit',
    title: 'Test Fit',
    fullDescription: 'Realizamos análisis detallados para evaluar la viabilidad de diseños y espacios en función de los requerimientos técnicos de cada proyecto. Este servicio asegura una planificación precisa, optimizando recursos y garantizando que las instalaciones críticas, como data centers, cumplan con las necesidades operativas desde el inicio.',
    image: '/images/services/2.jpg',
    order: 2,
    icon: 'Ruler'
  },
  {
    id: '3',
    slug: 'arquitectura',
    title: 'Arquitectura',
    fullDescription: 'Diseñamos soluciones arquitectónicas funcionales y adaptadas a las exigencias de proyectos críticos como data centers. Nuestro enfoque integra estética, eficiencia y viabilidad técnica, garantizando que cada espacio cumpla con los estándares operativos y de sostenibilidad requeridos por nuestros clientes.',
    image: '/images/services/3.jpg',
    order: 3,
    icon: 'Building2'
  },
  {
    id: '4',
    slug: 'electricidad-hvac',
    title: 'Electricidad HVAC',
    fullDescription: 'Desarrollamos soluciones eléctricas y de HVAC a medida, asegurando la integración eficiente de sistemas críticos. Nuestro enfoque se centra en la optimización del diseño y la implementación de infraestructuras robustas que garanticen el desempeño continuo y confiable de proyectos como data centers y ambientes críticos.',
    image: '/images/services/4.jpg',
    order: 4,
    icon: 'Zap'
  },
  {
    id: '5',
    slug: 'acompanamiento-certificacion',
    title: 'Acompañamiento en Certificación',
    fullDescription: 'Brindamos asesoría experta en procesos de certificación para garantizar que cada proyecto cumpla con los estándares nacionales e internacionales. Nuestro equipo guía a nuestros clientes desde la preparación inicial hasta la obtención de las certificaciones requeridas, asegurando calidad, seguridad y eficiencia operativa.',
    image: '/images/services/5.jpg',
    order: 5,
    icon: 'Award'
  },
  {
    id: '6',
    slug: 'seguridad-fisica',
    title: 'Seguridad Física',
    fullDescription: 'Diseñamos e implementamos soluciones avanzadas de seguridad física adaptadas a ambientes críticos. Desde el control de acceso hasta la protección perimetral, nuestras estrategias garantizan la integridad de las instalaciones y la continuidad operativa de proyectos como data centers.',
    image: '/images/services/6.jpg',
    order: 6,
    icon: 'ShieldCheck'
  },
  {
    id: '7',
    slug: 'comisionamiento',
    title: 'Comisionamiento',
    fullDescription: 'Llevamos a cabo procesos de comisionamiento completos para validar que los sistemas críticos operen según el diseño y los requisitos establecidos. Este servicio asegura que cada instalación cumpla con los más altos estándares de calidad y funcionalidad antes de entrar en operación.',
    image: '/images/services/7.jpg',
    order: 7,
    icon: 'ClipboardCheck'
  },
  {
    id: '8',
    slug: 'pci-ses-bms',
    title: 'PCI - SES - BMS',
    fullDescription: 'Integramos sistemas de protección contra incendios (PCI), sistemas eléctricos especializados (SES) y sistemas de gestión de edificios (BMS) para garantizar una operación segura y eficiente. Nuestro enfoque combina tecnología avanzada y diseño estratégico para optimizar el desempeño de infraestructuras críticas.',
    image: '/images/services/8.jpg',
    order: 8,
    icon: 'Network'
  }
];
