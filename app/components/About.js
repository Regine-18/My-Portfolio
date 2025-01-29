
"use client"; // Add this at the top

import ImagesGallery from '../components/ImagesGallery';  // Import the ImagesGallery component
import { useState } from 'react';

const About = () => {

  const [isSecondColumnVisible, setIsSecondColumnVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleArrowClick = () => {
    setIsSecondColumnVisible(prev => !prev);
    setIsTextVisible(prev => !prev); // Toggle text visibility when the arrow is clicked
  };

  return (
    <div className="about-me flex flex-col items-center justify-center min-h-screen" id="about-me">
      <div className="w-full max-w-7xl px-4">
        <div className='section-title text-center'>
          <h1 className="font-bold text-white">About me</h1>
          <h2 className="text-pblue">A masbateña riding the <span className='italic text-pwhite'>waves</span> of innovation</h2>
        </div>
        <h3 className="text-center text-pblue title-holder mb-4">
          NCIII Holder in Bookkeeping with <span className="text-pwhite">Honors</span>
        </h3>
        <p className="mb-4 sm:text-start md:text-center">
          <span className="text-hlightGray" id="desc-intro">
            Once a Masbateña with zero skills—not even the basics of computer commands—I boldly leaped into the tech world,
          </span>
          <span className="text-pblue">
            transforming my passion for traditional arts into
            tech-savvy creativity. Now, as a proud NC III holder in
            bookkeeping with honors, I navigate the challenges of each
            project like an adventurous island girl riding the waves,
            embracing the excitement of every new opportunity.

            My journey is a vibrant blend of innovation and artistry,
            where each click resonates like waves crashing on the shore—powerful
            and exhilarating. Fueled by a love for learning and an unwavering
            determination, I chart my course toward success with enthusiasm and
            pride.
          </span>
          <br />
        </p>

        {/* Conditionally render the text */}
        {isTextVisible && (
          <p className="sm:text-start md:text-center">
            <span className="text-pblue">
              When I am not at my desk meeting deadlines, I can often be found chasing sunsets by the beach, scaling mountains to savor breathtaking views,
              or immersing myself in the serenity of remote islands. Whether I am conquering peaks or writing code, I bring the same passion and dedication.
            </span>
            <br />
            <span className="quo italic text-hlightGray">
              — because every adventure, like every project, is a journey worth embracing.
            </span>
          </p>
        )}
        <div className="flex flex-col items-center">
          {isSecondColumnVisible && (
            <div className="max-w-7xl mx-auto overflow-x-auto">
              <div className="flex space-x-4">
                {/* Display the ImagesGallery component here */}
                <ImagesGallery />
              </div>
            </div>
          )}

          {/* Arrow button */}
          <button
            onClick={handleArrowClick}
            className="rounded-full p-2  bg-customBlue text-white hover:bg-pblue transition-colors duration-300"
            aria-label="Click for more"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transform transition-all duration-500 ${isSecondColumnVisible ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 