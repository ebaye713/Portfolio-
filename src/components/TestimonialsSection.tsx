import React, { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonialsData.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const current = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="py-24 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <p className="text-xs uppercase font-mono tracking-widest text-amber-400">WHAT CLIENTS & PARTNERS SAY</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Businesses, Mentors & Teams
            </h2>
            <p className="text-slate-400 max-w-xl text-base">
              Real feedback from commercial clients, robotics mentors, and technical collaborators who have worked directly with Ebaye.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Play auto-slide" : "Pause auto-slide"}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-400 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-400 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Dynamic Featured Sliding Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-500"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Quote size={24} />
              </div>
              <span className="text-xs font-mono text-amber-400/90 font-semibold px-3 py-1 rounded-full bg-slate-950 border border-slate-800">
                {current.projectRelation}
              </span>
            </div>

            {/* Testimonial Quote */}
            <div className="min-h-[120px] flex items-center">
              <p className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic transition-opacity duration-300">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white">{current.author}</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  <span className="text-amber-400 font-medium">{current.role}</span>
                  <span className="mx-1.5">·</span>
                  <span>{current.company}</span>
                </p>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? 'w-8 bg-amber-400'
                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Continuous Marquee Slide Track */}
        <div className="mt-16 pt-8 border-t border-slate-900">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 text-center mb-6">
            Collaborator & Client Impressions
          </p>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-6 animate-marquee py-2 hover:[animation-play-state:paused]">
              {/* Render two duplicated sets for infinite seamless sliding */}
              {[...testimonialsData, ...testimonialsData].map((item, i) => (
                <div
                  key={`${item.id}-${i}`}
                  onClick={() => setActiveIndex(i % total)}
                  className="w-[320px] sm:w-[380px] shrink-0 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-amber-400/50 hover:bg-slate-900 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 italic mb-4 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="pt-3 border-t border-slate-800 text-xs">
                    <p className="font-bold text-white truncate">{item.author}</p>
                    <p className="text-[11px] text-amber-400/90 truncate">{item.role} · {item.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
