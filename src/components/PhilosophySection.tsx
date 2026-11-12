import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
      {/* Decorative subtle ambient light */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs uppercase font-mono tracking-widest text-amber-400">06. MY PHILOSOPHY</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Mindset Behind the Code & Robotics
          </h2>
        </div>

        {/* Large Editorial Quotation */}
        <div className="relative py-10 px-6 sm:px-14 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md shadow-2xl space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/20">
            <Quote size={22} />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug tracking-tight text-balance">
            &ldquo;Your background is the foundation you stand upon, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white underline decoration-amber-400/40 underline-offset-8">
              never the ceiling that defines how high you can build.
            </span>&rdquo;
          </h3>

          <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2">
            <p>
              When others see constraints, I see the raw materials for innovation. Give me a challenge, and I will find the logic. Give me an idea, and I will engineer the reality.
            </p>
            <p className="text-slate-400 text-sm sm:text-base font-medium italic">
              &ldquo;I don&apos;t just ask how technology works—I dismantle the boundaries, understand the mechanics, and build something meaningful of my own.&rdquo;
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex items-center justify-center gap-3 text-xs text-slate-400">
            <span className="font-semibold text-white tracking-wide">Ebaye PraiseGod Ese</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Developer, Innovator, Creative Thinker & Entrepreneur</span>
          </div>
        </div>

      </div>
    </section>
  );
};
