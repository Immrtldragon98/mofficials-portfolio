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
    version: "v3.0",
    year: 2026,

    problem:
      "Market observations and trading decisions are easily forgotten when research, notes, prices, and decisions are stored across disconnected places.",

    solution:
      "Market Memory centralizes market observations, watchlists, alerts, price information, and trading decisions into one workflow.",

    architecture:
      "An Expo and React Native client backed by a FastAPI modular monolith, Supabase Auth and PostgreSQL, plus a lightweight worker for durable price capture.",

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
      "Open and close price capture",
      "Time-compressed weekly, monthly, and yearly review",
      "Ranked asset search",
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
      "Advanced portfolio intelligence",
      "Broader market-data coverage",
      "Long-term decision-quality insights",
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
  version: "v0.8",
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
    "Six clear presence states",
    "Custom short status",
    "Trusted private circles",
    "Last-active context",
    "Mobile-first experience",
  ],

  roadmap: [
    "Production-ready presence sync",
    "Family and close-friend spaces",
    "Granular privacy controls",
    "Reliable notifications",
  ],

  lessons: [
    "A product can become more useful by deliberately removing unnecessary features.",
    "Real-time systems require careful separation between state, events, and persistence.",
  ],

  github: "https://github.com/Immrtldragon98/Dot_Space",
  featured: true,
},
  {
    id: 8,
    slug: "market-lens",
    title: "Market Lens",
    tagline: "A personal AI research lens for understanding investments.",
    description:
      "A beginner-first personal research AI that explains what a company does, builds a fundamental hypothesis, exposes assumptions, and later uses technical analysis to test—not replace—that reasoning.",

    category: "AI · Finance",
    status: "Building",
    version: "V0 Research",
    year: 2026,

    problem:
      "Fundamental and technical analysis can feel fragmented and overly complex for people trying to understand markets.",

    solution:
      "Market Lens starts with company understanding and a modular fundamental hypothesis, adds regional and sector context, then uses technical evidence to verify assumptions in plain language.",

    technologies: [
      "AI",
      "Python",
      "Market Data",
    ],

    features: [
      "Company and business-model understanding",
      "Fundamental hypothesis engine",
      "Assumption tracking",
      "Region and sector context",
      "Evidence-backed beginner explanations",
    ],

    roadmap: [
      "GAJA-style company research flow",
      "India and Asia market context",
      "Sector intelligence modules",
      "Technical hypothesis verification",
      "Source-grounded investment reports",
    ],
    github: "https://github.com/Immrtldragon98/Market_Lens",
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
{
  id: 12,
  slug: "pokemon-simulator",
  title: "Pokémon Battle Simulator",
  tagline: "A browser battle game with tactical, turn-based combat.",
  description:
    "A deployed Pokémon-inspired battle simulator that turns familiar type matchups and move choices into a fast, interactive browser game.",
  category: "Games",
  status: "Completed",
  version: "v1.0",
  year: 2026,
  problem:
    "A battle game needs enough tactical depth to reward good choices while keeping every turn clear and responsive.",
  solution:
    "The simulator combines a focused battle loop, readable combat feedback, and a lightweight Express deployment that runs consistently in the browser.",
  architecture:
    "A static browser game served by a small Node.js and Express production server.",
  technologies: ["JavaScript", "Node.js", "Express", "Game Logic"],
  features: [
    "Turn-based battles",
    "Pokémon and move selection",
    "Type-aware combat",
    "Battle feedback",
    "Responsive browser UI",
  ],
  challenges: [
    "Keeping battle state deterministic and easy to follow.",
    "Balancing visual feedback with a quick gameplay loop.",
  ],
  lessons: [
    "Small games are strong exercises in state management and interaction design.",
    "Immediate feedback makes rule-heavy systems easier to understand.",
  ],
  roadmap: ["Expanded roster", "Smarter opponents", "Battle history"],
  github: "https://github.com/Immrtldragon98/pokemon-simulator",
  featured: true,
},
{
  id: 13,
  slug: "personal-finance-ai",
  title: "Personal Finance AI",
  tagline: "A clear, explainable guide for everyday financial decisions.",
  description:
    "An AI finance workspace planned to connect cash flow, goals, investing scenarios, and plain-language guidance without hiding assumptions behind technical jargon.",
  category: "AI · Finance",
  status: "Planned",
  version: "Research",
  year: 2026,
  problem:
    "Personal finance tools often show numbers without helping beginners understand the trade-offs behind a decision.",
  solution:
    "Build an explainable assistant that models scenarios, labels assumptions, and teaches the financial concept behind every recommendation.",
  architecture:
    "A modular planning engine with deterministic calculators, a personal data layer, and an AI explanation layer grounded in calculated results.",
  technologies: ["Python", "AI", "Financial Modelling", "Data Visualisation"],
  features: [
    "Cash-flow overview",
    "Goal and scenario planning",
    "Explainable recommendations",
    "Assumption tracking",
    "Beginner-first financial education",
  ],
  roadmap: ["Finance data model", "Scenario engine", "AI coach", "Privacy controls"],
},
{
  id: 14,
  slug: "genetics-lab",
  title: "Genetics Lab",
  tagline: "An interactive workspace for learning genetics through experiments.",
  description:
    "A planned AI/ML research playground for DNA visualisation, inheritance simulations, prediction experiments, and natural-language exploration.",
  category: "AI",
  status: "Planned",
  version: "Concept",
  year: 2026,
  problem:
    "Genetics becomes difficult to learn when sequences, inheritance, and probability are explained without an interactive model.",
  solution:
    "Create a visual lab where learners can change inputs, run simulations, and inspect how biological assumptions affect results.",
  architecture:
    "An experiment-oriented interface backed by deterministic genetics simulations, visualisation modules, and optional ML models.",
  technologies: ["Python", "AI/ML", "Simulation", "Data Visualisation"],
  features: ["DNA visualisation", "Inheritance simulation", "ML experiments", "Natural-language lab assistant"],
  roadmap: ["Inheritance sandbox", "Sequence viewer", "Prediction notebooks", "Guided experiments"],
},
{
  id: 15,
  slug: "custom-vpn-firewall",
  title: "Custom VPN & Firewall",
  tagline: "Learning network security by building the traffic path.",
  description:
    "A planned cybersecurity project exploring encrypted tunnelling, traffic policy, network visibility, and safe-by-default firewall rules.",
  category: "Cybersecurity",
  status: "Planned",
  version: "Concept",
  year: 2026,
  problem:
    "Networking and security concepts remain abstract until routing, encryption, filtering, and observability are studied as one working system.",
  solution:
    "Build an educational lab that makes the packet path visible and tests explicit allow, deny, logging, and tunnel policies in an isolated environment.",
  architecture:
    "A local lab with a tunnel service, policy engine, firewall rules, and structured traffic logs.",
  technologies: ["Networking", "Linux", "VPN", "Firewall"],
  features: ["Encrypted tunnel", "Rule-based filtering", "Traffic logs", "Isolated security lab"],
  roadmap: ["Threat model", "Tunnel prototype", "Policy engine", "Security tests"],
},
{
  id: 16,
  slug: "public-signal-search",
  title: "Public Signal Search",
  tagline: "Ethical timeline reconstruction for missing-person investigations.",
  description:
    "An education-first social-impact concept for authorised missing-person cases that organises public social-media timestamps and voluntarily shared clues into a reviewable timeline.",
  category: "AI · Social Impact",
  status: "Planned",
  version: "Ethics Research",
  year: 2026,
  problem:
    "Useful public clues can be scattered across posts and platforms, but careless aggregation can create serious privacy, safety, and misidentification risks.",
  solution:
    "Research a case-authorised workflow that records provenance, confidence, and consent, keeps a human investigator in control, and avoids covert or real-time tracking.",
  architecture:
    "A privacy-preserving evidence workspace for public or explicitly provided data, with timeline extraction, source provenance, confidence scoring, access controls, and audit logs.",
  technologies: ["OSINT", "NLP", "Geospatial Data", "Privacy Engineering"],
  features: [
    "Timestamp timeline",
    "Public-clue mapping",
    "Source provenance",
    "Human verification",
    "Case access and audit controls",
  ],
  challenges: [
    "Preventing stalking, surveillance, and misuse.",
    "Managing false positives and uncertain location clues.",
    "Following platform rules, consent requirements, and applicable law.",
  ],
  roadmap: ["Ethics and legal review", "Synthetic-data prototype", "Provenance model", "Safeguarded pilot design"],
},
{
  id: 17,
  slug: "industrial-reliability-twin",
  title: "Industrial Reliability Twin",
  tagline: "Equipment history transformed into reliability intelligence.",
  description:
    "An active WRM-focused digital twin that connects equipment hierarchy, live or last-known parameters, maintenance history, BOM data, and engineering knowledge.",
  category: "Manufacturing & Industrial",
  status: "Building",
  version: "Foundation",
  year: 2026,
  problem:
    "Engineers need one reliable view of equipment condition, component history, drawings, failure knowledge, and maintenance decisions across complex assemblies.",
  solution:
    "Build a hierarchy-aware reliability workspace that treats each equipment, sub-equipment, assembly, and component as a maintained engineering record and learning surface.",
  architecture:
    "A React frontend and FastAPI backend with PostgreSQL, document ingestion, vector retrieval, and an AI reliability layer grounded in BOMs, FMEA, RCA, drawings, and maintenance history.",
  technologies: ["React", "FastAPI", "PostgreSQL", "RAG", "Docker"],
  features: [
    "Equipment-to-component hierarchy",
    "Current and last-updated parameters",
    "Maintenance history cards",
    "BOM and document knowledge",
    "Reliability guidance for engineers",
  ],
  challenges: [
    "Modelling real WRM equipment without flattening assembly relationships.",
    "Keeping AI answers traceable to plant evidence.",
    "Combining structured history with drawings and engineering documents.",
  ],
  roadmap: ["WRM hierarchy and BOM", "Parameter history", "RAG knowledge layer", "Life-improvement recommendations"],
  github: "https://github.com/Immrtldragon98/Industrial_Digital_twin",
  featured: true,
},
{
  id: 18,
  slug: "dance-crew-studio",
  title: "Dance Crew Studio",
  tagline: "A 3D browser stage where a nine-member crew moves on command.",
  description:
    "A completed interactive dance experience featuring a nine-character street, cool, and cyberpunk-inspired crew with keyboard-controlled movement, formations, and grounded stage presentation.",
  category: "Games",
  status: "Completed",
  version: "v1.0",
  year: 2026,
  problem:
    "Character-based dance experiences quickly feel artificial when performers float, move like puppets, or lack a believable relationship with the stage.",
  solution:
    "Dance Crew Studio uses grounded 3D characters, readable formations, direct keyboard controls, and coordinated movement to make the crew feel physically present.",
  architecture:
    "A browser-based 3D scene with reusable character models, animation state control, formation logic, keyboard input, camera composition, and stage lighting.",
  technologies: ["JavaScript", "3D Web", "GLB Models", "Animation Systems"],
  features: [
    "Nine-member dance crew",
    "Five male and four female characters",
    "Keyboard-controlled dance actions",
    "Street, cool, and cyberpunk visual direction",
    "Grounded formations and stage movement",
  ],
  challenges: [
    "Keeping every character's feet visually connected to the ground.",
    "Coordinating multiple animated characters without puppet-like motion.",
    "Maintaining a clear stage composition across formations.",
  ],
  lessons: [
    "Ground contact and weight transfer matter more than visual complexity for believable motion.",
    "Reusable animation states make multi-character interactions easier to extend.",
  ],
  roadmap: ["More dance packs", "Custom crew builder", "Expanded stages"],
},
];
