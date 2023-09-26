import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const ProductDetailCard = ({ product,productId }) => {
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
        <>
            <div className="bg-gray-100 shadow-lg p-4  px-40 mx-28 my-14">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
                    <div className="md:w-1/3 mx-auto md:mx-0 ">
                        <Carousel showStatus={false} showIndicators={false} infiniteLoop={true}>
                            {products.images.map((image, index) => (
                                <div key={index} className="h-48 w-64 md:w-96">
                                    <img
                                        src={image}
                                        alt={`Product Image ${index}`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="text-center md:text-left md:w-1/2">
                        <h1 className="text-3xl font-semibold">{product.name}</h1>
                        <h2 className="text-lg font-medium text-gray-700">${50.00}</h2>
                        <button onClick={() => handleAddToCart(product)} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 transition-transform transform hover:scale-105 duration-300">
                            Add To Cart
                        </button>
                        <Link
                            href="/cartItem"
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-2 rounded"
                        >
                            Go to Cart
                        </Link>
                    </div>
                </div>

            </div>
            <div className="mt-4 text-gray-800 bg-gray-100 shadow-lg p-4  px-40 mx-28 my-14">
                <div className='  border-black p-2 hover:border-b-2 w-24 pb-2'>Description</div>
                Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and

                It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.
            </div>
        </>
    );
};

export default ProductDetailCard;
