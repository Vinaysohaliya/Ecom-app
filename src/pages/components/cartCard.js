import { removeFromCart } from '@/Redux/cart/cartSlice';
import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';




const CartCard = ({ product }) => {
    const dispatch = useDispatch();
    const handleRemove = async (productId) => {
        try {
            await axios.delete(`/api/removecartData/${productId}`);


            dispatch(removeFromCart(productId));
        } catch (error) {
            console.error('Error removing product from cart:', error);
        }
    };
    return (
        <div className='flex items-center justify-evenly w-full '>
            <div>
                <div className='py-10'>
                    <div>{product.imageUrl}</div>
                    <div>{product.name}</div>
                </div>
            </div>
            <div>
                <div className=' py-10'>{product.quantity}</div>

            </div>
            <div>
                <div className='py-10' >{product.price}</div>

            </div>
            <div>
                <button
                    onClick={() => handleRemove(product.productId)}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300"
                >
                    Remove
                </button>
            </div>

        </div>
    )
}

export default CartCard
