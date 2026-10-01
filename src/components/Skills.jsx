import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Code2, Server, Cpu, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frameworks', label: 'Web & Backend', icon: Server },
    { id: 'automation', label: 'Systems & Automation', icon: Cpu },
  ];

  return (
    <section id="skills" className="py-20 relative bg-[#f8fafc] dark:bg-[#090d16] transition-colors duration-300 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono">
            Skills & <span className="text-blue-600 dark:text-blue-400">Tech Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Applied technical skills developed across undergraduate thesis research, software engineering, and production systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Languages */}
          {(activeTab === 'all' || activeTab === 'languages') && (
            <div className="glass-panel glass-panel-hover p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-blue-600 dark:text-blue-400">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/30">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">Languages</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Core programming languages</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-1">
                {skills.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">{lang.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800">
                      {lang.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 2: Web & Backend */}
          {(activeTab === 'all' || activeTab === 'frameworks') && (
            <div className="glass-panel glass-panel-hover p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-indigo-600 dark:text-indigo-400">
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-900/30">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">Web & Backend</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Full-stack & infrastructure</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-1">
                {skills.frameworks.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Systems & Automation */}
          {(activeTab === 'all' || activeTab === 'automation') && (
            <div className="glass-panel glass-panel-hover p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-emerald-600 dark:text-emerald-400">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">Systems & AI</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Automation & Game systems</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-1">
                {skills.automationAndAI.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-300 dark:hover:border-emerald-500 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
