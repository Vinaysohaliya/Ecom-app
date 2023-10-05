import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signup', formData);

      if (response.status === 201) {
        window.location.href = '/'; // Redirect to the login page
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-semibold mb-4">Signup</h1>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Signup
          </button>
        </div>
        <div className="text-center">
          <div>Not have an account?{' '}
            <Link href="/signin">
              <p className="text-blue-500 hover:underline">login</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}
