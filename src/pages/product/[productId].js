import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cart/cartSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

function ProductDetailPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { productId } = router.query;
  console.log(productId);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    if (productId) {
      
      axios
        .get(`/api/products/${productId}`)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching product details:', error);
          setLoading(false); 
        });
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (product) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Product Details</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded"
          >
            Add to Cart
          </button>

          <Link
            href="/cartItem"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-2 rounded"
          >
            Go to Cart
          </Link>
          <div>{}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Product not found</h1>
      <p>This product does not exist or has been removed.</p>
    </div>
  );
}

export default ProductDetailPage;
