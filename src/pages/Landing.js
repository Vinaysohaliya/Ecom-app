import React from 'react';
import Link from 'next/link';

import products from './product.json'
import NavBar from './components/nav/nav';
import MyCarousel from './components/nav/Carousel';


function ProductsPage() {
  return (
    <div>
    <NavBar/>
    <MyCarousel/>
      <h1 className="text-3xl font-bold mb-4">Welcome to our E-commerce Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link href={`/product/${product.id}`}>
              
                <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded" />
                <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
            </Link>
            <Link href={`/product/${product.id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded">
                  View Product
                </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
