import React from 'react';

const CategoryCard = ({ category }) => {
  const cardStyle = {
    backgroundImage: `url(${category.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='w-56 mx-2'>
      <div className="bg-white rounded-lg shadow-lg p-4" style={cardStyle}>
        <div className="h-40" />
        <h3 className="text-xl font-semibold text-gray-800 bg-white p-2 rounded-t-md">
          {category.name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;

