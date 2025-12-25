import { CONTACT_INFO } from '@/lib/constants';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-neutral-800/15 bg-white">
      <div className="section-container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="/images/logo.svg"
                alt="2Build Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-neutral-600 max-w-md">
              Desarrolladores de Infraestructura Física Crítica para Data Centers.
              10 años de experiencia en soluciones efectivas y sostenibles.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 mb-4">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-neutral-600 hover:text-brand-blue transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm text-neutral-600 hover:text-brand-blue transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-sm text-neutral-600 hover:text-brand-blue transition-colors">
                  Proyectos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm text-neutral-600 hover:text-brand-blue transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-neutral-600 hover:text-brand-blue transition-colors flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} {CONTACT_INFO.companyName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
