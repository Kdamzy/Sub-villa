import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { Link } from 'react-router-dom';
import { registerUser } from '../services/apiService';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(formData);
      console.log('Registration successful:', result);
      alert('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Failed to register: ' + (error.response ? error.response.data.message : error.message)); // Show specific error message
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className='loginsignup-fields'>
            <input type='text' name='firstname' placeholder='First name' value={formData.firstname} onChange={handleChange} />
            <input type='text' name='lastname' placeholder='Last name' value={formData.lastname} onChange={handleChange} />
            <input type='email' name='email' placeholder='Email Address' value={formData.email} onChange={handleChange} />
            <input type='text' name='mobile' placeholder='Mobile' value={formData.mobile} onChange={handleChange} />
            <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
          </div>
          <button type='submit'>Continue</button>
          <p className='loginsignup-login'>
            Already have an account? <Link to="/signin">login here</Link>
          </p>
          <div className='loginsignup-agree'>
            <input type='checkbox' id='agree' />
            <p>By continuing, I agree to the terms of use & privacy</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
