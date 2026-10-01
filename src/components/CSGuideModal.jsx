import React from 'react';
import { X, Code, Brain, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export default function CSGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-scrollbar shadow-2xl p-6 sm:p-8 text-slate-800 dark:text-slate-100 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono">
              Software Engineering <span className="text-slate-400 dark:text-slate-500">&</span> Automation
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              A quick guide on key engineering competencies & project architectures.
            </p>
          </div>
        </div>

        {/* Core Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Software Engineering Column */}
          <div className="bg-slate-50 dark:bg-slate-800/80 border border-blue-200/80 dark:border-blue-800/80 rounded-2xl p-5 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold mb-3">
              <Code className="w-5 h-5" />
              <h3 className="text-lg text-slate-900 dark:text-white font-mono">Software Engineering</h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              <strong>Core Mission:</strong> Building reliable, scalable, and maintainable software applications, systems, and APIs that end-users interact with daily.
            </p>

            <div className="space-y-2.5 mb-4 text-xs">
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span><strong>What you build:</strong> Web apps, backend APIs, distributed services, databases, and developer tools.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Primary Tools & Languages:</strong> JavaScript, React, Python, Java, C#, SQL, Docker, Git.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Key Skills:</strong> System architecture, data structures & algorithms, OOP, clean code, debugging, scalability.</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-700 text-[11px] text-blue-800 dark:text-blue-300 font-mono">
              💡 <em>Example Project:</em> Falsicode Structural Plagiarism Detection Engine.
            </div>
          </div>

          {/* Automation & Systems Column */}
          <div className="bg-slate-50 dark:bg-slate-800/80 border border-indigo-200/80 dark:border-indigo-800/80 rounded-2xl p-5 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-semibold mb-3">
              <Brain className="w-5 h-5" />
              <h3 className="text-lg text-slate-900 dark:text-white font-mono">Automation & Systems</h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              <strong>Core Mission:</strong> Streamlining repetitive manual workflows, parsing complex data, and building automated browser and hardware systems.
            </p>

            <div className="space-y-2.5 mb-4 text-xs">
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span><strong>What you build:</strong> Chrome extension automations, sensor-driven sorting, AST syntax parsers, workflow scripts.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span><strong>Primary Tools & Languages:</strong> Python, DOM Automation, Chrome Extension API, Unity, Arduino/Sensors.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span><strong>Key Skills:</strong> Event-driven architecture, AST tokenization, hardware-software integration, test automation.</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-700 text-[11px] text-indigo-800 dark:text-indigo-300 font-mono">
              💡 <em>Example Project:</em> AutoAnswerExt Chrome DOM Automation & CWTS BinBot.
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
}
