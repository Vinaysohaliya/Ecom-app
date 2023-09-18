
import connectDB from '../api/backend/db'; 
import Product from '../api/backend/product.model'; 

connectDB(); // Connect to the MongoDB database

export default async (req, res) => {
  const { category } = req.query;
  console.log(category);

  try {
    const categoryProducts = await Product.find({ category });

    res.status(200).json(categoryProducts);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
