'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants/servicesData';
import motionWrapper from '../constants/motion/motionWrapper';
import { animationVariants } from '../constants/motion/animations';

const Services = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-7 sm:px-12 md:px-20">
        <motion.h1 variants={animationVariants.title} className='max-w-3xl text-white'>
          <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl font-bold">
              Sailing <span className="text-blue">beyond</span> expectations
          </span>
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
          variants={animationVariants.container}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="p-8 shadow-xl rounded-md overflow-hidden 
              transition-all duration-500 flex flex-col items-center justify-center text-center min-h-[250px] w-full
              hover:bg-gunMetalBlue hover:scale-105"
              variants={animationVariants.item}
            >
              <div className="mb-2 text-blue">{service.icon}</div>
              <h3 className="text-white text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-lg text-paleGray">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default motionWrapper(Services, 'container');
