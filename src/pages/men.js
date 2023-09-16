import React, { useState } from 'react';
import products from './product.json';
// import ProductCard from './components/productCard';
// import Link from 'next/link';
import ProductList from './components/sortByPrice';

const MenPage = () => {



  return (
    <div className=' flex'>
      <ProductList/>
    </div>
  );
};



export default MenPage;
