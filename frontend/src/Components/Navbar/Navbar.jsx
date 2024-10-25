import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart from '../Assets/cart.svg'
const Navbar = () => {

  const [menu,setMenu] = useState("Shop");
  
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo}alt="" />
        </div>
        <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("gadget")}}><Link style={{ textDecoration: 'none' }} to='/gadget'>Gadget</Link>{menu=="gadget"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("phones")}}><Link style={{ textDecoration: 'none' }} to='/phones'>Phones</Link>{menu=="phones"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("laptop")}}><Link style={{ textDecoration: 'none' }} to='/laptop'>Laptop</Link>{menu=="laptop"?<hr/>:<></>}</li>

      </ul>
      <div className='nav-login-cart'>
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className='nav-cart-count'>0</div>
        </div>

    </div>
  )
}

export default Navbar