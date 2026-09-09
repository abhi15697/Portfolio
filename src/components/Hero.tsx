import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowRight, CheckCircle2, Terminal, Cpu, Loader2 } from 'lucide-react';
import { generateAndDownloadResumePdf } from '../utils/downloadResume';

export const Hero: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    if (isDownloading) return;
    await generateAndDownloadResumePdf(setIsDownloading);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };



  const highlights = [
    '3+ Years React Native',
    'iOS (Xcode) & Android (Gradle)',
    'Fabric & TurboModules (New Arch)',
    'Hermes & JSI Performance',
    'Play Store & App Store Releases',
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-grid-pattern-light dark:bg-grid-pattern-dark">
      {/* Decorative colored blobs for premium dark feel */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary-cyan/10 blur-3xl dark:bg-primary-cyan/5 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-primary-indigo/10 blur-3xl dark:bg-primary-indigo/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for React Native & Mobile Roles</span>
            </motion.div>

            {/* Title / Name */}
            <div className="space-y-2">
              <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-outfit font-semibold text-slate-500 dark:text-slate-400 tracking-wide">
                Hi, my name is
              </motion.h2>
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold tracking-tight">
                <span className="block text-slate-800 dark:text-white">
                  Abhishek Kumar
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-indigo via-primary-violet to-primary-cyan">
                  Srivastava
                </span>
              </motion.h1>
            </div>

            {/* Headline & Subtitle */}
            <div className="space-y-4 max-w-2xl">
              <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-outfit font-bold text-slate-700 dark:text-slate-200">
                React Native Mobile Developer (iOS & Android)
              </motion.h3>
              <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Building high-performance, production-ready mobile applications for iOS and Android with React Native and TypeScript. Deeply specialized in React Native New Architecture (Fabric & TurboModules), Hermes engine optimization, custom native bridges, and fluid 60 FPS mobile user experiences.
              </motion.p>
            </div>

            {/* Key Highlights */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-2.5 pt-2">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                  <CheckCircle2 size={16} className="text-primary-cyan" />
                  <span>{highlight}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4 items-center">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-full hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              {/* Dynamic Resume download */}
              <button
                type="button"
                onClick={handleDownloadResume}
                disabled={isDownloading}
                className="flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-300 bg-slate-200/60 hover:bg-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-800 rounded-full hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-70 disabled:cursor-wait cursor-pointer"
              >
                {isDownloading ? (
                  <>
                    <Loader2 size={18} className="animate-spin text-primary-indigo dark:text-primary-cyan" />
                    <span>Generating PDF...</span>
                  </>
                ) : (
                  <>
                    <Download size={18} />
                    <span>Download Resume</span>
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-primary-indigo dark:text-slate-300 dark:hover:text-primary-cyan hover:underline transition-all duration-200"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 max-w-sm">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Connect:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>

          </motion.div>

          {/* Hero Right Code Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 70, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Glow behind Code Editor */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-cyan/20 to-primary-indigo/20 blur-3xl opacity-50 dark:opacity-30 rounded-3xl" />
            
            {/* Developer Terminal / Editor Card */}
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl code-window border border-slate-200 dark:border-slate-800 bg-[#0f1422]">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0a0d16] border-b border-slate-900">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-medium">
                  <Terminal size={12} className="text-primary-cyan" />
                  <span>ReactNativeProfile.ts</span>
                </div>
                <div className="w-6" /> {/* Spacer */}
              </div>
              
              {/* Code Editor Body */}
              <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-300 overflow-x-auto select-none">
                <pre>
                  <code>
                    <span className="text-[#a6accd]">{`// React Native Mobile Architecture`}</span>
                    {'\n'}
                    <span className="text-[#c792ea]">import</span> <span className="text-[#89ddff]">{`{`}</span> <span className="text-[#f07178]">TurboModuleRegistry</span><span className="text-[#89ddff]">,</span> <span className="text-[#f07178]">Platform</span> <span className="text-[#89ddff]">{`}`}</span> <span className="text-[#c792ea]">from</span> <span className="text-[#c3e88d]">'react-native'</span><span className="text-[#89ddff]">;</span>
                    {'\n'}
                    <span className="text-[#c792ea]">import</span> <span className="text-[#89ddff]">{`{`}</span> <span className="text-[#f07178]">useSharedValue</span><span className="text-[#89ddff]">,</span> <span className="text-[#f07178]">withSpring</span> <span className="text-[#89ddff]">{`}`}</span> <span className="text-[#c792ea]">from</span> <span className="text-[#c3e88d]">'react-native-reanimated'</span><span className="text-[#89ddff]">;</span>
                    {'\n\n'}
                    <span className="text-[#c792ea]">interface</span> <span className="text-[#ffcb6b]">MobileDeveloper</span> <span className="text-[#89ddff]">{`{`}</span>
                    {'\n'}
                    {`  name: `}<span className="text-[#c792ea]">string</span><span className="text-[#89ddff] font-bold">;</span>
                    {'\n'}
                    {`  role: `}<span className="text-[#c792ea]">string</span><span className="text-[#89ddff] font-bold">;</span>
                    {'\n'}
                    {`  platforms: `}<span className="text-[#c792ea]">string</span><span className="text-[#89ddff]">[]</span><span className="text-[#89ddff] font-bold">;</span>
                    {'\n'}
                    {`  experience: `}<span className="text-[#c792ea]">string</span><span className="text-[#89ddff] font-bold">;</span>
                    {'\n'}
                    {`  architecture: `}<span className="text-[#c792ea]">string</span><span className="text-[#89ddff] font-bold">;</span>
                    {'\n'}
                    {`  performance: `}<span className="text-[#c792ea]">string</span><span className="text-[#89ddff] font-bold">;</span>
                    {'\n'}
                    <span className="text-[#89ddff]">{`}`}</span>
                    {'\n\n'}
                    <span className="text-[#c792ea]">export const</span> <span className="text-[#ffcb6b]">Abhishek</span><span className="text-[#89ddff]">:</span> <span className="text-[#ffcb6b]">MobileDeveloper</span> <span className="text-[#89ddff]">=</span> <span className="text-[#89ddff]">{`{`}</span>
                    {'\n'}
                    {`  name: `}<span className="text-[#c3e88d]">'Abhishek Kumar Srivastava'</span><span className="text-[#89ddff]">,</span>
                    {'\n'}
                    {`  role: `}<span className="text-[#c3e88d]">'React Native Mobile Developer'</span><span className="text-[#89ddff]">,</span>
                    {'\n'}
                    {`  platforms: `}<span className="text-[#89ddff]">{`[`}</span><span className="text-[#c3e88d]">'iOS'</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">'Android'</span><span className="text-[#89ddff]">{`],`}</span>
                    {'\n'}
                    {`  experience: `}<span className="text-[#c3e88d]">'3+ Years'</span><span className="text-[#89ddff]">,</span>
                    {'\n'}
                    {`  architecture: `}<span className="text-[#c3e88d]">'Fabric + TurboModules + JSI'</span><span className="text-[#89ddff]">,</span>
                    {'\n'}
                    {`  performance: `}<span className="text-[#c3e88d]">'Hermes JIT + 60 FPS Reanimated'</span>
                    {'\n'}
                    <span className="text-[#89ddff]">{`};`}</span>
                  </code>
                </pre>
              </div>

              {/* Floating JSI Pill Badge */}
              <div className="absolute right-4 bottom-4 flex items-center gap-1.5 px-3 py-1 bg-[#131c31] border border-primary-cyan/30 rounded-lg text-[10px] font-mono text-primary-cyan font-bold shadow-md">
                <Cpu size={12} className="animate-pulse" />
                <span>Hermes & JSI Enabled</span>
              </div>
            </div>
            
            {/* Tech Dots/Lines visual details */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 tech-lines -z-10 opacity-30 dark:opacity-50" />
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-grid-pattern-dark -z-10 opacity-30 dark:opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
