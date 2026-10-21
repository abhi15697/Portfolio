import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Database, Share2, GitBranch, Bot, Award, Code } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Core Mobile & Languages',
      icon: <Smartphone size={22} />,
      colorClass: 'text-primary-indigo border-primary-indigo/35 bg-primary-indigo/5',
      skills: ['React Native', 'JavaScript (ES6+)', 'TypeScript', 'Cross-Platform UI (iOS & Android)', 'React Hooks', 'Custom Mobile Modules'],
    },
    {
      title: 'State & API Integration',
      icon: <Database size={22} />,
      colorClass: 'text-primary-cyan border-primary-cyan/35 bg-primary-cyan/5',
      skills: ['Redux Toolkit', 'React Query', 'Context API', 'REST APIs', 'GraphQL', 'Firebase', 'Offline Caching'],
    },
    {
      title: 'Mobile Native & SDKs',
      icon: <Share2 size={22} />,
      colorClass: 'text-emerald-500 border-emerald-500/35 bg-emerald-500/5',
      skills: ['Google Maps API', 'GPS Location Services', 'Camera Integration', 'Razorpay Gateway', 'Push Notifications (FCM)', 'Device Hardware APIs'],
    },
    {
      title: 'Testing & Tooling',
      icon: <GitBranch size={22} />,
      colorClass: 'text-primary-violet border-primary-violet/35 bg-primary-violet/5',
      skills: ['Xcode (iOS)', 'Android Studio', 'Jest', 'React Native Testing Library', 'Git & GitHub', 'CI/CD Pipelines'],
    },
    {
      title: 'AI & Developer Tools',
      icon: <Bot size={22} />,
      colorClass: 'text-primary-fuchsia border-primary-fuchsia/35 bg-primary-fuchsia/5',
      skills: ['Cursor AI', 'ChatGPT', 'Google Gemini', 'Claude AI', 'AI-Assisted Workflows', 'Prompt Engineering'],
    },
    {
      title: 'Core Competencies',
      icon: <Award size={22} />,
      colorClass: 'text-amber-500 border-amber-500/35 bg-amber-500/5',
      skills: ['Cross-Platform Mobile Development (iOS & Android)', 'Native Bridge & JSI Optimization', 'App Store & Play Store Releases', 'Clean Modular Architecture', 'Offline Caching', 'State Management', 'Real-Time GPS'],
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
            <span>Technical Skills</span>
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

        {/* Skill Categories Grid - 6 categories matching CV exactly */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="relative flex flex-col p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-[#111726]/60 backdrop-blur-sm shadow-sm hover:shadow-lg dark:hover:shadow-glass-dark hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 group"
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
