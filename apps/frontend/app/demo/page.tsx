import Link from 'next/link';
import { api } from '../../lib/api';

const modules = [
  {
    title: 'Catalogue',
    text: 'Montrer comment la donnée produit peut être structurée et publiée rapidement.',
    href: '/demo/catalog'
  },
  {
    title: 'Commandes',
    text: 'Rendre visible le suivi opérationnel et les statuts du parcours de vente.',
    href: '/demo/orders'
  },
  {
    title: 'Support',
    text: 'Illustrer la gestion des tickets, réclamations et retours côté service client.',
    href: '/demo/support'
  },
  {
    title: 'Soumissions',
    text: 'Prouver que les formulaires du site alimentent réellement le backend de démonstration.',
    href: '/demo/admin'
  }
];

export default async function DemoPage() {
  const stats = await api.stats();
  const products = await api.products();
  const orders = await api.orders();

  return (
    <>
      <section className="page-hero page-hero-premium">
        <div className="container">
          <div className="kicker">Démo client premium</div>
          <h1>Portail DigiSell simplifié, mais démonstratif</h1>
          <p className="lead">
            L’objectif n’est pas de tout simuler : il est de rendre tangible la proposition de valeur produit avec un parcours propre, rapide et défendable.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/demo/catalog">Voir le catalogue</Link>
            <Link className="button button-dark" href="/demo/admin">Voir les soumissions live</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-4">
          {stats.map((item) => (
            <div key={item.label} className="metric-card metric-card-premium">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="kicker">Parcours</div>
          <h2>4 angles de démonstration</h2>
          <div className="grid-4">
            {modules.map((item) => (
              <div className="card service-card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="meta">{item.text}</p>
                <Link className="button button-primary" href={item.href}>Ouvrir</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container demo-preview-grid">
          <div className="card table-preview-card">
            <div className="kicker">Aperçu catalogue</div>
            <h3>Produits structurés</h3>
            <div className="mini-table">
              {products.slice(0, 3).map((item) => (
                <div className="mini-row" key={item.sku}>
                  <strong>{item.sku}</strong>
                  <span>{item.name}</span>
                  <em>{item.status}</em>
                </div>
              ))}
            </div>
          </div>

          <div className="card table-preview-card">
            <div className="kicker">Aperçu commandes</div>
            <h3>Pipeline opérationnel</h3>
            <div className="mini-table">
              {orders.slice(0, 3).map((item) => (
                <div className="mini-row" key={item.reference}>
                  <strong>{item.reference}</strong>
                  <span>{item.account}</span>
                  <em>{item.status}</em>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
