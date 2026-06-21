# NextGrowth MVP — version GitHub industrialisable

Monorepo prêt à déposer sur GitHub pour industrialiser le MVP de démonstration **NextGrowth / DigiSell**.

## Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Monorepo**: npm workspaces
- **CI**: GitHub Actions
- **Conteneurisation**: Docker + Docker Compose

## Arborescence du repo

```text
nextgrowth-mvp/
├─ .github/
│  └─ workflows/
│     └─ ci.yml
├─ apps/
│  ├─ backend/
│  │  ├─ src/
│  │  │  ├─ data/
│  │  │  │  └─ content.ts
│  │  │  └─ server.ts
│  │  ├─ .env.example
│  │  ├─ Dockerfile
│  │  ├─ package.json
│  │  └─ tsconfig.json
│  └─ frontend/
│     ├─ app/
│     │  ├─ about/
│     │  ├─ blog/
│     │  ├─ careers/
│     │  ├─ contact/
│     │  ├─ demo/
│     │  ├─ digisell/
│     │  ├─ privacy-policy/
│     │  ├─ terms-and-conditions/
│     │  ├─ globals.css
│     │  ├─ layout.tsx
│     │  └─ page.tsx
│     ├─ components/
│     ├─ lib/
│     │  ├─ api.ts
│     │  └─ fallback-data.ts
│     ├─ public/
│     ├─ .env.example
│     ├─ Dockerfile
│     ├─ next.config.ts
│     ├─ package.json
│     └─ tsconfig.json
├─ .dockerignore
├─ .env.example
├─ .gitignore
├─ docker-compose.yml
├─ package-lock.json
├─ package.json
└─ README.md
```

## Fichiers clés

### Frontend
- `apps/frontend/app/page.tsx` : landing page premium de démonstration
- `apps/frontend/app/demo/page.tsx` : entrée dans la démo produit
- `apps/frontend/app/demo/admin/page.tsx` : visualisation des soumissions backend
- `apps/frontend/lib/api.ts` : couche d'accès API avec fallback
- `apps/frontend/components/SiteHeader.tsx` : navigation premium

### Backend
- `apps/backend/src/server.ts` : API Express, healthcheck, formulaires, données démo
- `apps/backend/src/data/content.ts` : contenus mockés du MVP

### Industrialisation
- `.github/workflows/ci.yml` : pipeline CI GitHub Actions
- `apps/frontend/Dockerfile` : image du frontend
- `apps/backend/Dockerfile` : image du backend
- `docker-compose.yml` : orchestration locale conteneurisée
- `.env.example` : variables d'environnement de référence

## Variables d'environnement

Copiez les fichiers d'exemple si vous voulez personnaliser l'exécution locale.

### Racine
```bash
cp .env.example .env
```

### Frontend
```bash
cp apps/frontend/.env.example apps/frontend/.env.local
```

### Backend
```bash
cp apps/backend/.env.example apps/backend/.env
```

## Exécution locale

```bash
npm install
npm run dev:backend
npm run dev:frontend
```

### URLs locales
- Frontend: http://localhost:3000
- Backend: http://localhost:4000/api/health
- Vue de contrôle démo: http://localhost:3000/demo/admin

## Exécution avec Docker

```bash
docker compose up --build
```

### Services Docker
- Frontend: http://localhost:3000
- Backend: http://localhost:4000/api/health

## Scripts utiles

```bash
npm run typecheck
npm run build
npm run ci
npm run dev:backend
npm run dev:frontend
```

## Pipeline CI

Le workflow GitHub Actions exécute automatiquement :
1. `npm ci`
2. `npm run typecheck`
3. `npm run build`

## État actuel du projet

Ce repo est **industrialisable**, mais reste volontairement un **MVP de démonstration** :
- données mockées
- persistance en mémoire côté backend
- pas encore de base PostgreSQL
- pas encore d'authentification réelle
- pas encore de CMS ni d'intégrations ERP/CRM/WMS

## Prochaine étape recommandée

Pour passer du MVP démonstratif à une **V1 exploitable**, prioriser :
1. persistance base de données
2. authentification et rôles
3. back-office contenu / leads
4. Docker production hardening
5. déploiement cloud + secrets GitHub
