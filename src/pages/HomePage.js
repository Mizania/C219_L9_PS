import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to Republic Polytechnic Course Enrolment Portal</h1>
      <p>Explore our diplomas and courses to kickstart your career.</p>
      <Link to="/diplomas">View Diplomas</Link>
    </div>
  );
}

export default HomePage;
