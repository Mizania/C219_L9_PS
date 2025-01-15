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
  ],
  ict01: [
    { id: 'module1', name: 'Introduction to ICT' },
    { id: 'module2', name: 'Networking Fundamentals' },
    { id: 'module3', name: 'Operating Systems' },
  ],
  ai01: [
    { id: 'module1', name: 'Artificial Intelligence Fundamentals' },
    { id: 'module2', name: 'Data Analytics' },
    { id: 'module3', name: 'Machine Learning' },
  ],
  csdf01: [
    { id: 'module1', name: 'Cybersecurity Fundamentals' },
    { id: 'module2', name: 'Digital Forensics' },
    { id: 'module3', name: 'Ethical Hacking' },
  ],
  eccm01: [
    { id: 'module1', name: 'Cloud Computing Fundamentals' },
    { id: 'module2', name: 'Enterprise Cloud Management' },
    { id: 'module3', name: 'Cloud Security' },
  ],
};

function ModulePage() {
  const { diplomaId } = useParams();
  const diplomaModules = modules[diplomaId];

  const getDiplomaName = (id) => {
    switch(id) {
      case 'dcs01': return 'Diploma in Computer Science';
      case 'dba01': return 'Diploma in Business Administration';
      case 'ict01': return 'Common ICT Programme';
      case 'ai01': return 'Applied AI and Analytics';
      case 'csdf01': return 'Cybersecurity and Digital Forensics';
      case 'eccm01': return 'Enterprise Cloud Computing and Management';
      default: return 'Diploma';
    }
  };

  return (
    <div className="modules">
      <h2>Modules for {getDiplomaName(diplomaId)}</h2>
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
