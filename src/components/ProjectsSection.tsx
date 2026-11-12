import React, { useState } from 'react';
import { Project } from '../types';
import { projectsData } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [projects] = useState<Project[]>(projectsData);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Development', 'Robotics & Hardware', 'Digital Branding'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 border-t border-slate-900 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <p className="text-xs uppercase font-mono tracking-widest text-amber-400">04. SELECTED PROJECTS</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering & Digital Works
            </h2>
            <p className="text-slate-400 max-w-xl text-base">
              A curated selection of commercial web applications, digital branding platforms, and competitive robotics systems.
            </p>
          </div>

          {/* Action Row: Category Filter Controls */}
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

        {/* Bento Grid Showcase (§2.A) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Image Container with measured scrim */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating Action Button */}
                    <div className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950/70 backdrop-blur-md text-white border border-slate-700/60 group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:border-amber-400 transition-colors">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-3">
                    {/* Unboxed Metadata (Category · Year · Client) */}
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="text-amber-400 font-medium">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      {project.client && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="truncate max-w-[140px]">{project.client}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle / Summary */}
                    <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlight Box if available */}
                    {project.highlights && (
                      <p className="text-xs text-amber-300/90 font-medium pt-1">
                        ★ {project.highlights}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Footer: Tags & Read more */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {project.tags.slice(0, 3).map((tag, tIndex) => (
                      <span key={tag} className="font-mono text-[11px] text-slate-400">
                        {tag}{tIndex < Math.min(project.tags.length, 3) - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform whitespace-nowrap">
                    View Details →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Deep Dive */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
