import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Cpu, LayoutGrid, Users, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'React Native & React.js Developer',
      company: 'Sphinx Solution Pvt. Ltd.',
      location: 'Pune, India',
      duration: 'July 2023 – Present (3+ Years)',
      summary: 'Leading development of cross-platform mobile apps and front-end React portals. Core achievements include performance optimizations, standardizing state charts, and driving migration to the React Native New Architecture.',
      categories: [
        {
          title: 'Mobile Architecture & Performance',
          icon: <Cpu size={16} className="text-primary-indigo" />,
          items: [
            'Upgraded React Native applications to newer versions, migrating legacy dependencies to modern equivalents.',
            'Implemented React Native New Architecture features including Fabric renderer components, TurboModules, and JSI interfaces.',
            'Optimized application performance by resolving memory leaks, streamlining FlatList configurations, and utilizing Hermes engine profiling.'
          ]
        },
        {
          title: 'Feature Integration & Gateway Logic',
          icon: <LayoutGrid size={16} className="text-primary-cyan" />,
          items: [
            'Integrated REST APIs and GraphQL schemes with optimized cache layers using Redux Toolkit and React Query.',
            'Implemented Razorpay and Stripe payment gateway SDKs with secure authentication checks.',
            'Managed Firebase suite integrations including FCM push notifications, Authentication, Crashlytics, and Custom Analytics events.',
            'Built real-time tracking systems integrating Google Maps SDK and localized background services.'
          ]
        },
        {
          title: 'Deployment & Collaboration',
          icon: <Users size={16} className="text-primary-violet" />,
          items: [
            'Managed complete Android and iOS release lifecycles, configuring Gradle builds, CocoaPods configurations, and Xcode signing.',
            'Collaborated with UI/UX designers, backend developers, QA testers, and product managers in agile sprints.'
          ]
        }
      ]
    }
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
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-indigo/10 text-primary-indigo mb-4"
          >
            <Award size={12} />
            <span>Employment Journey</span>
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
        <div className="max-w-5xl mx-auto relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
          {experiences.map((exp, expIdx) => (
            <div key={expIdx} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-darkBg border-[3px] border-primary-indigo flex items-center justify-center shadow-md">
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
                  <h3 className="text-2xl font-outfit font-extrabold text-slate-800 dark:text-white hover:text-primary-indigo dark:hover:text-primary-cyan transition-colors">
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

              {/* Categorized Responsibilities */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {exp.categories.map((cat, catIdx) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                    className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-darkBg-card shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center gap-2 mb-4 text-slate-800 dark:text-slate-100">
                      <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <h4 className="text-sm font-bold tracking-tight">
                        {cat.title}
                      </h4>
                    </div>

                    <ul className="space-y-3">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
                          <span className="relative -left-1">{item}</span>
                        </li>
                      ))}
                    </ul>
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
