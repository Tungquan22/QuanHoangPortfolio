import React from 'react';
import './Project.css';

function ProjectItem({ id, title, content }) {
  return (
    <div className="project" id={id}>
      <h3>{title}</h3>
      <div>
        {content}
      </div>
    </div>
  );
}

export default ProjectItem;
