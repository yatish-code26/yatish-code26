import React, { useState } from 'react';
import { Cpu, Smartphone, Database, Compass, CheckCircle2 } from 'lucide-react';

export const TechMatrix: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number | null>(null);

  const tiers = [
    {
      id: 1,
      title: '01 // AI & Intelligent Systems',
      icon: <Cpu size={20} className="text-sky-400" />,
      tag: 'Inference & Reasoning',
      accent: '#38BDF8',
      technologies: [
        { name: 'Google Gemini API', detail: 'Real-time streaming conversational assistance via Edge Functions' },
        { name: 'Groq / Llama Runtimes', detail: 'Low-latency itinerary & Live Plan structured generation' },
        { name: 'LangChain Partner SDKs', detail: 'Adaptive thinking validation & tool-calling local guards' },
        { name: 'Contextual Prompt Systems', detail: 'Structured JSON schemas and system boundary prompts' }
      ]
    },
    {
      id: 2,
      title: '02 // Client & Mobile Ecosystem',
      icon: <Smartphone size={20} className="text-indigo-400" />,
      tag: 'Cross-Platform UI',
      accent: '#818CF8',
      technologies: [
        { name: 'React 19 & TypeScript', detail: 'Strict zero-error compilation, custom hooks, context state' },
        { name: 'React Native & Expo', detail: 'Shared authentication, safe-area insets, mobile feature parity' },
        { name: 'Vite & Tailwind CSS', detail: 'Purged static slate classes, standardized HSL semantic tokens' },
        { name: 'Workbox PWA', detail: 'Service worker offline caching, emergency SOS local availability' }
      ]
    },
    {
      id: 3,
      title: '03 // Backend & Cloud Architecture',
      icon: <Database size={20} className="text-emerald-400" />,
      tag: 'Cloud & Persistence',
      accent: '#34D399',
      technologies: [
        { name: 'Supabase PostgreSQL', detail: 'Relational schemas, foreign constraints, optimistic state synchronization' },
        { name: 'Postgres Row Level Security (RLS)', detail: 'Zero-trust isolation for user profiles, vaults, and travel data' },
        { name: 'FastAPI (Python 3)', detail: 'High-performance async spatial calculation & risk scoring services' },
        { name: 'Supabase Edge Functions', detail: 'Serverless TypeScript runtimes for streaming AI generation' }
      ]
    },
    {
      id: 4,
      title: '04 // GIS & Spatial Geometry',
      icon: <Compass size={20} className="text-amber-400" />,
      tag: 'Spatial Intelligence',
      accent: '#FBBF24',
      technologies: [
        { name: 'MapLibre GL JS', detail: 'High-contrast cadastral map command view & 3D volumetric views' },
        { name: 'Shapely (Python)', detail: 'Computational geometry for polygon parcel intersection & buffers' },
        { name: 'ULPIN Canonical Mapping', detail: 'One Parcel ➔ One ID ➔ 11 Regulatory Domain Layers' },
        { name: 'Dual-Temporal Drone Diff', detail: 'Structure footprint detection between baseline & orthomosaic' }
      ]
    },
    {
      id: 5,
      title: '05 // Testing & Verification Gates',
      icon: <CheckCircle2 size={20} className="text-pink-400" />,
      tag: 'Automated Quality Gates',
      accent: '#F472B6',
      technologies: [
        { name: 'Vitest & React Testing Library', detail: 'Component interaction testing & optimistic UI verification' },
        { name: 'Parameterized Pytest', detail: 'Async test engines for spatial models and model validation' },
        { name: 'Ruff & Mypy Static Typecheck', detail: 'Strict PEP-compliant typing and formatting for Python services' },
        { name: 'TypeScript Strict Gate', detail: 'Production builds pass with zero unhandled compiler errors' }
      ]
    }
  ];

  return (
    <section id="matrix" className="section border-b border-white/5 bg-[#080C14]">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 font-mono text-xs mb-3">
            <span>04 // ARCHITECTURAL RADAR</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Verified Technology Matrix
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Technologies actively deployed across production codebases, hackathon prototypes, and open-source contributions.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              onMouseEnter={() => setActiveTier(tier.id)}
              onMouseLeave={() => setActiveTier(null)}
              className={`glass-panel p-5 rounded-2xl flex flex-col justify-between transition-all ${
                activeTier === tier.id ? 'border-sky-400/50 bg-slate-900/80 shadow-lg' : 'border-white/5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">{tier.icon}</div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase">{tier.tag}</span>
                </div>
                <h3 className="font-mono text-xs font-bold text-white mb-4">{tier.title}</h3>

                <div className="space-y-3.5">
                  {tier.technologies.map((t, idx) => (
                    <div key={idx} className="border-b border-white/[0.04] pb-2.5 last:border-0 last:pb-0">
                      <div className="text-xs font-semibold text-slate-200">{t.name}</div>
                      <div className="text-[11px] text-slate-400 leading-normal mt-0.5">{t.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                <span>VERIFIED</span>
                <span style={{ color: tier.accent }}>● ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
