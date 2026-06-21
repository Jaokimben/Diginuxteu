import { api } from '../../../lib/api';

export default async function OrdersDemoPage() {
  const orders = await api.orders();
  return <section className="section"><div className="container"><div className="kicker">OMS</div><h1>Suivi des commandes</h1><div className="table-card"><table><thead><tr><th>Référence</th><th>Compte</th><th>Montant</th><th>Statut</th></tr></thead><tbody>{orders.map((item) => <tr key={item.reference}><td>{item.reference}</td><td>{item.account}</td><td>{item.amount}</td><td>{item.status}</td></tr>)}</tbody></table></div></div></section>;
}
