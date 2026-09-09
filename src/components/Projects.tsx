import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShoppingCart, MapPin, Activity, Camera, Layers, Cpu, Smartphone, Store, TrendingUp, Package } from 'lucide-react';

interface Project {
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  links: {
    github?: string;
    live?: string;
    android?: string;
    ios?: string;
  };
  visualMockup: React.ReactNode;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Sarwa',
      tagline: 'AI-Powered Quick Commerce & Delivery App (iOS & Android)',
      description: 'An all-in-one AI-powered mobile shopping and doorstep delivery application for food, groceries, daily essentials, and local home services. Offers 5,000+ products across 200+ trusted brands with smart AI-driven recommendations, live Google Maps courier tracking, express checkout, and instant customer notifications.',
      technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Google Maps SDK', 'Firebase FCM', 'Payment Gateway', 'AsyncStorage & MMKV', 'REST APIs', 'Android & iOS'],
      features: [
        '5,000+ products across 200+ trusted brands with smart AI recommendations',
        'Real-time live order tracking with background Google Maps geolocation',
        'Instant multi-category shopping (Groceries, Food, Bakery & Home Services)',
        'Secure multi-mode digital payments & instant checkout pipeline',
        'Automated FCM background/foreground push notifications for dispatch & delivery',
        'Production releases on Apple App Store & Google Play Store',
      ],
      links: {
        android: 'https://play.google.com/store/apps/details?id=com.sarwa&hl=en_IN',
        ios: 'https://apps.apple.com/us/app/sarwa-online-shopping-app/id1542372939',
      },
      visualMockup: (
        <div className="w-full h-full bg-[#111726] p-4 flex flex-col justify-between font-sans text-xs relative overflow-hidden rounded-xl border border-slate-800">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <ShoppingCart size={14} className="text-primary-cyan" />
              <span className="font-bold text-white tracking-wide text-[10px]">SARWA MOBILE APP</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-semibold rounded-full border border-emerald-500/20">iOS & Android</span>
          </div>
          {/* Main area: Map snippet */}
          <div className="my-2 bg-[#1b2234] rounded-lg p-2.5 flex-1 relative flex flex-col justify-between overflow-hidden border border-slate-800">
            {/* Dot Grid Map Representation */}
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-40" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-[9px] text-slate-400">Courier: Live GPS Tracking</span>
              <span className="font-bold text-[9px] text-primary-cyan">ETA: 12 Mins</span>
            </div>
            <div className="relative z-10 flex items-center gap-2 mt-2 bg-darkBg-card/90 p-1.5 rounded border border-slate-700/50">
              <MapPin size={12} className="text-red-400 animate-bounce" />
              <div className="flex flex-col text-[8px]">
                <span className="font-bold text-slate-200">Delivery Address</span>
                <span className="text-slate-400 text-[7px] truncate">123 Tech Park, Pune</span>
              </div>
            </div>
          </div>
          {/* Bottom Bar: Checkout Action */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400">Total Payment</span>
              <span className="text-[11px] font-extrabold text-white">$45.99</span>
            </div>
            <div className="px-3 py-1 bg-gradient-to-r from-primary-indigo to-primary-cyan rounded text-[9px] font-bold text-white hover:opacity-90">
              Track Order
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Sarwa Vendor App',
      tagline: 'AI-Powered Merchant & Inventory Management Mobile App (iOS & Android)',
      description: 'A cross-platform React Native enterprise application empowering local merchants, grocery stores, and restaurants to manage store operations. Features real-time order processing, live stock inventory management, daily sales intelligence, promotional offer campaigns, multi-tier staff role assignment, and instant delivery alerts.',
      technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Real-Time WebSockets', 'Firebase FCM', 'REST APIs', 'AsyncStorage & MMKV', 'Android & iOS'],
      features: [
        'Real-time order pipeline & instant delivery dispatch status updates',
        'Smart inventory control with live stock availability management',
        'Sales analytics & business intelligence reports with revenue trends',
        'Promotional offer engine & customer loyalty campaign tools',
        'Multi-tier staff role assignment & permissions management',
        'Production releases on Apple App Store & Google Play Store',
      ],
      links: {
        android: 'https://play.google.com/store/apps/details?id=com.sarwavendor&hl=en_IN',
        ios: 'https://apps.apple.com/in/app/sarwa-vendor-app/id6747668665',
      },
      visualMockup: (
        <div className="w-full h-full bg-[#111726] p-4 flex flex-col justify-between font-sans text-xs relative overflow-hidden rounded-xl border border-slate-800">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Store size={14} className="text-emerald-400" />
              <span className="font-bold text-white tracking-wide text-[10px]">SARWA VENDOR APP</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-semibold rounded-full border border-emerald-500/20">Store Open</span>
          </div>

          {/* Metric Stats Cards */}
          <div className="my-2 space-y-2 flex-1 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#1b2234] p-2 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between text-[8px] text-slate-400 mb-0.5">
                  <span>Today's Sales</span>
                  <TrendingUp size={10} className="text-emerald-400" />
                </div>
                <span className="text-xs font-bold text-white">₹18,450</span>
              </div>
              <div className="bg-[#1b2234] p-2 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between text-[8px] text-slate-400 mb-0.5">
                  <span>Active Orders</span>
                  <Package size={10} className="text-primary-cyan" />
                </div>
                <span className="text-xs font-bold text-white">42 Orders</span>
              </div>
            </div>

            {/* Live Order Card */}
            <div className="bg-darkBg-card/90 p-2 rounded-lg border border-slate-700/60 flex items-center justify-between">
              <div className="flex flex-col text-[8px]">
                <span className="font-bold text-slate-200">#ORD-8942 · 3 Items</span>
                <span className="text-emerald-400 font-medium">New Order · ₹1,240</span>
              </div>
              <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-400 text-[8px] font-bold rounded">Accept & Pack</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[8px] text-slate-400">
            <span>Inventory: 450 items live</span>
            <span className="text-primary-cyan font-bold">Insights: +24% this week</span>
          </div>
        </div>
      ),
    },
    {
      name: 'No Stress Impress',
      tagline: 'At-Home Dental Impression & Healthcare Mobile App (iOS & Android)',
      description: 'An interactive mobile healthcare application guiding patients through taking accurate at-home dental impressions using boil-and-bite trays. Features step-by-step video tutorials, custom high-resolution camera modules for diagnostic dental photo capture, client-side image compression, patient scan submission pipelines, and secure cloud sync.',
      technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Native Camera API', 'Video Player SDK', 'Image Compression', 'REST APIs', 'Android & iOS'],
      features: [
        'Step-by-step interactive video tutorial player with guided dental impression workflows',
        'Native Device Camera API integration for capturing diagnostic dental impression photos',
        'Automated client-side image compression & optimized multipart cloud upload pipeline',
        'Secure patient account management, submission history, and consultant verification',
        'Responsive, accessible cross-platform mobile UI built for iOS and Android',
        'Production releases on Apple App Store & Google Play Store',
      ],
      links: {
        android: 'https://play.google.com/store/apps/details?id=com.nostressimpressapp&hl=en_IN',
        ios: 'https://apps.apple.com/in/app/no-stress-impress/id6736971437',
      },
      visualMockup: (
        <div className="w-full h-full bg-[#111726] p-4 flex flex-col justify-between font-sans text-xs relative overflow-hidden rounded-xl border border-slate-800">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Activity size={14} className="text-primary-fuchsia" />
              <span className="font-bold text-white tracking-wide text-[10px]">NO STRESS IMPRESS</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 bg-primary-fuchsia/10 text-primary-fuchsia font-semibold rounded-full border border-primary-fuchsia/20">iOS & Android</span>
          </div>
          {/* Camera Upload Section */}
          <div className="my-2 bg-[#1b2234] rounded-lg p-3 flex-1 flex flex-col items-center justify-center relative border border-slate-800">
            <div className="w-10 h-10 rounded-full bg-primary-fuchsia/10 flex items-center justify-center text-primary-fuchsia mb-2 border border-primary-fuchsia/20">
              <Camera size={18} />
            </div>
            <span className="text-[9px] font-bold text-slate-200">Dental Impression Scan Capture</span>
            <span className="text-[8px] text-slate-400 mt-0.5">Step 3 of 4: Upper Tray Photo Upload</span>
            {/* Mock upload progress */}
            <div className="w-full bg-slate-800 rounded-full h-1 mt-3 overflow-hidden">
              <div className="bg-primary-fuchsia h-full w-3/4 rounded-full" />
            </div>
            <div className="flex justify-between w-full mt-1.5 text-[7px] text-slate-400 font-mono">
              <span>scan_impression_hd.jpg</span>
              <span>75% Uploaded</span>
            </div>
          </div>
          {/* Footer Details */}
          <div className="flex items-center justify-between text-[8px] pt-1">
            <span className="text-slate-400">Step-by-Step Video Guide</span>
            <span className="text-primary-fuchsia font-bold">Verified & Syncing</span>
          </div>
        </div>
      ),
    },
    {
      name: 'EWA Mobile Architecture Migration',
      tagline: 'React Native New Architecture & Hermes Upgrade',
      description: 'Led the enterprise architectural migration of a legacy React Native codebase to React Native 0.74+, integrating the Hermes JIT engine, synchronous C++ JSI bindings, Fabric UI rendering, and TurboModules.',
      technologies: ['React Native 0.74', 'Hermes JIT Engine', 'JSI (C++ Direct Bridge)', 'Fabric Concurrent UI', 'TurboModules', 'Gradle / CocoaPods'],
      features: ['Upgraded framework version and resolved breaking package dependencies', 'Migrated old bridges to TurboModules and C++ JSI host objects', 'Enabled Hermes engine to reduce APK sizes and cold launch times', 'Achieved consistent 60 FPS scrolling and reduced RAM footprint by 28%'],
      links: {
        live: 'https://github.com',
      },
      visualMockup: (
        <div className="w-full h-full bg-[#0a0d16] p-4 flex flex-col justify-between font-mono text-[9px] relative overflow-hidden rounded-xl border border-slate-850">
          {/* Terminal Top Bar */}
          <div className="flex items-center gap-1.5 border-b border-slate-900 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-slate-400 text-[8px]">Hermes Bytecode Compiler v2.0</span>
          </div>
          {/* Terminal Console */}
          <div className="flex-1 my-2 text-slate-300 space-y-1.5 select-none overflow-y-auto">
            <div>
              <span className="text-primary-cyan">$</span> react-native info
            </div>
            <div className="text-slate-500 text-[8px]">
              - React Native version: 0.74.x (migrated from 0.66.x)
            </div>
            <div>
              <span className="text-primary-cyan">$</span> yarn build:hermes --profile-memory
            </div>
            <div className="text-emerald-400 text-[8px]">
              ✔ Hermes Bytecode generated successfully (12.4s)
            </div>
            <div className="text-slate-400 text-[8px]">
              - Memory footprint: -28.4%
              {'\n'}- Fabric Renderer: ACTIVE
              {'\n'}- TurboModules registry: 14 loaded
            </div>
          </div>
          {/* Stats Bar */}
          <div className="flex items-center justify-between border-t border-slate-900 pt-2 text-[8px] text-slate-500">
            <span className="flex items-center gap-1">
              <Cpu size={10} className="text-emerald-400 animate-pulse" />
              <span>JSI Enabled</span>
            </span>
            <span className="text-primary-cyan font-bold">BUILD SUCCESS</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-darkBg">
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
            <Layers size={12} />
            <span>Showcase Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold tracking-tight text-slate-800 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-cyan to-primary-indigo mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Cards List */}
        <div className="space-y-16">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-8 items-stretch p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-darkBg-card/40 backdrop-blur-sm shadow-sm hover:shadow-xl dark:hover:shadow-glass-dark hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Column: Interactive CSS Mockup */}
              <div className="lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[260px] flex-shrink-0 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-darkBg-secondary p-3 border border-slate-200 dark:border-slate-800/80 shadow-inner relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-cyan/5 to-primary-indigo/5 dark:from-primary-cyan/2 dark:to-primary-indigo/2 transition-opacity duration-300" />
                <div className="w-full h-full max-w-[340px] max-h-[260px] relative z-10 transition-transform duration-500 group-hover:scale-105">
                  {proj.visualMockup}
                </div>
              </div>

              {/* Right Column: Text & Features Details */}
              <div className="lg:w-7/12 flex flex-col justify-between py-2">
                <div>
                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-primary-indigo dark:text-primary-cyan tracking-wider uppercase">Project {idx + 1}</span>
                    <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-slate-800 dark:text-white mt-1">
                      {proj.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 italic">
                      {proj.tagline}
                    </p>
                  </div>

                  {/* Project description */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-450 leading-relaxed mb-6 font-light">
                    {proj.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-extrabold text-slate-700 dark:text-slate-350 tracking-wider uppercase mb-2">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                      {proj.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan mt-1.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-mono font-bold rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project links buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/30">
                  {proj.links.android && (
                    <a
                      href={proj.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full hover:shadow-md hover:scale-102 active:scale-95 transition-all"
                    >
                      <Smartphone size={14} />
                      <span>Google Play Store</span>
                    </a>
                  )}
                  {proj.links.ios && (
                    <a
                      href={proj.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-primary-indigo to-primary-cyan rounded-full hover:shadow-md hover:scale-102 active:scale-95 transition-all"
                    >
                      <ExternalLink size={14} />
                      <span>Apple App Store</span>
                    </a>
                  )}
                  {proj.links.live && (
                    <a
                      href={proj.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-primary-indigo to-primary-cyan rounded-full hover:shadow-md hover:scale-102 active:scale-95 transition-all"
                    >
                      <ExternalLink size={14} />
                      <span>Live App Store</span>
                    </a>
                  )}
                  {proj.links.github && (
                    <a
                      href={proj.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-300 hover:border-slate-800 dark:border-slate-800 dark:hover:border-slate-600 rounded-full bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95"
                    >
                      <Github size={14} />
                      <span>Code Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
