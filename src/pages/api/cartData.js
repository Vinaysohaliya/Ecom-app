import connectToDatabase from './auth/db/user.db';
import jwt from 'jsonwebtoken';
import User from './model/user';
import Product from './backend/product.model';

export default async function handler(req, res) {
  console.log("API route started");

  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const token = req.cookies.token; 
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, 'your-secret-key'); 
    const userId = decoded.id;

    try {
      const mongooseInstance = await connectToDatabase();
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const cartData = user.cart || [];

      // Map cart items to retrieve product details
      const products = await Promise.all(
        cartData.map(async (productId) => {
          const product = await Product.findById(productId);
          return product;
        })
      );

      console.log(products);

      res.status(200).json(products); // Send product details in the response
    } catch (error) {
      console.error('Error fetching cart data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error('Error fetching userId:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
