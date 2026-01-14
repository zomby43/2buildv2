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
  icons: {
    icon: [
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/images/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/images/favicon/site.webmanifest',
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
