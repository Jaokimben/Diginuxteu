import { api } from '../../lib/api';

export default async function TermsPage() {
  const legal = await api.legal('terms-and-conditions');
  return <section className="page-hero"><div className="container"><div className="kicker">Légal</div><h1>{legal.title}</h1><p className="lead">{legal.body}</p></div></section>;
}
