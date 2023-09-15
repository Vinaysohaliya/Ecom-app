import React from 'react';

const ContactUs = () => {

  

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <h1 className='text-3xl font-semibold mb-4'>
        Get in Touch
      </h1>
      <textarea
        className='border rounded-lg p-2 w-64 h-32 resize-none'
        placeholder='Enter Message'
      ></textarea>
      <div className='flex flex-col space-y-2 mt-4'>
        <input
          id='name'
          type='text'
          className='border rounded-lg p-2'
          placeholder='Enter name'
        />
        <input
          id='email'
          type='email'
          className='border rounded-lg p-2'
          placeholder='Email'
        />
      </div>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 transition-colors'>
        Send
      </button>
    </div>
  );
};




export default ContactUs