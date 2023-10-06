import connectToDatabase from '../auth/db//user.db'; 
import Product from './product.model'; 

// Connect to MongoDB
connectToDatabase();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, description, price, category,subcategory,imageUrl} = req.body;

    try {
      // Validate the product data
      if (!name || !description || !price || !category||!subcategory||!imageUrl ) {
        return res.status(400).json({ error: 'Invalid product data' });
      }

     
      const newProduct = new Product({
        name,
        description,
        price,
        category,
        subcategory,
        imageUrl,
      });

      await newProduct.save();

      return res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
      console.error('Error adding a new product:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
