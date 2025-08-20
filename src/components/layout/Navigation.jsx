import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { mobileMenu, navigationItem } from '../../animations/portfolioAnimations';
import { GithubIcon, LinkedinIcon, MenuIcon, XIcon } from '../icons/Icons';

const Navigation = ({ 
  currentSection, 
  scrollToSection, 
  darkMode, 
  toggleDarkMode,
  sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ]
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar el estado del menú
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú móvil al cambiar de sección o al redimensionar la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
        
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para manejar el clic en los elementos del menú
  const handleNavClick = (index) => {
    scrollToSection(index);
    setIsMenuOpen(false);
  };

  // Función para alternar el menú móvil
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
            : 'backdrop-blur-md bg-white/60 dark:bg-gray-900/60'
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
                        
            {/* Logo */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => scrollToSection(0)}
                className="text-2xl lg:text-3xl font-bold bg-sky-600 dark:bg-sky-400 bg-clip-text text-transparent hover:bg-sky-700 transition-all duration-300 cursor-pointer"
                aria-label="Ir al inicio"
              >
                Portfolio
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  onClick={() => handleNavClick(index)}
                  className={`
                    relative px-3 lg:px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 cursor-pointer
                    ${currentSection === index 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }
                  `}
                  aria-current={currentSection === index ? 'page' : undefined}
                >
                  {section.label}
                  {currentSection === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-100 dark:bg-blue-900/50 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Social Links & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <motion.a
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                href="https://www.linkedin.com/in/al3ex-andres"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Perfil de LinkedIn"
              >
                <LinkedinIcon size={20} />
              </motion.a>

              <motion.a
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                href="https://github.com/Alex831612"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Perfil de GitHub"
              >
                <GithubIcon size={20} />
              </motion.a>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <ThemeToggle 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode}
                />
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
                size={18}
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-xl md:hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Navigation Items */}
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    custom={index}
                    variants={navigationItem}
                    initial="hidden"
                    animate="visible"
                    onClick={() => handleNavClick(index)}
                    className={`
                      block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                      ${currentSection === index 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    {section.label}
                  </motion.button>
                ))}

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                  {/* Social Links */}
                  <div className="flex justify-center space-x-6">
                    <motion.a
                      custom={sections.length}
                      variants={navigationItem}
                      initial="hidden"
                      animate="visible"
                      href="https://www.linkedin.com/in/al3ex-andres"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
                      aria-label="Perfil de LinkedIn"
                    >
                      <LinkedinIcon size={24} />
                    </motion.a>

                    <motion.a
                      custom={sections.length + 1}
                      variants={navigationItem}
                      initial="hidden"
                      animate="visible"
                      href="https://github.com/Alex831612"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
                      aria-label="Perfil de GitHub"
                    >
                      <GithubIcon size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
