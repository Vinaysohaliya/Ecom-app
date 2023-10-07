import React from 'react';

const CategoryCard = ({ category }) => {
  console.log(category);
  const cardStyle = {
    backgroundImage: `url(${category.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='w-56 mx-2'>
      <div className="bg-white hover:shadow-lg p-4" style={cardStyle}>
        <div className="h-40" />
        <h3 className="text-xl font-semibold text-gray-800 bg-white p-2 text-center hover:text-white hover:bg-red-500">
          {category.name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;

