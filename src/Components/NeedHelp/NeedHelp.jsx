import React, { useState } from 'react';
import './NeedHelp.css';

const NeedHelp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);
    // Add your API call or form submission logic here
  };

  return (
    <div className="submit">
      <h2 className="header">Need Help?</h2>
      {submitted ? (
        <p className="success">Thank you! Your details have been submitted successfully.</p>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className='from-row'>
          <div className="inputGroup">
            <label className="label"></label>
            <input type="text" name="name" placeholder='Name' value={formData.name} onChange={handleChange} className="input" required/>
          </div>

          <div className="inputGroup">
            <label className="label" ></label>
            <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} className="input" required/>
          </div>

          <div className="inputGroup">
            <label className="label" ></label>
            <input type="tel"name="phone" placeholder='Phone No' value={formData.phone} onChange={handleChange} className="input" required/>
          </div>

          <div className="inputGroup">
            <label className="label"></label>
            <input name="petDetails" placeholder='Pet Details' value={formData.petDetails} onChange={handleChange} className="input" required/>
          </div>
          </div>
          <div className='submit-button2' >
          <button type="submit" className="button2" >Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NeedHelp;

