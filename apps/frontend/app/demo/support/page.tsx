import { api } from '../../../lib/api';

export default async function SupportDemoPage() {
  const tickets = await api.tickets();
  return <section className="section"><div className="container"><div className="kicker">Customer Service</div><h1>Tickets & retours</h1><div className="table-card"><table><thead><tr><th>ID</th><th>Type</th><th>Client</th><th>Priorité</th><th>Statut</th></tr></thead><tbody>{tickets.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.type}</td><td>{item.customer}</td><td>{item.priority}</td><td>{item.status}</td></tr>)}</tbody></table></div></div></section>;
}
