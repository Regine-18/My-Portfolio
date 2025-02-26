'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import ImagesGallery from "./ImagesGallery";
import { travels } from "../constants/travels";
import Image from "next/image";
import motionWrapper from "../constants/motion/motionWrapper";
import { animationVariants } from "../constants/motion/animations";
import { FaArrowDown } from 'react-icons/fa';
import Link from "next/link";

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen">
      <div className="max-w-5xl mx-auto px-7 sm:px-12 md:px-20 grid gap-2">
        <motion.h1 variants={animationVariants.title}>
          <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl text-white font-semibold">
            A <span className="text-blue">masbateña</span> riding the waves of innovation
          </span>
        </motion.h1>
        <motion.div className="h-[300px] relative" variants={animationVariants.image}>
          <Image
            src="/images/about.jpg"
            alt="About Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-md filter brightness-75 contrast-125 image-fade"
          />
        </motion.div>
        <motion.div variants={animationVariants.paragraph}>
          <div className="flex items-center gap-4">
            <span className="w-[3px] h-12 bg-deepBlue"></span>
            <span className="text-white text-xl lg:text-2xl">
              From zero knowledge of computer commands to a tech-savvy creative.
            </span>
          </div>
          <p className="text-lg leading-relaxed text-paleGray mt-4">
            My journey is one of bold transformation. I blend innovation with artistry,
            turning my passion for traditional arts into dynamic digital solutions.
          </p>
        </motion.div>
        <motion.p
          className="mt-4 text-paleGray text-lg leading-relaxed"
          variants={animationVariants.paragraph}
        >
          <span className="text-white font-semibold">HTML & CSS</span>,
          <span className="text-white font-semibold"> Bootstrap</span>,
          <span className="text-white font-semibold"> Tailwind</span>,
          <span className="text-white font-semibold"> JavaScript</span>,
          <span className="text-white font-semibold"> Java (OOP)</span>, and
          <span className="text-white font-semibold"> PHP & MySQL</span>, I craft seamless and responsive web applications.
          I also have experience with frameworks such as
          <span className="text-white font-semibold"> React.js</span> and
          <span className="text-white font-semibold"> Spring Boot</span>, allowing me to build dynamic and scalable solutions.
          Additionally, I am proficient in design tools like
          <span className="text-white font-semibold"> Canva</span>,
          <span className="text-white font-semibold"> Adobe</span>, and
          <span className="text-white font-semibold"> Figma</span>, enabling me to merge functionality with aesthetics.
          I also have expertise in <span className="text-white font-semibold">Excel</span>,
          <span className="text-white font-semibold">Word</span>, and
          <span className="text-white font-semibold"> PowerPoint</span>, enhancing productivity and efficiency in my projects.
        </motion.p>
        <a href="/reginegalanaga.pdf" target="_blank" rel="noopener noreferrer">
        Click here to open PDF
      </a>     
        <motion.p className="text-paleGray text-lg leading-relaxed md:text-left mt-4" variants={animationVariants.paragraph}>
          If you don’t find me at my desk coding, you’ll likely catch me by the beach, chasing the waves,
          or scaling mountains in search of new heights. Whether embracing the tides or creativity, I approach every challenge
          with curiosity and determination, seeing each project as an adventure—where every click, every line of code,
          is a wave shaping my ever-evolving expertise.
        </motion.p>
        <motion.div variants={animationVariants.travels}>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <p className="text-lg text-white">Footprints around the Philippines:</p>
            <ul className="flex gap-2 flex-wrap cursor-pointer">
              {travels.map((place, index) => (
                <motion.li
                  key={index}
                  className={`text-lg text-white font-medium bg-deepBlue py-1 px-4 rounded-full shadow-lg cursor-pointer transition ${selectedImage === place ? '' : 'hover:scale-105'}`}
                  onClick={() => setSelectedImage(place)}
                >
                  {place.title}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        {selectedImage && (
          <motion.div key={selectedImage.title} variants={animationVariants.travels} initial="hidden" animate="visible" className="mt-6 w-full">
            <ImagesGallery selectedImage={selectedImage} />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default motionWrapper(About, "container");
