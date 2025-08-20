import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectHighlights from './ProjectHighlights';
import ProjectTechStack from './ProjectTechStack';

const ProjectDetailsModal = ({ project, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-900/50 p-6"
        >
          {project.fullDescription && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          )}
                    
          <ProjectHighlights 
            highlights={project.highlights} 
            layout="full" 
            showTitle={true} 
          />

          <ProjectTechStack 
            tech={project.tech} 
            layout="minimal" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
