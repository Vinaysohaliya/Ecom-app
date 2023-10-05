import { setCookie, destroyCookie } from 'nookies';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Set the "token" cookie to null with a specified age (e.g., 0 seconds to expire immediately)
    setCookie({ res }, 'token', null, {
      maxAge: 0, // Age set to 0 to expire immediately
      path: '/', // Set the path as needed
    });

    return res.status(200).json({ message: 'Logout successful' });
  } else {
    res.status(405).end(); // Method not allowed
  }
}
