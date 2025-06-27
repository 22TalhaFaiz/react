import React, { useState } from 'react'

const Job = () => {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    qualification: '',
    expectedSalary: '',
    skills: [],
    position: '',
    whyHire: '',
    cv: null,
  });

  const skillsOptions = ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'];
  const positions = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      const updatedSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter((skill) => skill !== value);
      setFormData({ ...formData, skills: updatedSkills });
    } else if (type === 'file') {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Submitted Form Data:");
  console.log("Name:", formData.name);
  console.log("Email:", formData.email);
  console.log("Phone:", formData.phone);
  console.log("Gender:", formData.gender);
  console.log("Qualification:", formData.qualification);
  console.log("Expected Salary:", formData.expectedSalary);
  console.log("Skills:", formData.skills);
  console.log("Position Applying For:", formData.position);
  console.log("Why should we hire you?:", formData.whyHire);
  console.log("CV File:", formData.cv?.name || 'No file uploaded');

  alert('Form submitted! Check console for data.');
};

  return (
    <div className="container mt-4">
      <h3>Job Application Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Qualification</label>
          <select className="form-select" name="qualification" value={formData.qualification} onChange={handleChange} required>
            <option value="">Select Qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Expected Salary</label>
          <input type="number" className="form-control" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Skills</label>
          {skillsOptions.map((skill) => (
            <div className="form-check" key={skill}>
              <input
                className="form-check-input"
                type="checkbox"
                name="skills"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleChange}
              />
              <label className="form-check-label">{skill}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Position Applying For</label>
          <select className="form-select" name="position" value={formData.position} onChange={handleChange} required>
            <option value="">Select Position</option>
            {positions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Why should we hire you?</label>
          <textarea
            className="form-control"
            name="whyHire"
            rows="3"
            value={formData.whyHire}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload CV</label>
          <input type="file" className="form-control" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Submit Application</button>
      </form>
    </div>
  );
};

export default Job