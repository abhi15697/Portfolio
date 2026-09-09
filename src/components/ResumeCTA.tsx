import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, Award } from 'lucide-react';

export const ResumeCTA: React.FC = () => {
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);

  const resumeOptions = [
    { label: 'React Native Resume', filename: '/Abhishek_Kumar_Srivastava_ReactNative.pdf' },
    { label: 'ReactJS Web Resume', filename: '/Abhishek_Kumar_Srivastava_ReactJS.pdf' },
    { label: 'Combined Full-Stack Resume', filename: '/Abhishek_Kumar_Srivastava_FullStack.pdf' },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-indigo/90 to-primary-cyan/90 text-white overflow-hidden">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/20">
          <Award size={12} />
          <span>Detailed Credentials</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold tracking-tight">
          Interested in working together?
        </h2>
        
        <p className="text-sm sm:text-base text-slate-100 max-w-xl mx-auto font-light leading-relaxed">
          Download my resume to learn more about my experience, project deliverables, and technical mobile/web development skills.
        </p>

        {/* Dropdown Container */}
        <div className="flex justify-center pt-2">
          <div className="relative">
            <button
              onClick={() => setShowResumeDropdown(!showResumeDropdown)}
              className="flex items-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-primary-indigo bg-white rounded-full hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download size={18} />
              <span>Download Resume</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${showResumeDropdown ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showResumeDropdown && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowResumeDropdown(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2.5 w-60 rounded-xl shadow-2xl z-20 overflow-hidden border border-slate-200/50 bg-white"
                  >
                    <div className="py-1">
                      {resumeOptions.map((opt) => (
                        <a
                          key={opt.label}
                          href={opt.filename}
                          download
                          onClick={() => setShowResumeDropdown(false)}
                          className="block px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-primary-indigo text-left transition-colors"
                        >
                          {opt.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
