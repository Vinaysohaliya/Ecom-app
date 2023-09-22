import connectToDatabase from './auth/db/user.db';
import jwt from 'jsonwebtoken';
import User from './model/user';

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

      const products = await Promise.all(
        cartData.length && cartData.map(async (p) => {
          const productId = p.productId;
          const quantity = p.quantity;
          const name = p.name;
          const description = p.description;
          const category = p.category;
          const subcategory = p.subcategory;
          const price = p.price;

          return { productId, name, quantity, price, subcategory, category, description }
        })
      );
      const response = res.status(200).json(products); // Send product details in the response
    } catch (error) {
      console.error('Error fetching cart data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error('Error fetching userId:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
