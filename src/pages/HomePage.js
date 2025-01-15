import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to Republic Polytechnic Course Enrolment Portal</h1>
        <img 
          src="https://www.rp.edu.sg/images/default-source/soi-images/full-time-courses-img/soi-main-photos--2024/dit-e.jpg" 
          alt="Republic Polytechnic Campus" 
          className="home-image"
        />
        <p>Explore our diplomas and courses to kickstart your career.</p>
        <Link to="/diplomas">View Diplomas</Link>
      </div>
    </div>
  );
}

export default HomePage;
