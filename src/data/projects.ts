import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "wealthplay",
    title: "WealthPlay",
    tagline: "Financial simulator for learning wealth creation.",
    description:
      "An interactive financial simulator for understanding saving, investing, inflation, compound growth, and long-term wealth creation.",

    category: "Finance",
    status: "Completed",
    version: "v1.0",
    year: 2026,

    problem:
      "Financial concepts are often difficult to understand when presented only through static explanations and isolated calculations.",

    solution:
      "WealthPlay turns financial concepts into interactive simulations so users can experiment with saving, investing, inflation, and long-term wealth growth.",

    architecture:
      "A web-based simulation platform with interactive financial models and a responsive interface.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "Tailwind CSS",
    ],

    features: [
      "Financial simulations",
      "Compound growth",
      "Investment scenarios",
      "Money River visualization",
    ],

    roadmap: [
      "AI Financial Coach",
      "Portfolio Optimizer",
      "Retirement Planner",
    ],

    lessons: [
      "Interactive learning is more effective than static explanations.",
      "Financial UX requires clarity before complexity.",
    ],

    featured: true,
  },

  {
    id: 2,
    slug: "money-river",
    title: "Money River",
    tagline: "Finance simulation implemented in C++ and Python.",
    description:
      "A finance simulation project exploring cash flow, saving, wealth accumulation, and computational implementation through C++ and Python.",

    category: "Finance",
    status: "Completed",
    version: "v1.0",
    year: 2026,

    problem:
      "Financial simulations become more interesting when the underlying model can be tested across different implementations and performance characteristics.",

    solution:
      "Money River explores the same financial concepts through Python experimentation and optimized C++ implementations.",

    architecture:
      "Simulation models implemented independently in Python and C++ to compare experimentation speed and computational efficiency.",

    technologies: [
      "C++",
      "Python",
      "Algorithms",
      "Simulation",
    ],

    features: [
      "Cash-flow simulation",
      "Wealth modelling",
      "C++ implementation",
      "Python implementation",
    ],

    roadmap: [
      "Scenario comparison",
      "Advanced simulation models",
      "Visualization layer",
    ],

    lessons: [
      "The same model can be explored effectively across different languages.",
      "Performance considerations matter when simulations scale.",
    ],

    featured: false,
  },

  {
    id: 3,
    slug: "market-memory",
    title: "Market Memory",
    tagline: "Digital memory for market research and trading decisions.",
    description:
      "A trading journal and market observation system for recording market insights, watchlists, alerts, prices, and trading decisions.",

    category: "Finance",
    status: "Completed",
    version: "v1.0",
    year: 2026,

    problem:
      "Market observations and trading decisions are easily forgotten when research, notes, prices, and decisions are stored across disconnected places.",

    solution:
      "Market Memory centralizes market observations, watchlists, alerts, price information, and trading decisions into one workflow.",

    architecture:
      "A mobile-first product using a React Native frontend with a FastAPI backend and Supabase data layer.",

    technologies: [
      "React Native",
      "TypeScript",
      "FastAPI",
      "Supabase",
    ],

    features: [
      "Trading journal",
      "Market observations",
      "Watchlists",
      "Price alerts",
      "Market snapshots",
    ],

    challenges: [
      "Designing a focused mobile-first workflow.",
      "Connecting market data with persistent journal entries.",
    ],

    lessons: [
      "Structured memory can improve decision quality.",
      "Focused workflows can outperform feature-heavy interfaces.",
    ],

    roadmap: [
      "AI-assisted market research",
      "Advanced analytics",
      "Portfolio intelligence",
    ],

    featured: true,
  },

  {
    id: 4,
    slug: "llf-dashboard",
    title: "LLF Dashboard",
    tagline: "Digitising plant LLF reporting.",
    description:
      "A plant reporting system that replaces paper-based LLF records with digital entry, shift-wise reporting, and downloadable reports.",

    category: "Industrial Software",
    status: "Completed",
    version: "v1.0",
    year: 2026,

    problem:
      "LLF reporting was being maintained on paper, making data entry, retrieval, and shift-wise reporting slower and harder to manage.",

    solution:
      "The LLF Dashboard converts the paper workflow into a web application where users can enter records, generate shift-wise reports, and download them.",

    architecture:
      "Frontend and backend deployed separately, with persistent application data managed through Supabase and the application deployed on Render.",

    technologies: [
      "Frontend",
      "Supabase",
      "Backend",
      "Render",
    ],

    features: [
      "Digital LLF entry",
      "Shift-wise reports",
      "Downloadable reports",
      "Admin access",
      "Operator access",
      "View-only access",
    ],

    lessons: [
      "Digitising an existing paper workflow works best when the digital process remains familiar to operators.",
      "Role separation is important for operational systems.",
    ],

    roadmap: [
      "Operational analytics",
      "Historical reporting",
      "Trend analysis",
    ],

    featured: false,
  },

  {
    id: 5,
    slug: "digital-stand-register",
    title: "Digital Stand Register",
    tagline: "Digital management of running stands, maintenance, and inventory.",
    description:
      "A plant engineering system for monitoring running stands, maintenance status, stand inventory, and operational history, with AI-assisted WhatsApp status updates.",

    category: "Manufacturing & Industrial",
    status: "Completed",
    version: "v1.0",
    year: 2026,

    problem:
      "Stand status, maintenance information, inventory, and component history needed a structured digital system instead of fragmented operational records.",

    solution:
      "The Digital Stand Register centralizes running stand information, maintenance, inventory, operational status, and component history while providing role-based control.",

    architecture:
      "A web-based operational system with structured stand and asset records, role-based access, inventory information, and an AI-assisted WhatsApp update workflow.",

    technologies: [
      "Next.js",
      "Python",
      "Supabase",
      "AI",
      "WhatsApp",
    ],

    features: [
      "Running stand monitoring",
      "Maintenance tracking",
      "Stand inventory",
      "AI status updates through WhatsApp",
      "Operator editing",
      "Admin master control",
      "View-only access",
    ],

    challenges: [
      "Representing real plant equipment digitally.",
      "Maintaining accurate operational and historical information.",
      "Designing permissions around real working roles.",
    ],

    lessons: [
      "Industrial software should fit existing operational workflows.",
      "AI is most useful when it reduces operational friction.",
    ],

    roadmap: [
      "Digital twin",
      "Predictive maintenance",
      "Stand life prediction",
      "Advanced analytics",
    ],

    featured: false,
  },

  {
    id: 6,
    slug: "plant-spare-dashboard",
    title: "Plant Spare Dashboard",
    tagline: "Centralised spare monitoring for plant operations.",
    description:
      "A spare management system that imports Excel and SAP information, organises equipment hierarchies, tracks quantities and procurement status, and enables vendor-wise analysis.",

    category: "Industrial Software",
    status: "Completed",
    version: "v1.0",
    year: 2026,

    problem:
      "Plant spare information was distributed across Excel and SAP data, making it difficult to organise equipment hierarchy, procurement state, and vendor information in one view.",

    solution:
      "The Plant Spare Dashboard imports and structures the data into a searchable hierarchy while exposing quantities, PR, PO, on-order and vendor information.",

    architecture:
      "An operational dashboard built around structured import pipelines for Excel and SAP-derived information, with planner and admin access.",

    technologies: [
      "Excel Import",
      "SAP Data",
      "Dashboard",
      "Database",
    ],

    features: [
      "Excel import",
      "SAP data import",
      "Plant hierarchy",
      "Department and area classification",
      "Equipment and sub-equipment classification",
      "Quantity tracking",
      "PR tracking",
      "PO tracking",
      "Vendor-wise filtering",
      "Planner access",
      "Admin master control",
    ],

    lessons: [
      "Operational dashboards should turn messy source data into a clear information hierarchy.",
      "Import automation can remove repetitive manual data preparation.",
    ],

    roadmap: [
      "Procurement insights",
      "Spare risk monitoring",
      "Consumption analytics",
    ],

    featured: true,
  },

