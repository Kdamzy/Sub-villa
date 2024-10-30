import React from 'react'
import './ProductDisplay.css'
import star from '../Assets/star.svg'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className='productdisplay-img'>
                <img src={product.image} alt='' />
            </div>
            <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay_star'>
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <p>(122)</p>
            </div>
            <div className='productdisplay-price'>
                <div className='productdisplay-price-old'>₦{product.old_price}</div>
                <div className='productdisplay-price-new'>₦{product.new_price}</div>
            </div>
            <div className='productdisplay_description'>
            Customized dual 50mm full-range drivers and dual 66mm bass radiators deliver superior stereo sound.
            oraimo HavyBass™ DSP enhances deeper bass, richer instrument details, crisper voice with dual
            digital processing chip by acoustics experts. Experience powerful sound with oraimo Rover.
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay