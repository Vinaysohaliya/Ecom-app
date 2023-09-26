import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '..//../../Redux/sorting/sort';

function SortingOptions({ category }) {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState('none');
  const [subcategory, setSubcategory] = useState('All');

  const handleSortChange = (e) => {
    const selectedSortType = e.target.value;
    setSortType(selectedSortType);
    dispatch(fetchProducts({ category, sortType: selectedSortType, subcategory }));
  };

  function handleCategoryChange(e) {
    const selectedSubcategory = e.target.value;
    setSubcategory(selectedSubcategory);
    dispatch(fetchProducts({ category, sortType, subcategory: selectedSubcategory }));
  }

  useEffect(() => {
    dispatch(fetchProducts({ category, sortType, subcategory }));
  }, [dispatch, category, sortType, subcategory]);

  return (
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-1/3">
      <div className="md:w-1/2">
        <label className="block text-gray-600" htmlFor="sort">
          Sort by Price:
        </label>
        <select
          id="sort"
          className="block w-full py-2 px-3 border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          onChange={handleSortChange}
          value={sortType}
        >
          <option value="none" className="bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-500  ">
            By Default
          </option>
          <option value="asc" className="bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-500">
            Low to High
          </option>
          <option value="desc" className="bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-500">
            High to Low
          </option>
        </select>


      </div>

      <div className="md:w-1/2">
        <label className="block text-gray-600" htmlFor="category">
          Select Category
        </label>
        <select
          id="category"
          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          onChange={handleCategoryChange}
          value={subcategory}
        >
          <option value="All">All</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
    </div>
  );
}

export default SortingOptions;
