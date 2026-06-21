import { ApplyForm } from '../../../components/ApplyForm';
import { api } from '../../../lib/api';

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = await api.job(slug);

  return (
    <>
      <section className="page-hero"><div className="container"><div className="kicker">Offre d’emploi</div><h1>{job.title}</h1><p className="lead">{job.team} · {job.location} · {job.contract}</p></div></section>
      <section className="section"><div className="container grid-2"><div className="card"><h3>Résumé</h3><p>{job.summary}</p><h3>Compétences attendues</h3><ul className="list">{job.requirements.map((item) => <li key={item}>{item}</li>)}</ul></div><ApplyForm slug={job.slug} /></div></section>
    </>
  );
}
