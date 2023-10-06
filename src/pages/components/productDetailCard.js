import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const ProductDetailCard = ({ product, productId }) => {
    const products = {
        name: 'Product Name',
        category: 'Electronics',
        images: [
            'https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg',
            'https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg',
            'https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg',
            'https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg',
        ]
    };

    let userid = null;

    axios.get('/api/getUserId')
        .then((response) => {
            const { userId } = response.data;
            userid = userId;
            console.log('User ID:', userId);

        })
        .catch((error) => {
            console.error('Error fetching user ID:', error);
        });

    const handleAddToCart = async () => {
        try {
            const response = await axios.post('/api/addToCart', { userId: userid, productId });

            console.log('Product added to cart:', response.data);

        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };


    return (

        <div className="bg-gray-100 shadow-lg p-4  px-40 mx-28 my-14">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
                <div className="md:w-1/3 mx-auto md:mx-0 ">
                    <Carousel showStatus={false} showIndicators={false} infiniteLoop={true}>
                        {products.images.map((image, index) => (
                            <div key={index} className="h-48 w-64 md:w-96">
                                <Image
                                    src={product.imageUrl}
                                    alt={`Product Image ${index}`}
                                    className="h-full w-full object-cover"
                                    width={400}
                                    height={300}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-3xl font-semibold">{product.name}</h1>
                    <h2 className="text-lg font-medium text-gray-700">${50.00}</h2>
                    <button onClick={() => handleAddToCart(product)} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-4  mt-4 transition-transform transform hover:scale-105 duration-300">
                        Add To Cart
                    </button>
                    <Link
                        href="/cartItem"
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-2 mx-8"
                    >
                        Go to Cart
                    </Link>
                </div>
            </div>

        </div>


    );
};

export default ProductDetailCard;
