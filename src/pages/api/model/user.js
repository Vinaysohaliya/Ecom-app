import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
      },
      name: {
        type: String,
        required: true,

      },
      description: {
        type: String,
        required: true,

      },
      price: {
        type: Number,
        required: true,

      },
      category: {
        type: String,
        required: true,

      },
      subcategory: {
        type: String,
        required: true,

      },
      quantity:{
        type:Number,
        default:0,
        required:true,
      },
    }],
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
