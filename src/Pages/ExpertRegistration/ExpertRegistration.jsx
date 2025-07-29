import React, { useState } from "react";
import "./ExpertRegistration.css";

const ExpertRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expert Registered:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="expert-registration-container">
      <div className="overlay">
        <div className="content">
          <h1>Join as a Pet Expert</h1>
          <p className="description">
            Become a certified pet expert with us and offer your services to pet owners 
            looking for grooming, training, veterinary care, and more. Register now 
            and grow your business!
          </p>
          <div className="form-container">
            <h2>Expert Registration</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="service"
                placeholder="Service (e.g., Grooming, Training)"
                value={formData.service}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="experience"
                placeholder="Years of Experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertRegistration;
