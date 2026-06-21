import { api } from '../../../lib/api';

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await api.post(slug);
  return (
    <>
      <section className="page-hero"><div className="container"><span className="badge">{post.category}</span><h1>{post.title}</h1><p className="meta">{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</p></div></section>
      <section className="section"><div className="container card">{post.content.map((paragraph, index) => <p key={index} style={{ lineHeight: 1.8 }}>{paragraph}</p>)}</div></section>
    </>
  );
}
