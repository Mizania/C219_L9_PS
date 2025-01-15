import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to Republic Polytechnic Course Enrolment Portal</h1>
      <img
        src="https://react-router-ps.vercel.app/static/media/soi-hero-banner-2024.7455aee66183ba225061.jpg"
        alt="Republic Polytechnic"
        className="home-image"
      />
      <p>If you are excited by the latest technological advances and have a passion for problem-solving, join us at RP School of Infocomm (SOI). We will help you discover your hidden technical skills and nurture your creative digital dreams. We offer six diploma programmes across a wide range of infocomm disciplines.</p>
      <p>Explore our diplomas and courses to kickstart your career.</p>
      <Link to="/diplomas">View Diplomas</Link>
    </div>
  );
}

export default HomePage;
