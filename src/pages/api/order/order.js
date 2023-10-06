import Order from '../model/order.model';
import { v4 as uuidv4 } from 'uuid';


const handler= async (req, res) => {
  try {
    const { amount, cart,userId } = req.body;
  
  const orderId = uuidv4(); 

    const orderProducts = cart.map((product) => ({
      productId: product.productId,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      subcategory: product.subcategory,
      quantity: product.quantity,
      imageUrl:product.imageUrl, 
    }));

   
    const newOrder = new Order({
      user: userId,
      products: orderProducts, 
      totalPrice: amount, 
      order:orderId,

    });

    await newOrder.save();

    res.status(200).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the order.' });
  }
};

export default handler;