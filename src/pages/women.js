import React from 'react';
import ProductCard from './components/productCard';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import SortingOptions from './components/sorting/sortAndFilter';

function ProductList() {
  const categoryProducts = useSelector((state) => state.sort.products);



  return (
    <div>
    <SortingOptions category={"women"}/>
      <div className="flex">
       
      </div>
      <div className="flex justify-evenly my-10 gap-4 flex-wrap">
        {categoryProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
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
  );
}

export default ProductList;
