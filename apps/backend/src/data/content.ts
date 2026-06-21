export const site = {
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
        'NextGrowth aide les industriels et distributeurs à digitaliser leurs parcours clients, leurs opérations et leurs canaux de vente grâce à DigiSell.',
      ctaPrimary: { label: 'Découvrir DigiSell', href: '/digisell' },
      ctaSecondary: { label: 'Prendre contact', href: '/contact' }
    },
    industryMessage: {
      title: 'Le digital n’est pas une tendance. C’est le fondamental de l’Industrie 4.0',
      body:
        'Les entreprises doivent adapter leur organisation, leurs services et leurs interactions clients pour saisir les opportunités de l’économie numérique.'
    },
    services: [
      {
        title: 'Conseil',
        description: 'Accompagnement stratégique et cadrage des projets de transformation digitale.'
      },
      {
        title: 'Intégration',
        description: 'Connexion des solutions aux systèmes métier : ERP, WMS, CRM et outils tiers.'
      },
      {
        title: 'Customisation',
        description: 'Architecture modulaire pour répondre aux spécificités de chaque secteur.'
      },
      {
        title: 'Support',
        description: 'Continuité de service et suivi des engagements sur la durée.'
      }
    ]
  },
  about: {
    title: 'Votre partenaire pour l’Industrie 4.0',
    body:
      'Fondée par des passionnés des systèmes d’information, NextGrowth accompagne les organisations dans la digitalisation de leurs processus métier avec une approche centrée valeur, agilité et expérience client.',
    highlights: [
      'Conseil et accompagnement en transformation numérique',
      'Digitalisation des flux métiers',
      'Édition de solutions métier digitales',
      'Intégration aux systèmes d’information existants'
    ]
  },
  digisell: {
    title: 'DigiSell, la plateforme de digitalisation omnicanale',
    description:
      'Une plateforme modulaire pour orchestrer les interactions clients, les catalogues, les commandes, le service client et les opérations B2B / B2C / D2C.',
    pillars: [
      'Sécurité et architecture scalable',
      'Couverture fonctionnelle riche et modulaire',
      'Expérience client omnicanale unifiée',
      'Adaptation aux règles métier et aux canaux de vente'
    ],
    modules: [
      'Workflow',
      'Customer Service Management',
      'E-procurement',
      'Marketing Digital',
      'Product Information Management',
      'Order Management System',
      'Order Fulfillment & Delivery Services'
    ]
  },
  legal: {
    privacy: {
      title: 'Politique de confidentialité',
      body:
        'NEXTGROWTH s’engage à protéger les données personnelles conformément à la loi marocaine 09-08 et dans un esprit aligné RGPD pour ses opérations digitales.'
    },
    terms: {
      title: 'Conditions générales d’utilisation',
      body:
        'Les informations disponibles sur le site sont fournies à titre informatif. Leur utilisation relève de la responsabilité de l’utilisateur, dans le respect de la réglementation applicable.'
    }
  }
};

export const blogPosts = [
  {
    slug: 'transformation-numerique-maroc',
    category: 'Transformation numérique',
    title: 'La digitalisation d’entreprises, buzz ou réalité ?',
    excerpt:
      'Pourquoi la transformation digitale n’est plus un luxe mais une nécessité stratégique pour les entreprises industrielles et de distribution.',
    publishedAt: '2021-10-03',
    content: [
      'La transformation numérique impose aux entreprises de repenser leurs processus, leurs interactions et leurs modèles de création de valeur.',
      'Pour les industriels, la digitalisation ne se limite pas à un site vitrine : elle implique commandes, service client, données produit, logistique et expérience omnicanale.',
      'DigiSell répond à cette exigence avec une approche modulaire, orientée métier et adaptée aux contextes B2B, B2C et D2C.'
    ]
  },
  {
    slug: 'industrie-4-0-et-experience-client',
    category: 'Industrie 4.0',
    title: 'Industrie 4.0 : pourquoi l’expérience client devient un sujet opérationnel',
    excerpt:
      'L’expérience client n’est plus seulement marketing : elle structure les flux de vente, de support et de livraison.',
    publishedAt: '2026-06-21',
    content: [
      'Les entreprises industrielles qui gagnent du terrain sont celles qui unifient la donnée, les équipes et les points de contact.',
      'Le passage à l’omnicanal nécessite une plateforme unique capable de connecter catalogue, commandes, support et exécution.',
      'Une première démonstration MVP doit montrer la cohérence du parcours plus que l’exhaustivité fonctionnelle.'
    ]
  }
];

export const jobs = [
  {
    slug: 'developpeur-web-frontend',
    title: 'Développeur web application FrontEnd',
    team: 'Ingénierie',
    location: 'Télé-travail / Casablanca',
    contract: 'Temps plein',
    summary:
      'Vous êtes passionné par les technologies web modernes et souhaitez contribuer à des produits digitaux à fort impact.',
    requirements: [
      'Bac +2 ou plus en informatique',
      'Solide expérience JavaScript',
      'Maîtrise HTML/CSS',
      'Notions ou expérience sur Svelte, VueJS, NodeJS, REST API, Git'
    ]
  }
];

export const demoData = {
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
