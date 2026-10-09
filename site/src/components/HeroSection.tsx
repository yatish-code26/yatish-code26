import React from 'react';
import { Scene3D } from './Scene3D';
import { ArrowDown, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

interface HeroSectionProps {
  reducedMotion: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ reducedMotion }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center border-b border-white/5 overflow-hidden">
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 bg-dimension pointer-events-none" />

      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Hero Editorial Information */}
          <div className="lg:col-span-6 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-indicator" />
              <span className="font-mono text-xs font-semibold text-sky-300 tracking-wider">
                SYSTEM ONLINE // THE BUILDER'S DIMENSION
              </span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2">
                YATISH P
              </h1>
              <div className="font-mono text-xs sm:text-sm font-semibold gradient-accent tracking-widest uppercase">
                AI • Full-Stack • Product Builder • Open Source
              </div>
            </div>

            {/* Tagline & Positioning */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              I build complete, resilient technical systems from concept and domain modeling through to zero-trust database security, spatial intelligence, and production deployment.
            </p>

            {/* Core Architectural Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-mono text-xl font-bold text-white">5+</div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Engineered Systems</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-mono text-xl font-bold text-sky-400">0 TS</div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Compiler Errors</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="font-mono text-xl font-bold text-indigo-400">RLS</div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Zero-Trust Models</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-bold flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Systems</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="#lifecycle"
                className="px-5 py-3 rounded-xl border border-white/10 hover:border-sky-500/40 bg-white/5 hover:bg-white/10 font-mono text-xs text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <Terminal size={14} />
                <span>Architecture Lifecycle</span>
              </a>

              <a
                href="https://github.com/yatish-code26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Core */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Backlight */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

            {/* 3D Scene Container */}
            <div className="w-full h-[460px] sm:h-[540px] relative rounded-3xl border border-white/10 bg-slate-950/40 backdrop-blur-md overflow-hidden shadow-2xl">
              <Scene3D reducedMotion={reducedMotion} />

              {/* Technical Canvas Overlay Annotations */}
              <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                <span className="font-mono text-[10px] text-sky-400/80 uppercase tracking-widest">
                  CORE_SIMULATION // THREE.JS
                </span>
              </div>

              <div className="absolute bottom-4 right-4 pointer-events-none">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles size={11} className="text-sky-400" />
                  INTERACTIVE // DRAG OR HOVER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
