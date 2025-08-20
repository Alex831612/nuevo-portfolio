import React from 'react';

const ProjectTechStack = ({ tech, layout = 'compact', showTitle = false, maxItems = null }) => {
  const displayedTech = maxItems ? tech.slice(0, maxItems) : tech;
  const remainingCount = maxItems && tech.length > maxItems ? tech.length - maxItems : 0;

  const getItemStyles = () => {
    switch (layout) {
      case 'minimal':
        return 'px-2 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-700';
      case 'compact':
        return 'px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium';
      default:
        return 'px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium';
    }
  };

  return (
    <div className="mb-4">
      {showTitle && (
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Tecnologías utilizadas:
        </h4>
      )}
      <div className="flex flex-wrap gap-2">
        {displayedTech.map((techItem) => (
          <span
            key={techItem}
            className={getItemStyles()}
          >
            {techItem}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="px-3 py-1 text-gray-500 dark:text-gray-400 text-sm">
            +{remainingCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectTechStack;
