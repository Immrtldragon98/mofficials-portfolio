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

    featured: true,
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

    featured: true,
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

    featured: true,
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
    slug: "genetic-lab",
    title: "Genetic Lab",
    tagline: "Interactive exploration of genetics and biological systems.",
    description:
      "An upcoming interactive project exploring genetics through visual experimentation and simulation.",

    category: "Research",
    status: "Planned",
    version: "Concept",
    year: 2026,

    problem:
      "Genetics can be difficult to understand when concepts are presented only through static diagrams and terminology.",

    solution:
      "Genetic Lab will turn biological concepts into interactive experiments and visual simulations.",

    technologies: [
      "AI",
      "Simulation",
      "Interactive Web",
    ],

    features: [
      "Interactive experiments",
      "Visual explanations",
      "Genetic simulations",
    ],

    roadmap: [
      "Genetic experiments",
      "Interactive models",
      "Visual learning system",
    ],
  },

  {
    id: 8,
    slug: "personal-ai-stock-market",
    title: "Personal AI Stock Market Analyst",
    tagline: "Reimagining fundamental and technical analysis for everyone.",
    description:
      "A personal AI system designed to make fundamental and technical stock-market analysis easier to understand by translating complex financial reasoning into clear, explainable insights.",

    category: "AI · Finance",
    status: "Planned",
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
];