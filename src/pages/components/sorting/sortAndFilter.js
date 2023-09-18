import React from 'react';
import { useDispatch } from 'react-redux';
import { handleSort, handlesubCategory } from '..//../../Redux/sorting/sort';

function SortingOptions() {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    const sortType = e.target.value;
    dispatch(handleSort(sortType)); // Dispatch with the desired sort type ('asc' or 'desc')
  };

  function handleCategoryChange(e) {
    const subcategory = e.target.value;
    dispatch(handlesubCategory(subcategory));
  }

  return (
    <div>
      <label htmlFor="sort">Sort by Price:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="none">By Default</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      <label htmlFor="category">Select Category</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
      </select>
    </div>
  );
}

export default SortingOptions;
