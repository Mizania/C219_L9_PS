import React from 'react';
import { Link } from 'react-router-dom';

const diplomas = [
  {
    id: 'dcs01',
    name: 'Diploma in Computer Science',
    description: 'Learn programming, data structures, algorithms, and software development.'
  },
  {
    id: 'dba01',
    name: 'Diploma in Business Administration',
    description: 'Gain knowledge in business operations, marketing, and finance.'
  }
];

function DiplomaPage() {
  return (
    <div className="diplomas">
      <h2>Our Diplomas</h2>
      <div className="diploma-list">
        {diplomas.map((diploma) => (
          <div className="diploma-item" key={diploma.id}>
            <h3>{diploma.name}</h3>
            <p>{diploma.description}</p>
            <Link to={`/diplomas/${diploma.id}`}>View Modules</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiplomaPage;
