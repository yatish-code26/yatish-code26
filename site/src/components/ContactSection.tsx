import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-[#06080F]">
      <div className="container">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-sky-500/20 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 font-mono text-xs mb-4">
              <span>06 // TRANSMISSION CHANNEL</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Initiate Transmission
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
              Interested in collaborating on AI application architectures, full-stack systems engineering, or open-source infrastructure? Reach out directly through verified channels.
            </p>

            {/* Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Email */}
              <a
                href="mailto:yatishofficial26@gmail.com"
                className="p-5 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-sky-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 w-fit rounded-xl bg-sky-500/10 text-sky-400 mb-3 group-hover:scale-105 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="font-mono text-xs text-slate-400 mb-1">DIRECT EMAIL</div>
                  <div className="text-sm font-semibold text-white break-all">yatishofficial26@gmail.com</div>
                </div>
                <div className="mt-4 font-mono text-xs text-sky-400 flex items-center gap-1">
                  Send Message <Send size={12} />
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yatish-code26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-sky-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 w-fit rounded-xl bg-indigo-500/10 text-indigo-400 mb-3 group-hover:scale-105 transition-transform">
                    <GithubIcon size={20} />
                  </div>
                  <div className="font-mono text-xs text-slate-400 mb-1">GITHUB PROFILE</div>
                  <div className="text-sm font-semibold text-white">@yatish-code26</div>
                </div>
                <div className="mt-4 font-mono text-xs text-indigo-400 flex items-center gap-1">
                  View Repositories <span>→</span>
                </div>
              </a>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 mb-3">
                    <MapPin size={20} />
                  </div>
                  <div className="font-mono text-xs text-slate-400 mb-1">BASE LOCATION</div>
                  <div className="text-sm font-semibold text-white">Bengaluru, Karnataka</div>
                </div>
                <div className="mt-4 font-mono text-xs text-emerald-400">
                  IST (UTC +5:30)
                </div>
              </div>
            </div>

            {/* LinkedIn Verification Note */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <LinkedinIcon size={16} className="text-sky-400" />
                <span>LinkedIn verification pending confirmation (Proposed: <code className="text-sky-300 font-mono">linkedin.com/in/yatishofficial</code>)</span>
              </div>
              <a
                href="https://in.linkedin.com/in/yatishofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sky-400 hover:underline shrink-0"
              >
                Verify &amp; Connect ↗
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-xs font-mono text-slate-500 space-y-2">
          <p>© 2026 Yatish P • Architected with React, TypeScript &amp; Three.js</p>
          <p className="text-[11px] text-slate-600">The Builder's Dimension // Production Portfolio System</p>
        </div>
      </div>
    </section>
  );
};
