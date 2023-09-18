import React, { useEffect } from 'react';
import ProductCard from './components/productCard';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoryProducts } from '../Redux/category/category';
import { useRouter } from 'next/router'
function ProductList() {
  const categoryProducts = useSelector((state) => state.category.categoryProducts);
  const dispatch = useDispatch();
  const router = useRouter()
  console.log();

  useEffect(() => {
   
    dispatch(fetchCategoryProducts('men')); 
  }, [dispatch]);

  return (
    <div>
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
