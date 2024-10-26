import React from 'react'
import './Breadcrum.css'
import arrow_right from '../Assets/arrow_right.svg'

const Breadcrum = () => {
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_right} alt='' /> SHOP <img src={arrow_right} alt='' /> {Product.category} <img src={arrow_right} alt='' /> {Product.name}

    </div>
  )
}

export default Breadcrum