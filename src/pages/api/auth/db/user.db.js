import mongoose from 'mongoose'


const mongoURI = 'mongodb+srv://vinay:22112002@cluster0.qyxgam9.mongodb.net/';


// Create a MongoDB connection
const connectToDatabase = async () => {

  console.log('Attempting to connect to MongoDB...');
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
    return mongoose;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error; 
  }
};

export default connectToDatabase;
