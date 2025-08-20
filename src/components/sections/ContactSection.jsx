import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactForm from '../ui/ContactForm/ContactForm';
import { contactInfo, personalInfo } from '../../data/portfolioData';
import { bounce, float, hoverLift, scaleInCenter, slideInLeft, slideInRight, staggerContainer } from '../../animations/animations';
import { aboutSectionVariants } from '../../animations/portfolioAnimations';
import { ArrowRightIcon, SparklesIcon, MapPinIcon, ClockIcon, CoffeeIcon, ZapIcon, HeartIcon, StarIcon } from '../icons/Icons';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="min-h-screen py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 relative overflow-hidden"
      aria-label="Sección de contacto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={staggerContainer}
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
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <SparklesIcon size={16} />
              {personalInfo?.availableForWork ? 'Disponible para proyectos' : 'Hablemos'}
            </motion.div>
                        
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-sky-600 bg-clip-text">
              ¡Contacto!
            </h2>
                        
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes un proyecto? Me encantaría escucharla y ayudarte a hacerla realidad
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column - Contact info */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  ¿Listo para colaborar?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Estoy disponible para proyectos freelance, colaboraciones o una entrevista laboral.
                </p>

                {/* Ubicación y timezone */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded-xl">
                    <MapPinIcon size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Ubicación</h4>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo?.location || 'Viedma, Río Negro, Argentina'}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <ClockIcon size={14} />
                      <span>GMT-3 (Argentina)</span>
                    </div>
                  </div>
                </div>
              </div>
                            
              {/* Contact methods */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Formas de contacto
                </h4>
                                
                {contactInfo?.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    variants={hoverLift}
                    whileHover="hover"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group"
                  >
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : '_self'}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 group"
                        aria-label={`Contactar por ${contact.label.toLowerCase()}`}
                      >
                        <motion.div 
                          variants={bounce}
                          whileHover="hover"
                          className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900/50 dark:to-blue-900/50 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:shadow-lg transition-all duration-300"
                        >
                          <contact.icon size={20} />
                        </motion.div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                            {contact.label}
                          </div>
                          <div className="text-gray-600 dark:text-gray-300 text-sm">
                            {contact.value}
                          </div>
                          {contact.primary && (
                            <span className="inline-block px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs rounded-full mt-1">
                              Preferido
                            </span>
                          )}
                        </div>
                        <div className="text-gray-400 group-hover:text-sky-500 transition-colors duration-300">
                          <ArrowRightIcon size={16} />
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 dark:border-gray-700/50">
                        <motion.div 
                          variants={bounce}
                          whileHover="hover"
                          className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900/50 dark:to-blue-900/50 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400"
                        >
                          <contact.icon size={20} />
                        </motion.div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {contact.label}
                          </div>
                          <div className="text-gray-600 dark:text-gray-300 text-sm">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )) || (
                  <div className="text-center p-8 text-gray-500 dark:text-gray-400">
                    <p>Información de contacto cargando...</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right column - Contact form */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-xl" />
                            
              <div className="relative">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0], 
              scale: [0, 1, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
            className="absolute w-2 h-2 bg-sky-400 rounded-full"
            style={{
              left: `${20 + (i * 20)}%`,
              bottom: '10%',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
