import React, { useState } from 'react';
import { Project } from '../types';
import { X, Copy, Check, Plus, Code, Eye, Sparkles } from 'lucide-react';
import kenuchSolarImg from '../assets/images/project_kenuch_solar_1794351045327.jpg';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose, onAddProject }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: 'Web Development' as Project['category'],
    description: '',
    longDescription: '',
    image: kenuchSolarImg,
    tags: 'React, TypeScript, Tailwind CSS',
    features: 'Responsive interface, High performance, User-friendly navigation',
    client: '',
    year: '2026',
    highlights: '',
    link: ''
  });

  if (!isOpen) return null;

  const generatedSlug = formData.title
    ? formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    : 'new-project-slug';

  const tagsArray = formData.tags
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  const featuresArray = formData.features
    .split(',')
    .map((f) => f.trim())
    .filter(Boolean);

  const generatedCode = `{
  id: "${generatedSlug}",
  title: "${formData.title || 'Project Name'}",
  subtitle: "${formData.subtitle || 'Short 1-line summary'}",
  category: "${formData.category}",
  description: "${formData.description.replace(/"/g, '\\"') || 'Project overview and objectives...'}",
  longDescription: "${(formData.longDescription || formData.description).replace(/"/g, '\\"')}",
  image: "${formData.image || '/assets/your-image.jpg'}",
  tags: ${JSON.stringify(tagsArray.length ? tagsArray : ['Web Development', 'React'])},
  features: ${JSON.stringify(featuresArray.length ? featuresArray : ['Feature 1', 'Feature 2'])},
  client: "${formData.client}",
  year: "${formData.year}",
  highlights: "${formData.highlights}",
  link: "${formData.link || '#'}",
  featured: true
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyToState = () => {
    if (!formData.title) return;
    const newProj: Project = {
      id: generatedSlug + '-' + Date.now(),
      title: formData.title,
      subtitle: formData.subtitle || 'New Project Showcase',
      category: formData.category,
      description: formData.description || 'Custom engineering and design project.',
      longDescription: formData.longDescription || formData.description,
      image: formData.image,
      tags: tagsArray.length ? tagsArray : ['Innovation'],
      features: featuresArray.length ? featuresArray : ['Key deliverable'],
      client: formData.client || 'Client Project',
      year: formData.year || '2026',
      highlights: formData.highlights,
      link: formData.link,
      featured: true
    };
    onAddProject(newProj);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-6">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Code size={18} className="text-amber-400" />
            <h3 className="text-base font-bold text-white">Project Code Generator & Quick Updater</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
            <X size={18} />
          </button>
        </div>

        {/* Informative Guidance Banner */}
        <div className="bg-amber-400/10 border-b border-amber-400/20 px-6 py-3 text-xs text-amber-200">
          <p>
            <strong>Note for Ebaye:</strong> Fill in your project information below to test it live in this session, or click <strong>Copy TypeScript Snippet</strong> to paste it directly into <code className="bg-slate-950/60 px-1 py-0.5 rounded text-amber-300">src/data/projects.ts</code> where commented!
          </p>
        </div>

        {/* 2-Column Form & Code Output */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-h-[70vh] overflow-y-auto">
          
          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Project Title</label>
              <input
                type="text"
                placeholder="e.g. Smart Irrigation AI Controller"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Subtitle</label>
              <input
                type="text"
                placeholder="e.g. IoT Sensor Automation System"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Robotics & Hardware">Robotics & Hardware</option>
                  <option value="Digital Branding">Digital Branding</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Year</label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Brief Description</label>
              <textarea
                rows={2}
                placeholder="2-3 sentences explaining what was built..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Tags (Comma-separated)</label>
              <input
                type="text"
                placeholder="React, Python, Robotics, Tailwind"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Key Features (Comma-separated)</label>
              <input
                type="text"
                placeholder="Microcontroller logic, Automated telemetry, Modern UI"
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Client / Org</label>
                <input
                  type="text"
                  placeholder="e.g. Innovation Lab"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Highlight / Outcome</label>
                <input
                  type="text"
                  placeholder="e.g. 50% Efficiency Increase"
                  value={formData.highlights}
                  onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          {/* Generated Code Preview */}
          <div className="flex flex-col justify-between space-y-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">Ready-to-Paste Code:</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
              <pre className="text-[11px] font-mono text-amber-200/90 bg-slate-900/90 p-3 rounded-lg overflow-x-auto max-h-72 border border-slate-800">
                {generatedCode}
              </pre>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleApplyToState}
                disabled={!formData.title}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Plus size={14} />
                <span>Add to Live Preview</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
