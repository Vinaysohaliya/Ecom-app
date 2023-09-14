import React from 'react';
import products from './product.json';
import ProductCard from './components/productCard';
import Link from 'next/link';

const MenPage = () => {
  return (
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
  );
};

export default MenPage;
