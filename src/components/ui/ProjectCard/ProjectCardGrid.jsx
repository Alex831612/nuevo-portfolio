import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, InfoIcon } from '../../icons/Icons';
import { fadeIn } from '../../../animations/animations';
import { projectCard } from '../../../animations/portfolioAnimations';

import ProjectImage from './ProjectImage';
import ProjectBadges from './ProjectBadges';
import ProjectActions from './ProjectActions';
import ProjectTechStack from './ProjectTechStack';
import ProjectHighlights from './ProjectHighlights';
import ProjectDetailsModal from './ProjectDetailsModal';

const ProjectCardGrid = ({ project, isInView = true }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.article
      variants={projectCard}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
    >
      <ProjectBadges project={project} layout="overlay" />

      {/* Image Container */}
      <div className="relative h-48 lg:h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        <ProjectImage 
          project={project} 
          className="w-full h-full" 
        />
                
        {/* Image Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          variants={fadeIn}
        />
        <ProjectActions project={project} layout="hover-overlay" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
            {project.year && (
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 ml-2">
                <CalendarIcon size={12} />
                {project.year}
              </span>
            )}
          </div>
                    
          {project.subtitle && (
            <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mb-2">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <ProjectHighlights 
          highlights={project.highlights} 
          layout="compact" 
          maxItems={2} 
        />

        <ProjectTechStack 
          tech={project.tech} 
          layout="compact" 
          maxItems={4} 
        />

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <ProjectActions project={project} layout="minimal" />

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 text-sm transition-colors duration-200 cursor-pointer"
          >
            <InfoIcon size={14} />
            Detalles
          </button>
        </div>
      </div>
      <ProjectDetailsModal project={project} isOpen={showDetails} />
    </motion.article>
  );
};

export default ProjectCardGrid;
