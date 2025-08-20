import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from '../../icons/Icons';
import { imageVariants } from '../../../animations/animations';

const ProjectImage = ({ project, className = "" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!project.image || imageError) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 ${className}`}>
        <div className="text-center text-gray-500 dark:text-gray-400">
          <ImageIcon size={48} className="mx-auto mb-2 opacity-50" />
          <p className="text-sm">Imagen no disponible</p>
        </div>
      </div>
    );
  }

  return (
    <motion.img 
      src={project.image} 
      alt={`Captura de pantalla del proyecto ${project.title}`}
      className={`object-cover ${className}`}
      variants={imageVariants}
      initial="loading"
      animate={imageLoaded ? "loaded" : "loading"}
      onLoad={() => setImageLoaded(true)}
      onError={() => setImageError(true)}
    />
  );
};

export default ProjectImage;
