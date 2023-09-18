import connectToDatabase from '../backend/db';
import Product from '../backend/product.model';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  const { productId } = req.query;
  console.log(productId);

  if (req.method === 'GET') {

    try {
      // Connect to MongoDB

      await connectToDatabase();

      // Fetch the product by ID
      const product = await Product.findById(productId);
      console.log(product);


      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      // Send the product data as a JSON response
      res.status(200).json(product);
    } catch (error) {
      console.error('Error fetching product data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
