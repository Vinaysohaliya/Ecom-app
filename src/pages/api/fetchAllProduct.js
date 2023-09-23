import connectToDatabase from './auth/db/user.db';
import Product from './backend/product.model';

export default async function handler(req, res) {


  if (req.method === 'GET') {
      try {
        // Connect to MongoDB
  
        await connectToDatabase();
  
        // Fetch the product by ID
        const product = await Product.find({});
  
  
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
