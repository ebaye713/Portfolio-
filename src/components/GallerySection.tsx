import React, { useState } from 'react';
import { galleryPhotos } from '../data/gallery';
import { LightboxModal } from './LightboxModal';
import { Maximize2 } from 'lucide-react';

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
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
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

        {/* Dynamic Bento Gallery Grid driven by filteredPhotos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {filteredPhotos.map((photo, index) => {
            // Preserve the wide bento rhythm when viewing All photos
            const colSpanClass =
              selectedCategory !== 'All'
                ? 'md:col-span-12 min-h-[380px] md:min-h-[480px]'
                : index === 0
                  ? 'md:col-span-8 min-h-[360px] md:min-h-[460px]'
                  : index === 1
                    ? 'md:col-span-4 min-h-[360px] md:min-h-[460px]'
                    : 'md:col-span-12 min-h-[280px] sm:min-h-[340px]';

            return (
              <div
                key={photo.id}
                onClick={() => setActiveLightboxIndex(index)}
                className={`${colSpanClass} group cursor-pointer relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-end`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Measured Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />

                <div className="relative p-6 sm:p-8 space-y-2 z-10">
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                    <span>{photo.category}</span>
                    <span aria-hidden="true" className="text-slate-400">·</span>
                    <span>{photo.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl leading-relaxed">
                    {photo.caption}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                    <span className="font-mono text-[11px] text-slate-300 truncate pr-3">{photo.context}</span>
                    <span className="inline-flex items-center gap-1 text-amber-400 font-semibold whitespace-nowrap shrink-0">
                      <Maximize2 size={13} />
                      <span>Expand Photo</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && (
          <LightboxModal
            photos={filteredPhotos}
            initialIndex={activeLightboxIndex}
            isOpen={activeLightboxIndex !== null}
            onClose={() => setActiveLightboxIndex(null)}
          />
        )}

      </div>
    </section>
  );
};
