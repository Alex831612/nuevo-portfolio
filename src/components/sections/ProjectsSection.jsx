import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard/ProjectCard';
import { projects } from '../../data/portfolioData';
import { ArrowRightIcon, CodeIcon, SparklesIcon, Grid3X3Icon, ListIcon, ChevronRightIcon } from '../icons/Icons';
import { float, scaleInCenter, staggerContainer } from '../../animations/animations';
import { projectCard } from '../../animations/portfolioAnimations';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
    
  // Estados para filtros y vista
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showAll, setShowAll] = useState(false);

  // Obtener categorías únicas
  const categories = ['all', ...new Set(projects.map(project => project.category))];
    
  // Filtrar proyectos
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category === filter;
  });

  // Limitar proyectos mostrados inicialmente
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  // Boton para mostrar más proyectos
  const handleShowMore = () => {
    setShowAll(true);
  };

  // Alternar entre vista de grilla y lista
  const handleViewModeToggle = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="min-h-screen py-16 lg:py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 relative overflow-hidden"
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
            variants={projectCard}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div
              variants={scaleInCenter}
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <SparklesIcon size={16} />
              Mi trabajo destacado
            </motion.div>
                        
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-sky-600 dark:text-sky-400 bg-clip-text">
              Proyectos Destacados
            </h2>
          </motion.div>

          {/* Filters and View Controls */}
          <motion.div
            variants={projectCard}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category)}
                  className={`
                    px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300
                    ${filter === category
                      ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/25'
                      : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-sky-100 dark:hover:bg-sky-900/30 hover:text-sky-600 dark:hover:text-sky-400'
                    }
                    backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 cursor-pointer
                  `}
                >
                  {category === 'all' ? 'Todos' : category === 'featured' ? '⭐ Destacados' : category}
                  {category === 'featured' && (
                    <span className="ml-1 text-xs">
                      ({projects.filter(p => p.featured).length})
                    </span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
              </span>
                            
              <div className="flex items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-1 border border-gray-200/50 dark:border-gray-700/50">
                <button
                  onClick={handleViewModeToggle}
                  className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    viewMode === 'grid' 
                      ? 'bg-sky-600 text-white shadow-lg' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400'
                    }`}
                  title="Vista en grilla"
                >
                  <Grid3X3Icon size={16} />
                </button>
                <button
                  onClick={handleViewModeToggle}
                  className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    viewMode === 'list' 
                      ? 'bg-sky-600 text-white shadow-lg' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400'
                    }`}
                  title="Vista en lista"
                >
                  <ListIcon size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid/List */}
          <motion.div
            variants={staggerContainer}
            className={`
              ${viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8' 
                : 'space-y-6'
              }
            `}
          >
            <AnimatePresence>
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${viewMode}`}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    layout: { duration: 0.3 }
                  }}
                >
                  <ProjectCard 
                    project={project} 
                    index={index}
                    viewMode={viewMode}
                    isInView={isInView}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <CodeIcon size={64} className="mx-auto mb-4 text-gray-400 dark:text-gray-600" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No hay proyectos en esta categoría
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Prueba con otro filtro o ve todos los proyectos
              </p>
            </motion.div>
          )}

          {/* Show More Button */}
          {!showAll && filteredProjects.length > 6 && (
            <motion.div
              variants={projectCard}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 cursor-pointer"
              >
                Ver más proyectos
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronRightIcon size={20} />
                </motion.div>
                <span className="ml-1 text-sm opacity-75">
                  (+{filteredProjects.length - 6} más)
                </span>
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
