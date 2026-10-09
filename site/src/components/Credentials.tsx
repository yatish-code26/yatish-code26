import React from 'react';
import { Award, Shield, Terminal, Code2, Cpu } from 'lucide-react';

export const Credentials: React.FC = () => {
  const achievements = [
    {
      title: 'Smart India Hackathon (SIH 2026)',
      role: 'Master Prototype Architect',
      organization: 'Govt. of India & AICTE Initiative',
      date: '2026',
      icon: <Award size={20} className="text-emerald-400" />,
      detail: 'Architected LandStack: An integrated GIS Digital Public Infrastructure uniting 11 governance layers with drone/satellite change detection.'
    },
    {
      title: 'Microsoft Build Bengaluru',
      role: 'Hackathon Product Developer',
      organization: 'Microsoft Event',
      date: '2026',
      icon: <Cpu size={20} className="text-sky-400" />,
      detail: 'Engineered IncidentIQ: Cloud incident intelligence platform with stateful simulation controls and AI root-cause diagnostics.'
    },
    {
      title: 'LangChain Ecosystem Contribution',
      role: 'Partner Integration Contributor',
      organization: 'Open Source Community',
      date: '2026',
      icon: <Terminal size={20} className="text-indigo-400" />,
      detail: 'Contributing model validation in langchain-anthropic (adaptive thinking compliance) and fail-fast tool validation in langchain-groq.'
    },
    {
      title: 'Adobe Hackathon Participation',
      role: 'Prototype Engineer',
      organization: 'Adobe Developer Event',
      date: 'Verified',
      icon: <Code2 size={20} className="text-pink-400" />,
      detail: 'Engaged in high-velocity product prototyping and interface interaction sprints.'
    },
    {
      title: 'InfoSec & Cryptography Fundamentals',
      role: 'Certified Foundations',
      organization: 'Technical Certifications',
      date: 'Verified',
      icon: <Shield size={20} className="text-amber-400" />,
      detail: 'Completed formal certifications in Information Security fundamentals and cryptographic mechanisms.'
    },
    {
      title: 'Algorithmic Problem Solving',
      role: 'Milestone Solver',
      organization: 'LeetCode Problem Solving',
      date: 'Verified',
      icon: <Terminal size={20} className="text-sky-300" />,
      detail: 'Achieved 100-Day Problem Solving and 50+ Solver milestones in computational data structures and algorithms.'
    }
  ];

  return (
    <section id="credentials" className="section border-b border-white/5">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 font-mono text-xs mb-3">
            <span>05 // VERIFIED MILESTONES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Credentials &amp; Hackathons
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Strictly verified achievements based on documented certificates, project repositories, and demonstrable code commits.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">{item.icon}</div>
                  <span className="font-mono text-xs text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <div className="font-mono text-xs text-sky-400 mb-3">{item.role} • {item.organization}</div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.detail}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span>✓ VERIFIED CREDENTIAL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
