# Guide de déploiement — Diginuxteu

Architecture cible : **Frontend Next.js sur Vercel** + **Backend Express sur Render**.

---

## 1. Déployer le backend sur Render

### Étape 1.1 — Créer le compte Render
1. Aller sur https://render.com et se connecter avec GitHub.
2. Autoriser Render à accéder à l'organisation/compte `Jaokimben`.

### Étape 1.2 — Créer le service Web
1. Cliquer sur **New +** → **Web Service**.
2. Sélectionner le repo `Jaokimben/Diginuxteu`.
3. Configurer comme suit :
   - **Name** : `diginuxteu-backend`
   - **Region** : `Frankfurt (EU)` (ou plus proche de la cible)
   - **Branch** : `main`
   - **Root Directory** : `apps/backend`
   - **Runtime** : `Node`
   - **Build Command** : `npm install && npm run build`
   - **Start Command** : `npm run start`
   - **Plan** : `Free`

### Étape 1.3 — Variables d'environnement
Dans la section **Environment** du service Render, ajouter :
- `NODE_ENV` = `production`
- `PORT` = `4000`
- `CORS_ORIGIN` = `https://<ton-domaine-vercel>.vercel.app` *(à compléter après le déploiement Vercel)*

### Étape 1.4 — Healthcheck
- **Health Check Path** : `/api/health`

### Étape 1.5 — Déployer
Cliquer sur **Create Web Service**. Render build et déploie automatiquement.

**URL backend obtenue** : `https://diginuxteu-backend.onrender.com` (exemple)

Vérifier que `https://diginuxteu-backend.onrender.com/api/health` retourne `{"ok": true}`.

---

## 2. Déployer le frontend sur Vercel

### Étape 2.1 — Créer le compte Vercel
1. Aller sur https://vercel.com et se connecter avec GitHub.
2. Autoriser Vercel à accéder à `Jaokimben/Diginuxteu`.

### Étape 2.2 — Importer le projet
1. Cliquer sur **Add New** → **Project**.
2. Sélectionner `Jaokimben/Diginuxteu`.
3. Configurer :
   - **Framework Preset** : `Next.js` (détecté automatiquement)
   - **Root Directory** : `apps/frontend` *(important, c'est un monorepo)*
   - **Build Command** : laisser par défaut (`next build`)
   - **Output Directory** : laisser par défaut (`.next`)
   - **Install Command** : `npm install`

### Étape 2.3 — Variables d'environnement
Ajouter dans la section **Environment Variables** :
- `NEXT_PUBLIC_API_URL` = `https://diginuxteu-backend.onrender.com/api`
  *(remplacer par l'URL Render réelle obtenue à l'étape 1.5)*

Cocher **Production**, **Preview**, **Development**.

### Étape 2.4 — Déployer
Cliquer sur **Deploy**. Vercel build et déploie en 1 à 3 minutes.

**URL frontend obtenue** : `https://diginuxteu.vercel.app` (exemple)

---

## 3. Boucler la sécurité CORS

Une fois Vercel déployé, retourner sur Render :
1. Service `diginuxteu-backend` → **Environment**.
2. Modifier `CORS_ORIGIN` pour mettre l'URL Vercel exacte :
   `CORS_ORIGIN=https://diginuxteu.vercel.app`
3. Render redéploie automatiquement.

---

## 4. Tester la démo en production

Routes à vérifier :
- `https://<vercel-url>/` — Accueil
- `https://<vercel-url>/digisell` — Page produit
- `https://<vercel-url>/demo` — Démo MVP
- `https://<vercel-url>/demo/catalog` — Catalogue
- `https://<vercel-url>/demo/orders` — Commandes
- `https://<vercel-url>/demo/support` — Tickets support
- `https://<vercel-url>/demo/admin` — Vue admin des soumissions
- `https://<vercel-url>/contact` — Formulaire de contact

Test du formulaire de contact :
1. Remplir le formulaire sur `/contact`.
2. Aller sur `/demo/admin` et vérifier que la soumission apparaît.

---

## 5. Limites connues

- **Render Free** : le service se met en veille après 15 minutes d'inactivité. Premier appel après veille = ~30 secondes de latence.
- **Persistance backend** : actuellement en mémoire. Au redéploiement, les soumissions sont perdues. Pour la V1.1, prévoir PostgreSQL.

---

## 6. Domaines personnalisés (optionnel)

### Vercel
Project Settings → Domains → Add `app.diginuxt.eu` (ou autre).

### Render
Service Settings → Custom Domain → Add `api.diginuxt.eu`.

Mettre à jour ensuite :
- `CORS_ORIGIN` côté Render
- `NEXT_PUBLIC_API_URL` côté Vercel
