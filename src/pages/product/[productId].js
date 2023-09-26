import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import ProductDetailCard from '../components/productDetailCard';

function ProductDetailPage() {

 

  const router = useRouter();

  const { productId } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  
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
      <div className=' h-screen'>
        <h1 className=' bg-amber-100 h-1/4  font-semibold text-3xl flex items-center justify-center'>Product Details</h1>
        <ProductDetailCard product={product} productId={productId} />
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
