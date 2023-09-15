import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/cart/cartSlice';
import Head from 'next/head';
import Script from 'next/script';


function Checkout() {
  const cart = useSelector((state) => state.cart.item);
  const carttotal = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };


  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">Your Shopping Cart</h2>
      <Head>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
      </Head>
      <Script type="application/javascript" src={`{HOST}/merchantpgpui/checkoutjs/merchants/${}.js`} onload="onScriptLoad();" crossorigin="anonymous"/>
      {cart.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md w-1/4">
          <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
          <button
            onClick={() => handleRemoveFromCart(product)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2 rounded"
          >
            place order
          </button>
          <div>{product.quantity}</div>
        </div>
      ))}
      <div>
        		
Subtotal
{carttotal}
      </div>
    </div>
  );
}

export default Checkout;
