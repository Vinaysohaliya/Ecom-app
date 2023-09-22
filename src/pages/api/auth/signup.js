import User from '../model/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connectUserDB from './db/user.db';
import { serialize } from 'cookie'; 

connectUserDB(); // Connect to the MongoDB database

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        email,
        password: hashedPassword,
      });

      // Save the user to MongoDB
      await newUser.save();

      // Create a JWT token
      const token = jwt.sign({ id: newUser._id, email: newUser.email }, 'your-secret-key', {
        expiresIn: '1h', // Token expiration time
      });

      // Set the token as an HttpOnly cookie
      const cookieOptions = {
        httpOnly: true,
        path: '/',
        maxAge: 3600, // Max-Age in seconds (1 hour)
      };

      res.setHeader('Set-Cookie', serialize('token', token, cookieOptions));

      // Return a success message
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
