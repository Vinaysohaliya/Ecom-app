import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';


import CategoryData from './category.json';
import ProductCard from './components/productCard';
import CategoryCard from './components/category/categoryCard';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/backend/products/')
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
      <div className="flex justify-evenly my-10 flex-wrap">
        {/* Categories */}
        {CategoryData.map((category) => (
          <div key={category.id} className="p-4 ">
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
        <div className="flex flex-wrap justify-center my-10 gap-4 ">
          {/* Product Cards */}
          {products.map((product) => (
            <div key={product._id} className="mb-4 bg-white p-4 rounded-lg shadow-md">
              <ProductCard product={product} />
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
