import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Award, Smartphone, Settings, GraduationCap, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { value: '3+', label: 'Years Experience', desc: 'Dedicated React Native mobile engineering across Android & iOS', icon: <Calendar className="text-primary-indigo" size={24} /> },
    { value: 'CDAC', label: 'Certified (PG-DMC)', desc: 'Post Graduate Diploma in Mobile Computing (Sunbeam Institute, C-DAC ACTS)', icon: <Award className="text-emerald-500" size={24} /> },
    { value: 'Multiple', label: 'Store Releases', desc: 'Live mobile apps shipped on Google Play Store & Apple App Store', icon: <Smartphone className="text-primary-violet" size={24} /> },
    { value: 'Hermes', label: 'JSI Performance', desc: 'Direct C++ host binding & low-latency offline caching', icon: <Settings className="text-primary-fuchsia" size={24} /> },
  ];

  const educationList = [
    {
      degree: 'PG-Diploma in Mobile Computing (PG-DMC), CDAC Certified',
      institution: 'Sunbeam Institute (C-DAC ACTS)',
      year: '2023',
      highlight: 'Advanced mobile OS architectures, native runtime environments, and scalable systems.',
    },
    {
      degree: 'B.Tech, Electronics & Communication Engineering',
      institution: 'PSIT Kanpur',
      year: '2017',
      highlight: 'Core engineering foundation, computer networks, and microprocessors.',
    },
    {
      degree: 'Intermediate (12th)',
      institution: 'BIC Shahmuhammadpur Candrawar, Ballia',
      year: '2013',
      highlight: 'Physics, Chemistry & Mathematics.',
    },
    {
      degree: 'High School (10th)',
      institution: 'Gyan Peethika Jagdishpur, Ballia',
      year: '2010',
      highlight: 'Foundational secondary school education.',
    },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-slate-200/50 dark:border-slate-800/20 bg-slate-50/50 dark:bg-darkBg-secondary/30">
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
            <Sparkles size={12} />
            <span>Professional Profile</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold tracking-tight text-slate-800 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-indigo to-primary-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Grid: Summary & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* About Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-800 dark:text-slate-200">
              CDAC Certified React Native Developer
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Results-driven <strong className="font-semibold text-slate-800 dark:text-slate-200">CDAC Certified React Native Developer</strong> with <strong className="font-semibold text-slate-800 dark:text-slate-200">3+ years of experience</strong> delivering high-performance mobile applications for Android and iOS platforms. Expert in building scalable mobile architectures, cross-platform UI engineering, and integrating real-time GPS tracking.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Proven track record in optimizing mobile application performance, reducing bundle sizes, and leading end-to-end app development from architecture to store deployment across Google Play Console and Apple App Store.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  <strong>Core Mobile & Architecture:</strong> Cross-platform mobile development (iOS & Android), Native Bridge & JSI Optimization, Clean Modular Architecture.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary-indigo flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  <strong>Real-Time Systems & APIs:</strong> Google Maps API, background GPS location tracking, FCM push notifications, Razorpay payment gateway, Redux Toolkit & GraphQL.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary-cyan flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  <strong>Store Deployments & Testing:</strong> Production release management in Android Studio and Xcode, Jest, React Native Testing Library, ProGuard, and CI/CD pipelines.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid Block */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-darkBg-card shadow-sm hover:shadow-lg dark:hover:shadow-glass-dark hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Visual Glow Layer */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-slate-100/50 dark:bg-slate-800/10 group-hover:scale-150 transition-all duration-300 -z-10" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-800 dark:text-white transition-colors duration-200">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-outfit font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-indigo to-primary-cyan">
                    {stat.value}
                  </span>
                </div>
                
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-primary-indigo dark:group-hover:text-primary-cyan transition-colors">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Education & Certification Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-darkBg-card shadow-sm"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2.5 rounded-xl bg-primary-indigo/10 dark:bg-primary-cyan/10 text-primary-indigo dark:text-primary-cyan">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-slate-800 dark:text-white">
                Education & Certification
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Academic milestones and specialized certifications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-darkBg-secondary/40 hover:border-primary-cyan/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug">
                    {edu.degree}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-primary-indigo dark:text-primary-cyan bg-primary-indigo/10 dark:bg-primary-cyan/10 flex-shrink-0">
                    {edu.year}
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400 italic mb-2">
                  {edu.institution}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-450 leading-relaxed font-light">
                  {edu.highlight}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
