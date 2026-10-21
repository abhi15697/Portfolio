import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, Layers, Cpu, Smartphone } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'React Native Developer',
      company: 'Sphinx Solution Pvt. Ltd.',
      location: 'Pune, India',
      duration: 'July 2023 – Present',
      summary: 'Delivering end-to-end cross-platform mobile applications for Android and iOS using React Native. Leading architecture design, offline caching pipelines, hardware and payment integrations, and release management across Android Studio and Xcode.',
      keyDeliverables: [
        'Engineered high-quality cross-platform mobile apps using React Native, reducing launch bundle size and delivering smooth, responsive mobile user interfaces.',
        'Architected robust state management systems using Redux Toolkit and Context API to manage complex offline data caching.',
        'Integrated GraphQL endpoints, REST APIs, Firebase services, and Razorpay payment SDKs for seamless transaction handling.',
        'Implemented background GPS location tracking and dynamic mapping using Google Maps API for real-time app notifications.',
        'Managed build distribution and deployment pipelines across Android Studio and Xcode environments.',
      ],
      highlights: [
        {
          title: 'Cross-Platform UI & Architecture',
          icon: <Smartphone size={16} className="text-primary-indigo" />,
          desc: 'High-performance components, launch bundle size reduction, and smooth 60 FPS user experiences.',
        },
        {
          title: 'State & Hardware Integrations',
          icon: <Cpu size={16} className="text-primary-cyan" />,
          desc: 'Redux Toolkit, Context API offline caching, Google Maps background GPS, Razorpay & FCM notifications.',
        },
        {
          title: 'Release & CI/CD Pipelines',
          icon: <Layers size={16} className="text-primary-violet" />,
          desc: 'End-to-end store publishing via Google Play Console and Apple App Store (Xcode & Android Studio).',
        },
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 border-t border-slate-200/50 dark:border-slate-800/20 bg-slate-50/50 dark:bg-darkBg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-indigo/10 text-primary-indigo dark:text-primary-cyan dark:bg-primary-cyan/10 mb-4"
          >
            <Award size={12} />
            <span>Work History</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold tracking-tight text-slate-800 dark:text-white"
          >
            Work Experience
          </motion.h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-indigo to-primary-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative pl-7 sm:pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
          {experiences.map((exp, expIdx) => (
            <div key={expIdx} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-darkBg border-[3px] border-primary-indigo flex items-center justify-center shadow-md">
                <Briefcase size={10} className="text-primary-indigo" />
              </div>

              {/* Company & Role Details Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-outfit font-extrabold text-slate-800 dark:text-white hover:text-primary-indigo dark:hover:text-primary-cyan transition-colors">
                    {exp.role}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-indigo dark:text-primary-cyan bg-primary-indigo/5 dark:bg-primary-cyan/10 px-3 py-1 rounded-full border border-primary-indigo/10 dark:border-primary-cyan/20 w-fit">
                    <Calendar size={12} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  <span className="text-slate-700 dark:text-slate-300 font-bold">{exp.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
                  {exp.summary}
                </p>
              </motion.div>

              {/* Core CV Deliverables Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-darkBg-card shadow-sm mb-6"
              >
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-cyan" />
                  Key Responsibilities & Deliverables (Sphinx Solution)
                </h4>

                <div className="space-y-3">
                  {exp.keyDeliverables.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-primary-cyan flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Three Mini Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exp.highlights.map((hl, hlIdx) => (
                  <motion.div
                    key={hl.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: hlIdx * 0.1 }}
                    className="p-4 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/60 dark:bg-darkBg-secondary/40"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center">
                        {hl.icon}
                      </div>
                      <h5 className="text-xs font-bold text-slate-800 dark:text-slate-100">
                        {hl.title}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                      {hl.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
