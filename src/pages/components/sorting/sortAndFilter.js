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
    <div>
      <label htmlFor="sort">Sort by Price:</label>
      <select id="sort" onChange={handleSortChange} value={sortType}>
        <option value="none">By Default</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      <label htmlFor="category">Select Category</label>
      <select id="category" onChange={handleCategoryChange} value={subcategory}>
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
      </select>
    </div>
  );
}

export default SortingOptions;
