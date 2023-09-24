import Link from 'next/link';
import { fetchProducts, handleSearch,setSearch } from '@/Redux/search/searchSlice';
import React, { useEffect } from 'react'
import ProductCard from './productCard';
import { useDispatch,useSelector } from 'react-redux';


const Search = () => {

    const search = useSelector((state) => state.search.search);
    const FilteredProducts = useSelector((state) => state.search.filteredProducts);

    const dispatch = useDispatch();


    function handelSearchchange(e) {
        const query = e.target.value;
        dispatch(setSearch(query))
        dispatch(handleSearch(query))
    }

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

    return (
        <div>
            <input type='text' value={search} onChange={handelSearchchange} />
            <div className=' flex'>
                <div className="flex justify-evenly my-10 gap-4 ">
                    {
                        FilteredProducts && FilteredProducts.map((product) => (
                            <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
                                <Link href={`/product/${product._id}`}>
                                    <ProductCard product={product} />
                                </Link>
                                <Link href={`/product/${product._id}`}>
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
