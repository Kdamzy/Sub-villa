import React from 'react';
import './AddProduct.css';
import upload from '../../assets/upload.svg'

const AddProduct = () => {
  return (
    <div className='add-product'>
      <div className='addproduct-itemfield'>
        <p>Product Title</p>
        <input type='text' name='name' placeholder='Type here' />
      </div>
      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
          <p>Price</p>
          <input type='number' name='old_price' placeholder='Type here' />
        </div>
        <div className='addproduct-itemfield'>
          <p>Offer Price</p>
          <input type='number' name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select name='category' className='add-product-selector'>
          <option value='gadget'>Gadget</option>
          <option value='phones'>Phone</option>
          <option value='laptop'>Laptop</option>
        </select>
      </div>
      <div className='addproduct-itemfield'>
        <label htmlFor='file-input'>
          <img src={upload} className='addproduct-thumnail-img'  alt='' />
        </label>
        <input type='file' name='image' id='file-input' hidden/>
      </div>
      <button className='addproduct-btn'>ADD</button>
    </div>
  );
};

export default AddProduct;
