import React from 'react';

const CategoryCard = ({ category }) => {
  const cardStyle = {
    backgroundImage: `url(${category.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4" style={cardStyle}>
      <div className="h-40" />
      <h3 className="text-xl font-semibold text-gray-800 bg-white p-2 rounded-t-md">
        {category.name}
      </h3>
      <a
        href={category.link}
        className="text-blue-500 hover:underline mt-2 block bg-white p-2 rounded-b-md"
      >
        Shop Now
      </a>
    </div>
  );
};

export default CategoryCard;
