import React from 'react';

const ProjectHighlights = ({ highlights, layout = 'compact', showTitle = false, maxItems = null }) => {
    if (!highlights || highlights.length === 0) return null;

    const displayedHighlights = maxItems ? highlights.slice(0, maxItems) : highlights;
    const remainingCount = maxItems && highlights.length > maxItems ? highlights.length - maxItems : 0;

    if (layout === 'compact') {
      return (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {displayedHighlights.map((highlight, idx) => (
              <span
                key={idx}
                className="text-xs bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-2 py-1 rounded-md"
              >
                ✓ {highlight}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                +{remainingCount} más
              </span>
            )}
          </div>
        </div>
      );
    }

    // Full layout
    return (
      <div className="mb-4">
        {showTitle && (
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Características destacadas:
          </h4>
        )}
        <div className={`grid grid-cols-1 ${layout === 'full' ? 'sm:grid-cols-2' : ''} gap-2`}>
          {displayedHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0" />
              {highlight}
            </div>
          ))}
        </div>
      </div>
    );
};

export default ProjectHighlights;
