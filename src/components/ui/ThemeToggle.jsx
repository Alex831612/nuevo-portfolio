import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoonIcon, SunIcon } from '../icons/Icons';
import { hoverScale } from '../../animations/animations';
import { iconVariants } from '../../animations/portfolioAnimations';

const ThemeToggle = ({ darkMode, toggleDarkMode, size = 20 }) => {
  return (
    <motion.button
      variants={hoverScale}
      whileHover="hover"
      whileTap="tap"
      onClick={toggleDarkMode}
      className={`
        relative p-2.5 rounded-xl overflow-hidden bg-gradient-to-br transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 group cursor-pointer
        ${darkMode 
          ? 'from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 focus:ring-sky-500 shadow-lg shadow-sky-500/25' 
          : 'from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 focus:ring-amber-500 shadow-lg shadow-amber-500/25'
        }
      `}
      aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={darkMode ? "Modo claro" : "Modo oscuro"}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)'
            : 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%)'
        }}
      />

      {/* Efecto de brillo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
      />

      {/* Contenedor de iconos */}
      <div className="relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {darkMode ? (
            <motion.div
              key="sun"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-yellow-100"
            >
              <SunIcon size={size} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-indigo-100"
            >
              <MoonIcon size={size} strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
