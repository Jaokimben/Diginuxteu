import { api } from '../../../lib/api';

export default async function CatalogDemoPage() {
  const products = await api.products();
  return <section className="section"><div className="container"><div className="kicker">Catalogue</div><h1>Catalogue Produits Omnicanal</h1><div className="table-card"><table><thead><tr><th>SKU</th><th>Produit</th><th>Catégorie</th><th>Statut</th></tr></thead><tbody>{products.map((item) => <tr key={item.sku}><td>{item.sku}</td><td>{item.name}</td><td>{item.category}</td><td>{item.status}</td></tr>)}</tbody></table></div></div></section>;
}
