import React from 'react';
import './Hobby.css';

function HobbyItem({ id, title, content }) {
  return (
    <div className="hobby" id={id}>
      <h3>{title}</h3>
      <div className="content-container">
        {content}
      </div>
    </div>
  );
}

export default HobbyItem;
