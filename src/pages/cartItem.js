import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/cart/cartSlice';
import Link from 'next/link';
import { useEffect } from 'react';
import { fetchCartData } from '../Redux/cart/cartSlice';


function Cart() {
  const cart = useSelector((state) => state.cart.item);
  console.log(cart);
  const carttotal = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">Your Shopping Cart</h2>
      {cart&&cart.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md w-1/4">
          <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
          <button
            onClick={() => handleRemoveFromCart(product)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2 rounded"
          >
            Remove
          </button>
          <div>{product.quantity}</div>
        </div>
      ))}
      <Link href='/checkout'>Checkout</Link>
      <div>

        Subtotal
        {carttotal}
      </div>
    </div>
  );
}

export default Cart;
