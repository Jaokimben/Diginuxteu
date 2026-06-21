import Link from 'next/link';
import { api } from '../lib/api';

const sectors = [
  'Industrie manufacturière',
  'Distribution spécialisée',
  'Matériaux de construction',
  'Supply chain B2B'
];

const journey = [
  {
    step: '01',
    title: 'Attirer et rassurer',
    text: 'Site corporate premium, proposition de valeur claire, preuve de sérieux et parcours de prise de contact direct.'
  },
  {
    step: '02',
    title: 'Montrer le produit',
    text: 'Démo orientée usages : catalogue, commandes et support dans une expérience cohérente, sans bruit inutile.'
  },
  {
    step: '03',
    title: 'Préparer la V1',
    text: 'Socle séparé Next.js + Node.js prêt à accueillir auth, CMS, PIM, OMS et workflows réels.'
  }
];

export default async function HomePage() {
  const site = await api.site();
  const posts = await api.posts();
  const stats = await api.stats();

  return (
    <>
      <section className="hero hero-premium">
        <div className="container hero-grid hero-grid-premium">
          <div>
            <div className="eyebrow">{site.home.hero.eyebrow}</div>
            <h1>{site.home.hero.title}</h1>
            <p>{site.home.hero.description}</p>

            <div className="hero-points">
              <span>Architecture séparée</span>
              <span>Parcours B2B démontrable</span>
              <span>Prêt pour une démo client</span>
            </div>

            <div className="button-row">
              <Link className="button button-primary" href="/demo">Ouvrir la démo premium</Link>
              <Link className="button button-secondary" href="/contact">Demander une présentation</Link>
            </div>
          </div>

          <div className="hero-stack">
            <div className="hero-card hero-card-glass">
              <span className="badge">Positionnement</span>
              <h3>Un MVP qui raconte déjà une histoire crédible</h3>
              <ul className="list list-light">
                <li>Frontend Next.js orienté conversion et démonstration</li>
                <li>Backend Node.js pour contenus, formulaires et données mockées</li>
                <li>Parcours DigiSell visible sans surpromesse technique</li>
              </ul>
            </div>
            <div className="hero-mini-grid">
              {stats.slice(0, 2).map((item) => (
                <div key={item.label} className="mini-metric">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container metrics">
        <div className="grid-4">
          {stats.map((item) => (
            <div key={item.label} className="metric-card metric-card-premium">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container two-column-intro">
          <div>
            <div className="kicker">Industrie 4.0</div>
            <h2>{site.home.industryMessage.title}</h2>
            <p className="lead">{site.home.industryMessage.body}</p>
          </div>
          <div className="card tone-card">
            <div className="kicker">Cibles démo</div>
            <div className="pill-grid">
              {sectors.map((sector) => (
                <span className="pill" key={sector}>{sector}</span>
              ))}
            </div>
            <p className="meta">Le discours, les écrans et les cas d’usage du MVP sont calibrés pour une première démonstration orientée transformation digitale B2B.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="kicker">Parcours de démonstration</div>
          <h2>Un récit simple, traditionnel dans la structure, avant-gardiste dans l’intention</h2>
          <div className="grid-3">
            {journey.map((item) => (
              <div className="card step-card" key={item.step}>
                <div className="step-index">{item.step}</div>
                <h3>{item.title}</h3>
                <p className="meta">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <div className="kicker">Notre métier</div>
            <h2>{site.about.title}</h2>
            <p className="lead">{site.about.body}</p>
          </div>
          <div className="card feature-card">
            <div className="kicker">Expertises</div>
            <ul className="list">
              {site.about.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="kicker">Nos services</div>
          <h2>Un socle de démonstration immédiatement lisible</h2>
          <div className="grid-4">
            {site.home.services.map((service) => (
              <div key={service.title} className="card service-card">
                <div className="service-icon">◆</div>
                <h3>{service.title}</h3>
                <p className="meta">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band cta-band-premium">
            <div>
              <div className="kicker kicker-light">Prototype produit</div>
              <h2 style={{ marginBottom: 8 }}>Explorez l’espace de démo DigiSell</h2>
              <p style={{ margin: 0, color: '#e9f3ff' }}>
                Catalogue, commandes, support et vue de contrôle des formulaires pour montrer un flux complet de bout en bout.
              </p>
            </div>
            <div className="button-stack">
              <Link className="button button-primary" href="/demo">Entrer dans la démo</Link>
              <Link className="button button-secondary-alt" href="/demo/admin">Voir les soumissions</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="kicker">Blog</div>
          <h2>Contenus prêts à soutenir la conversation commerciale</h2>
          <div className="grid-2">
            {posts.slice(0, 2).map((post) => (
              <div key={post.slug} className="card post-card post-card-premium">
                <span className="badge">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="meta">{post.excerpt}</p>
                <Link className="button button-primary" href={`/blog/${post.slug}`}>Lire l’article</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
