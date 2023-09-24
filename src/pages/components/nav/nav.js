import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi'; // You may need to install the react-icons library

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Function to check if the screen is mobile-sized
    const checkIsMobileScreen = () => {
      setIsMobileScreen(window.innerWidth <= 640);
    };

    // Initial check
    checkIsMobileScreen();

    // Add an event listener for window resize
    window.addEventListener('resize', checkIsMobileScreen);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkIsMobileScreen);
    };
  }, []);

  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
  <Link href="/">
    <span className="text-lg font-bold cursor-pointer">Home</span>
  </Link>
  {isMobileScreen ? (
    // Render the mobile menu for small screens
    <div className="flex items-center space-x-4">
      <button
        className="text-white cursor-pointer"
        onClick={toggleMobileMenu}
      >
        <FiMenu className="text-xl" />
      </button>
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 bg-gray-800 p-4">
          <ul className="space-y-2">
            {/* Add your navigation links here */}
            <li>
              <Link href="/men">
                <span className="text-white cursor-pointer">Men</span>
              </Link>
            </li>
            <li>
              <Link href="/women">
                <span className="text-white cursor-pointer">Women</span>
              </Link>
            </li>
            <li>
              <Link href="/kids">
                <span className="text-white cursor-pointer">Baby Collection</span>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <span className="text-white cursor-pointer">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/contactus">
                <span className="text-white cursor-pointer">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link href="/cartItem">
                <span className="text-white cursor-pointer">Cart</span>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <span className="text-white cursor-pointer">Sign Up</span>
              </Link>
            </li>
            <li>
              <Link href="/signin">
                <span className="text-white cursor-pointer">Sign In</span>
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      )}
    </div>
  ) : (
    // Render the regular navigation links for larger screens
    <div className="flex items-center space-x-4">
      <Link href="/men">
        <span className="cursor-pointer">Men</span>
      </Link>
      <Link href="/women">
        <span className="cursor-pointer">Women</span>
      </Link>
      <Link href="/kids">
        <span className="cursor-pointer">Baby Collection</span>
      </Link>
      <Link href="/aboutus">
        <span className="cursor-pointer">About Us</span>
      </Link>
      <Link href="/contactus">
        <span className="cursor-pointer">Contact Us</span>
      </Link>
      <Link href="/cartItem">
        <span className="cursor-pointer">Cart</span>
      </Link>
      <Link href="/signup">
        <span className="cursor-pointer">Sign Up</span>
      </Link>
      <Link href="/signin">
        <span className="cursor-pointer">Sign In</span>
      </Link>
      {/* Add more links as needed */}
    </div>
  )}
</div>

    </nav>
  );
};

export default NavBar;
