import connectToDatabase from './db'; 
import Product from './product.model'; 

// Connect to MongoDB
connectToDatabase();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, description, price, category,subcategory} = req.body;

    try {
      // Validate the product data
      if (!name || !description || !price || !category||!subcategory ) {
        return res.status(400).json({ error: 'Invalid product data' });
      }

      // Create a new product document and save it to the database
      const newProduct = new Product({
        name,
        description,
        price,
        category,
        subcategory
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
