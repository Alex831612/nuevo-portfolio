import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SkillCard from '../ui/SkillCard';
import { personalInfo, skills } from '../../data/portfolioData';
import { ArrowRightIcon, CodeIcon, SparklesIcon, TargetIcon, RocketIcon } from '../icons/Icons';
import { aboutSectionVariants } from '../../animations/portfolioAnimations';
import {  
  bounce, 
  fadeInUp, 
  float, 
  hoverScale, 
  pulse, 
  scaleInCenter, 
  staggerContainer, 
  wiggle 
} from '../../animations/animations';

const AboutSection = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Stats destacados
  const stats = [
    { number: "3+", label: "Años de experiencia", icon: CodeIcon },
    { number: "10+", label: "Proyectos completados", icon: RocketIcon },
    { number: "100%", label: "Dedicación", icon: TargetIcon },
    { number: "∞", label: "Ganas de aprender", icon: SparklesIcon }
  ];

  return (
    <section 
      id="about" 
      ref={ref} 
      className="min-h-screen py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={aboutSectionVariants.container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            variants={aboutSectionVariants.item}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.div
              variants={scaleInCenter}
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <SparklesIcon size={16} />
              Conoce más sobre mí
            </motion.div>
                        
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-sky-600 dark:text-sky-400 bg-clip-text">
              Sobre Mí
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Text Content */}
            <motion.div
              variants={aboutSectionVariants.item}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  ¡Hola! Me llamo <span className="font-semibold text-blue-600 dark:text-blue-400">Alex Andres</span>, soy <span className="font-semibold text-sky-600 dark:text-sky-400">Desarrollador Full Stack</span> con más de 3 años de experiencia creando sitios web.
                </p>
                                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Me formé como <strong>Técnico en Análisis y Desarrollo de Sistemas Informáticos</strong>, y desde entonces he trabajado en la creación de aplicaciones y sitios web que combinan estética minimalista, tecnología moderna y las mejores prácticas de desarrollo.
                </p>
                                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mi enfoque se centra en lograr el equilibrio perfecto entre <em>funcionalidad</em>, <em>rendimiento</em> y <em>diseño</em>, garantizando que cada proyecto sea eficiente, escalable y proporcione una buena experiencia al usuario.
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                variants={hoverScale}
                whileHover="hover"
                whileTap="tap"
                onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                aria-label="Ver mis proyectos"
              >
                <CodeIcon size={18} />
                Ver mi trabajo
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRightIcon size={18} />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Image and Decorations */}
            <motion.div
              variants={aboutSectionVariants.image}
              className="relative"
            >
              <div className="relative group">
                {personalInfo?.imageAbout ? (
                  <motion.img
                    src={personalInfo.imageAbout}
                    alt="Alex Andres - Desarrollador Full Stack"
                    className="w-full h-90 lg:h-[400px] object-cover rounded-3xl shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div className="w-full h-90 lg:h-[400px] bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/50 dark:to-sky-900/50 rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <CodeIcon size={64} className="mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                      <p className="text-gray-600 dark:text-gray-400">
                        Imagen de perfil próximamente
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={aboutSectionVariants.item}
            className="mb-20"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.6 + index * 0.1 }
                    }
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-600 text-white rounded-xl mb-4">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={aboutSectionVariants.item}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Tecnologías & Herramientas
              </h3>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {skills?.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  custom={index}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              )) || (
                <div className="col-span-full text-center p-8 text-gray-500 dark:text-gray-400">
                  <CodeIcon size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Habilidades cargando...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
