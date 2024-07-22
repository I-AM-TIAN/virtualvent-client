import React from 'react';
import '../../css/shop/productcard.css';

const ProductCard = ({product}) => {
  return (
    <div className="product-card">
      <img src={`http://127.0.0.1:8000/storage/${product.imagen}`} alt={product.nombre} className="product-image" />
      <h2 className="product-name">{product.nombre}</h2>
      <p className="product-price">${product.precio}</p>
      <button className="add-to-cart-button">Agregar al carrito</button>
    </div>
  )
}

export default ProductCard