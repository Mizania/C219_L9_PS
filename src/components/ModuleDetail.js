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
    },
    ict01: {
      module1: { name: 'Introduction to ICT', description: 'Gain a solid foundation in the world of Information and Communication Technology.' },
      module2: { name: 'Networking Fundamentals', description: 'Learn about networking protocols, security, and system administration.' },
      module3: { name: 'Operating Systems', description: 'Understand the fundamentals of different operating systems such as Linux and Windows.' },
    },
    ai01: {
      module1: { name: 'Artificial Intelligence Fundamentals', description: 'Learn the core concepts and techniques in AI, including machine learning.' },
      module2: { name: 'Data Analytics', description: 'Explore data processing, visualization, and statistical techniques.' },
      module3: { name: 'Machine Learning', description: 'Dive into various machine learning algorithms and their applications.' },
    },
    csdf01: {
      module1: { name: 'Cybersecurity Fundamentals', description: 'Learn the basics of cybersecurity and how to protect systems and networks.' },
      module2: { name: 'Digital Forensics', description: 'Explore methods used to collect, preserve, and analyze digital evidence.' },
      module3: { name: 'Ethical Hacking', description: 'Understand the principles of ethical hacking and penetration testing.' },
    },
    eccm01: {
      module1: { name: 'Cloud Computing Fundamentals', description: 'Learn about cloud computing technologies, services, and platforms.' },
      module2: { name: 'Enterprise Cloud Management', description: 'Gain expertise in managing cloud environments for enterprise applications.' },
      module3: { name: 'Cloud Security', description: 'Understand the importance of security in cloud computing and how to secure cloud-based systems.' },
    },
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
