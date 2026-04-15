import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map(project => (
        <div key={project.img} className="project-card">
          <img src={project.img} alt={project.category} />
          <p>{project.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
