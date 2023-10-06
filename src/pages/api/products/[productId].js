import middleware from '../auth/middleware/auth';
import connectToDatabase from '../auth/db/user.db';
import Product from '../backend/product.model';

export default async function handler(req, res) {
  const { productId } = req.query;
  console.log(productId);

  if (req.method === 'GET') {
    middleware(req,res,async ()=>{
      try {
        // Connect to MongoDB
  
        await connectToDatabase();
  
        // Fetch the product by ID
        const product = await Product.findById(productId);
  
  
        if (!product) {
          return res.status(404).json({ error: 'Product not found' });
        }
  
        // Send the product data as a JSON response
        res.status(200).json(product);
      } catch (error) {
        console.error('Error fetching product data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    })
    
  }
}
