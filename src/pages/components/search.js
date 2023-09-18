import Link from 'next/link';
import { handleSearch,setsearch } from '@/Redux/search/searchSlice';
import React, { useState } from 'react'
import ProductCard from './productCard';
import { useRouter } from 'next/router';
import { useDispatch,useSelector } from 'react-redux';

const Search = () => {

    const search = useSelector((state) => state.search.search);
    const FilteredProducts = useSelector((state) => state.search.FilteredProducts);

    const dispatch = useDispatch();

    const router = useRouter();

    function handelSearchchange(e) {
        const query = e.target.value;
        dispatch(setsearch(query))
        dispatch(handleSearch(query))
    }

    return (
        <div>
            <input type='text' value={search} onChange={handelSearchchange} />
            <div className=' flex'>
                <div className="flex justify-evenly my-10 gap-4 ">
                    {
                        FilteredProducts && FilteredProducts.map((product) => (
                            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                                <Link href={`/product/${product.id}`}>
                                    <ProductCard product={product} />
                                </Link>
                                <Link href={`/product/${product.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded">
                                        View Product
                                    </button>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Search
