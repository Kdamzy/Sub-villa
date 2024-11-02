import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-naviator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
        <p>
            An e-commerce website is an online platform that allows businesses and individuals
            to buy and sell products and services over the internet. It provides customers
            with a convenient, digital shopping experience, enabling them to browse, compare,
            and purchase items from the comfort of their own homes.
          </p>
        </div>
    </div>
  )
}

export default DescriptionBox