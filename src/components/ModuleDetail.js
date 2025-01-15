import React from 'react';
import { useParams } from 'react-router-dom';

const moduleDetails = {
  dcs01: {
    module1: { name: 'Introduction to Programming', description: 'Learn the basics of programming with hands-on projects.' },
    module2: { name: 'Data Structures', description: 'Understand common data structures such as arrays, linked lists, and trees.' },
    module3: { name: 'Web Development', description: 'Build dynamic websites using HTML, CSS, and JavaScript.' },
  },
  dba01: {
    module1: { name: 'Business Communication', description: 'Learn how to communicate effectively in a business environment.' },
    module2: { name: 'Marketing Principles', description: 'Understand the fundamentals of marketing and its strategies.' },
    module3: { name: 'Human Resources Management', description: 'Explore the key principles of HR management.' },
  }
};

function ModuleDetail() {
  const { diplomaId, moduleId } = useParams();
  const module = moduleDetails[diplomaId][moduleId];

  return (
    <div className="module-detail">
      <h2>{module.name}</h2>
      <p>{module.description}</p>
    </div>
  );
}

export default ModuleDetail;
