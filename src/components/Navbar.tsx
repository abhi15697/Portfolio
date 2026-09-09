import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Github, Linkedin, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import resumePdf from '../../Abhishek_React_Native.pdf';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <a href="#" className="font-outfit font-extrabold text-2xl tracking-tight flex items-center gap-1.5">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-cyan to-primary-indigo">
                Abhishek
              </span>
              <span className="text-[10px] px-2 py-0.5 font-mono font-bold rounded-full bg-primary-cyan/10 text-primary-cyan border border-primary-cyan/30 hidden sm:inline-block">
                React Native Dev
              </span>
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
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="LinkedIn Profile"
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

            {/* Direct Resume Download */}
            <a
              href={resumePdf}
              download="Abhishek_Kumar_Srivastava_ReactNative_CV.pdf"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-indigo to-primary-cyan rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
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
              
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 px-3">
                <a
                  href={resumePdf}
                  download="Abhishek_Kumar_Srivastava_ReactNative_CV.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-primary-indigo to-primary-cyan shadow-md hover:shadow-lg active:scale-95 transition-all"
                >
                  <Download size={16} />
                  <span>Download React Native CV</span>
                </a>

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
