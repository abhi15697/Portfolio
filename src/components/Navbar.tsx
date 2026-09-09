import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resumeOptions = [
    { label: 'React Native', filename: '/Abhishek_Kumar_Srivastava_ReactNative.pdf' },
    { label: 'React.js', filename: '/Abhishek_Kumar_Srivastava_ReactJS.pdf' },
    { label: 'Combined / Full-Stack', filename: '/Abhishek_Kumar_Srivastava_FullStack.pdf' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 shadow-md glass-nav-light dark:glass-nav-dark'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="font-outfit font-extrabold text-2xl tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan to-primary-indigo">
                Abhishek
              </span>
              <span className="text-primary-indigo dark:text-primary-cyan">.</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-primary-indigo dark:hover:text-primary-cyan px-3 py-2 rounded-md transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Socials */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <Linkedin size={20} />
            </a>

            {/* Light/Dark Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Resume Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowResumeDropdown(!showResumeDropdown)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-indigo to-primary-cyan rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Download size={16} />
                <span>Resume</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${showResumeDropdown ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showResumeDropdown && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setShowResumeDropdown(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-52 rounded-xl shadow-xl z-20 overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkBg-card"
                    >
                      <div className="py-1">
                        {resumeOptions.map((opt) => (
                          <a
                            key={opt.label}
                            href={opt.filename}
                            download
                            onClick={() => setShowResumeDropdown(false)}
                            className="block px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-indigo dark:hover:text-primary-cyan transition-colors"
                          >
                            {opt.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Actions: Hamburguer & Dark Mode */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-500 dark:text-slate-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-darkBg-secondary overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-indigo dark:hover:text-primary-cyan transition-all"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-400 px-3 uppercase tracking-wider">
                  Download Resume
                </div>
                <div className="grid grid-cols-1 gap-2 px-3">
                  {resumeOptions.map((opt) => (
                    <a
                      key={opt.label}
                      href={opt.filename}
                      download
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      <span>{opt.label}</span>
                      <Download size={14} className="text-slate-400" />
                    </a>
                  ))}
                </div>

                <div className="flex justify-center space-x-6 pt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
