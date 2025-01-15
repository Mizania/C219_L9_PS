import React, { useState } from 'react';

function RegistrationPage() {
  const [formData, setFormData] = useState({ name: '', email: '', courses: [] });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
    console.log(formData);
  };

  return (
    <div className="registration">
      <h2>Course Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="courses">Select Courses</label>
        <select
          id="courses"
          name="courses"
          value={formData.courses}
          onChange={handleInputChange}
          multiple
        >
          <option value="DCS01">Diploma in Computer Science</option>
          <option value="DBA01">Diploma in Business Administration</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
