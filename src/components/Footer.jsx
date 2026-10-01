import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#070a10] border-t border-slate-200 dark:border-slate-800 py-12 text-slate-500 dark:text-slate-400 text-xs font-mono transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="text-slate-900 dark:text-white font-bold">
            {portfolioData.personal.name}
          </span>
          <span className="text-slate-400 dark:text-slate-500">• B.S. Computer Science • Class of 2027</span>
        </div>

        {/* Tech Stack credit */}
        <div className="text-slate-500 dark:text-slate-400 text-center sm:text-left">
          Crafted with React, Tailwind CSS & Vite
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
