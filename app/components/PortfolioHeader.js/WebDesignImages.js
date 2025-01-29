import React, { useState } from 'react';

const WebDesignImages = () => {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Example images array
  const images = [
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/600x400',
  ];

  const imagesToShow = showAll ? images : images.slice(0, 6); // Show 6 images initially

  return (
    <div className="w-full">
      {/* Image Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}
        style={{
          overflow: 'hidden',
        }}
      >
        {imagesToShow.map((src, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => {
              setShowModal(true);
              setSelectedImage(src);
            }}
          >
            <img
              src={src}
              alt={`Web Design ${index}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="p-2 bg-blue-500 text-white rounded"
        >
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>

      {/* Modal for Enlarged Image */}
      {showModal && selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center"
        >
          <div className="relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Large View"
              className="max-w-3xl max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDesignImages;
