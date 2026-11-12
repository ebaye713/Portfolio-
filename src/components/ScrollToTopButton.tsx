import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-slate-900/90 text-amber-400 hover:text-slate-950 hover:bg-amber-400 border border-amber-400/30 hover:border-amber-400 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 group active:scale-95 animate-in fade-in slide-in-from-bottom-3"
      title="Scroll to top"
    >
      <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
      <span className="text-xs font-bold uppercase tracking-wider pr-1">Up</span>
    </button>
  );
};
