import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true,
      },
      name: String,
      description: String,
      price: Number,
      category: String,
      subcategory: String,
      quantity: Number,
      imageUrl:String,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  order: {
    type:String ,
    required:true,
  },
});

const Order =mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
