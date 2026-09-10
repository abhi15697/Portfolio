import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Github, Linkedin, Download, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateAndDownloadResumePdf } from '../utils/downloadResume';

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
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    if (isDownloading) return;
    await generateAndDownloadResumePdf(setIsDownloading);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 60);

      window.history.pushState(null, '', href);
    }
  };

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
        scrolled || isOpen
          ? 'bg-white/95 dark:bg-darkBg/95 backdrop-blur-md shadow-sm border-b border-slate-200/60 dark:border-slate-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center space-x-2 sm:space-x-2.5 text-lg sm:text-xl font-outfit font-extrabold tracking-tight group cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-primary-indigo to-primary-cyan flex items-center justify-center text-white font-mono text-xs sm:text-sm font-bold shadow-md shadow-primary-indigo/20 group-hover:scale-105 transition-transform duration-200">
              AS
            </div>
            <div className="flex flex-col">
              <span className="text-slate-800 dark:text-white font-bold text-sm sm:text-base leading-tight">
                Abhishek Srivastava
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-medium text-primary-indigo dark:text-primary-cyan tracking-wider">
                REACT NATIVE ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-indigo dark:hover:text-primary-cyan hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-150 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions: Socials, Theme Toggle, Resume Download */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/sriabhi12345"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-srivastava-a0729b104/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>

            {/* Light/Dark Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Dynamic Resume Download Button */}
            <button
              type="button"
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-indigo to-primary-cyan rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-70 disabled:cursor-wait cursor-pointer"
            >
              {isDownloading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>PDF...</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>Resume</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Actions: Hamburguer & Dark Mode */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-500 dark:text-slate-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
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
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-darkBg-secondary/95 backdrop-blur-md overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-indigo dark:hover:text-primary-cyan transition-all cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 px-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    handleDownloadResume();
                  }}
                  disabled={isDownloading}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-primary-indigo to-primary-cyan shadow-md hover:shadow-lg active:scale-95 transition-all disabled:opacity-70 disabled:cursor-wait cursor-pointer"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Generating PDF...</span>
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      <span>Download React Native CV</span>
                    </>
                  )}
                </button>

                <div className="flex justify-center space-x-6 pt-4">
                  <a
                    href="https://github.com/sriabhi12345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-srivastava-a0729b104/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-primary-indigo dark:text-slate-400 dark:hover:text-primary-cyan"
                    aria-label="LinkedIn Profile"
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
