import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, ChevronRightIcon, ExternalLinkIcon, EyeIcon, GithubIcon } from '../../icons/Icons';
import { fadeIn } from '../../../animations/animations';

const ProjectActions = ({ project, layout = 'minimal' }) => {
  if (layout === 'hover-overlay') {
    return (
      <motion.div
        className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        variants={fadeIn}
      >
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-200"
            aria-label={`Ver proyecto ${project.title} en vivo`}
          >
            <ExternalLinkIcon size={18} />
          </motion.a>
        )}
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-200"
            aria-label={`Ver código de ${project.title} en GitHub`}
          >
            <GithubIcon size={18} />
          </motion.a>
        )}
      </motion.div>
    );
  }

  if (layout === 'minimal') {
    return (
      <div className="flex items-center gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium text-sm transition-colors duration-200"
          >
            <EyeIcon size={14} />
            Ver demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors duration-200"
          >
            <CodeIcon size={14} />
            Código
          </a>
        )}
      </div>
    );
  }

  // Full layout with buttons
  return (
    <div className="flex items-center gap-4">
      {project.link && (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
        >
          <EyeIcon size={16} />
          Ver demo
          <ChevronRightIcon size={14} />
        </motion.a>
      )}
      {project.github && (
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-medium transition-all duration-300"
        >
          <CodeIcon size={16} />
          Ver código
        </motion.a>
      )}
    </div>
  );
};

export default ProjectActions;
