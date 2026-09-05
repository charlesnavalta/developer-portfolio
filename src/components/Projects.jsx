import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, ExternalLink, ArrowUpRight, Info } from 'lucide-react';
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
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'
              }`}
            >
              {category === 'Thesis' ? '🎓 Undergraduate Thesis' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group border border-slate-200 bg-white"
            >
              {/* Image Preview Container */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-video overflow-hidden cursor-pointer bg-slate-100"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-lg text-[11px] font-mono font-semibold bg-white/95 text-blue-700 border border-blue-200 shadow-sm backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>

                {/* Metric Badge */}
                {project.stats && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-slate-900/90 text-white backdrop-blur-sm shadow-sm">
                      {project.stats.metric}: {project.stats.value}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                  </h3>
                  
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
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
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                  >
                    Details & Architecture →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip Callout for Customizing Projects */}
        <div className="mt-12 p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3 text-xs text-slate-700 max-w-3xl mx-auto shadow-sm">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-900">How to add your finished GitHub projects:</strong> Simply open <code className="text-blue-700 bg-white px-1.5 py-0.5 rounded border border-blue-200">src/data/portfolioData.js</code> and update the title, GitHub repository URL, live preview link, and tech stack in the <code className="text-blue-700 font-mono">projects</code> list!
          </p>
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