{
  id: 7,
  slug: "dot-space",
  title: "Dot Space",
  tagline: "Private digital presence for the people who matter.",
  description:
    "A privacy-first presence application designed to help families and close groups stay connected through simple, meaningful digital presence.",

  category: "Software",
  status: "Building",
  version: "v0.1",
  year: 2026,

  problem:
    "Existing communication platforms are often overloaded with feeds, notifications, and social features when people simply want to know whether someone is available or okay.",

  solution:
    "Dot Space focuses on lightweight digital presence, allowing trusted people to share their availability and presence without the noise of conventional social platforms.",

  architecture:
    "A mobile-first real-time application using React Native, TypeScript, Node.js, Express, PostgreSQL, Redis, and Socket.IO.",

  technologies: [
    "React Native",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Redis",
    "Socket.IO",
  ],

  features: [
    "Private presence",
    "Real-time status",
    "Trusted groups",
    "Mobile-first experience",
  ],

  roadmap: [
    "Real-time presence engine",
    "Family spaces",
    "Privacy controls",
    "Notification system",
  ],

  lessons: [
    "A product can become more useful by deliberately removing unnecessary features.",
    "Real-time systems require careful separation between state, events, and persistence.",
  ],

  featured: true,
},
  {
    id: 8,
    slug: "personal-ai-stock-market",
    title: "Personal AI Stock Market Analyst",
    tagline: "Reimagining fundamental and technical analysis for everyone.",
    description:
      "A personal AI system designed to make fundamental and technical stock-market analysis easier to understand by translating complex financial reasoning into clear, explainable insights.",

    category: "AI · Finance",
    status: "Building",
    version: "Concept",
    year: 2026,

    problem:
      "Fundamental and technical analysis can feel fragmented and overly complex for people trying to understand markets.",

    solution:
      "The product will combine AI, market data, fundamental analysis, and technical analysis into an explainable workflow designed for both beginners and experienced users.",

    technologies: [
      "AI",
      "Python",
      "Market Data",
    ],

    features: [
      "Fundamental analysis",
      "Technical analysis",
      "Explainable market reasoning",
      "AI-assisted research",
      "Beginner-friendly insights",
    ],

    roadmap: [
      "Fundamental analysis engine",
      "Technical analysis engine",
      "AI research workflow",
      "Explainable stock reports",
      "Personal research assistant",
    ],
  },
{
  id: 9,
  slug: "passing-game-mobile",
  title: "Passing Game Mobile",
  tagline: "A mobile game built around timing, skill, and interaction.",
  description:
    "A mobile gaming experiment focused on simple mechanics, responsive interaction, and progressively challenging gameplay.",

  category: "Software",
  status: "Planned",
  version: "Concept",
  year: 2026,

  problem:
    "Simple game mechanics can become highly engaging when interaction, timing, progression, and feedback are designed carefully.",

  solution:
    "Passing Game Mobile will explore a focused mobile gameplay loop with intuitive controls and progressively challenging levels.",

  technologies: [
    "React Native",
    "TypeScript",
    "Game Development",
  ],

  features: [
    "Mobile gameplay",
    "Progressive difficulty",
    "Score system",
    "Interactive controls",
  ],

  roadmap: [
    "Core gameplay",
    "Level system",
    "Scoring",
    "Mobile deployment",
  ],
},

