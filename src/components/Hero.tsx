import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Bot, Lightbulb, ExternalLink } from 'lucide-react';
import facePortraitImg from '../assets/images/ebaye_face_portrait_1794352146331.jpg';

export const Hero: React.FC = () => {
  // Dynamic typing & wiping animation
  const phrases = [
    "Full-Stack Web Developer",
    "Robotics Competitor & Innovator",
    "Digital Problem Solver",
    "Tech Entrepreneur",
    "Embedded Systems Builder",
    "FIRST / Team Galaxy Alum"
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(75 + Math.random() * 30);

        if (displayText.length + 1 === currentPhrase.length) {
          // Pause when full phrase typed
          setIsDeleting(true);
          setTypingSpeed(2200); // Wait 2.2 seconds before wiping
        }
      } else {
        // Deleting characters (wiping)
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(38); // Fast wipe

        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(450); // Pause briefly before typing next
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed, phrases]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow (subtle) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-amber-400">
              <span>Developer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Innovator</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Creative Thinker</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Entrepreneur</span>
            </div>

            {/* Oversized Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Building Ideas. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
                Creating Solutions.
              </span> <br className="hidden sm:inline" />
              Shaping Tomorrow.
            </h1>

            {/* Dynamic Typewriter Line */}
            <div className="inline-flex items-center gap-2 py-2 px-3 rounded-lg bg-slate-900/80 border border-slate-800 text-sm sm:text-base font-mono">
              <span className="text-slate-400">Role:</span>
              <span className="text-amber-400 font-semibold">{displayText}</span>
              <span className="w-2 h-5 bg-amber-400 animate-pulse inline-block" />
            </div>

            {/* Intro Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I&apos;m <span className="font-semibold text-white">Ebaye PraiseGod Ese</span>, an ambitious and forward-thinking technologist passionate about engineering modern websites, participating in competitive robotics tournaments, and turning bold concepts into high-value commercial solutions.
            </p>

            {/* Quick disciplines icons strip */}
            <div className="flex flex-wrap items-center gap-6 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Code2 size={16} className="text-amber-400" />
                <span>Full-Stack Web Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot size={16} className="text-amber-400" />
                <span>Robotics & Embedded Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb size={16} className="text-amber-400" />
                <span>Digital Entrepreneurship</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shadow-amber-400/20 active:scale-[0.98]"
              >
                <span>Explore Selected Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors active:scale-[0.98]"
              >
                <span>View Dynamic Gallery</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Let&apos;s Connect</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Availability Notice */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>Available for web development opportunities, freelance work, & robotics collaboration</span>
            </div>
          </div>

          {/* Right Column: Visual Portrait Anchor (Enhanced Face Portrait - Ceiling Removed) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative subtle border frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-amber-400/20 via-transparent to-slate-800/40 blur-sm pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                {/* User Authentic Face Portrait */}
                <div className="aspect-[4/5] w-full overflow-hidden relative group">
                  <img
                    src={facePortraitImg}
                    alt="Ebaye PraiseGod Ese face portrait"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle contrast gradient at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Floating Identity Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-left">
                    <p className="text-base font-bold text-white">Ebaye PraiseGod Ese</p>
                    <p className="text-xs text-amber-400 font-medium">Developer & Robotics Innovator</p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
                      <span>Nigeria · Global Ambition</span>
                      <span className="font-mono tabular-nums text-slate-300">Team Galaxy Alum</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below-the-Split: Full-Width 4-Column Metric Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">8+</p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Featured Projects Completed</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">1st</p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Class Robotics Tournament Play</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">+140%</p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Client Lead Growth Delivered</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">100%</p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Commitment to Continuous Growth</p>
          </div>
        </div>

      </div>
    </section>
  );
};
