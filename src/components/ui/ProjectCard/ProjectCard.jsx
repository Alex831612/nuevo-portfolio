import React from 'react';
import ProjectCardGrid from './ProjectCardGrid';
import ProjectCardList from './ProjectCardList';

const ProjectCard = ({ project, index = 0, viewMode = 'grid', isInView = true }) => {
  if (viewMode === 'grid') {
    return (
      <ProjectCardGrid 
        project={project} 
        isInView={isInView} 
      />
    );
  }

  return (
    <ProjectCardList 
      project={project} 
      isInView={isInView} 
    />
  );
};

export default ProjectCard;
