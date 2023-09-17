import mongoose from 'mongoose';
import connectToDatabase from './db'; 
import Product from './product.model'; 
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Connect to MongoDB
      await connectToDatabase();

      // Fetch all products from the "products" collection
      const products = await Product.find({});
      console.log(products);

      // Close the MongoDB connection
      mongoose.connection.close();

      // Send the products as a JSON response
      res.status(200).json(products);

    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}
