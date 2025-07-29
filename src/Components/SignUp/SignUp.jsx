import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import './SignUp.css';

const LoginSignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false); // For icon display

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login Data:' : 'SignUp Data:', formData);

    setSubmitted(true);
    setFormData({ email: '', password: '', name: '' });

    if (!isLogin) {
      setAccountCreated(true); // Show success icon for signup

      setTimeout(() => {
        setIsLogin(true);      // Switch to login form
        setSubmitted(false);   // Clear messages
        setAccountCreated(false); // Hide icon
      }, 2000);
    } else {
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  return (
    <div className='login-signup'>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

      <div className='login-form'>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>
          <br />
          <button className='submit' type="submit">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <p className='toggle-msg'>
          {isLogin
            ? <>New here? <span onClick={() => setIsLogin(false)}>Create an account</span></>
            : <>Already have an account? <span onClick={() => setIsLogin(true)}>Login here</span></>}
        </p>

        {submitted && (
          <p className='success-message'>
            {isLogin ? 'Login Submitted!' : (
              <>
                Account Created! <IoCheckmarkCircleOutline size={24} color="green" />
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
