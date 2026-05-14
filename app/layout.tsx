import type {Metadata} from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Tangison | Sovereign Intelligence Infrastructure',
  description: 'Intelligence built on what remains. We build strategic systems, AI-native infrastructure, and resilient operational platforms for African enterprise.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-atlantic-black scroll-smooth">
      <body className="bg-atlantic-black text-skeleton-bone min-h-screen flex flex-col" suppressHydrationWarning>
        <div className="noise-overlay" />
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}