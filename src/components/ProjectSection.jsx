import React from 'react';
import ProjectItem from './ProjectItem';
import './Project.css';

function ProjectSection({ id, title, projects }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {projects.map(project => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </section>
  );
}

export default ProjectSection;
