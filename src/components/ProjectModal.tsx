import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Check, Calendar, User, Tag, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-amber-400 font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            {project.client && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.client}</span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Image Frame */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-amber-400/90 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <p>{project.longDescription || project.description}</p>
          </div>

          {/* Key Metric Highlight */}
          {project.highlights && (
            <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-200">
              <strong className="text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                Project Result / Impact:
              </strong>
              {project.highlights}
            </div>
          )}

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Key Architecture & Features:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2">
                  <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Technologies:</span>
            {project.tags.map((tag, i) => (
              <span key={tag} className="font-mono text-slate-400">
                {tag}{i < project.tags.length - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>

          {/* Action Link */}
          {project.link && project.link !== '#' && (
            <div className="pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                <span>Visit Live Platform</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
