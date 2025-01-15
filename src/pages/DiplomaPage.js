import React from 'react';
import { Link } from 'react-router-dom';
import './DiplomaPage.css';

const diplomas = [
  {
    id: 'dcs01',
    name: 'Diploma in Computer Science',
    description: 'Learn programming, data structures, algorithms, and software development.',
    image: 'https://www.rp.edu.sg/images/default-source/soi-images/full-time-courses-img/soi-main-photos--2024/dit-e.jpg'
  },
  {
    id: 'dba01',
    name: 'Diploma in Business Administration',
    description: 'Gain knowledge in business operations, marketing, and finance.',
    image: 'https://www.rp.edu.sg/images/default-source/soi-images/full-time-courses-img/soi-main-photos--2024/dft-e.jpg'
  },
  {
    id: 'dic01',
    name: 'Diploma in Common ICT Programme',
    description: 'Learn the basics of information and communications technology (ICT), network management, and system administration.',
    image: 'https://www.rp.edu.sg/images/default-source/soi-images/full-time-courses-img/soi-main-photos--2024/cip-e.jpg'
  },
  {
    id: 'daai01',
    name: 'Diploma in Applied AI and Analytics',
    description: 'Dive into the world of artificial intelligence, machine learning, and data analytics.',
    image: 'https://www.rp.edu.sg/images/default-source/soi-images/full-time-courses-img/soi-main-photos--2024/daaa-e.jpg'
  },
  {
    id: 'dcyber01',
    name: 'Diploma in Cybersecurity and Digital Forensics',
    description: 'Understand the key concepts of cybersecurity, ethical hacking, and digital forensics.',
    image: 'https://www.rp.edu.sg/images/default-source/soi-images/full-time-courses-img/2019/r55_dism_mainimage1.jpg'
  },
  {
    id: 'dec01',
    name: 'Diploma in Enterprise Cloud Computing and Management',
    description: 'Learn how to design, implement, and manage cloud computing systems for businesses.',
    image: 'https://www.rp.edu.sg/images/default-source/soi-images/full-time-courses-img/soi-main-photos--2024/decm-e.jpg   '
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
            <img 
              src={diploma.image}
              alt={diploma.name} 
              className="diploma-image"
            />
            <p>{diploma.description}</p>
            <Link to={`/diplomas/${diploma.id}`}>View Modules</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiplomaPage;
