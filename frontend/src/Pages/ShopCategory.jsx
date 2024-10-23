import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-categoy'>
      <img src={props.banner} alt='' />
    </div>
  )
}

export default ShopCategory