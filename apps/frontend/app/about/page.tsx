import { api } from '../../lib/api';

export default async function AboutPage() {
  const site = await api.site();

  return (
    <>
      <section className="page-hero"><div className="container"><div className="kicker">À propos</div><h1>{site.about.title}</h1><p className="lead">{site.about.body}</p></div></section>
      <section className="section"><div className="container grid-2"><div className="card"><h3>Notre moteur de croissance</h3><p className="meta">Une approche qui combine vision stratégique, exécution technologique et transformation des usages métier.</p></div><div className="card"><h3>Expertises</h3><ul className="list">{site.about.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
    </>
  );
}
