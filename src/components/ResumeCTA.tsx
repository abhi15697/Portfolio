import React, { useState } from 'react';
import { Download, Award, Loader2 } from 'lucide-react';
import { generateAndDownloadResumePdf } from '../utils/downloadResume';

export const ResumeCTA: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    if (isDownloading) return;
    await generateAndDownloadResumePdf(setIsDownloading);
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-indigo/90 to-primary-cyan/90 text-white overflow-hidden">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/20">
          <Award size={12} />
          <span>CDAC Certified • Mobile Credentials</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold tracking-tight">
          Ready to build your next mobile app?
        </h2>
        
        <p className="text-sm sm:text-base text-slate-100 max-w-xl mx-auto font-light leading-relaxed">
          Download my React Native Developer resume to review my project deliverables, mobile architecture accomplishments, and store delivery milestones.
        </p>

        {/* Dynamic HTML-to-PDF Download Button */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={handleDownloadResume}
            disabled={isDownloading}
            className="flex items-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-primary-indigo bg-white rounded-full hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
          >
            {isDownloading ? (
              <>
                <Loader2 size={18} className="animate-spin text-primary-indigo" />
                <span>Generating PDF...</span>
              </>
            ) : (
              <>
                <Download size={18} />
                <span>Download React Native CV</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
