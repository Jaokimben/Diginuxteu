import Link from 'next/link';
import { api } from '../../lib/api';

export default async function DigiSellPage() {
  const site = await api.site();

  return (
    <>
      <section className="page-hero"><div className="container"><div className="kicker">DigiSell</div><h1>{site.digisell.title}</h1><p className="lead">{site.digisell.description}</p></div></section>
      <section className="section"><div className="container grid-2"><div><h2>Piliers de la plateforme</h2><ul className="list">{site.digisell.pillars.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="card"><h3>Segments couverts</h3><ul className="list"><li>B2B</li><li>B2C</li><li>D2C</li><li>Multi-Markets</li></ul></div></div></section>
      <section className="section section-alt"><div className="container"><div className="kicker">Modules</div><h2>Richesse fonctionnelle modulaire</h2><div className="grid-3">{site.digisell.modules.map((module) => <div className="card" key={module}><h3>{module}</h3><p className="meta">Module prêt à être démontré puis enrichi dans les prochaines versions.</p></div>)}</div></div></section>
      <section className="section"><div className="container"><div className="cta-band"><div><h2>Voir une première matérialisation MVP</h2><p style={{ margin: 0, color: '#e9f3ff' }}>Une démo simple vaut mieux qu’une promesse floue.</p></div><Link className="button button-primary" href="/demo">Accéder à la démo</Link></div></div></section>
    </>
  );
}
