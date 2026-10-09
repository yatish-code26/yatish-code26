import React from 'react';
import type { Project } from '../data/projects';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onInspect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onInspect }) => {
  return (
    <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between h-full border border-white/5 hover:border-sky-500/30 transition-all group">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-sky-500/10 border border-sky-500/20 text-sky-400">
            {project.categoryLabel}
          </span>
          <span className="text-[11px] font-mono text-slate-500 truncate max-w-[150px]">
            {project.status.split(' ')[0]}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1.5 flex items-center justify-between">
          <span>{project.name}</span>
          <ArrowUpRight size={18} className="text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>
        <p className="font-mono text-xs text-sky-400/80 mb-3 line-clamp-1">{project.tagline}</p>

        {/* Summary Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          {project.summary}
        </p>

        {/* Key Metrics / Highlights */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-950/60 border border-white/5">
            {project.metrics.slice(0, 2).map((m, i) => (
              <div key={i}>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                <div className="font-mono text-xs font-semibold text-white truncate">{m.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills (Fixed max items) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/5 text-slate-400"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Actions - Always Baseline-Aligned */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <button
          onClick={() => onInspect(project)}
          className="text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors"
        >
          Inspect Architecture <span>→</span>
        </button>

        <div className="flex items-center gap-2">
          {project.verifiedBadges.length > 0 && (
            <span title={project.verifiedBadges[0]} className="text-emerald-400">
              <ShieldCheck size={16} />
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
