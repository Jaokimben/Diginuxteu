import Link from 'next/link';
import { api } from '../../lib/api';

export default async function CareersPage() {
  const jobs = await api.jobs();
  return (
    <>
      <section className="page-hero"><div className="container"><div className="kicker">Carrière</div><h1>Nous recrutons</h1><p className="lead">Une page carrière MVP avec listing et parcours de candidature relié au backend.</p></div></section>
      <section className="section"><div className="container grid-2">{jobs.map((job) => <div key={job.slug} className="card job-card"><span className="badge">{job.team}</span><h3>{job.title}</h3><p className="meta">{job.location} · {job.contract}</p><p>{job.summary}</p><Link className="button button-primary" href={`/careers/${job.slug}`}>Postuler</Link></div>)}</div></section>
    </>
  );
}
