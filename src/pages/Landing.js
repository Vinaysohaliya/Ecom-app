import React from 'react';
import Link from 'next/link';

import products from './product.json'
import CategoryData from './category.json';

import NavBar from './components/nav/nav';
import ProductCard from './components/productCard'
import CategoryCard from './components/category/categoryCard';


function ProductsPage() {
  return (
    <div>
      <NavBar />


      <Link>
        {CategoryData.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link href={`/${category.cat}`}>
              <CategoryCard category={category} />
            </Link>
          </div>
        ))}
      </Link>


      <h1 className="text-3xl font-bold mb-4">Welcome to our E-commerce Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
}

export default ProductsPage;
