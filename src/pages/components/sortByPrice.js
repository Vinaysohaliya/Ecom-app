import { useState } from 'react';
import ProductCard from './productCard';
import Link from 'next/link';

function ProductList({ products }) {
    const [sortedProducts, setSortedProducts] = useState(products);

    

    const handleSortChange = (e) => {
        const sortType = e.target.value;
        let newSortedProducts = [...sortedProducts];

        if (sortType === 'asc') {
            newSortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortType === 'desc') {
            newSortedProducts.sort((a, b) => b.price - a.price);
        }

        setSortedProducts(newSortedProducts);
    };
     
    function handleCategoty(e) {
        const categery=e.target.value;

        if (categery=='All') {
            setSortedProducts(products)
        }else{
            const categeryProducts=products.filter((p)=>p.category==categery)
            setSortedProducts(categeryProducts)
        }
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
            <select id="sort" onChange={handleCategoty}>
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
