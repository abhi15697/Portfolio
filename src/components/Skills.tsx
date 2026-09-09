import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Cpu, Database, Smartphone, Share2, GitBranch, Zap, Code } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Core',
      icon: <Laptop size={22} />,
      colorClass: 'text-primary-indigo border-primary-indigo/35 bg-primary-indigo/5',
      skills: ['React Native', 'React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / SASS'],
    },
    {
      title: 'State Management',
      icon: <Cpu size={22} />,
      colorClass: 'text-primary-cyan border-primary-cyan/35 bg-primary-cyan/5',
      skills: ['Redux Toolkit', 'React Query', 'Context API', 'AsyncStorage State Sync'],
    },
    {
      title: 'API & Backend Integration',
      icon: <Database size={22} />,
      colorClass: 'text-primary-violet border-primary-violet/35 bg-primary-violet/5',
      skills: ['REST APIs', 'GraphQL APIs', 'Firebase Authentication', 'Firebase Crashlytics'],
    },
    {
      title: 'Mobile Frameworks',
      icon: <Smartphone size={22} />,
      colorClass: 'text-primary-fuchsia border-primary-fuchsia/35 bg-primary-fuchsia/5',
      skills: ['Android Studio / Java', 'Xcode / Objective-C', 'React Navigation v6', 'Deep Linking', 'Push Notifications (FCM)'],
    },
    {
      title: 'Integrations & SDKs',
      icon: <Share2 size={22} />,
      colorClass: 'text-primary-cyan border-primary-cyan/35 bg-primary-cyan/5',
      skills: ['Google Maps SDK', 'Razorpay Payments', 'Stripe Gateway', 'Apple/Google Sign In'],
    },
    {
      title: 'Tools & Workflow',
      icon: <GitBranch size={22} />,
      colorClass: 'text-primary-indigo border-primary-indigo/35 bg-primary-indigo/5',
      skills: ['Git & GitHub', 'Gradle / Proguard', 'CocoaPods / Gems', 'Jenkins CI/CD', 'Docker containers'],
    },
    {
      title: 'Performance & Architecture',
      icon: <Zap size={22} className="text-amber-500" />,
      colorClass: 'text-amber-500 border-amber-500/35 bg-amber-500/5',
      skills: ['Hermes Engine profiling', 'FlatList Optimizations', 'Memoization & useCallback', 'Fabric (New Renderer)', 'TurboModules & JSI'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80 },
    },
  };

  return (
    <section id="skills" className="relative py-24 bg-white dark:bg-darkBg">
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
            <Code size={12} />
            <span>Tech Stack Summary</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold tracking-tight text-slate-800 dark:text-white"
          >
            Technical Expertise
          </motion.h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-cyan to-primary-indigo mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={`relative flex flex-col p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-[#111726]/60 backdrop-blur-sm shadow-sm hover:shadow-lg dark:hover:shadow-glass-dark hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 group ${
                index === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl border flex items-center justify-center ${category.colorClass}`}>
                  {category.icon}
                </div>
                <h3 className="font-outfit font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-primary-cyan transition-colors duration-200">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-darkBg-card border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-primary-cyan dark:hover:border-primary-cyan hover:text-slate-800 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
