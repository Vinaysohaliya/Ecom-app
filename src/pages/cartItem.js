import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useEffect } from 'react';
import { fetchCartData } from '@/Redux/cart/cartSlice';
import CartCard from './components/cartCard';


function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const carttotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);



  return (
    <div className='h-screen'>
      <h1 className=' bg-amber-100 h-1/4  font-semibold text-3xl flex items-center justify-center'>Your Shopping Cart</h1>



      <div className='flex items-center justify-evenly w-full p-10'>
        <div>
          <h1 className='font-bold hover:text-amber-500  p-2'>Product</h1>
        </div>
        <div>
          <h1 className='text-gray-600  font-bold'>Quantity</h1>
        </div>
        <div>
          <h1 className='text-gray-600  font-bold'>Price</h1>
        </div>
        <div>
          <h1 className='text-red-500 font-bold'>Remove From Cart</h1>
        </div>
      </div>



      {cart &&
        cart.map((product) => (
          <div key={product.productId} className="bg-white p-4  ">
            <CartCard product={product} />

          </div>
        ))}



      <div className='flex items-center justify-end p-4 border-t border-gray-300 '>
        <Link href="/" className='   hover:bg-black hover:text-white p-2 font-semibold transition duration-300 ease-in-out m-5 mr-10 '>
        Continue Shopping
        </Link>
        <Link href="/checkout" className='text-blue-500   hover:bg-blue-600 hover:text-white p-2 font-semibold transition duration-300 ease-in-out m-5 mr-10'>
          Checkout
        </Link>

        <div className='text-gray-600 mr-5'>
          Subtotal: {carttotal}₹
        </div>
      </div>

    </div>
  );
}

export default Cart;
