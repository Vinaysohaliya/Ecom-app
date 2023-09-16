import Link from 'next/link';
import products from '../product.json'
import React, { useState } from 'react'
import ProductCard from './productCard';
import { useRouter } from 'next/router';

const Search = () => {

    const [search, setsearch] = useState('');
    const [FilteredProducts, setFilteredProducts] = useState(null);
    console.log(FilteredProducts);
    const router=useRouter();


    function handelSearchchange(e) {
        const query = e.target.value;
        setsearch(query);
        handleSearch(query);
    }
    


    const handleSearch = (query) => {
        const trimmedQuery = query.trim().toLowerCase();
        if (trimmedQuery === '') {
            setFilteredProducts(products); // Reset to all products if the query is empty
        } else {
            const matchingProducts = products.filter((product) =>
                product.name.toLowerCase().includes(trimmedQuery)
            );
            setFilteredProducts(matchingProducts);
        }
    };

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
