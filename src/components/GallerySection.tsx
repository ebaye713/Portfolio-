import React, { useState } from 'react';
import { galleryPhotos } from '../data/gallery';
import { LightboxModal } from './LightboxModal';
import { Maximize2, Camera, Calendar, Award } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Robotics & Engineering', 'Portraits', 'Campus & Innovation'];

  const filteredPhotos = selectedCategory === 'All'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <p className="text-xs uppercase font-mono tracking-widest text-amber-400">DYNAMIC GALLERY</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              In the Arena: Innovation, Teamwork & Leadership
            </h2>
            <p className="text-slate-400 max-w-xl text-base">
              A dynamic visual archive documenting tournament robotics with Team Galaxy, technical milestones, and personal journey.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Gallery Grid (§2.A) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Wide Showcase (Team Galaxy International Robotics Arena) */}
          <div
            onClick={() => setActiveLightboxIndex(0)}
            className="md:col-span-8 group cursor-pointer relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl hover:border-amber-400/50 transition-all duration-300 min-h-[360px] md:min-h-[460px] flex flex-col justify-end"
          >
            <img
              src="/assets/aistudio/IMG-20261011-WA0009_e6ee9516.jpg"
              alt="Team Galaxy in the international robotics tournament arena"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Measured Gradient Scrim (§1.F) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="relative p-6 sm:p-8 space-y-2 z-10">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                <span>Robotics & Engineering</span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span>Competition Season 2026</span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span className="font-mono text-slate-300">FIRST / Coding Age Circuit</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                Team Galaxy in the International Arena
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl leading-relaxed">
                Ebaye PraiseGod Ese and teammates making precision mechanical adjustments to their competition robot in the arena pits during the high-stakes youth robotics championship.
              </p>
              
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                <span className="font-mono text-[11px] text-slate-300">F.G.C. Ikom · Team Galaxy</span>
                <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
                  <Maximize2 size={13} />
                  <span>Expand Photo</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Executive Portrait (Face Portrait - Ceiling Removed) */}
          <div
            onClick={() => setActiveLightboxIndex(1)}
            className="md:col-span-4 group cursor-pointer relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl hover:border-amber-400/50 transition-all duration-300 min-h-[360px] md:min-h-[460px] flex flex-col justify-end"
          >
            <img
              src="/src/assets/images/ebaye_face_portrait_1794352146331.jpg"
              alt="Ebaye PraiseGod Ese face portrait"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Measured Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="relative p-6 space-y-2 z-10">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                <span>Portraits</span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span>2026</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                Ebaye PraiseGod Ese
              </h3>
              <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                Developer, Innovator, Creative Thinker, and Entrepreneur driven by curiosity and discipline.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                <span className="text-[11px] text-slate-300">Studio Portrait</span>
                <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
                  <Maximize2 size={13} />
                  <span>View</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Campus & Tech Fellowship (Solo Outdoor Photo) */}
          <div
            onClick={() => setActiveLightboxIndex(2)}
            className="md:col-span-12 group cursor-pointer relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl hover:border-amber-400/50 transition-all duration-300 min-h-[280px] sm:min-h-[340px] flex flex-col justify-end"
          >
            <img
              src="/src/assets/images/ebaye_solo_outdoor_1794352126353.jpg"
              alt="Ebaye PraiseGod Ese - Campus and tech innovation"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

            <div className="relative p-6 sm:p-8 space-y-2 z-10">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                <span>Campus & Innovation</span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span>Collaboration</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                Collaborative Discussions & Campus Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                Interacting with classmates and engineering partners, exchanging ideas on emerging software stacks, business opportunities, and community impact.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                <span className="text-[11px] text-slate-300">Cross-Disciplinary Fellowship</span>
                <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
                  <Maximize2 size={13} />
                  <span>Expand Full View</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && (
          <LightboxModal
            photos={galleryPhotos}
            initialIndex={activeLightboxIndex}
            isOpen={activeLightboxIndex !== null}
            onClose={() => setActiveLightboxIndex(null)}
          />
        )}

      </div>
    </section>
  );
};
