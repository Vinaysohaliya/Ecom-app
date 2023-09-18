import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/cart/cartSlice';
import Script from 'next/script';
import razorpay from 'razorpay';
// ...

function Checkout() {
  const cart = useSelector((state) => state.cart.item);
  const carttotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

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
        // Handle the payment success event
        console.log(response);
        // You can update your UI or navigate to a success page here
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">Your Shopping Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md w-1/4">
          {/* ... Product details */}
          <button
            onClick={() => handleRemoveFromCart(product)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2 rounded"
          >
            Remove from Cart
          </button>
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
      </div>
    </div>
  );
}

export default Checkout;
