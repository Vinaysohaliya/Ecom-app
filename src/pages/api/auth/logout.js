import { destroyCookie } from 'nookies';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    
    const qq=destroyCookie({ res }, 'token'); 
    console.log(qq);
    return res.status(200).json({ message: 'Logout successful' });
  } else {
    res.status(405).end(); // Method not allowed
  }
}
