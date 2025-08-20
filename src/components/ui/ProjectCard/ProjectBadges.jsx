import React from 'react';
import { CalendarIcon, TagIcon, StarIcon } from '../../icons/Icons';

const ProjectBadges = ({ project, layout = 'overlay' }) => {
  // Función para obtener color de estado
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'paused': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
    }
  };

  // Función para obtener texto de estado
  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'in-progress': return 'En desarrollo';
      case 'paused': return 'Pausado';
      default: return 'Activo';
    }
  };

  if (layout === 'overlay') {
    return (
      <>
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <StarIcon size={12} fill="currentColor" />
              Destacado
            </div>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)} backdrop-blur-sm`}>
            {getStatusText(project.status)}
          </span>
        </div>
      </>
    );
  }

  if (layout === 'stacked') {
    return (
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {project.featured && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
            <StarIcon size={10} fill="currentColor" />
            Destacado
          </div>
        )}
        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(project.status)}`}>
          {getStatusText(project.status)}
        </span>
      </div>
    );
  }

  // Inline layout
  return (
    <div className="flex items-center gap-2">
      {project.year && (
        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
          <CalendarIcon size={14} />
          {project.year}
        </span>
      )}
      {project.category && (
        <span className="px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs rounded-lg">
          <TagIcon size={10} className="inline mr-1" />
          {project.category}
        </span>
      )}
    </div>
  );
};

export default ProjectBadges;
