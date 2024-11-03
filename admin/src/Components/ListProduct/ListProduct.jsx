import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import { getAllProducts, deleteProduct } from '../../api/productAPI';
import removeIcon from '../../assets/remove.svg';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const products = await getAllProducts();
      setAllProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setAllProducts(allProducts.filter(product => product.id !== productId));
      alert('Product deleted successfully!');
    } catch (error) {
      console.error("Error deleting product:", error);
      alert('Failed to delete product');
    }
  };

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((product) => (
        <div key={product.id} className='listproduct-format-main listproduct-format-item'>
          <img src={product.image} alt='' className='product-image' />
          <p>{product.name}</p>
          <p>₦{product.old_price}</p>
          <p>₦{product.new_price}</p>
          <p>{product.category}</p>
          <img
            className='listproduct-remove-icon'
            src={removeIcon}
            alt='remove'
            onClick={() => handleDelete(product.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
