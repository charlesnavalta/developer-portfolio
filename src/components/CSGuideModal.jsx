import React from 'react';
import { X, Code, Brain, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export default function CSGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-slate-800 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
              Software Engineering <span className="text-slate-400">vs.</span> Data Science
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              A quick guide for Computer Science students deciding on career paths & project portfolios.
            </p>
          </div>
        </div>

        {/* Core Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Software Engineering Column */}
          <div className="bg-slate-50 border border-blue-200/80 rounded-2xl p-5 hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-2 text-blue-700 font-semibold mb-3">
              <Code className="w-5 h-5" />
              <h3 className="text-lg text-slate-900 font-mono">Software Engineering (SWE)</h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              <strong>Core Mission:</strong> Building reliable, scalable, and maintainable software applications, systems, and APIs that end-users interact with daily.
            </p>

            <div className="space-y-2.5 mb-4 text-xs">
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>What you build:</strong> Web apps, mobile apps, backend APIs, distributed microservices, databases, and developer tools.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Primary Tools & Languages:</strong> JavaScript/TypeScript, React, Python, Java, C++, Go, Node.js, SQL, Docker, Git.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Key Skills:</strong> System architecture, algorithms & data structures, OOP/clean code, CI/CD, debugging, scalability.</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-200 text-[11px] text-blue-800 font-mono">
              💡 <em>Example Portfolio Project:</em> Real-time Kanban Workspace (React + Node.js + WebSocket + PostgreSQL).
            </div>
          </div>

          {/* Data Science Column */}
          <div className="bg-slate-50 border border-indigo-200/80 rounded-2xl p-5 hover:border-indigo-400 transition-colors">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold mb-3">
              <Brain className="w-5 h-5" />
              <h3 className="text-lg text-slate-900 font-mono">Data Science & AI (DS)</h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              <strong>Core Mission:</strong> Extracting actionable insights, finding hidden patterns, and building predictive AI/ML models from complex and massive datasets.
            </p>

            <div className="space-y-2.5 mb-4 text-xs">
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>What you build:</strong> Predictive models, recommendation engines, NLP text analyzers, computer vision classifiers, data pipelines.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Primary Tools & Languages:</strong> Python, R, SQL, Pandas, NumPy, Scikit-Learn, PyTorch, TensorFlow, Tableau/PowerBI.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Key Skills:</strong> Statistics, probability, data wrangling, machine learning, feature engineering, model evaluation metrics.</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-slate-200 text-[11px] text-indigo-800 font-mono">
              💡 <em>Example Portfolio Project:</em> Stock Market Sentiment & Price Movement Predictor (Python + FinBERT + PyTorch + Streamlit).
            </div>
          </div>

        </div>

        {/* The Sweet Spot: Machine Learning Engineer / Full-Stack AI */}
        <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Why have both on your portfolio as a CS Graduate?</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            As a 4th-year Computer Science graduate, you have the superpower to bridge both fields! By showcasing a <strong>Full-Stack application</strong> (Software Engineering) alongside an <strong>AI / Machine Learning Capstone</strong> (Data Science), you prove to employers that you understand both system architecture and intelligent algorithms.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Got it, take me to portfolio!
          </button>
        </div>

      </div>
    </div>
  );
}
