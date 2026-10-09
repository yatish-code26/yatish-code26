export interface Project {
  id: string;
  name: string;
  category: 'flagship' | 'geospatial' | 'hackathon' | 'opensource' | 'ai';
  categoryLabel: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
  status: string;
  githubUrl?: string;
  secondaryGithubUrl?: string;
  verifiedBadges: string[];
  metrics?: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'routex',
    name: 'RouteX',
    category: 'flagship',
    categoryLabel: 'Flagship Platform',
    tagline: 'AI-Powered Travel Intelligence & Safety Ecosystem',
    summary: 'A unified cross-platform travel companion operating across Web and Mobile with dual AI model orchestration, optimistic realtime itinerary synchronization, and a zero-trust document vault.',
    problem: 'Travelers juggle fragmented apps for notes, disjointed currency calculations, unverified map listings, and non-existent safety nets when connectivity drops abroad.',
    solution: 'Engineered a unified Web (PWA) and Native Mobile application sharing a single PostgreSQL Supabase cloud architecture, featuring streaming AI companions, zero-latency optimistic updates, and emergency SOS dispatch.',
    architectureHighlights: [
      'Dual AI Pipeline: Contextual streaming assistant via Google Gemini + autonomous itinerary synthesizer via Groq / Llama',
      'Optimistic Realtime State Engine: Instant itinerary mutations bypassing WebSocket lag with Supabase Realtime',
      'Zero-Trust Document Vault: Strict PostgreSQL Row Level Security (RLS) policies encrypting passports and tickets',
      'Emergency SOS Safety Net: One-touch emergency alert dispatcher with Workbox offline-first caching',
      'Data Portability Engine: Native browser HTML-to-PDF print generation, CSV audit logs, and JSON backups'
    ],
    techStack: [
      'React 19',
      'React Native',
      'Expo',
      'TypeScript',
      'Vite',
      'Supabase',
      'PostgreSQL',
      'Row Level Security',
      'Edge Functions',
      'Workbox PWA',
      'Vitest'
    ],
    status: 'Audited v1.0 Production Platform',
    githubUrl: 'https://github.com/yatish-code26/RouteX-updated',
    secondaryGithubUrl: 'https://github.com/yatish-code26/RouteX-mobile',
    verifiedBadges: ['0 TypeScript Errors', 'Vitest Suite Passing', 'Strict Postgres RLS'],
    metrics: [
      { label: 'Platforms', value: 'Web + iOS + Android' },
      { label: 'Security Model', value: 'PostgreSQL RLS' },
      { label: 'AI Runtimes', value: 'Gemini + Groq Llama' },
      { label: 'Code Quality', value: '0 TS Compilation Errors' }
    ]
  },
  {
    id: 'landstack',
    name: 'LandStack',
    category: 'geospatial',
    categoryLabel: 'Geospatial DPI',
    tagline: 'Integrated GIS Digital Public Infrastructure for Land Governance',
    summary: 'A parcel-centric cadastral infrastructure layer connecting each unique land identity (ULPIN) to 11 regulatory governance layers, dual-temporal drone change detection, and explainable AI risk scoring.',
    problem: 'State land administration suffers from severe fragmentation across revenue registries, town zoning, and municipal permissions, causing undetected encroachment and land disputes.',
    solution: 'Built an integrated command-center GIS viewer and FastAPI spatial calculation engine mapping parcel ULPIN identities to environmental buffers, deeds, and AI structure detection.',
    architectureHighlights: [
      'GIS Parcel Explorer: High-performance geospatial viewer powered by MapLibre GL JS and Shapely spatial engines',
      'Dual-Temporal Drone Studio: Interactive swipe comparison between 2024 baseline and 2026 drone orthomosaics (~850 m² structure detection)',
      'Explainable AI Risk Engine: Transparent 0-100 scoring based on 6 weighted factors (master plan mismatches, lack of sanctions, eco-buffers)',
      'Server-Enforced RBAC: 6 discrete access roles (Citizen, Revenue, Planning, Registration, Admin, Auditor) with immutable audit logs',
      'Story-First Guided Demo: 5-step scenario modeled on DEMO-ULPIN-00421 with 3D volumetric extrusion view'
    ],
    techStack: [
      'FastAPI',
      'Python 3',
      'MapLibre GL JS',
      'Shapely',
      'SQLAlchemy 2.0',
      'React 18',
      'Tailwind CSS',
      'Pytest'
    ],
    status: 'Smart India Hackathon (SIH 2026) Master Prototype',
    githubUrl: 'https://github.com/yatish-code26/sih-gov',
    verifiedBadges: ['SIH 2026 Prototype', '11 Governance Layers', 'Shapely Spatial Engine'],
    metrics: [
      { label: 'Domain Layers', value: '11 Unified Domains' },
      { label: 'Spatial Engine', value: 'Shapely + PostGIS' },
      { label: 'Access Control', value: '6-Role Server RBAC' },
      { label: 'Guided Case', value: 'DEMO-ULPIN-00421' }
    ]
  },
  {
    id: 'incidentiq',
    name: 'IncidentIQ',
    category: 'hackathon',
    categoryLabel: 'Cloud Systems',
    tagline: 'Cloud Incident Intelligence & Diagnostic Command Center',
    summary: 'A cloud incident intelligence command-center designed to accelerate root-cause diagnostics and incident triage through AI-assisted reasoning and real-time telemetry simulation.',
    problem: 'Complex distributed microservice failures overwhelm on-call engineers with noisy alerts and slow remediation cycles.',
    solution: 'Developed an interactive command center interface featuring automated anomaly correlation, telemetry stream inspection, and stateful incident simulation controls.',
    architectureHighlights: [
      'Interactive Incident Simulation Engine: Stateful controls (SIMULATE INCIDENT, PAUSE, RESUME, RESET)',
      'AI-Assisted Root Cause Reasoning: Telemetry stream correlation and remediation guidance',
      'Diagnostic Command Center: High-contrast telemetry stream inspector designed for on-call triage'
    ],
    techStack: [
      'React',
      'TypeScript',
      'Cloud Telemetry Simulation',
      'Diagnostic AI Prompting'
    ],
    status: 'Microsoft Build Bengaluru Hackathon Project',
    verifiedBadges: ['Microsoft Event Project', 'Stateful Simulation', 'Root Cause Triage'],
    metrics: [
      { label: 'Event', value: 'Microsoft Build Bengaluru' },
      { label: 'Simulation Modes', value: 'Simulate / Pause / Resume / Reset' },
      { label: 'Focus', value: 'MTTR Acceleration' }
    ]
  },
  {
    id: 'langchain',
    name: 'LangChain Ecosystem',
    category: 'opensource',
    categoryLabel: 'Open Source',
    tagline: 'Partner Package Model Validation & Thinking Enforcement',
    summary: 'Upstream open-source contributions to the LangChain framework, focusing on Anthropic Claude extended thinking validation and Groq fail-fast tool-calling checks.',
    problem: 'Invalid model configuration requests (such as manual token budgets on models requiring adaptive thinking) fail unpredictably at the provider API level rather than failing fast locally.',
    solution: 'Implemented client-side model validation rules in langchain-anthropic restricting manual thinking and added comprehensive parameterized pytest unit test suites.',
    architectureHighlights: [
      'langchain-anthropic: Model validation rejecting manual thinking budgets for Claude Opus 4.7/4.8 and Sonnet 5',
      'langchain-groq proposal: Fail-fast local ValueError when model capability profile specifies tool_calling=False',
      'Comprehensive Unit Tests: Parameterized pytest fixtures ensuring full backward compatibility'
    ],
    techStack: [
      'Python 3',
      'pytest',
      'ruff',
      'mypy',
      'Git',
      'LangChain Core & Partner SDKs'
    ],
    status: 'Active Contribution Work in Progress',
    githubUrl: 'https://github.com/yatish-code26/langchain',
    verifiedBadges: ['Active Open Source Branch', 'Partner Packages', 'Pytest Coverage'],
    metrics: [
      { label: 'Repository', value: 'langchain-ai/langchain fork' },
      { label: 'Branch', value: 'anthropic/manual-thinking-validation' },
      { label: 'Issues', value: '#40770 & #40771' }
    ]
  },
  {
    id: 'xroot',
    name: 'Xroot',
    category: 'ai',
    categoryLabel: 'Edge AI Research',
    tagline: 'Self-Evolving On-Device Adaptive AI Layer',
    summary: 'An architectural concept and system prototype for an adaptive on-device AI layer that dynamically chooses the right computation model based on battery, thermal state, and task urgency.',
    problem: 'Traditional mobile AI runs static computation pipelines regardless of device thermal throttling, critical battery states, or RAM/NPU occupancy.',
    solution: 'Designed an adaptive feedback loop (Observe → Predict → Plan → Execute → Learn) dynamically balancing AI quality, computation cost, battery drain, and latency.',
    architectureHighlights: [
      'Telemetry-Aware Execution: Balances battery levels, thermal stress, RAM/NPU headroom, and latency',
      'Cyclic Adaptive Architecture: 5-stage loop from device observation to continual execution tuning',
      'Team Leadership: Conceived and guided as Team Leader with architectural design decks'
    ],
    techStack: [
      'On-Device AI Architecture',
      'Dynamic Compute Scheduling',
      'Device Telemetry Analysis'
    ],
    status: 'Architecture & Prototype Design Deck',
    verifiedBadges: ['Team Leader', 'Adaptive AI Loop', 'On-Device Optimization'],
    metrics: [
      { label: 'Role', value: 'Team Leader' },
      { label: 'Loop Stages', value: 'Observe ➔ Predict ➔ Plan ➔ Exec ➔ Learn' }
    ]
  }
];
