import React, { useState } from 'react';
import './AddProduct.css';
import upload from '../../assets/upload.svg';
import { addProduct } from '../../api/productAPI';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    old_price: '',
    new_price: '',
    category: 'gadget',
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const imageHandler = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async () => {
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await addProduct(data);
      if (response.success) {
        alert('Product added successfully!');
        setFormData({
          name: '',
          old_price: '',
          new_price: '',
          category: 'gadget',
          image: null,
        });
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred while adding the product.');
    }
  };

  return (
    <div className='add-product'>
      <div className='addproduct-itemfield'>
        <p>Product Title</p>
        <input type='text' name='name' placeholder='Type here' onChange={handleChange} />
      </div>
      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
          <p>Price</p>
          <input type='number' name='old_price' placeholder='Type here' onChange={handleChange} />
        </div>
        <div className='addproduct-itemfield'>
          <p>Offer Price</p>
          <input type='number' name='new_price' placeholder='Type here' onChange={handleChange} />
        </div>
      </div>
      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select name='category' className='add-product-selector' onChange={handleChange}>
          <option value='gadget'>Gadget</option>
          <option value='phones'>Phone</option>
          <option value='laptop'>Laptop</option>
        </select>
      </div>
      <div className='addproduct-itemfield'>
        <label htmlFor='file-input'>
          <img src={formData.image ? URL.createObjectURL(formData.image) : upload} className='addproduct-thumnail-img' alt='' />
        </label>
        <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
      </div>
      <button className='addproduct-btn' onClick={handleSubmit}>ADD</button>
    </div>
  );
};

export default AddProduct;
