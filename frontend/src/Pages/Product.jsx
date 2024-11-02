import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/BreadCrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/Description Box/DescriptionBox';
import Relatedproduct from '../Components/RelatedProduct/Relatedproduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <Relatedproduct category={product.category}/>

    </div>
  )
}

export default Product