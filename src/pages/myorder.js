// components/Order.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get('/api/order/getOrder');
        console.log(response.data);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.orderId}>
              <p>Order ID: {order.order}</p>
              <p>Amount: {order.totalPrice}</p>
              <ul>
                {order.products.map((product) => (
                  <li key={product._id}>
                    <p>{product.name}</p>
                    <Image width={400}
                      height={300} alt='img' src={product.imageUrl}></Image>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Order;
