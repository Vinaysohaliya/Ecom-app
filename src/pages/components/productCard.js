import Link from 'next/link';
import React from 'react';


const ProductCard = ({ product }) => {
  
  return (
    <div className="product-card w-56 mx-2">
      <img src={product.imageUrl} alt={product.name} className='h-72' />
      <h2 style={{ textAlign: 'center', fontSize: '1rem', marginTop: '10px' }} className='font-semibold'>{product.name}</h2>
      <div className='flex items-center justify-evenly mt-2'>
        <h2 className='text-center text-slate-500 text-xl border-solid border-2 border-black px-4 py-2 mt-2 hover:bg-black hover:text-white'>{`₹${product.price}`}</h2>
        <Link href={`/product/${product._id}`}>
        <button className="bg-black hover:bg-red-700 text-white px-4 py-3 mt-2 ">
          {/* <AiOutlineShoppingCart className="ml-2 text-2xl" /> */}
          View
        </button>
      </Link>
      </div>
     
    </div>
  );
};

export default ProductCard;
