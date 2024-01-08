import React from 'react';
import HobbyItem from './HobbyItem';
import './Hobby.css';

function HobbySection({ id, title, items }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {items.map(item => (
        <HobbyItem key={item.id} id={item.id} title={item.title} content={item.content} />
      ))}
    </section>
  );
}

export default HobbySection;
