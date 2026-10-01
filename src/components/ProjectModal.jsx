import React from 'react';
import { X, ExternalLink, CheckCircle2, Sparkles, Calendar, Target, Layers, Cloud } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative text-slate-800 dark:text-slate-100"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-2 pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                {project.tag}
              </span>

              {project.period && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  <span>{project.period}</span>
                </span>
              )}
              
              {project.status === 'Completed' ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Completed {project.statusNote ? `• ${project.statusNote}` : ''}</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>In Progress {project.statusNote ? `• ${project.statusNote}` : ''}</span>
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono">
              {project.title}
            </h2>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 -mr-2 -mt-2 cursor-pointer"
            title="Close Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto modal-scrollbar space-y-6 flex-1">
          {/* Overview Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Project Overview
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* System Goal / Objective Callout */}
          {project.goal && (
            <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-slate-800 dark:text-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider">
                <Target className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>System Objective & Problem Solved</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.goal}
              </p>
            </div>
          )}

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 pt-1">
              <h4 className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Key Architecture & Implementation Highlights</span>
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((highlight, idx) => {
                  const colonIndex = highlight.indexOf(':');
                  const hasPrefix = colonIndex > 0 && colonIndex < 35;
                  return (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50/80 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <div className="leading-relaxed">
                        {hasPrefix ? (
                          <>
                            <span className="font-semibold text-slate-900 dark:text-white">{highlight.slice(0, colonIndex + 1)}</span>
                            <span>{highlight.slice(colonIndex + 1)}</span>
                          </>
                        ) : (
                          <span>{highlight}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* System Architecture & Tech Layers */}
          {project.techLayers && project.techLayers.length > 0 && (
            <div className="space-y-3 pt-1">
              <h4 className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>System Architecture & Layer Breakdown</span>
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {project.techLayers.map((layer, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 self-start shrink-0">
                      {layer.layer}
                    </span>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-300 flex-1 sm:text-right">
                      {layer.tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cloud & Infrastructure Deployment */}
          {project.cloudInfrastructure && project.cloudInfrastructure.length > 0 && (
            <div className="space-y-3 pt-1">
              <h4 className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Cloud & Infrastructure Deployment</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.cloudInfrastructure.map((infra, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 flex flex-col justify-between gap-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-xs text-slate-900 dark:text-white font-mono">{infra.name}</span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                        {infra.provider}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {infra.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="space-y-2.5 pt-1">
            <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 sm:p-6 bg-slate-50/60 dark:bg-slate-900/90 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 sm:gap-3 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-xs transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white shadow-xs transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}

          {!project.github && !project.demo && (
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 italic px-1">
              Hardware / Civic System • Archived
            </span>
          )}
        </div>

      </div>
    </div>
  );
}
