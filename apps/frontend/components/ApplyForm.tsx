'use client';

import { FormEvent, useState } from 'react';
import { API_URL } from '../lib/api';

export function ApplyForm({ slug }: { slug: string }) {
  const [status, setStatus] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch(`${API_URL}/jobs/${slug}/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    setStatus(data.message || 'Candidature envoyée');
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>Candidater pour la démo</h3>
      <div className="grid-2">
        <input name="name" placeholder="Nom complet" required />
        <input name="phone" placeholder="Téléphone" required />
        <input name="email" type="email" placeholder="Email" required />
      </div>
      <textarea name="message" placeholder="Votre motivation" rows={5} required />
      <button className="button button-primary" type="submit">Envoyer la candidature</button>
      {status ? <p className="status">{status}</p> : null}
    </form>
  );
}
