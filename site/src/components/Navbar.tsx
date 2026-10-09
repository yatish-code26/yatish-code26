import React from 'react';
import { Terminal, Eye, EyeOff } from 'lucide-react';
import { GithubIcon } from './Icons';

interface NavbarProps {
  reducedMotion: boolean;
  onToggleMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ reducedMotion, onToggleMotion }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#06080F]/80 border-b border-white/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Terminal size={18} />
          </div>
          <div>
            <span className="font-mono text-sm font-bold text-white tracking-wider">YATISH P</span>
            <span className="hidden sm:inline font-mono text-xs text-sky-400 ml-2">// THE BUILDER'S DIMENSION</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-400">
          <a href="#hero" className="hover:text-sky-400 transition-colors">01 // HERO</a>
          <a href="#lifecycle" className="hover:text-sky-400 transition-colors">02 // ARCHITECTURE</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">03 // SYSTEMS</a>
          <a href="#matrix" className="hover:text-sky-400 transition-colors">04 // TECH STACK</a>
          <a href="#credentials" className="hover:text-sky-400 transition-colors">05 // CREDENTIALS</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">06 // CONTACT</a>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMotion}
            title={reducedMotion ? 'Enable 3D Motion' : 'Reduce Motion'}
            className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-sky-500/40 text-slate-400 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
          >
            {reducedMotion ? <EyeOff size={14} className="text-amber-400" /> : <Eye size={14} className="text-sky-400" />}
            <span className="hidden lg:inline">{reducedMotion ? 'Motion: Off' : 'Motion: 3D'}</span>
          </button>

          <a
            href="https://github.com/yatish-code26"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 font-mono text-xs flex items-center gap-1.5 transition-all"
          >
            <GithubIcon size={14} />
            <span className="hidden sm:inline">@yatish-code26</span>
          </a>
        </div>
      </div>
    </header>
  );
};
