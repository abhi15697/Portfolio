import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Link2, Flame, CreditCard, MapPin, Bell, Gauge, Layout } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  colorClass: string;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: <Smartphone size={24} />,
      title: 'iOS & Android App Development',
      desc: 'Build performance-first cross-platform mobile apps for iOS and Android with customized native UI and unified TypeScript codebases.',
      colorClass: 'text-primary-indigo bg-primary-indigo/10 border-primary-indigo/20',
    },
    {
      icon: <Gauge size={24} />,
      title: 'New Architecture Migration',
      desc: 'Upgrade legacy apps to React Native New Architecture (Fabric renderer, TurboModules, Hermes bytecode, and JSI C++ bridges).',
      colorClass: 'text-primary-cyan bg-primary-cyan/10 border-primary-cyan/20',
    },
    {
      icon: <Zap size={24} />,
      title: 'Mobile Performance Tuning',
      desc: 'Eliminate frame drops, profile memory leaks, optimize FlatList virtualization, and achieve butter-smooth mobile user flows.',
      colorClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: <Link2 size={24} />,
      title: 'Native Modules & Bridges',
      desc: 'Write custom native bridges in Java/Kotlin (Android) and Objective-C/Swift (iOS) to interface directly with device hardware.',
      colorClass: 'text-primary-violet bg-primary-violet/10 border-primary-violet/20',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location & Google Maps SDK',
      desc: 'Construct live courier/driver GPS tracking, geofencing parameters, and integrated background location services.',
      colorClass: 'text-red-500 bg-red-500/10 border-red-500/20',
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Mobile Payment Gateways',
      desc: 'Implement secure mobile checkout workflows integrating Razorpay, Stripe, Apple Pay, and Google Pay SDKs.',
      colorClass: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: <Bell size={24} />,
      title: 'FCM Push & Deep Linking',
      desc: 'Configure background and foreground FCM notification systems with universal deep links and rich push campaigns.',
      colorClass: 'text-primary-fuchsia bg-primary-fuchsia/10 border-primary-fuchsia/20',
    },
    {
      icon: <Flame size={24} />,
      title: 'App Store & Play Store CI/CD',
      desc: 'Full ownership of store submissions, TestFlight builds, Gradle keystores, ProGuard rules, and automated release tracks.',
      colorClass: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90 } },
  };

  return (
    <section id="services" className="relative py-24 bg-white dark:bg-darkBg">
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
            <Layout size={12} />
            <span>Capability Index</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold tracking-tight text-slate-800 dark:text-white"
          >
            What I Can Build
          </motion.h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-cyan to-primary-indigo mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={cardVariants}
              className="p-6 rounded-2xl border border-slate-200/65 dark:border-slate-800/80 bg-slate-50/40 dark:bg-darkBg-card/45 backdrop-blur shadow-sm hover:shadow-md hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${svc.colorClass}`}>
                {svc.icon}
              </div>

              {/* Title & Description */}
              <h3 className="font-outfit font-bold text-base text-slate-800 dark:text-slate-100 mb-2">
                {svc.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
