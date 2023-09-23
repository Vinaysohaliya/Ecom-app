import dbConnect from './auth/db/user.db'; 
import User from './model/user';
import jwt  from 'jsonwebtoken';
export default async function handler(req, res) {
  await dbConnect(); // Connect to your MongoDB database (adjust this as needed)

  if (req.method === 'DELETE') {
    try {
        const token = req.cookies.token;
        if (!token) {
          return res.status(401).json({ error: "Unauthorized" });
        }
  
        const decoded = jwt.verify(token, "your-secret-key");
        const userId = decoded.id;
        const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Clear the user's cart
      user.cart = [];

      // Save the updated user
      await user.save();

      return res.status(200).json({ message: 'Cart cleared successfully' });
    } catch (error) {
      console.error('Error clearing cart:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
