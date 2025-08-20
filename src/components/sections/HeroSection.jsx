import { motion } from 'framer-motion';
import { heroAnimation } from '../../animations/portfolioAnimations';
import { scaleIn, fadeInUp, hoverScale } from '../../animations/animations';
import { personalInfo } from '../../data/portfolioData';
import { ArrowRightIcon } from '../icons/Icons';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      aria-label="Sección principal - Presentación"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 dark:from-black dark:via-gray-900 dark:to-blue-950" />
      </div>

      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-16 sm:pt-20">
        <motion.div
          variants={heroAnimation}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={scaleIn}
            className="mb-6 sm:mb-8"
          >
            <div className="relative inline-block">
              {personalInfo?.image ? (
                <motion.div
                  whileHover={{ scale: 1.02 }} // 
                  transition={{ duration: 0.2 }}
                  className="relative group"
                >
                  <img
                    src={personalInfo.image}
                    alt="Alex Andres - Desarrollador Full Stack"
                    className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto object-cover shadow-2xl shadow-blue-500/20 border-4 border-white/20"
                    loading="eager"
                    fetchpriority="high"
                    width="160"
                    height="160"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-400/40 scale-110" />
                </motion.div>
              ) : null}                            
            </div>
          </motion.div>

          {/* Saludo y nombre */}
          <motion.div
            variants={fadeInUp}
            className="mb-4"
          >
            <p className="text-sky-600 dark:text-sky-400 text-lg sm:text-xl font-medium mb-2">
              Hola, soy
            </p>
                        
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              <span className="text-gray-900 dark:text-white">
                {personalInfo?.name}
              </span>
            </h1>
          </motion.div>

          {/* Título */}
          <motion.div
            variants={fadeInUp}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-800 dark:text-gray-300 font-light mb-4">
              {personalInfo?.title}
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            {/* Botón principal - Ver proyectos */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
              onClick={() => scrollToSection && scrollToSection(2)}
              className="group relative px-6 sm:px-6 py-3 sm:py-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white rounded-full font-medium text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto cursor-pointer"
              aria-label="Ver mis proyectos destacados"
            >
              <span className="flex items-center justify-center gap-2">
                Ver Proyectos
                <ArrowRightIcon size={18} />
              </span>
            </motion.button>

            {/* Botón secundario - Sobre mí */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
              onClick={() => scrollToSection && scrollToSection(1)}
              className="px-6 sm:px-4 py-3 sm:py-2 border-2 border-gray-600 text-gray-900 rounded-full hover:bg-sky-600 hover:border-sky-600 dark:border-white/30 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/50 backdrop-blur-sm transition-all duration-200 text-sm sm:text-base w-full sm:w-auto cursor-pointer"
              aria-label="Conocer más sobre mí"
            >
              Conoce más sobre mí
            </motion.button>
          </motion.div>
        </motion.div>
      </div>     
    </section>
  );
};

export default HeroSection;
