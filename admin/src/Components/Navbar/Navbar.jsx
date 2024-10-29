import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import person from '../../assets/person.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='' className='nav-logo' />
        <img src={person} alt='' className='nav-profile' />
    </div>
  )
}

export default Navbar