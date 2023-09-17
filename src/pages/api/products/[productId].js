import  connectToDatabase  from '../backend/db'; 
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
      console.log("gigi");
      const product = await Product.findById(productId);
console.log(product);
      // Close the MongoDB connection
      mongoose.connection.close();

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
