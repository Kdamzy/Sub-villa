import React from 'react';
import './RelatedProduct.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProduct = ({ category }) => {
  const filteredProducts = data_product.filter(item => item.category === category);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-item'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
}

export default RelatedProduct;
