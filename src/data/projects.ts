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
      "Financial concepts are difficult to understand when presented only through static explanations.",

    solution:
      "Interactive simulations make financial concepts easier to explore and understand.",

    architecture:
      "Interactive financial models with a web-based interface designed around experimentation.",

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

    challenges: [
      "Making complex financial concepts easy to understand.",
      "Balancing realistic calculations with simple interaction.",
    ],

    lessons: [
      "Interactive learning is more effective than static explanations.",
      "Good financial UX requires clarity before complexity.",
    ],

    futurePlans: [
      "AI Financial Coach",
      "Portfolio Optimizer",
      "Retirement Planner",
    ],

    featured: true,
  },

  {
    id: 2,
    slug: "money-river",
    title: "Money River",
    tagline: "Personal finance simulator built in C++ and Python.",
    description:
      "A finance simulation project exploring cash flow, saving, wealth accumulation and optimized computational implementations.",

    category: "Finance",
    status: "Completed",
    version: "v1.0",
    year: 2026,

    problem:
      "Financial simulations can become computationally expensive as scenarios grow more complex.",

    solution:
      "Separate implementations explore the same financial concepts through C++ optimization and Python experimentation.",

    technologies: [
      "C++",
      "Python",
      "Algorithms",
      "Simulation",
    ],

    features: [
      "Cash-flow simulation",
      "Wealth modelling",
      "C++ optimized implementation",
      "Python implementation",
    ],

    lessons: [
      "Performance and experimentation can coexist through different implementations.",
      "The same model can be expressed effectively across languages.",
    ],

    futurePlans: [
      "Advanced financial scenarios",
      "Visualization layer",
      "Scenario comparison",
    ],

    featured: true,
  },

  {
    id: 3,
    slug: "market-memory",
    title: "Market Memory",
    tagline: "AI trading journal and market observation system.",
    description:
      "A trading journal for recording market observations, price snapshots, watchlists, alerts, and trading decisions.",

    category: "Finance",
    status: "Completed",
    version: "v1.0",
    year: 2026,

    problem:
      "Trading decisions and market observations are easily forgotten when there is no structured memory system.",

    solution:
      "A digital journal captures observations, prices, assets, alerts, and trading reasoning in one place.",

    architecture:
      "React Native frontend connected to a FastAPI backend and Supabase data layer.",

    technologies: [
      "React Native",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "Expo",
    ],

    features: [
      "Market observations",
      "Watchlist",
      "Price alerts",
      "Trading journal",
      "Snapshots",
    ],

    challenges: [
      "Designing an efficient mobile-first workflow.",
      "Connecting market data with persistent journal entries.",
    ],

    lessons: [
      "Structured memory can improve decision quality.",
      "A focused mobile workflow can outperform feature-heavy interfaces.",
    ],

    futurePlans: [
      "Advanced market analytics",
      "AI-assisted observations",
      "Portfolio intelligence",
    ],

    featured: true,
  },

  {
    id: 4,
    slug: "stand-dashboard",
    title: "Stand Dashboard",
    tagline: "Digital engineering dashboard for stand-area operations.",
    description:
      "A digital system for tracking stand health, component history, line position, entry guides, inventory and maintenance records.",

    category: "Mechanical",
    status: "Building",
    version: "v0.1",
    year: 2026,

    problem:
      "Engineering asset information is difficult to manage when operational history and component changes are scattered across systems.",

    solution:
      "A centralized engineering dashboard connects operational status, asset history, component changes and maintenance information.",

    architecture:
      "Scalable web application with structured asset records, role-based access and persistent maintenance history.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "Database",
    ],

    features: [
      "Stand status",
      "Asset history",
      "Entry guide tracking",
      "Component history",
      "Inventory tracking",
    ],

    challenges: [
      "Representing real engineering assets digitally.",
      "Maintaining accurate historical records.",
    ],

    futurePlans: [
      "Digital twin visualization",
      "Predictive maintenance",
      "Analytics dashboard",
    ],

    featured: false,
  },

  {
    id: 5,
    slug: "how-to-make-babies",
    title: "How to Make Babies",
    tagline: "Interactive educational exploration of human reproduction.",
    description:
      "An interactive educational project designed to explain human reproduction through visual storytelling and approachable explanations.",

    category: "Education",
    status: "Planned",
    version: "Concept",
    year: 2026,

    problem:
      "Human reproduction is often explained either too technically or without enough visual context.",

    solution:
      "A visual educational experience that explains the biological process progressively.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Interactive UI",
    ],

    features: [
      "Visual explanations",
      "Interactive learning",
      "Step-by-step storytelling",
    ],

    roadmap: [
      "Biology fundamentals",
      "Interactive diagrams",
      "Educational simulations",
    ],
  },

  {
    id: 6,
    slug: "risk-analysis-indian-stock-market",
    title: "Risk Analysis for Indian Stock Market",
    tagline: "Risk intelligence for Indian equities.",
    description:
      "A planned system for analysing risk, market conditions and stock behaviour within the Indian market.",

    category: "Research",
    status: "Planned",
    version: "Concept",
    year: 2026,

    problem:
      "Investors often have access to data without a structured way to interpret risk.",

    solution:
      "A research-oriented system focused on turning market information into understandable risk signals.",

    technologies: [
      "Python",
      "AI",
      "Statistics",
      "Market Data",
    ],

    features: [
      "Risk analysis",
      "Market conditions",
      "Stock analysis",
      "Risk signals",
    ],

    roadmap: [
      "Historical analysis",
      "Risk scoring",
      "Market regime detection",
      "Portfolio risk",
    ],
  },

  {
    id: 7,
    slug: "agentic-ai-indian-stocks",
    title: "Agentic AI for Indian Stocks",
    tagline: "Agentic intelligence for Indian market research.",
    description:
      "A planned multi-step AI system for researching Indian stocks, combining market information, analysis and structured reasoning.",

    category: "AI",
    status: "Planned",
    version: "Concept",
    year: 2026,

    problem:
      "Researching companies requires combining multiple sources, metrics and reasoning steps.",

    solution:
      "An agentic workflow that can break research into specialised tasks and consolidate the results.",

    technologies: [
      "Python",
      "AI Agents",
      "LLMs",
      "Market Data",
    ],

    features: [
      "Agent-based research",
      "Indian stock analysis",
      "Multi-step reasoning",
      "Research summaries",
    ],

    roadmap: [
      "Research agents",
      "Financial analysis agent",
      "News intelligence",
      "Decision support",
    ],
  },

  {
    id: 8,
    slug: "native-ai-indian-gk",
    title: "Native AI",
    tagline: "General-purpose Indian GK and current-affairs assistant.",
    description:
      "A planned AI system focused on Indian general knowledge, current affairs and everyday research.",

    category: "AI",
    status: "Planned",
    version: "Concept",
    year: 2026,

    problem:
      "General-purpose AI does not always provide a focused experience for Indian-specific knowledge and current affairs.",

    solution:
      "A specialised assistant designed around Indian context, knowledge and current events.",

    technologies: [
      "Python",
      "AI",
      "LLMs",
      "Search",
    ],

    features: [
      "Indian GK",
      "Current affairs",
      "Question answering",
      "Research assistance",
    ],

    roadmap: [
      "Knowledge retrieval",
      "Current-affairs pipeline",
      "Indian context layer",
      "Personal research mode",
    ],
  },
];