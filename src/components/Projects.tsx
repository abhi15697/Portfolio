import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShoppingCart, MapPin, Activity, Camera, Smartphone, Store, TrendingUp, Package, Users, MessageSquare, Heart, Sparkles, Layers, Compass } from 'lucide-react';


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
      tagline: 'AI-Powered Quick Commerce App (Customer App)',
      description: 'An all-in-one AI-powered quick commerce cross-platform app for 5,000+ items with live Google Maps courier tracking, express checkout, smart AI recommendations, and background notifications.',
      technologies: ['React Native', 'TypeScript', 'Firebase FCM', 'REST APIs', 'Razorpay', 'Google Maps SDK', 'Redux Toolkit'],
      features: [
        'Built an all-in-one AI-powered quick commerce cross-platform app for 5,000+ items with live Google Maps courier tracking.',
        'Implemented secure checkout workflows with Razorpay, smart AI recommendations, and background FCM push notifications.',
        'Live order tracking with background Google Maps geolocation services',
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
      tagline: 'Merchant & Inventory Management App',
      description: 'A merchant enterprise React Native mobile app empowering local vendors to manage orders, catalog, and store operations with real-time updates and sales intelligence.',
      technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Real-time Sockets', 'Firebase FCM', 'REST APIs', 'Analytics'],
      features: [
        'Developed a merchant enterprise React Native mobile app empowering local vendors to manage orders, catalog, and store operations.',
        'Engineered real-time order dispatch updates, live stock inventory management, staff role permissions, and sales analytics charts.',
        'Inventory control with live stock availability management and sales intelligence',
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
      name: 'Sharehood',
      tagline: 'Hyper-Local Community & Discovery App (Android)',
      description: 'A hyper-local mobile marketplace connecting residents with neighborhood merchants, services, and live item availability with interactive Google Maps discovery.',
      technologies: ['React Native', 'TypeScript', 'Google Maps SDK', 'Geolocation Services', 'Redux Toolkit', 'Firebase FCM', 'REST APIs'],
      features: [
        'Engineered a hyper-local mobile marketplace connecting residents with neighborhood merchants, services, and live item availability.',
        'Implemented Google Maps SDK with dynamic GPS radius discovery, real-time store catalogs, and FCM push notifications.',
        'Optimized FlatList pagination with offline caching for low-bandwidth browsing',
        'Production release deployed on Google Play Store',
      ],
      links: {
        android: 'https://play.google.com/store/apps/details?id=com.getitnearby',
      },
      visualMockup: (
        <div className="w-full h-full bg-[#111726] p-4 flex flex-col justify-between font-sans text-xs relative overflow-hidden rounded-xl border border-slate-800">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Compass size={14} className="text-teal-400" />
              <span className="font-bold text-white tracking-wide text-[10px]">SHAREHOOD APP</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 bg-teal-500/10 text-teal-400 font-semibold rounded-full border border-teal-500/20">Android • Live</span>
          </div>

          {/* Body: Radius & Nearby Stores */}
          <div className="my-2 space-y-2 flex-1 flex flex-col justify-between">
            <div className="bg-[#1b2234] p-2 rounded-lg border border-slate-800">
              <div className="flex items-center justify-between text-[8px] text-slate-400 mb-1">
                <span className="flex items-center gap-1">
                  <MapPin size={10} className="text-teal-400" />
                  <span>Nearby Discovery</span>
                </span>
                <span className="px-1.5 py-0.2 bg-teal-500/20 text-teal-300 font-mono text-[8px] rounded">Radius: 2.5 km</span>
              </div>
              <div className="flex items-center justify-between text-[9px] font-bold text-slate-200">
                <span>Active Neighborhood Vendors</span>
                <span className="text-teal-400 font-mono">24 Open</span>
              </div>
            </div>

            {/* Store Listing Snippet */}
            <div className="space-y-1.5">
              <div className="bg-darkBg-card/90 p-1.5 rounded-lg border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Store size={11} className="text-primary-cyan" />
                  <div className="flex flex-col text-[8px]">
                    <span className="font-bold text-slate-200">Fresh Organic Mart</span>
                    <span className="text-slate-400 text-[7px]">Groceries · 400m away</span>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 bg-emerald-500/15 text-emerald-400 text-[7px] font-bold rounded">In Stock</span>
              </div>

              <div className="bg-darkBg-card/90 p-1.5 rounded-lg border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Store size={11} className="text-primary-violet" />
                  <div className="flex flex-col text-[8px]">
                    <span className="font-bold text-slate-200">City Artisan Bakery</span>
                    <span className="text-slate-400 text-[7px]">Bakery & Snacks · 750m</span>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 bg-emerald-500/15 text-emerald-400 text-[7px] font-bold rounded">Open Now</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[8px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
              <span>Live GPS Filtering</span>
            </span>
            <span className="text-teal-400 font-bold">Google Maps SDK</span>
          </div>
        </div>
      ),
    },
    {
      name: 'No Stress Impress',
      tagline: 'Dental Care & Impression Guide App',
      description: 'A cross-platform React Native healthcare mobile app guiding users through at-home dental impression workflows with native camera capture and video guides.',
      technologies: ['React Native', 'TypeScript', 'Native Camera API', 'Video Player SDK', 'REST APIs', 'Image Compression', 'Redux Toolkit'],
      features: [
        'Developed a cross-platform React Native healthcare mobile app guiding users through at-home dental impression workflows.',
        'Built custom native camera capture modules, interactive video player guides, and multipart cloud upload pipelines.',
        'Integrated client-side image compression, reducing upload payload sizes and improving server processing times by 35%.',
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
      name: 'Multiply',
      tagline: 'Creator Engagement App',
      description: 'A mobile community platform allowing creators to interact with followers, publish updates, and earn rewards via low-latency GraphQL subscriptions.',
      technologies: ['React Native', 'GraphQL', 'Firebase', 'REST APIs', 'React Query'],
      features: [
        'Engineered a mobile community platform allowing creators to interact with followers, publish updates, and earn rewards.',
        'Integrated low-latency GraphQL subscriptions and Firebase to handle thousands of real-time interactions daily.',
        'Optimistic UI updates with offline caching via React Query and Firebase',
        'Production releases on Apple App Store & Google Play Store',
      ],
      links: {},
      visualMockup: (
        <div className="w-full h-full bg-[#111726] p-4 flex flex-col justify-between font-sans text-xs relative overflow-hidden rounded-xl border border-slate-800">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-primary-violet" />
              <span className="font-bold text-white tracking-wide text-[10px]">MULTIPLY CREATOR APP</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 bg-primary-violet/10 text-primary-violet font-semibold rounded-full border border-primary-violet/20">
              Live Engagement
            </span>
          </div>

          {/* Body Cards */}
          <div className="my-2 space-y-2 flex-1 flex flex-col justify-between">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#1b2234] p-2 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between text-[8px] text-slate-400 mb-0.5">
                  <span>Live Audience</span>
                  <Users size={10} className="text-primary-cyan" />
                </div>
                <span className="text-xs font-bold text-white">12.4K Online</span>
              </div>
              <div className="bg-[#1b2234] p-2 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between text-[8px] text-slate-400 mb-0.5">
                  <span>Creator Tips</span>
                  <Sparkles size={10} className="text-amber-400" />
                </div>
                <span className="text-xs font-bold text-amber-400">+$240.00 Today</span>
              </div>
            </div>

            {/* Live interaction comment */}
            <div className="bg-darkBg-card/90 p-2 rounded-lg border border-slate-700/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary-indigo to-primary-cyan flex items-center justify-center text-[8px] font-bold text-white">
                  JD
                </div>
                <div className="flex flex-col text-[8px]">
                  <span className="font-bold text-slate-200">@johndoe · VIP Supporter</span>
                  <span className="text-slate-400 text-[7px]">"Amazing stream! Sent 50 gems 🔥"</span>
                </div>
              </div>
              <Heart size={12} className="text-pink-500 fill-pink-500 animate-pulse" />
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[8px] text-slate-400">
            <span className="flex items-center gap-1">
              <MessageSquare size={10} className="text-primary-violet" />
              <span>GraphQL Subscriptions: Active</span>
            </span>
            <span className="text-emerald-400 font-bold">Latency: 38ms</span>
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
              className={`flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-darkBg-card/40 backdrop-blur-sm shadow-sm hover:shadow-xl dark:hover:shadow-glass-dark hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Column: Interactive CSS Mockup */}
              <div className="w-full lg:w-5/12 h-64 sm:h-72 lg:h-auto min-h-[250px] sm:min-h-[260px] flex-shrink-0 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-darkBg-secondary p-2 sm:p-3 border border-slate-200 dark:border-slate-800/80 shadow-inner relative overflow-hidden group">
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      <Smartphone size={15} />
                      <span>Google Play Store</span>
                    </a>
                  )}
                  {proj.links.ios && (
                    <a
                      href={proj.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-primary-indigo to-primary-cyan rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      <ExternalLink size={15} />
                      <span>Apple App Store</span>
                    </a>
                  )}
                  {proj.links.live && (
                    <a
                      href={proj.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-primary-indigo to-primary-cyan rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      <ExternalLink size={15} />
                      <span>Live App Store</span>
                    </a>
                  )}
                  {proj.links.github && (
                    <a
                      href={proj.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-300 hover:border-slate-800 dark:border-slate-800 dark:hover:border-slate-600 rounded-full bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95"
                    >
                      <Github size={15} />
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
