'use client';
import React, { useState, useEffect } from 'react';
import PhotographyImages from './PortfolioHeader/PhotographyImages';
import WebDesignImages from './PortfolioHeader/WebDesignImages';
import ContentWriting from './PortfolioHeader/ContentWriting';
import Branding from './PortfolioHeader/Branding';
import { motion } from "framer-motion";
import motionWrapper from "../constants/motion/motionWrapper";
import { animationVariants } from "../constants/motion/animations"; // Import directly

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Photography');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderCategory = () => {
    switch (activeCategory) {
      case 'Photography': return <PhotographyImages />;
      case 'Web Design': return <WebDesignImages />;
      case 'Content Writing': return <ContentWriting />;
      case 'Branding': return <Branding />;
    }
  };

  const categories = ['Photography', 'Web Design', 'Writing', 'Branding'];

  return (
    <motion.section 
    variants={animationVariants.container} 
    className="py-20 md:h-screen"
  >
    <div className="max-w-5xl mx-auto px-7 sm:px-12 md:px-20">
      <motion.h1 variants={animationVariants.title} className="max-w-xl text-start text-white">
        <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="text-blue">Navigating </span> my creations
        </span>
      </motion.h1>
  
      <motion.div variants={animationVariants.container} className="flex flex-col md:flex-row my-10">
        <motion.div variants={animationVariants.title} className="w-full md:w-1/5 flex flex-col gap-4">
          <motion.nav variants={animationVariants.container} className="flex flex-col space-y-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={animationVariants.button}
                className={`text-paleGray hover:text-gray-300 text-lg px-4 py-2 transition duration-300 ${
                  activeCategory === category ? 'text-white font-bold pl-2' : 'text-blue'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </motion.nav>
        </motion.div>
  
        {/* Content */}
        <div className="w-full md:w-4/5 mt-6 md:mt-0 px-4 md:px-8">
          {renderCategory()}
        </div>
      </motion.div>
    </div>
  </motion.section>
  
  );
};

export default motionWrapper(Portfolio, animationVariants);
