import razorpay from 'razorpay';

const handler= async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const razorpayInstance = new razorpay({
      key_id: 'rzp_test_BfiKXZtBTUqW1v',
      key_secret: '0qptfOHXshMLXdN2pL5tAzSd',
    });

    const order = await razorpayInstance.orders.create({
      amount: amount * 100,
      currency: currency,
    });

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the order.' });
  }
};

export default handler;