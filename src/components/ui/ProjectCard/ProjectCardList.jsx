import React from 'react';
import { motion } from 'framer-motion';
import { projectCard } from '../../../animations/portfolioAnimations';

import ProjectImage from './ProjectImage';
import ProjectBadges from './ProjectBadges';
import ProjectActions from './ProjectActions';
import ProjectTechStack from './ProjectTechStack';
import ProjectHighlights from './ProjectHighlights';

const ProjectCardList = ({ project, isInView = true }) => {
  return (
    <motion.article
      variants={projectCard}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02 }}
      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-80 h-48 md:h-auto relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
          <ProjectImage 
            project={project} 
            className="w-full h-full" 
          />

          <ProjectBadges project={project} layout="stacked" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 ml-4">
                <ProjectBadges project={project} layout="inline" />
              </div>
            </div>
                        
            {project.subtitle && (
              <p className="text-sky-600 dark:text-sky-400 font-medium mb-3">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
            {project.fullDescription || project.description}
          </p>

          <ProjectHighlights 
            highlights={project.highlights} 
            layout="full" 
            showTitle={true} 
          />

          <ProjectTechStack 
            tech={project.tech} 
            layout="compact" 
            showTitle={true} 
          />

          {/* Actions */}
          <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <ProjectActions project={project} layout="full" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCardList;
