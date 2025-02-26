'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from './Header';
import motionWrapper from '../constants/motion/motionWrapper.js';
import { animationVariants } from "../constants/motion/animations";

const HomePage = () => {
  return (
    <section className="h-screen flex flex-col relative">
      <Header />
      <div className="flex flex-1 items-center justify-center w-full">
        <div className="relative flex flex-col items-start w-full max-w-5xl mx-auto px-7 sm:px-12 md:px-20">
          <motion.div
            variants={animationVariants.title}
            className="absolute right-[-20px] top-[-50px] sm:right-0 sm:top-0 opacity-80"
          >
          </motion.div>
          <motion.h1
            variants={animationVariants.title}
            className="text-[clamp(2rem,5vw,5rem)] leading-tight tracking-tight text-white"
          >
            <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl font-bold">
              Hi, I’m <span className="text-blue">Regine Galanaga</span>
              <br />
              <span className="text-pblue font-semibold">
                a Front End Dev. & Freelancer
              </span>
            </span>
          </motion.h1>
          <motion.p
            variants={animationVariants.paragraph}
            className="mt-4 max-w-2xl text-lg text-paleGray leading-relaxed"
          >
            A fusion of technology,
            crafting immersive digital experiences with precision.
            Specializing in{" "}
            <span className="text-white font-medium">
              information management, UI/UX Design & web development
            </span>.
          </motion.p>
          <motion.button
            variants={animationVariants.button}
            whileHover={{ scale: 1.05 }}
            className="bg-deepBlue mt-6 inline-flex items-center gap-2 text-white font-medium px-6 sm:px-8 py-3 rounded-full transition-all transform shadow-md"
          >
            <span>Explore My Work</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default motionWrapper(HomePage, 'container');
