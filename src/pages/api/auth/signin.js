import User from '../model/user';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie'; 
import jwt from 'jsonwebtoken';


const handler= async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    // Verify the password

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }


    // Create a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, 'your-secret-key', {
      expiresIn: '1h',
    });

    
    const cookieOptions = {
      httpOnly: true,
      path: '/',
      maxAge: 3600,
    };

    
      const result = res.setHeader('Set-Cookie', serialize('token', token, cookieOptions));
      console.log(result);

  
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


export default handler;