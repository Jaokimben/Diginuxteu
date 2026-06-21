import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>NextGrowth</h3>
          <p>Startup marocaine spécialisée dans l’édition de solutions métiers de digitalisation d’entreprise.</p>
        </div>
        <div>
          <h4>Plan du site</h4>
          <div className="footer-links">
            <Link href="/about">À propos</Link>
            <Link href="/digisell">DigiSell</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/careers">Carrière</Link>
          </div>
        </div>
        <div>
          <h4>Légal</h4>
          <div className="footer-links">
            <Link href="/privacy-policy">Politique de confidentialité</Link>
            <Link href="/terms-and-conditions">Conditions d’utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
