import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    position: '',
    expectedSalary: '',
    startDate: '',
    employmentType: '',
    qualification: '',
    university: '',
    experience: '',
    previousCompany: '',
    linkedin: '',
    source: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://685b889b89952852c2d9dd3d.mockapi.io/jobapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const allFilled = Object.values(formData).every((val) => val !== '');

      if (!allFilled) {
        toast.warn("ALL FIELDS MUST BE FILLED");
        return;
      }


      if (response.ok) {
        toast.success('Application submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dob: '',
          gender: '',
          position: '',
          expectedSalary: '',
          startDate: '',
          employmentType: '',
          qualification: '',
          university: '',
          experience: '',
          previousCompany: '',
          linkedin: '',
          source: '',
        });
      } else {
        toast.warn('Failed to submit application');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.warn('Something went wrong!');
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <h3>Job Application Form</h3>
      <form onSubmit={handleSubmit}>
        {[
          { label: 'Full Name', name: 'fullName', type: 'text' },
          { label: 'Email Address', name: 'email', type: 'email' },
          { label: 'Phone Number', name: 'phone', type: 'number' },
          { label: 'Date of Birth', name: 'dob', type: 'date' },
        ].map(({ label, name, type }) => (
          <div className="mb-3" key={name}>
            <label className="form-label">{label}</label>
            <input
              type={type}
              className="form-control"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* Gender Dropdown */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Position Dropdown */}
        <div className="mb-3">
          <label className="form-label">Position Applied For</label>
          <select className="form-select" name="position" value={formData.position} onChange={handleChange} required>
            <option value="">Select Position</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        {/* Salary and Start Date */}
        {[
          { label: 'Expected Salary', name: 'expectedSalary', type: 'number' },
          { label: 'Available Start Date', name: 'startDate', type: 'date' },
        ].map(({ label, name, type }) => (
          <div className="mb-3" key={name}>
            <label className="form-label">{label}</label>
            <input
              type={type}
              className="form-control"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* Employment Type */}
        <div className="mb-3">
          <label className="form-label">Employment Type</label>
          <select className="form-select" name="employmentType" value={formData.employmentType} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Qualification and University */}
        <div className="mb-3">
          <label className="form-label">Highest Qualification</label>
          <select className="form-select" name="qualification" value={formData.qualification} onChange={handleChange} required>
            <option value="">Select Qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">University/Institute Name</label>
          <input
            type="text"
            className="form-control"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          />
        </div>

        {/* Experience and Previous Company */}
        <div className="mb-3">
          <label className="form-label">Years of Experience</label>
          <input
            type="number"
            className="form-control"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Previous Company Name</label>
          <input
            type="text"
            className="form-control"
            name="previousCompany"
            value={formData.previousCompany}
            onChange={handleChange}
            required
          />
        </div>

        {/* LinkedIn */}
        <div className="mb-3">
          <label className="form-label">LinkedIn Profile</label>
          <input
            type="url"
            className="form-control"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            required
          />
        </div>

        {/* Source */}
        <div className="mb-3">
          <label className="form-label">How did you hear about this job?</label>
          <select className="form-select" name="source" value={formData.source} onChange={handleChange} required>
            <option value="">Select Source</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Company Website">Company Website</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
