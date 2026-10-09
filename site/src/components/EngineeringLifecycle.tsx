import React, { useState } from 'react';
import { Layers, ShieldCheck, CheckCircle2, Cloud, FileText, Cpu } from 'lucide-react';

interface Stage {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
  description: string;
  deliverables: string[];
  principles: string[];
}

export const EngineeringLifecycle: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stages: Stage[] = [
    {
      number: '01',
      id: 'spec',
      title: 'Requirements & Domain Modeling',
      subtitle: 'Problem Formulation Before Code',
      icon: <FileText size={18} />,
      accent: '#38BDF8',
      description: 'Engineering begins by decomposing domain workflows, edge cases, and user expectations into strict architectural contracts rather than rushing into code.',
      deliverables: [
        'Domain Entity Relationship Modeling',
        'Data Boundary Definitions & Invariant Checks',
        'High-Risk Failure Mode Analysis'
      ],
      principles: [
        'No ambiguous schema definitions',
        'Offline-first and degraded-network planning',
        'Explicit data ownership boundaries'
      ]
    },
    {
      number: '02',
      id: 'arch',
      title: 'System Architecture & Schema',
      subtitle: 'Resilient Foundation & Contracts',
      icon: <Layers size={18} />,
      accent: '#60A5FA',
      description: 'Designing distributed schemas, API contracts, Edge function interfaces, and GIS geometry indexing across client and cloud boundaries.',
      deliverables: [
        'Relational PostgreSQL & PostGIS Schemas',
        'Type-Safe API Contracts & DTOs',
        'Supabase Realtime Channel Topologies'
      ],
      principles: [
        'Single source of truth per domain',
        'Optimistic state reconciliation models',
        'Zero vendor lock-in abstractions'
      ]
    },
    {
      number: '03',
      id: 'impl',
      title: 'Full-Stack Implementation',
      subtitle: 'Component & Service Construction',
      icon: <Cpu size={18} />,
      accent: '#818CF8',
      description: 'Executing high-performance, modular codebases across React 19, React Native, and FastAPI with modern streaming AI runtimes.',
      deliverables: [
        'Shared Cross-Platform UI Component Systems',
        'FastAPI Spatial & Risk Calculation Engines',
        'Streaming LLM Integration (Gemini + Groq)'
      ],
      principles: [
        'Strict TypeScript compilation (0 errors allowed)',
        'Purged hardcoded static variables & semantic tokens',
        'Clean separation of business logic from UI rendering'
      ]
    },
    {
      number: '04',
      id: 'sec',
      title: 'Zero-Trust Security & RLS',
      subtitle: 'Database-Level Policy Enforcement',
      icon: <ShieldCheck size={18} />,
      accent: '#A78BFA',
      description: 'Security is implemented directly at the persistence layer via PostgreSQL Row Level Security (RLS) and server-enforced RBAC.',
      deliverables: [
        'Row Level Security Policies on all user tables',
        'Server-Enforced 6-Role RBAC (FastAPI & Supabase)',
        'JWT Auth Scope Validation & Encrypted Vaults'
      ],
      principles: [
        'Never trust client-side permission checks alone',
        'Cryptographic payload verification in audit trails',
        'Least-privilege storage bucket isolation'
      ]
    },
    {
      number: '05',
      id: 'test',
      title: 'Strict Verification & QA',
      subtitle: 'Continuous Automated Validation',
      icon: <CheckCircle2 size={18} />,
      accent: '#34D399',
      description: 'Before any release gate, all systems undergo rigorous automated unit testing, static type checking, and boundary condition evaluation.',
      deliverables: [
        'Vitest & React Testing Library Component Suites',
        'Parameterized Pytest Async Test Engines',
        'Ruff, Mypy & TypeScript Static Code Audits'
      ],
      principles: [
        'Zero tolerated console errors or unhandled promises',
        'Regression tests for model validation & tool calling',
        'Audited production build compilations'
      ]
    },
    {
      number: '06',
      id: 'deploy',
      title: 'Production & Offline Runtimes',
      subtitle: 'Resilient Edge Deployment',
      icon: <Cloud size={18} />,
      accent: '#F472B6',
      description: 'Deploying reliable, offline-first runtimes with Service Worker caching, Edge Function execution, and multi-format data portability.',
      deliverables: [
        'Workbox Service Worker PWA Caching',
        'Supabase Edge Function Invocations',
        'Self-Sovereign Multi-Format Data Portability (PDF/CSV/JSON)'
      ],
      principles: [
        'Graceful degradation when offline',
        'Predictable cold-start Edge latencies',
        'Transparent audit logs for user data'
      ]
    }
  ];

  const current = stages[activeStageIndex];

  return (
    <section id="lifecycle" className="section border-b border-white/5 bg-[#080C14]">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 font-mono text-xs mb-3">
            <span>02 // ENGINEERING DISCIPLINE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            The Systems Lifecycle
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            I don’t just build prototypes; I engineer end-to-end systems with architectural rigor. Every project follows a predictable lifecycle from requirements definition to zero-trust security and automated test gates.
          </p>
        </div>

        {/* Horizontal Pipeline Steps Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-8">
          {stages.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all relative ${
                  isActive
                    ? 'bg-slate-900/90 border-sky-400/80 shadow-lg shadow-sky-500/10'
                    : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold" style={{ color: stage.accent }}>
                    {stage.number}
                  </span>
                  <div className="text-slate-400">{stage.icon}</div>
                </div>
                <h4 className="text-xs font-bold text-white line-clamp-1">{stage.title}</h4>
                {isActive && (
                  <div
                    className="absolute -bottom-1 left-4 right-4 h-0.5 rounded-full"
                    style={{ backgroundColor: stage.accent }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Stage View Card */}
        <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
          <div
            className="absolute -right-24 -top-24 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ backgroundColor: current.accent }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            {/* Left Column: Details */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-sm font-bold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white">
                  STAGE {current.number}
                </span>
                <span className="font-mono text-xs text-slate-400">// {current.subtitle}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{current.title}</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                {current.description}
              </p>

              <div>
                <h5 className="font-mono text-xs text-sky-400 font-bold mb-3 tracking-wider uppercase">
                  Engineered Deliverables:
                </h5>
                <ul className="space-y-2">
                  {current.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                      <span className="text-sky-400 mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Architectural Principles */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-slate-950/60 border border-white/5">
              <div>
                <h5 className="font-mono text-xs text-slate-400 font-bold mb-4 tracking-wider uppercase">
                  Architectural Guarantees
                </h5>
                <div className="space-y-3">
                  {current.principles.map((principle, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 font-medium">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>VERIFIED GATE: 100% COMPLETE</span>
                <span style={{ color: current.accent }}>PASS // COMPLIANT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
