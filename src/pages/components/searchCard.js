import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SearchCard = ({ product }) => {
  return (
    <div className="p-2 border-black border w-30 h-30 hover:shadow-md hover:translate-x-2 transition-transform duration-300">
      <Link href={`/product/${product._id}`}>
        <div className="cursor-pointer flex">
          <Image
            src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg"
            alt={product.name}
            className="w-10 h-fit object-cover  rounded"
          />
          <div>
            <h2 className="m-3 font-semibold text-gray-800 mb-2">
              {product.name}
            </h2>
           
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchCard;
