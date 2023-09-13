import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cart/cartSlice';
import products from '../product.json';
import { useRouter } from 'next/router';

function ProductDetailPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const { productId } = router.query;

  const selectedProduct = products.find((product) => product.id === parseInt(productId));

  if (selectedProduct) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Product Details</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-40 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">{selectedProduct.name}</h2>
          <p className="text-gray-600">{selectedProduct.description}</p>
          <p className="text-lg font-semibold mt-2">Price: ${selectedProduct.price}</p>
          <button
            onClick={() => handleAddToCart(selectedProduct)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  // If the product doesn't exist (invalid ID), display a message or redirect to an error page
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Product not found</h1>
      <p>This product does not exist or has been removed.</p>
    </div>
  );
}

export default ProductDetailPage;
