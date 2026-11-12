import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import { Code, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Development' | 'Robotics & AI' | 'Strategy & Mindset'>('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <p className="text-xs uppercase font-mono tracking-widest text-amber-400">03. MY SKILLS</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Stack & Mindset Matrix
            </h2>
            <p className="text-slate-400 max-w-xl text-base">
              A balanced blend of web technologies, hardware robotics engineering, and strategic problem-solving.
            </p>
          </div>

          {/* Interactive Filter Controls (§1.A allowed functional buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {(['All', 'Development', 'Robotics & AI', 'Strategy & Mindset'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === tab
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="text-amber-400/90 font-medium">{skill.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{skill.level}</span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                
                {/* Skill Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                {skill.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[11px] text-slate-400">
                    <CheckCircle2 size={12} className="text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
