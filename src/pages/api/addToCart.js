import connectToDatabase from './auth/db/user.db';
import User from './model/user';
import Product from './backend/product.model';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const { userId, productId } = req.body;

      // Validate user and product IDs
      if (!mongoose.isValidObjectId(userId) || !mongoose.isValidObjectId(productId)) {
        return res.status(400).json({ error: 'Invalid user or product ID' });
      }

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      // Check if the product is already in the user's cart
      console.log(user.cart);
      const existingCartItem = user.cart.find(
        (item) => item.productId.equals(productId)
      );
      if (existingCartItem) {
        // If the product is already in the cart, increment the quantity
        existingCartItem.quantity += 1;
      } else {
        // If the product is not in the cart, add it as a new item with a quantity of 1
        user.cart.push({ 
          productId,
          name: product.name, 
          description: product.description, 
          price: product.price, 
          category: product.category, 
          subcategory: product.subcategory, 
          quantity: 1,
        });
      }

      // Save the updated user document
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
