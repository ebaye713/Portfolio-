import React from 'react';
import { ArrowUp, Facebook, Linkedin, Twitter } from 'lucide-react';
import { socialLinks } from '../data/socials';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSocialIcon = (id: 'facebook' | 'linkedin' | 'twitter') => {
    switch (id) {
      case 'facebook':
        return <Facebook size={16} />;
      case 'linkedin':
        return <Linkedin size={16} />;
      case 'twitter':
        return <Twitter size={16} />;
    }
  };

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Wordmark & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-bold text-white tracking-tight">
              Ebaye PraiseGod Ese
            </p>
            <p className="text-slate-400">
              Building Ideas · Creating Solutions · Shaping Tomorrow.
            </p>
          </div>

          {/* Clean Section Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Social Media Links (Facebook, LinkedIn, Twitter) & Back to Top */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.name}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-amber-400 text-slate-300 hover:text-slate-950 border border-slate-800 hover:border-amber-400 transition-colors"
                >
                  {renderSocialIcon(social.id)}
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors shrink-0 cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright line */}
        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Ebaye PraiseGod Ese. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
