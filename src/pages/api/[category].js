import connectDB from '../api/backend/db';
import Product from '../api/backend/product.model';
import middleware from './auth/middleware/auth';

connectDB();

export default async (req, res) => {
  if (req.method === 'GET') {
    middleware(req, res, async () => {
      const { category } = req.query;

      try {
        const categoryProducts = await Product.find({ category });
       return res.status(200).json(categoryProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
       return res.status(500).json({ message: 'Internal server error' });
      }
    });
  }
};
