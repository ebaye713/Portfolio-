import React from 'react';
import { Compass, Cpu, Target, Award, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <p className="text-xs uppercase font-mono tracking-widest text-amber-400">01. WHO I AM</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curiosity, Discipline, and the Drive to Build.
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            From coding web platforms that generate measurable business revenue to wiring competitive tournament robots, here is the philosophy that powers my work.
          </p>
        </div>

        {/* 2-Column Story & Authentic Campus Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Photo from User */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src="/src/assets/images/ebaye_solo_outdoor_1794352126353.jpg"
                    alt="Ebaye PraiseGod Ese - Developer, Innovator and Robotics Competitor"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-slate-900/95 border-t border-slate-800">
                  <p className="text-xs font-semibold text-white">Ebaye PraiseGod Ese</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Creative technologist combining web development, robotics engineering, and strategic innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base leading-relaxed">
              <p>
                I&apos;m <strong className="text-white">Ebaye PraiseGod Ese</strong>, an ambitious, creative, and forward-thinking individual passionate about technology, innovation, business, and personal development.
              </p>
              <p>
                I enjoy exploring new ideas, learning new skills, and turning concepts into meaningful projects. From developing websites for businesses to participating in high-intensity robotics and innovation projects, I believe in using creativity, knowledge, and technology to solve real-world problems.
              </p>
              <p>
                I&apos;m not afraid to experiment, take on challenges, or explore unfamiliar fields. I value continuous learning, collaboration, discipline, and the ability to turn raw opportunities into measurable achievements. My journey is driven by curiosity, determination, and a relentless desire to create something of enduring value.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-amber-400/10 text-amber-400">
                  <Compass size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white">Curiosity & Exploration</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Eager to learn unfamiliar domains, experiment with modern tech, and ask deeper questions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-amber-400/10 text-amber-400">
                  <Cpu size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white">Technical Discipline</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Bridging software engineering precision with physical robotics and embedded circuitry.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-amber-400/10 text-amber-400">
                  <Target size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white">Value & Impact</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Focusing on practical solutions that solve real business problems and elevate client ventures.
                </p>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                <span>International robotics competition representation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                <span>Custom web development for commercial brands</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                <span>Disciplined self-directed technical learner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                <span>Collaborative teammate in pressure environments</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
