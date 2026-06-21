import { ContactForm } from '../../components/ContactForm';
import { api } from '../../lib/api';

export default async function ContactPage() {
  const site = await api.site();
  return (
    <>
      <section className="page-hero"><div className="container"><div className="kicker">Contact</div><h1>Prenons contact</h1><p className="lead">Vous avez un projet ? Besoin d’un conseil ? Nous serons ravis de collaborer avec vous.</p></div></section>
      <section className="section"><div className="container grid-2"><div className="card"><h3>Coordonnées</h3><p><strong>Email :</strong> {site.contact.email}</p><p><strong>Téléphone :</strong> {site.contact.phone}</p><p><strong>Adresse :</strong> {site.contact.address}</p><p className="meta">Le formulaire envoie les données vers le backend Node.js pour la démonstration.</p></div><ContactForm /></div></section>
    </>
  );
}
