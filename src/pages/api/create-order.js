import razorpay from 'razorpay';
import { v4 as uuidv4 } from 'uuid';

export default async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const orderId = uuidv4(); 
    const razorpayInstance = new razorpay({
      key_id: 'rzp_test_BfiKXZtBTUqW1v',
      key_secret: 'GHgwXg5u6R0tW6OVSc8JQoGC',
    });

    const order = await razorpayInstance.orders.create({
      amount: amount * 100,
      currency: currency,
      receipt: orderId,
    });

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the order.' });
  }
};
