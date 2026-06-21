const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

async function getSubmissions() {
  try {
    const res = await fetch(`${API_URL}/admin/demo/submissions`, { cache: 'no-store' });
    if (!res.ok) throw new Error('API');
    return (await res.json()) as {
      contacts: Array<Record<string, string>>;
      applications: Array<Record<string, string>>;
    };
  } catch {
    return { contacts: [], applications: [] };
  }
}

export default async function AdminDemoPage() {
  const submissions = await getSubmissions();

  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Vue de contrôle</div>
        <h1>Soumissions backend de démonstration</h1>
        <p className="lead">
          Cette page matérialise le cycle complet : formulaires publics côté Next.js, envoi au backend Node.js, puis restitution des données pour la démonstration.
        </p>

        <div className="grid-2">
          <div className="table-card">
            <table>
              <thead>
                <tr>
                  <th colSpan={3}>Leads contact</th>
                </tr>
                <tr>
                  <th>Nom</th>
                  <th>Société</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {submissions.contacts.length ? submissions.contacts.map((item, index) => (
                  <tr key={`${item.email}-${index}`}>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.email}</td>
                  </tr>
                )) : <tr><td colSpan={3}>Aucune soumission pour le moment.</td></tr>}
              </tbody>
            </table>
          </div>

          <div className="table-card">
            <table>
              <thead>
                <tr>
                  <th colSpan={3}>Candidatures</th>
                </tr>
                <tr>
                  <th>Nom</th>
                  <th>Poste</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {submissions.applications.length ? submissions.applications.map((item, index) => (
                  <tr key={`${item.email}-${index}`}>
                    <td>{item.name}</td>
                    <td>{item.job}</td>
                    <td>{item.email}</td>
                  </tr>
                )) : <tr><td colSpan={3}>Aucune candidature pour le moment.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
