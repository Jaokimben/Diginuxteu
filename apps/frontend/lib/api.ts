import { demoFallback, jobsFallback, postsFallback, siteFallback } from './fallback-data';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

async function fetchWithFallback<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${path}`, { next: { revalidate: 30 } });
    if (!response.ok) throw new Error('API error');
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

export const api = {
  site: () => fetchWithFallback('/site', siteFallback),
  posts: () => fetchWithFallback('/blog/posts', postsFallback),
  post: async (slug: string) => {
    const match = postsFallback.find((post) => post.slug === slug);
    return fetchWithFallback(`/blog/posts/${slug}`, match || postsFallback[0]);
  },
  jobs: () => fetchWithFallback('/jobs', jobsFallback),
  job: async (slug: string) => {
    const match = jobsFallback.find((job) => job.slug === slug);
    return fetchWithFallback(`/jobs/${slug}`, match || jobsFallback[0]);
  },
  legal: (slug: 'privacy-policy' | 'terms-and-conditions') =>
    fetchWithFallback(`/legal/${slug}`, slug === 'privacy-policy' ? siteFallback.legal.privacy : siteFallback.legal.terms),
  stats: () => fetchWithFallback('/demo/stats', demoFallback.stats),
  products: () => fetchWithFallback('/demo/products', demoFallback.products),
  orders: () => fetchWithFallback('/demo/orders', demoFallback.orders),
  tickets: () => fetchWithFallback('/demo/tickets', demoFallback.tickets)
};

export { API_URL };