{
  id: 10,
  slug: "indian-stock-risk-model",
  title: "Indian Stock Risk Model",
  tagline: "Understanding risk across Indian equities.",
  description:
    "A quantitative research project exploring risk modelling for Indian stocks using market data, statistical analysis, and portfolio-level risk concepts.",

  category: "Finance",
  status: "Planned",
  version: "Concept",
  year: 2026,

  problem:
    "Investors often focus heavily on returns while having limited visibility into the underlying risk of individual stocks and portfolios.",

  solution:
    "The project will explore quantitative methods for measuring volatility, drawdowns, correlations, and other risk characteristics across Indian equities.",

  technologies: [
    "Python",
    "Statistics",
    "Market Data",
    "Quantitative Analysis",
  ],

  features: [
    "Volatility analysis",
    "Drawdown analysis",
    "Correlation analysis",
    "Stock risk scoring",
  ],

  roadmap: [
    "Risk engine",
    "Indian market dataset",
    "Stock risk ranking",
    "Portfolio risk model",
  ],
},

{
  id: 11,
  slug: "crypto-fun",
  title: "Crypto Fun",
  tagline: "Making crypto concepts interactive and understandable.",
  description:
    "An experimental project exploring cryptocurrency concepts through interactive simulations, visualisations, and playful financial experiments.",

  category: "Finance",
  status: "Planned",
  version: "Concept",
  year: 2026,

  problem:
    "Cryptocurrency concepts can be difficult to understand because price movements, market cycles, dominance, liquidity, and token behaviour are often presented without intuitive context.",

  solution:
    "Crypto Fun will use interactive experiments and visualisations to make cryptocurrency market concepts easier to explore.",

  technologies: [
    "Python",
    "AI",
    "Market Data",
    "Simulation",
  ],

  features: [
    "Crypto simulations",
    "Market visualisation",
    "Interactive experiments",
    "Market-cycle exploration",
  ],

  roadmap: [
    "Crypto market simulator",
    "Dominance visualisation",
    "Market-cycle experiments",
    "Interactive crypto tools",
  ],
},
];