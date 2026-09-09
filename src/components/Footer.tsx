import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-darkBg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Logo & Headline */}
          <div className="space-y-1">
            <a href="#" className="font-outfit font-extrabold text-xl tracking-tight text-slate-850 dark:text-white">
              Abhishek Kumar Srivastava
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              React Native & React.js Developer
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-primary-indigo dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-primary-indigo dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-200 hover:bg-slate-350 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-200 transition-all active:scale-95"
              aria-label="Scroll to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-slate-200 dark:bg-slate-800/80 my-6" />

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 font-light text-center">
          <span>
            © 2026 Abhishek Kumar Srivastava. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Built with React, TypeScript & Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
};
