import React from 'react'
import './Breadcrum.css'
import arrow_right from '../Assets/arrow_right.svg'

const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_right} alt='' /> SHOP <img src={arrow_right} alt='' /> {product.category} <img src={arrow_right} alt='' /> {product.name}

    </div>
  )
}

export default Breadcrum