import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/SignIn.css';
import { loginUser } from '../services/apiService';

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(loginData);
      console.log('Login successful:', result);
      alert('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Failed to log in');
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='loginsignup-fields'>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Login</button>
          <p className='loginsignup-login'>
            Don't have an account? <Link to="/login">Sign up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
