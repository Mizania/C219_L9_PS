import React from 'react';
import { useParams, Link } from 'react-router-dom';

const modules = {
  dcs01: [
    { id: 'module1', name: 'Introduction to Programming' },
    { id: 'module2', name: 'Data Structures' },
    { id: 'module3', name: 'Web Development' },
  ],
  dba01: [
    { id: 'module1', name: 'Business Communication' },
    { id: 'module2', name: 'Marketing Principles' },
    { id: 'module3', name: 'Human Resources Management' },
  ]
};

function ModulePage() {
  const { diplomaId } = useParams();
  const diplomaModules = modules[diplomaId];

  return (
    <div className="modules">
      <h2>Modules for {diplomaId === 'dcs01' ? 'Diploma in Computer Science' : 'Diploma in Business Administration'}</h2>
      <ul>
        {diplomaModules.map((module) => (
          <li key={module.id}>
            <Link to={`/diplomas/${diplomaId}/${module.id}`}>{module.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModulePage;
