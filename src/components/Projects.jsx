import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, ExternalLink, ArrowUpRight, Info, Calendar } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categoryDefs = [
    { id: 'All', label: 'All' },
    { id: 'Thesis', label: 'Undergraduate Thesis' },
    { id: 'Full-Stack', label: 'Full-Stack' },
    { id: 'Software Engineering', label: 'Software Engineering' },
  ];

  const getCount = (catId) => {
    if (catId === 'All') return projects.length;
    return projects.filter(p => 
      p.category.toLowerCase() === catId.toLowerCase() || 
      p.tag.toLowerCase().includes(catId.toLowerCase())
    ).length;
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase() || p.tag.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative bg-white dark:bg-[#0b0f19] border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            A selection of undergraduate thesis, full-stack, and civic innovation projects demonstrating real-world engineering impact.
          </p>
        </div>

        {/* Category Filters with Dynamic Count Badges */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 sm:mb-12 overflow-x-auto no-scrollbar pb-2 sm:pb-0 px-1">
          {categoryDefs.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold transition-colors ${
                activeCategory === cat.id
                  ? 'bg-white/25 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}>
                {getCount(cat.id)}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Clean Code-Centric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between space-y-5 group relative transition-all"
            >
              {/* Card Header: Tag, Period, & Status */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80">
                      {project.tag}
                    </span>
                    {project.period && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{project.period}</span>
                      </span>
                    )}
                  </div>

                  {/* Status Indicator */}
                  {project.status === 'Completed' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Completed</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      <span>In Progress</span>
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-between gap-2 font-mono"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 dark:text-blue-400 shrink-0" />
                </h3>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills & Metrics */}
              <div className="space-y-3 pt-1">
                {project.stats && (
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{project.stats.metric}:</span>
                    <span>{project.stats.value}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="View GitHub Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  ) : null}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  ) : null}

                  {!project.github && !project.demo && (
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 italic">
                      Hardware System • Archived
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold cursor-pointer text-left sm:text-right"
                >
                  Details & Architecture →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep-dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
