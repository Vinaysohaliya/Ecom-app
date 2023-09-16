import { useState } from 'react';
import ProductCard from './productCard';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import { handleSort,handleCategory } from '../../Redux/sorting/sort';



function ProductList() {
   const dispatch=useDispatch()

   const sortedProducts=useSelector((state)=>state.sort.sortedProducts)


    

    const handleSortChange = (e) => {
        const sortType = e.target.value;
        dispatch(handleSort(sortType)); // Dispatch with the desired sort type ('asc' or 'desc')
    };
     
    function handleCategotychange(e) {
        const categery=e.target.value;
        dispatch(handleCategory(categery))
    }

    return (
        <div>
            <label htmlFor="sort">Sort by Price:</label>
            <select id="sort" onChange={handleSortChange}>
                <option value='none'>By Default</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>

            <label htmlFor="sort">Select Cetegory</label>
            <select id="sort" onChange={handleCategotychange}>
                <option value='All'>All</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
            </select>



            <div className=' flex '>
                <div className="flex justify-evenly my-10 gap-4 flex-wrap">
                    {sortedProducts.map((product) => (
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
    );
}

export default ProductList;
