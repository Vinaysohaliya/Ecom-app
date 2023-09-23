import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useEffect } from 'react';
import ProductCard from './components/productCard';
import axios from 'axios';
import { fetchCartData,removeFromCart } from '@/Redux/cart/cartSlice';


function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const carttotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
console.log("cart");
console.log(cart);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  const handleRemove = async (productId) => {
    try {
      // Make an API request to remove the product from the cart
      await axios.delete(`/api/removecartData/${productId}`);

      // After successful removal, you can update your Redux state if needed
      dispatch(removeFromCart(productId));
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">Your Shopping Cart</h2>
      {cart &&
        cart.map((product) => (
          <div key={product.productId} className="bg-white p-4 rounded-lg shadow-md w-1/4">
            <ProductCard product={product} />
            <button onClick={() => handleRemove(product.productId)}>Remove</button>
            <div>{product.quantity}</div>
          </div>
        ))}
      <Link href="/checkout">Checkout</Link>
      <div>
        Subtotal: {carttotal}
      </div>
    </div>
  );
}

export default Cart;
