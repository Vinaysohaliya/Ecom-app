import React, { useState } from 'react';
import products from './product.json';
import ProductCard from './components/productCard';
import Link from 'next/link';

const MenPage = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [Pricevalue, setPricevalue] = useState({ min: '', max: '' });

  const handlePriceChange = (e) => {
    setPriceRange({ ...priceRange, [e.target.name]: e.target.value });
  };

  return (
    <div className=' flex'>

      <div>
        <div className="mt-4">
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
            Min Price
          </label>
          <input
            type="range"
            id="minPrice"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p>{priceRange.min}</p>
        </div>
        <div className="mt-4">
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
            Max Price
          </label>
          <input
            type="number"
            id="maxPrice"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>


      </div>

      <div className="flex justify-evenly my-10 gap-4 ">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link href={`/product/${product.id}`}>
              <ProductCard product={product} />
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
};



export default MenPage;
