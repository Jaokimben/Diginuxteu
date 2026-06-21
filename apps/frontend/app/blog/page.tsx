import Link from 'next/link';
import { api } from '../../lib/api';

export default async function BlogPage() {
  const posts = await api.posts();
  return (
    <>
      <section className="page-hero"><div className="container"><div className="kicker">Blog</div><h1>Contenus & réflexion</h1><p className="lead">Une base éditoriale simple pour nourrir le discours de transformation digitale.</p></div></section>
      <section className="section"><div className="container grid-2">{posts.map((post) => <div key={post.slug} className="card post-card"><span className="badge">{post.category}</span><h3>{post.title}</h3><p className="meta">{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</p><p>{post.excerpt}</p><Link className="button button-primary" href={`/blog/${post.slug}`}>Lire</Link></div>)}</div></section>
    </>
  );
}
