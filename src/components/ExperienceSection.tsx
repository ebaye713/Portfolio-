import React from 'react';
import { experienceAchievements } from '../data/skills';
import { Award, Briefcase, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-slate-900 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <p className="text-xs uppercase font-mono tracking-widest text-amber-400">05. EXPERIENCE & ACHIEVEMENTS</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Milestones of a Relentless Builder
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            From the competitive pressure of youth robotics arenas to deploying commercial websites that drive client growth.
          </p>
        </div>

        {/* Timeline / Milestone Cards */}
        <div className="space-y-6 max-w-4xl">
          {experienceAchievements.map((item, index) => (
            <div
              key={item.title}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-amber-400">{item.year}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-xs text-slate-400 font-medium">{item.organization}</span>
                </div>
                <span className="text-xs font-mono font-medium text-amber-300/90 bg-amber-400/10 px-2.5 py-1 rounded-md self-start sm:self-auto border border-amber-400/20">
                  {item.metric}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Takeaway Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Looking for a determined developer or robotics collaborator?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Ready to bring disciplined execution, fresh perspective, and creative problem-solving to your next initiative.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
