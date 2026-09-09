import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Sparkles, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail size={22} className="text-primary-indigo dark:text-primary-cyan" />,
      label: 'Email Address',
      value: 'sriabhi12345@gmail.com',
      href: 'mailto:sriabhi12345@gmail.com',
      actionText: 'Compose Email',
      secondaryAction: {
        label: 'Gmail Web',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sriabhi12345@gmail.com',
      },
    },
    {
      icon: <Phone size={22} className="text-emerald-500" />,
      label: 'Mobile / Phone',
      value: '+91-8004732941',
      href: 'tel:+918004732941',
      actionText: 'Call Directly',
      secondaryAction: {
        label: 'WhatsApp',
        href: 'https://wa.me/918004732941',
      },
    },
    {
      icon: <MapPin size={22} className="text-primary-fuchsia" />,
      label: 'Location',
      value: 'Baner, Pune, India',
      subValue: 'Maharashtra, India (Open to Remote)',
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-darkBg">
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
            <Sparkles size={12} />
            <span>Get In Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold tracking-tight text-slate-800 dark:text-white"
          >
            Contact Me
          </motion.h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-cyan to-primary-indigo mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Centered Card Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-darkBg-card/40 backdrop-blur shadow-sm hover:shadow-xl dark:hover:shadow-glass-dark transition-all duration-300"
          >
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-slate-800 dark:text-white">
                Let's build something great together.
              </h3>
              <p className="text-sm sm:text-base text-slate-650 dark:text-slate-400 leading-relaxed font-light">
                Feel free to reach out directly if you're looking for a React Native mobile developer, cross-platform engineer for iOS & Android, or want to discuss a new app build or architecture migration.
              </p>
            </div>

            {/* 3 Contact Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, idx) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-darkBg-secondary/50 shadow-sm hover:border-slate-300 dark:hover:border-slate-700/80 transition-all group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      {method.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
                      {method.label}
                    </span>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-primary-indigo dark:hover:text-primary-cyan transition-colors break-words block"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-100 block">
                        {method.value}
                      </span>
                    )}
                    {method.subValue && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block font-light">
                        {method.subValue}
                      </span>
                    )}
                  </div>

                  {/* Actions for each card */}
                  {method.actionText && (
                    <div className="flex items-center gap-2 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                      <a
                        href={method.href}
                        className="text-xs font-semibold text-primary-indigo dark:text-primary-cyan hover:underline inline-flex items-center gap-1"
                      >
                        <span>{method.actionText}</span>
                        <ExternalLink size={12} />
                      </a>
                      {method.secondaryAction && (
                        <>
                          <span className="text-slate-300 dark:text-slate-700">•</span>
                          <a
                            href={method.secondaryAction.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan transition-colors"
                          >
                            {method.secondaryAction.label}
                          </a>
                        </>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom Connect / Socials Bar */}
            <div className="mt-10 pt-8 border-t border-slate-200/60 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Connect on Socials:
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/sriabhi12345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-750 dark:text-slate-350 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:scale-105 active:scale-95"
                >
                  <Github size={16} />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-srivastava-a0729b104/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-750 dark:text-slate-350 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:scale-105 active:scale-95"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

