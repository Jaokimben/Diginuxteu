'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  ['Accueil', '/'],
  ['À propos', '/about'],
  ['DigiSell', '/digisell'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
  ['Carrière', '/careers'],
  ['Démo client', '/demo']
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link href="/" className="brand-wrap" aria-label="Accueil NextGrowth">
          <span className="brand-mark">NG</span>
          <span className="brand-copy">
            <strong className="brand">NextGrowth</strong>
            <span className="brand-subtitle">Digitalisation & Industrie 4.0</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          {nav.map(([label, href]) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link key={href} href={href} className={active ? 'nav-link nav-link-active' : 'nav-link'}>
                {label}
              </Link>
            );
          })}
        </nav>

        <Link href="/demo" className="header-cta">Voir la démo</Link>
      </div>
    </header>
  );
}
