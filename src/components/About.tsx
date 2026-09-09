import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Award, Smartphone, Settings } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { value: '3+', label: 'Years Experience', desc: 'Dedicated React Native mobile engineering', icon: <Calendar className="text-primary-indigo" size={24} /> },
    { value: 'CDAC', label: 'Certified (PG-DMC)', desc: 'Post Graduate Diploma in Mobile Computing (Sunbeam)', icon: <Award className="text-emerald-500" size={24} /> },
    { value: 'Multiple', label: 'Store Releases', desc: 'Live apps shipped on Google Play & App Store', icon: <Smartphone className="text-primary-violet" size={24} /> },
    { value: '60 FPS', label: 'Hermes Performance', desc: 'JSI direct binding & low memory footprint', icon: <Settings className="text-primary-fuchsia" size={24} /> },
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
            <span>Professional Summary</span>
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

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-800 dark:text-slate-200">
              CDAC Certified React Native Mobile Engineer (iOS & Android)
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a dedicated, <strong className="font-semibold text-slate-800 dark:text-slate-250">CDAC Certified React Native Developer</strong> (PG-Diploma in Mobile Computing from Sunbeam Pune) with <strong className="font-semibold text-slate-800 dark:text-slate-250">3+ years of professional experience</strong> building high-performance, production-grade cross-platform mobile applications for iOS and Android. My engineering focus centers on clean modular architecture, native bridge optimization, and butter-smooth 60 FPS mobile user interfaces.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I have extensive hands-on experience integrating complex mobile SDKs and native hardware features including <strong className="font-semibold text-slate-800 dark:text-slate-250">Google Maps SDK, Native Camera APIs, Payment Gateways (Razorpay/Stripe), Biometrics, Firebase FCM Push Notifications</strong>, and REST/GraphQL data layers with robust offline-first caching.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-xs font-bold">1</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  <strong>CDAC Certified (PG-DMC):</strong> Advanced Post Graduate Diploma in Mobile Computing from Sunbeam Pune (C-DAC ACTS), establishing strong foundations in mobile OS architectures, memory models, and data structures.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-indigo/10 dark:bg-primary-indigo/20 flex items-center justify-center text-primary-indigo dark:text-primary-cyan text-xs font-bold">2</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  <strong>Store Releases & Native Tooling:</strong> Complete ownership of release builds on Google Play Store & Apple App Store, configuring Gradle, ProGuard, CocoaPods, and Xcode provisioning.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-cyan/10 dark:bg-primary-cyan/20 flex items-center justify-center text-primary-cyan text-xs font-bold">3</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  <strong>New Architecture (Fabric & TurboModules):</strong> Proven capability upgrading legacy codebases to React Native New Architecture, Hermes JIT bytecode, and synchronous C++ JSI interfaces.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-fuchsia/10 dark:bg-primary-fuchsia/20 flex items-center justify-center text-primary-fuchsia text-xs font-bold">4</span>
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  <strong>Performance & State Management:</strong> Architecting predictable mobile state with Redux Toolkit and MMKV, while profiling memory leaks and eliminating JS thread frame drops.
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

      </div>
    </section>
  );
};
