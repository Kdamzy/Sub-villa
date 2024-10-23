import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import facebook from '../Assets/facebook.svg'
import twitter from '../Assets/twitter.svg'
import instagram from '../Assets/instagram.svg'

const Footer= () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={logo} alt='' />
                <div>
                    <ul className='footer-link'>
                    <li>Company</li>
                    <li>Product</li>
                    <li>Offers</li>
                    <li>About</li>
                    <li>Contact</li>
                    </ul>
                    <div className='footer-social-icons'>
                        <div className='footer-icons-container'>
                            <img src={facebook} alt='' />
                        </div>
                        <div className='footer-icons-container'>
                            <img src={twitter} alt='' />
                        </div>
                        <div className='footer-icons-container'>
                            <img src={instagram} alt='' />
                        </div>
                    </div>
                    <div className='footer-copyright'>
                        <hr />
                        <p> Copyright @ 2024 - All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer