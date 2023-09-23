import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import Script from 'next/script';
import ProductCard from './components/productCard';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  const carttotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const [isOrderPalced, setisOrderPalced] = useState(false);

  const handlePayment = async () => {
    const orderResponse = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: carttotal * 100, // Razorpay expects amount in paise
        currency: 'INR', // Replace with your desired currency
      }),
    });

    const orderData = await orderResponse.json();

    const options = {
      key: 'rzp_test_BfiKXZtBTUqW1v',
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'Your Company Name',
      description: 'Payment for your order',
      order_id: orderData.id,
      handler: function (response) {

        console.log(response);
        toast('Order placed');
        setisOrderPalced(true);

      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const clearCart = async () => {
    try {
      await axios.delete('/api/clearCart/'); // Use the correct API route here
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  if (isOrderPalced) {
    

      clearCart();

    setTimeout(() => {
      window.location.href = '/'; // Replace with the URL of your home page
    }, 3000); // Redirect after 3 seconds (adjust the delay as needed)
  }

  return (
    <div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">Your Shopping Cart</h2>
      {cart &&
        cart.map((product) => (
          <div key={product.productId} className="bg-white p-4 rounded-lg shadow-md w-1/4">
            <ProductCard product={product} />
            <button onClick={() => handleRemove(product.productId)}>Remove</button>
            <div>{product.quantity}</div>
          </div>
        ))}
      <div>
        Subtotal: {carttotal}
        <button
          onClick={handlePayment}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded"
        >
          Place Order
        </button>
         <ToastContainer />
      </div>
    </div>
  );
}

export default Checkout;
