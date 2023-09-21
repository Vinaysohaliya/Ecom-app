import connectToDatabase from './auth/db/user.db';
import User from './model/user';
import Product from './backend/product.model';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, productId } = req.body;

    try {
      // Connect to MongoDB
      await connectToDatabase();

      // Fetch the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Fetch the product by ID
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      // Add the product's ObjectId to the user's cart
      user.cart.push(productId);
      await user.save();

      // Send a success response
      res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
      console.error('Error adding product to cart:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
