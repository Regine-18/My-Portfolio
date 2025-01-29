import React from 'react';

const Videos = () => {
  const images = [

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <img
            src={src}
            alt={`Photography ${index}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Videos;
