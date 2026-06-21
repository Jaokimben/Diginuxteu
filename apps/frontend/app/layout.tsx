import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'NextGrowth MVP Demo',
  description: 'MVP de démonstration NextGrowth / DigiSell en Next.js + Node.js séparés.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
