import React from 'react'
import './Hero.css'
import arrow_right from '../Assets/arrow_right.svg'
import hero_image from '../Assets/hero_image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>Find the best data plans and gadget</p>
                </div>
                <p>to elevate your digital experience.</p>
            </div>
            <div className='hero-latest-button'>
                <div>Latest Collection</div>
                <img src={arrow_right} alt='' />

            </div>
        </div>
        <div className='hero-right'>
        <img src={hero_image} alt='' /> 

        </div>

    </div>
  )
}

export default Hero