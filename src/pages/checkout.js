import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Checkout() {
  const router = useRouter();

  const cart = useSelector((state) => state.cart.items);
  const carttotal = useSelector((state) => state.cart.total);

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [userId, setUserId] = useState(null);

  async function fetchUserId() {
    const userIdResponse = await axios.get('/api/getUserId');
    setUserId(userIdResponse.data.userId);
  }

  useEffect(() => {
    fetchUserId();
  }, []);

  const handlePayment = async () => {
    try {
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: carttotal * 100, // Razorpay expects amount in paise
          currency: 'INR', // Replace with your desired currency
          userId: userId,
        }),
      });

      if (orderResponse.status === 401) {
        toast.error('Authentication failed. Please log in.');
        return; // Stop further execution
      }

      const orderData = await orderResponse.json(); // Set the orderData state

      const options = {
        key: 'rzp_test_pG99zrZJZvCVV3',
        amount: carttotal * 100, 
        currency: orderData.currency,
        name: 'Your Company Name',
        description: 'Payment for your order',
        order_id: orderData.orderId,
        handler: async function () {
          toast.success('Order placed',{
            position: toast.POSITION.TOP_CENTER
          });
          setIsOrderPlaced(true);
          setOrderData(orderData); 
          await setOrder();  
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete('/api/clearCart/');
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  async function setOrder() {
    try {
      const data = { amount: carttotal, cart, userId };
      const response = await axios.post('/api/order/order', data);
      console.log(response.data);
      clearCart(); // Clear the cart after setting the order
    } catch (error) {
      console.log(error);
    }
  }

  if (isOrderPlaced) {
    setTimeout(() => {
      router.push('/');
    }, 5000);
   
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">Checkout</h2>
      <div className=' h-96 flex items-center justify-center  flex-col'>
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
        {/* {cart &&
        cart.map((product) => (
          <div key={product.productId} className="bg-white p-4 rounded-lg shadow-md w-1/4">
            <ProductCard product={product} />
            <button onClick={() => handleRemove(product.productId)}>Remove</button>
            <div>{product.quantity}</div>
          </div>
        ))} */}
        <div className=' flex items-center justify-center h-1/3 w-1/3 border-2   '>
          <div className='font-semibold m-10 text-3xl'>Subtotal: {carttotal}</div>
          <button
            onClick={handlePayment}
            className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 mt-2 "
          >
            Place Order
          </button>
          <ToastContainer />
        </div>
        <Link href='/contactus' className='mt-10 hover:bg-black hover:text-white p-4 font-semibold'>Don't Worry We are hear to support you</Link>

      </div>
    </>

  );
}

export default Checkout;
