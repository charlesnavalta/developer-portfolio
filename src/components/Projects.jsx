import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, ExternalLink, ArrowUpRight, Info, Calendar } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Thesis', 'Full-Stack', 'Software Engineering'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase() || p.tag.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A selection of undergraduate thesis, full-stack, and civic innovation projects demonstrating real-world engineering impact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 sm:mb-12 overflow-x-auto no-scrollbar pb-2 sm:pb-0 px-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'
              }`}
            >
              {category === 'Thesis' ? 'Undergraduate Thesis' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid - Clean Code-Centric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between space-y-5 bg-white border border-slate-200 group relative transition-all"
            >
              {/* Card Header: Tag, Period, & Status */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
                      {project.tag}
                    </span>
                    {project.period && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{project.period}</span>
                      </span>
                    )}
                  </div>

                  {/* Status Indicator */}
                  {project.status === 'Completed' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Completed</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      <span>In Progress</span>
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer flex items-center justify-between gap-2 font-mono"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 shrink-0" />
                </h3>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills & Metrics */}
              <div className="space-y-3 pt-1">
                {project.stats && (
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                    <span className="text-blue-600 font-semibold">{project.stats.metric}:</span>
                    <span>{project.stats.value}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 transition-colors"
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
                      className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  ) : null}

                  {!project.github && !project.demo && (
                    <span className="text-[11px] font-mono text-slate-400 italic">
                      Hardware System • Archived
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs text-blue-600 hover:text-blue-700 font-semibold cursor-pointer text-left sm:text-right"
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
