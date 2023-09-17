import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import CategoryData from './category.json';
import ProductCard from './components/productCard';
import CategoryCard from './components/category/categoryCard';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
 
    axios.get('/api/backend/products/')
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div>
      <div className='flex justify-evenly my-10'>
        {/* Categories */}
        {CategoryData.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded-lg shadow-md ">
            <Link href={`/${category.cat}`}>
              <CategoryCard category={category} />
            </Link>
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-3xl font-bold m-7 text-center">
          Welcome to our E-commerce Store
        </h1>
        <div className="flex items-center justify-evenly my-10 gap-4 box-border flex-wrap">
          {/* Product Cards */}
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow-md  "
            >
                <ProductCard product={product} />
              <Link href={`/product/${product._id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded">
                  View Product
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
