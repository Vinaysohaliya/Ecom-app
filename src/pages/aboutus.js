import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 p-4">
      <header className="text-center py-8">
        <h1 className="text-3xl font-semibold text-indigo-700">About Our E-Commerce Store</h1>
        <p className="text-gray-600">Your Trusted Destination for Quality Products</p>
      </header>

      <section className="flex flex-col md:flex-row justify-between items-center p-8 bg-white shadow-lg rounded-lg mb-4">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold text-indigo-700">Our Story</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            consequat massa, ac dictum justo tincidunt vitae. Aenean convallis
            massa eget nulla iaculis, ac mattis quam vulputate.
          </p>
        </div>

        <div className="md:w-1/2">
          <Image src="/about-us-image.jpg" alt="Our Team" className="rounded-md" />
        </div>
      </section>

      <section className="p-8 bg-white shadow-lg rounded-lg mb-4">
        <h2 className="text-2xl font-semibold text-indigo-700">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 mt-4">
          <li>Quality First</li>
          <li>Customer Satisfaction</li>
          <li>Transparency</li>
          <li>Innovation</li>
        </ul>
      </section>

     
    </div>
  );
};

export default AboutUsPage;
