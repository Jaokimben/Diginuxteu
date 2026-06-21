'use client';

import { FormEvent, useState } from 'react';
import { API_URL } from '../lib/api';

export function ContactForm() {
  const [status, setStatus] = useState<string>('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    setStatus(data.message || 'Demande envoyée');
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>Parlez-nous de votre projet</h3>
      <div className="grid-2">
        <input name="name" placeholder="Nom complet" required />
        <input name="company" placeholder="Société" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" placeholder="Téléphone" required />
      </div>
      <textarea name="message" placeholder="Votre message" rows={5} required />
      <button className="button button-primary" type="submit">Envoyer le message</button>
      {status ? <p className="status">{status}</p> : null}
    </form>
  );
}
