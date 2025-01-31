'use client';

import React from 'react';

const SkillsList = () => {
  const skills = [
    'Bookkeeping', 'HTML & CSS', 'Bootstrap', 'Tailwind', 'JavaScript (ES6+)', 'React.js',
    'Java (OOP)', 'PHP', 'MySQL', 'Spring MVC', 'Figma', 'Photoshop', 'Canva',
    'Excel', 'Word', 'PowerPoint'
  ];

  return (
    <div className="skills flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-7xl px-4">
        <div className="section-title text-center">
          <h1 className="font-bold text-white">Skills</h1>
          <h2 className="text-pblue">A deep <span className='italic text-pwhite'>dive</span> to my expertise</h2>
        </div>
        <ul className="flex flex-wrap justify-center space-x-2 mb-6">
          {skills.map(skill => (
            <li key={skill} className=" bg-customBlue text-pblue py-2 px-7 rounded-full mb-3 shadow-lg hover:scale-105">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsList;
