
import jwt from 'jsonwebtoken';

export default async function getUserId(req, res) {
  try {
    console.log("///////////////////");
    
    const token = req.cookies.token; 
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, 'your-secret-key');
    const userId = decoded.id;

    res.json({ userId }); 
  } catch (error) {
    console.error('Error fetching user ID:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
}
