import React from 'react';
import { X, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-slate-800 relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Tag & Title */}
        <div className="space-y-2 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            {project.tag}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
            {project.title}
          </h2>
        </div>

        {/* Image Preview */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 mb-6 relative aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.description}
          </p>

          {/* Key Engineering Highlights */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Key Architecture & Implementation Highlights</span>
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 border border-slate-200 text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 shadow-sm transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors text-center sm:text-right"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
