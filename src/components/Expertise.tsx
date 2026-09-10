import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Activity, CheckCircle2, ChevronRight, Workflow, FileJson, Shuffle } from 'lucide-react';

export const Expertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'arch' | 'perf'>('arch');

  const archNodes = [
    {
      title: 'Hermes JIT Engine',
      desc: 'Optimized JavaScript engine compiled to bytecode at build-time. Lowers APK size, slashes startup latency, and improves memory efficiency.',
    },
    {
      title: 'JavaScript Interface (JSI)',
      desc: 'Replaces the asynchronous JSON bridge. Grants JavaScript direct access to C++ host objects, enabling synchronous and ultra-fast native communication.',
    },
    {
      title: 'Fabric UI Renderer',
      desc: 'The concurrent UI manager. Directly interacts with JSI to render native UI components synchronously, eliminating thread synchronization bottlenecks.',
    },
    {
      title: 'TurboModules Bridge',
      desc: 'Allows lazy loading of native modules on demand instead of at startup, shortening app launch metrics significantly.',
    },
  ];

  const perfPractices = [
    {
      topic: 'FlatList Rendering',
      tip: 'Configure keyExtractor, apply memoized renderItem functions, and provide getItemLayout to prevent layout recalculation during scrolling.',
    },
    {
      topic: 'Re-render Avoidance',
      tip: 'Wrap event hooks in useCallback and expensive object charts in useMemo to maintain persistent referential equality across state ticks.',
    },
    {
      topic: 'Component Lazy Loading',
      tip: 'Implement React.lazy and dynamic imports to split code chunks, lowering bundle parses and initializing views lazily.',
    },
    {
      topic: 'Native Thread Optimization',
      tip: 'Configure nativeWritable drivers for animated transforms, keeping layout updates entirely on the OS UI thread.',
    },
  ];

  return (
    <section id="expertise" className="relative py-24 border-t border-slate-200/50 dark:border-slate-800/20 bg-slate-50/50 dark:bg-darkBg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-cyan/10 text-primary-cyan mb-4"
          >
            <Cpu size={12} />
            <span>Deep Dive System</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold tracking-tight text-slate-800 dark:text-white"
          >
            React Native Expertise
          </motion.h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-cyan to-primary-indigo mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex flex-col sm:flex-row p-1 rounded-2xl sm:rounded-xl bg-slate-200/60 dark:bg-slate-800/60 backdrop-blur border border-slate-350 dark:border-slate-700/50 w-full sm:w-auto gap-1">
            <button
              onClick={() => setActiveTab('arch')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'arch'
                  ? 'bg-white dark:bg-darkBg-card text-primary-indigo dark:text-primary-cyan shadow-sm'
                  : 'text-slate-650 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Workflow size={15} />
              <span>Architecture (New vs Old)</span>
            </button>
            <button
              onClick={() => setActiveTab('perf')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'perf'
                  ? 'bg-white dark:bg-darkBg-card text-primary-indigo dark:text-primary-cyan shadow-sm'
                  : 'text-slate-650 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Zap size={15} />
              <span>Performance Optimizations</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'arch' ? (
              <motion.div
                key="arch"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                
                {/* Comparative bridge diagram */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-darkBg-card/60 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-indigo/5 dark:bg-primary-indigo/2 rounded-bl-full pointer-events-none" />
                  
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Bridge vs JSI Core</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed mb-6">
                      React Native New Architecture replaces the legacy serialized message pipeline (JSON Bridge) with direct native invocation (JSI) via C++ pointers.
                    </p>

                    {/* Old bridge flow card */}
                    <div className="mb-4 bg-slate-50 dark:bg-darkBg-secondary/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 mb-1.5 uppercase">
                        <span>Old Architecture</span>
                        <span className="text-red-400">Bottleneck</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 font-mono text-[9px] text-slate-650 dark:text-slate-400">
                        <span>JS Thread</span>
                        <ChevronRight size={10} className="text-slate-400 flex-shrink-0" />
                        <span className="px-1.5 py-0.5 bg-red-400/10 text-red-500 dark:text-red-400 rounded flex items-center gap-0.5"><FileJson size={8} /> JSON Stringify</span>
                        <ChevronRight size={10} className="text-slate-400 flex-shrink-0" />
                        <span>Native UI</span>
                      </div>
                    </div>

                    {/* New JSI flow card */}
                    <div className="bg-primary-cyan/5 dark:bg-primary-cyan/2 p-3.5 rounded-xl border border-primary-cyan/20">
                      <div className="flex justify-between items-center text-[10px] font-bold text-primary-cyan mb-1.5 uppercase">
                        <span>New Architecture</span>
                        <span className="text-emerald-400">Sync / Fast</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 font-mono text-[9px] text-slate-700 dark:text-slate-350">
                        <span>JS Core</span>
                        <ChevronRight size={10} className="text-primary-cyan flex-shrink-0" />
                        <span className="px-1.5 py-0.5 bg-primary-cyan/15 text-primary-cyan font-bold rounded flex items-center gap-0.5"><Shuffle size={8} /> JSI C++ Pointer</span>
                        <ChevronRight size={10} className="text-primary-cyan flex-shrink-0" />
                        <span>Fabric / Native UI</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/40 text-xs text-slate-500">
                    <strong>Result:</strong> Zero parsing overhead, concurrent screen rendering, and synchronous native modules initialization.
                  </div>
                </div>

                {/* Tech node bullet columns */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {archNodes.map((node) => (
                    <div
                      key={node.title}
                      className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-darkBg-card shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 size={16} className="text-primary-cyan" />
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          {node.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-650 dark:text-slate-400 leading-relaxed font-light">
                        {node.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </motion.div>
            ) : (
              <motion.div
                key="perf"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {perfPractices.map((practice) => (
                  <div
                    key={practice.topic}
                    className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-darkBg-card shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-primary-cyan to-primary-indigo opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex items-center gap-2.5 mb-3 text-slate-800 dark:text-white">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-amber-500">
                        <Activity size={18} />
                      </div>
                      <h4 className="text-base font-bold">
                        {practice.topic}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {practice.tip}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
