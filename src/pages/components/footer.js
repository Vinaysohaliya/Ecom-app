import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 flex items-center">
          <div className='mr-4 text-2xl'>
            <AiFillInstagram />
          </div>
          <div className='mr-4 text-2xl'>
            <AiFillTwitterCircle />
          </div>
          <div className='text-2xl'>
            <AiFillYoutube />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href='/aboutus' className='text-xl mx-2 mb-2 md:mb-0'>About</Link>
          <Link href='/contactus' className='text-xl mx-2 mb-2 md:mb-0'>Contact</Link>
          <Link href='/' className='text-xl mx-2'>Home</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
