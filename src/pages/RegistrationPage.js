import React, { useState } from 'react';

function RegistrationPage() {
  const [formData, setFormData] = useState({ name: '', email: '', courses: [] });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'courses') {
      const options = e.target.selectedOptions;
      const values = Array.from(options).map(option => option.value);
      setFormData({ ...formData, [name]: values });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
    console.log(formData);
  };

  // Inline styles
  const formContainerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    width: '100%',
  };

  return (
    <div className="registration" style={formContainerStyle}>
      <h2>Course Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" style={labelStyle}>Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />

        <label htmlFor="email" style={labelStyle}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />

        <label htmlFor="courses" style={labelStyle}>Select Courses</label>
        <select
          id="courses"
          name="courses"
          value={formData.courses}
          onChange={handleInputChange}
          multiple
          style={inputStyle}
        >
          <option value="DCS01">Diploma in Computer Science</option>
          <option value="DBA01">Diploma in Business Administration</option>
          <option value="DIC01">Diploma in Common ICT Programme</option>
          <option value="DAAI01">Diploma in Applied AI and Analytics</option>
          <option value="DCYBER01">Diploma in Cybersecurity and Digital Forensics</option>
          <option value="DEC01">Diploma in Enterprise Cloud Computing and Management</option>
        </select>

        <button type="submit" style={buttonStyle}>Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
