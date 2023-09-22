import React from 'react';

const ProductCard = ({ product }) => {

  return (
    <div className="product-card w-56 mx-2">
      <img src={product.imageUrl} alt={product.name} className=' ' />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </div>
  );
};

export default ProductCard;
