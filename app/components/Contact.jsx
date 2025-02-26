'use client';

import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";
import { animationVariants } from '../constants/motion/animations';
import motionWrapper from '../constants/motion/motionWrapper';

const Contact = () => (
  <motion.section
    initial="hidden"
    animate="visible"
    variants={animationVariants.container}
    className="py-16 text-white"
  >
    <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-20">
      <motion.h1 variants={animationVariants.title} className="text-left">
        <span className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Make a <span className="text-blue">splash</span>
        </span>
      </motion.h1>
      <motion.p variants={animationVariants.paragraph} className="text-lg mt-4">
        <span className="text-blue">Have a project or inquiry? </span>
        Let’s bring your vision to life and create something extraordinary together!
      </motion.p>
      <motion.div variants={animationVariants.paragraph} className="flex flex-col sm:flex-row items-center gap-6 mt-8">
        <h2 className="text-lg font-semibold text-center sm:text-left">
          Ready to dive in?
        </h2>
        <button className="bg-deepBlue flex items-center gap-2 text-white font-medium px-12 py-3 rounded-full transition-all transform shadow-md hover:scale-105">
          Hire me
        </button>
      </motion.div>
      <motion.div variants={animationVariants.paragraph} className="flex flex-col sm:flex-row items-center gap-6 mt-8">
        <h2 className="text-lg font-semibold text-center sm:text-left">Let's connect</h2>
        <div className="flex space-x-6">
          <a href="mailto:reginegalanaga97@gmail.com" className="text-blue hover:text-white transition transform hover:scale-110" aria-label="Email me">
            <FaEnvelope size={35} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-white transition transform hover:scale-110" aria-label="Follow me on Instagram">
            <FaInstagram size={35} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-white transition transform hover:scale-110" aria-label="Follow me on Twitter">
            <FaTwitter size={35} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-white transition transform hover:scale-110" aria-label="Follow me on LinkedIn">
            <FaLinkedin size={35} />
          </a>
        </div>
      </motion.div>
      <motion.p variants={animationVariants.paragraph} className="text-gray-400 text-sm mt-12 text-center">
        Designed in <span className="text-blue italic">Figma</span>, developed in <span className="text-blue italic">Visual Studio Code</span>
        with <span className="text-blue italic">Next.js</span> and <span className="text-blue italic">Tailwind CSS</span>,
        deployed on <span className="text-blue italic">Vercel</span>.
      </motion.p>
    </div>
  </motion.section>
);

export default motionWrapper(Contact, 'container');
