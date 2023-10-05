import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import axios from 'axios';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();


  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/auth/logout')

      if (response.status==200) {
        console.log('Logout successful');
         router.push('/'); 

      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };


  useEffect(() => {
    // Fetch user data and set the isLoggedIn state
    async function fetchUserData() {
      try {
        const res = await axios.get('/api/getUserId');
        if (res.status === 200) {
          // User is logged in
          setIsLoggedIn(true);
        } else {
          // User is not logged in
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle the error here, e.g., set isLoggedIn to false
        setIsLoggedIn(false);
      }
    }

    fetchUserData();
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const checkIsMobileScreen = () => {
      setIsMobileScreen(window.innerWidth <= 640);
    };

    checkIsMobileScreen();

    window.addEventListener('resize', checkIsMobileScreen);

    return () => {
      window.removeEventListener('resize', checkIsMobileScreen);
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="flex justify-between items-center">
        <Link href="/">
          <span className="text-lg font-bold cursor-pointer">Home</span>
        </Link>
        {isMobileScreen ? (
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
                  <li>
                    <Link href="/men">
                      <span className="text-white cursor-pointer ">Men</span>
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
                    <Link href="/cartItem">
                      <span className="text-white cursor-pointer">Cart</span>
                    </Link>
                  </li>
                 
                  {/* Add other navigation links here */}
                  {isLoggedIn ? (
                    <li>
                      <span
                        className="text-white cursor-pointer"
                        onClick={() => {
                          handleLogout();
                          setIsLoggedIn(false);
                        }}
                      >
                        Log Out
                      </span>
                    </li>
                  ) : (
                    <>
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
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        ) : (
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
           
            <Link href="/cartItem">
              <span className="cursor-pointer">Cart</span>
            </Link>
            {/* Add other navigation links here */}
            {isLoggedIn ? (
              <span
                className="cursor-pointer"
                onClick={() => {
                  handleLogout();
                  setIsLoggedIn(false);
                }}
              >
                Log Out
              </span>
            ) : (
              <>
                <Link href="/signup">
                  <span className="cursor-pointer">Sign Up</span>
                </Link>
                <Link href="/signin">
                  <span className="cursor-pointer">Sign In</span>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
