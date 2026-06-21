import { api } from '../../lib/api';

export default async function PrivacyPage() {
  const legal = await api.legal('privacy-policy');
  return <section className="page-hero"><div className="container"><div className="kicker">Conformité</div><h1>{legal.title}</h1><p className="lead">{legal.body}</p></div></section>;
}
