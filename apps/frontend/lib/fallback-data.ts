export const siteFallback = {
  brand: 'NextGrowth',
  tagline: 'Le digital n’est pas une tendance. C’est le fondamental de l’Industrie 4.0.',
  contact: {
    email: 'contact@nextgrowth.ma',
    phone: '(+212) (0) 5 21 00 19 96',
    address: '3, Rue Biskra Résidence Money IV, Casablanca, Maroc'
  },
  home: {
    hero: {
      eyebrow: 'Transformation numérique',
      title: 'Nous livrons de la croissance à votre business',
      description:
        'NextGrowth accompagne les industriels et distributeurs dans la digitalisation du parcours client, des opérations et des canaux de vente.',
      ctaPrimary: { label: 'Découvrir DigiSell', href: '/digisell' },
      ctaSecondary: { label: 'Prendre contact', href: '/contact' }
    },
    industryMessage: {
      title: 'Le digital n’est pas une tendance. C’est le fondamental de l’Industrie 4.0',
      body:
        'Les entreprises doivent adapter leurs processus et leurs services pour répondre aux nouvelles attentes du marché.'
    },
    services: [
      { title: 'Conseil', description: 'Cadrage et accompagnement des programmes de transformation.' },
      { title: 'Intégration', description: 'Connexion avec ERP, WMS, CRM et systèmes existants.' },
      { title: 'Customisation', description: 'Architecture modulaire adaptée à chaque métier.' },
      { title: 'Support', description: 'Suivi, assistance et continuité de service.' }
    ]
  },
  about: {
    title: 'Votre partenaire pour l’Industrie 4.0',
    body:
      'NextGrowth aide les entreprises à transformer leurs interactions clients et leurs opérations à travers des solutions digitales unifiées.',
    highlights: [
      'Conseil et transformation numérique',
      'Digitalisation des flux métiers',
      'Édition de solutions digitales',
      'Intégration SI'
    ]
  },
  digisell: {
    title: 'DigiSell, la plateforme de digitalisation omnicanale',
    description:
      'Une plateforme modulaire pour gérer catalogue, commandes, support et exécution dans une logique B2B / B2C / D2C.',
    pillars: [
      'Scalabilité',
      'Sécurité',
      'Modularité',
      'Expérience omnicanale'
    ],
    modules: [
      'Workflow',
      'Customer Service Management',
      'E-procurement',
      'Marketing Digital',
      'PIM',
      'OMS',
      'Fulfillment'
    ]
  },
  legal: {
    privacy: {
      title: 'Politique de confidentialité',
      body: 'Protection des données personnelles selon la loi 09-08 et une démarche compatible RGPD.'
    },
    terms: {
      title: 'Conditions générales d’utilisation',
      body: 'Utilisation informative du site sous la responsabilité de l’utilisateur.'
    }
  }
};

export const postsFallback = [
  {
    slug: 'transformation-numerique-maroc',
    category: 'Transformation numérique',
    title: 'La digitalisation d’entreprises, buzz ou réalité ?',
    excerpt: 'Pourquoi la transformation digitale n’est plus un luxe mais une nécessité stratégique.',
    publishedAt: '2021-10-03',
    content: ['La transformation numérique impose de repenser les opérations.', 'Le parcours client doit être unifié.', 'DigiSell structure cette vision.']
  },
  {
    slug: 'industrie-4-0-et-experience-client',
    category: 'Industrie 4.0',
    title: 'Industrie 4.0 : pourquoi l’expérience client devient un sujet opérationnel',
    excerpt: 'L’expérience client structure désormais ventes, support et logistique.',
    publishedAt: '2026-06-21',
    content: ['Unifier les données et les équipes devient indispensable.', 'Le MVP doit montrer la cohérence des parcours.']
  }
];

export const jobsFallback = [
  {
    slug: 'developpeur-web-frontend',
    title: 'Développeur web application FrontEnd',
    team: 'Ingénierie',
    location: 'Télé-travail / Casablanca',
    contract: 'Temps plein',
    summary: 'Contribution à des produits digitaux modernes à fort impact.',
    requirements: ['Bac +2 ou plus en informatique', 'Solide expérience JavaScript', 'HTML/CSS', 'VueJS / NodeJS / REST API / Git']
  }
];

export const demoFallback = {
  stats: [
    { label: 'Temps opérationnel réduit', value: '-40%' },
    { label: 'Croissance B2B projetée', value: '+35%' },
    { label: 'Commandes suivies', value: '1 248' },
    { label: 'Tickets résolus sous SLA', value: '92%' }
  ],
  products: [
    { sku: 'DG-ERP-001', name: 'Portail B2B Industriel', category: 'Plateforme', status: 'Publié' },
    { sku: 'DG-PIM-014', name: 'Catalogue Produits Omnicanal', category: 'PIM', status: 'Publié' },
    { sku: 'DG-CSM-020', name: 'Service Client Omnicanal', category: 'Support', status: 'Brouillon' }
  ],
  orders: [
    { reference: 'SO-2026-001', account: 'Atlas Distribution', amount: '24 800 €', status: 'Préparée' },
    { reference: 'SO-2026-002', account: 'Nord Industrie', amount: '8 250 €', status: 'Validée' },
    { reference: 'SO-2026-003', account: 'BuildPro', amount: '31 440 €', status: 'Expédiée' }
  ],
  tickets: [
    { id: 'TCK-102', type: 'Réclamation', customer: 'Atlas Distribution', priority: 'Haute', status: 'En cours' },
    { id: 'TCK-103', type: 'Retour', customer: 'Nord Industrie', priority: 'Moyenne', status: 'Ouvert' },
    { id: 'TCK-104', type: 'Assistance', customer: 'BuildPro', priority: 'Basse', status: 'Résolu' }
  ]
};
