import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Code2, Server, Brain, Wrench, Search, CheckCircle2, Info } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frameworks', label: 'Frameworks & Web', icon: Server },
    { id: 'dataScience', label: 'Data Science & AI', icon: Brain },
    { id: 'devops', label: 'Databases & Tools', icon: Wrench },
  ];

  const matchesSearch = (name) => {
    if (!searchQuery.trim()) return true;
    return name.toLowerCase().includes(searchQuery.toLowerCase().trim());
  };

  return (
    <section id="skills" className="py-20 relative bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
            Skills & <span className="text-blue-600">Tech Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Calibrated technical competencies built through 4 years of Computer Science coursework, capstone research, and hands-on projects.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Core Programming Languages with realistic academic/project ratings */}
          {(activeTab === 'all' || activeTab === 'languages') && (
            <div className="glass-panel p-6 rounded-2xl space-y-4 bg-white">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-blue-600">
                <Code2 className="w-5 h-5" />
                <h3 className="font-mono font-bold text-sm text-slate-900 uppercase tracking-wider">Languages</h3>
              </div>
              <div className="space-y-3.5">
                {skills.languages
                  .filter(l => matchesSearch(l.name))
                  .map((lang, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-slate-800">{lang.name}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">
                            {lang.levelLabel}
                          </span>
                        </div>
                        <span className="text-blue-600 font-mono text-xs font-semibold">{lang.level}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-600 h-full rounded-full transition-all duration-700"
                          style={{ width: `${lang.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Card 2: Frameworks & Web */}
          {(activeTab === 'all' || activeTab === 'frameworks') && (
            <div className="glass-panel p-6 rounded-2xl space-y-4 bg-white">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-blue-600">
                <Server className="w-5 h-5" />
                <h3 className="font-mono font-bold text-sm text-slate-900 uppercase tracking-wider">Frameworks & Web</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {skills.frameworks
                  .filter(f => matchesSearch(f.name))
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 text-xs text-slate-700 transition-all hover:bg-blue-50"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Card 3: Data Science & AI */}
          {(activeTab === 'all' || activeTab === 'dataScience') && (
            <div className="glass-panel p-6 rounded-2xl space-y-4 bg-white">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-indigo-600">
                <Brain className="w-5 h-5" />
                <h3 className="font-mono font-bold text-sm text-slate-900 uppercase tracking-wider">Data Science & AI</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {skills.dataScienceAndAI
                  .filter(d => matchesSearch(d.name))
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 text-xs text-slate-700 transition-all hover:bg-indigo-50"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{item.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Card 4: Databases, Tools & DevOps */}
          {(activeTab === 'all' || activeTab === 'devops') && (
            <div className="glass-panel p-6 rounded-2xl space-y-4 bg-white">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-emerald-600">
                <Wrench className="w-5 h-5" />
                <h3 className="font-mono font-bold text-sm text-slate-900 uppercase tracking-wider">Databases & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {skills.toolsAndDevOps
                  .filter(t => matchesSearch(t.name))
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 text-xs text-slate-700 transition-all hover:bg-emerald-50"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{item.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}

        </div>

        {/* Realistic Calibration Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 font-mono text-center">
          <Info className="w-3.5 h-3.5 text-blue-600" />
          <span>Ratings reflect hands-on academic coursework, undergraduate thesis research, and personal project implementations.</span>
        </div>

      </div>
    </section>
  );
}
