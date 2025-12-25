import type { Metadata } from 'next';
import { Almarai } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'],
  variable: '--font-almarai',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '2Build - Soluciones de Ingeniería para Datacenter | Chile',
  description: 'Desarrolladores de Infraestructura Física Crítica. 10 años de experiencia en soluciones efectivas y sostenibles para data centers en Chile.',
  keywords: ['data center', 'infraestructura crítica', 'ingeniería', 'Chile', 'HVAC', 'certificación'],
  authors: [{ name: '2Build' }],
  openGraph: {
    title: '2Build - Soluciones de Ingeniería para Datacenter',
    description: 'Desarrolladores de Infraestructura Física Crítica con 10 años de experiencia',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={almarai.variable}>
      <body className="font-almarai bg-white text-gray-800 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
