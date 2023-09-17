import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
   
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/products/add', productData);
      if (response.status === 201) {
        console.log('Product added successfully:', response.data);
        
      }
    } catch (error) {
      console.error('Error adding a new product:', error);
      
    }
  };

  return (
    <div>
      <h1>Add a New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
