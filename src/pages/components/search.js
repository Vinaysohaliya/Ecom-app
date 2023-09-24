import Link from 'next/link';
import { fetchProducts, handleSearch, setSearch } from '@/Redux/search/searchSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchCard from './searchCard';

const Search = () => {
  const search = useSelector((state) => state.search.search);
  const filteredProducts = useSelector((state) => state.search.filteredProducts);

  const dispatch = useDispatch();

  function handleSearchChange(e) {
    const query = e.target.value;
    dispatch(setSearch(query));
    dispatch(handleSearch(query));
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        className="w-full p-2 border border-gray-300 rounded shadow-sm"
        placeholder="Search for products..."
      />
      <div className="flex justify-evenly my-2  flex-col">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="pt-2 px-2 rounded-lg "
            >
              <Link href={`/product/${product._id}`}>
                <SearchCard product={product} />
              </Link>
             
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
