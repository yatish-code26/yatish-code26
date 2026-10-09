import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/30 bg-[#0A0E1A]/95 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400">
                {project.categoryLabel.toUpperCase()}
              </span>
              <span className="font-mono text-xs text-slate-400">// {project.status}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.name}
            </h3>
            <p className="text-sky-300 font-mono text-xs sm:text-sm mt-1">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6">
          {/* Summary */}
          <div>
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">Executive Summary</h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
              {project.summary}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
              <h5 className="font-mono text-xs text-red-400 font-bold mb-2">PROBLEM SOLVED</h5>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <h5 className="font-mono text-xs text-emerald-400 font-bold mb-2">ARCHITECTED SOLUTION</h5>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 className="font-mono text-xs text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu size={15} /> System Architecture Highlights
            </h4>
            <div className="space-y-2.5">
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Stack Chips */}
          <div>
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">Verified Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Badges */}
          <div>
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" /> System Guarantees &amp; Badges
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.verifiedBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/30 border border-emerald-500/30 text-emerald-300"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 font-mono text-xs flex items-center gap-2 transition-colors"
              >
                <GithubIcon size={15} /> Source Repository
              </a>
            )}
            {project.secondaryGithubUrl && (
              <a
                href={project.secondaryGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono text-xs flex items-center gap-2 transition-colors"
              >
                <ExternalLink size={15} /> Mobile Source Repository
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 font-mono text-xs text-slate-300 hover:text-white transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
