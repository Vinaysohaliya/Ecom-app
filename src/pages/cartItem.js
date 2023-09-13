import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/cart/cartSlice';


function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
