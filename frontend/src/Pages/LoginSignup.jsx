import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='last name' />
          <input type='email' placeholder='Email Address' />
          <input type='mobile' placeholder='Mobile' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>login here</span></p>
        <div className='loginsignup-agree'>
        <input type='checkbox' name='' id='' />
        <p>By continuing, i agree to the term of use & privacy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup