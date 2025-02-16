'use client';
import React, { useState, useEffect } from 'react';
import PhotographyImages from './PortfolioHeader/PhotographyImages';
import WebDesignImages from './PortfolioHeader/WebDesignImages';
import Videos from './PortfolioHeader/Videos';
import ContentWriting from './PortfolioHeader/ContentWriting';
import Branding from './PortfolioHeader/Branding';
import Freelancer from './PortfolioHeader/Freelancer';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Photography');
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize(); // Run on initial render
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderCategory = () => {
    switch (activeCategory) {
      case 'Photography':
        return <PhotographyImages />;
      case 'Web Design':
        return <WebDesignImages />;
      case 'Videos':
        return <Videos />;
      case 'Content Writing':
        return <ContentWriting />;
      case 'Branding':
        return <Branding />;
      case 'Freelancer':
        return <Freelancer />;
      default:
        return <PhotographyImages />;
    }
  };

  const categories = [
    'Photography',
    'Web Design',
    'Videos',
    'Content Writing',
    'Branding',
    'Freelancer',
  ];

  return (
    <div className="w-full max-w-full min-h-screen md:h-screen flex flex-col justify-center items-center" id="portfolio">
  <div className="section-title text-center px-4">
    <h1 className="font-bold text-white">Portfolio</h1>
    <h2 className="text-pblue">
      <span className="italic text-white">Navigating </span>
      <span className="text-pblue">my creations</span>
    </h2>
  </div>
  <div className="flex flex-col md:flex-row w-full justify-center items-center">
    <div className="w-full md:w-1/5 flex flex-col gap-2 md:border-r border-gray-700 justify-center md:sticky md:top-0">
      <nav className="flex flex-col items-center space-y-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`hover:text-gray-300 ${activeCategory === category ? 'text-pwhite font-bold' : 'text-blue'}`}
            onClick={() => {
              setActiveCategory(category);
              if (isMobile) setShowModal(true);
            }}
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
    <div className={`flex-1 ${isMobile ? '' : 'min-h-[600px] max-h-[600px]'} overflow-y-auto p-4`}>
      {!isMobile && renderCategory()}
    </div>
    {isMobile && showModal && (
      <div className={`transition-transform duration-8900 ease-in-in bg-dark-mode fixed inset-0 bg-black z-50 flex flex-col transform ${showModal ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex justify-between items-center px-4 py-2 bg-gray-800">
          <h2 className="text-white text-xl font-bold">{activeCategory}</h2>
          <button
            className="text-white text-2xl"
            onClick={() => setShowModal(false)}
          >
            ✖
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{renderCategory()}</div>
      </div>
    )}
  </div>
</div>

  );
};

export default Portfolio;
