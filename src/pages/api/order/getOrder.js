import dbConnect from '../backend/db';
import jwt  from 'jsonwebtoken';
import Order from '../model/order.model';

export default async function handler(req, res) {
  await dbConnect();

  try {

    const token = req.cookies.token; 
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    const decoded = jwt.verify(token, 'your-secret-key');
    const userId = decoded.id;

    const orders = await Order.find({ user: userId });
    console.log(orders);

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
