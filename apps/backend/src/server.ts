import cors from 'cors';
import express from 'express';
import { z } from 'zod';
import { blogPosts, demoData, jobs, site } from './data/content.js';

const app = express();
const port = Number(process.env.PORT || 4000);
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : true;

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

const contacts: Array<Record<string, string>> = [];
const applications: Array<Record<string, string>> = [];

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'nextgrowth-backend',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/site', (_req, res) => res.json(site));
app.get('/api/blog/posts', (_req, res) => res.json(blogPosts));
app.get('/api/blog/posts/:slug', (req, res) => {
  const post = blogPosts.find((item) => item.slug === req.params.slug);
  if (!post) return res.status(404).json({ message: 'Article introuvable' });
  res.json(post);
});
app.get('/api/jobs', (_req, res) => res.json(jobs));
app.get('/api/jobs/:slug', (req, res) => {
  const job = jobs.find((item) => item.slug === req.params.slug);
  if (!job) return res.status(404).json({ message: 'Offre introuvable' });
  res.json(job);
});
app.get('/api/legal/:slug', (req, res) => {
  const key = req.params.slug === 'privacy-policy' ? 'privacy' : req.params.slug === 'terms-and-conditions' ? 'terms' : null;
  if (!key) return res.status(404).json({ message: 'Document introuvable' });
  res.json(site.legal[key]);
});
app.get('/api/demo/stats', (_req, res) => res.json(demoData.stats));
app.get('/api/demo/products', (_req, res) => res.json(demoData.products));
app.get('/api/demo/orders', (_req, res) => res.json(demoData.orders));
app.get('/api/demo/tickets', (_req, res) => res.json(demoData.tickets));

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  company: z.string().min(2),
  message: z.string().min(10)
});

app.post('/api/contact', (req, res) => {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: 'Données invalides', errors: result.error.flatten() });
  }
  contacts.push({ ...result.data, createdAt: new Date().toISOString() });
  return res.status(201).json({ message: 'Demande envoyée avec succès' });
});

const applicationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  message: z.string().min(10)
});

app.post('/api/jobs/:slug/apply', (req, res) => {
  const job = jobs.find((item) => item.slug === req.params.slug);
  if (!job) return res.status(404).json({ message: 'Offre introuvable' });
  const result = applicationSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: 'Données invalides', errors: result.error.flatten() });
  }
  applications.push({ ...result.data, job: job.slug, createdAt: new Date().toISOString() });
  return res.status(201).json({ message: 'Candidature envoyée pour la démo' });
});

app.get('/api/admin/demo/submissions', (_req, res) => {
  res.json({ contacts, applications });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API ready on http://0.0.0.0:${port}`);
});
