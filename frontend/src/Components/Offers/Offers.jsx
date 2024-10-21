import React from 'react'
import './Offers.css'
import p1_img from '../Assets/p1_img.jpg'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive Offers</h1>
            <p>Only on best sellers products</p>
            <button>Check now</button>
        </div>
        <div className='offer-right'>
          <img src={p1_img} alt='' />
        </div>
      </div>
  )
}

export default Offers