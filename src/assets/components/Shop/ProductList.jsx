import React from 'react';
import '../../css/shop/productlist.css';
import ProductCard from './ProductCard';

const ProductList = ({products}) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList