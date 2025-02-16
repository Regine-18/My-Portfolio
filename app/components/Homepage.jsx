import React from 'react';
import Image from 'next/image';
import Header from './Header';
import { FaTerminal, 
  FaBootstrap, 
  FaCss3Alt, 
  FaReact, 
  FaJava, 
  FaLeaf, 
  FaGithub, 
  FaPaintBrush, 
  FaPencilAlt, 
  FaMicrosoft, 
  FaSlack, 
  FaGoogleDrive
 } from 'react-icons/fa';
import backgroundImage from '../public/images/mountain-home.png'

const HomePage = () => {
  const icons = [
    { Icon: FaTerminal, label: 'VS Code' },
    { Icon: FaBootstrap, label: 'Bootstrap' },
    { Icon: FaCss3Alt, label: 'CSS' },
    { Icon: FaReact, label: 'React' },
    { Icon: FaJava, label: 'Java' },
    { Icon: FaLeaf, label: 'Spring Boot / MVC' },
    { Icon: FaGithub, label: 'GitHub' },
    { Icon: FaPaintBrush, label: 'Adobe Photoshop' },
    { Icon: FaPencilAlt, label: 'Canva' },
    { Icon: FaMicrosoft, label: 'Microsoft' },
    { Icon: FaSlack, label: 'Slack' },
    { Icon: FaGoogleDrive, label: 'Google Drive' },
  ];

  return (
    <section id="home">
    <div className="min-h-screen">
      <Header />
      <div className="relative">
        <Image
          src={backgroundImage}
          alt="Mountain Home"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 mix-blend-multiply min-h-screen image-fade"
          priority
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="absolute z-10 w-full flex flex-grow flex-col justify-center items-center min-h-screen h-screen gap-14 md:gap-14">
        <div className="max-w-7xl text-center px-10">
          <h1 className="text-pwhite name-desc mb-2">
            <span className="hidden sm:inline">I<span className="text-pblue">‘</span>m </span>
            Regine Galanaga
            <span className="hidden sm:inline">, your</span>
          </h1>
          <h2 className="text-dark-seafoam job-desc">
            Web Developer & Freelancer
          </h2>
          <p className="detailed mt-2 mb-6">
            <span className="text-darkPaleDescription">With a </span>
            <span className="text-hlightGray">year of experience, </span>
            <span className="text-darkPaleDescription hidden sm:inline">as a Junior System Developer,</span>
            <span className="text-darkPaleDescription">I focus on</span>
            <span className="text-hlightGray"> testing, designing, and web development</span>
            <span className="text-hlightGray hidden sm:inline"> to create user-centered solutions</span>
            <span className="text-darkPaleDescription hidden sm:inline">, leveraging my</span>
            <span className="text-hlightGray hidden sm:inline"> sharp attention to detail</span>
            <span className="text-darkPaleDescription hidden sm:inline"> and design expertise.</span>
          </p>
          <button className="my-2">
            <a
              href="#portfolio"
              className="bg-seafoam-darker px-8 py-4 font-semibold text-white rounded-full cursor-pointer transform transition-all hover:scale-105"
              aria-label="Explore my portfolio"
            >
              Explore portfolio
            </a>
          </button>
        </div>
        <div className="icon-slider overflow-x-auto scroll-snap-x mandatory flex justify-center items-center w-full">
          <div className="icon-track flex flex-nowrap gap-6">
            {icons.map((item, index) => (
              <div key={index} className="flex items-center px-3 flex-shrink-0 text-left gap-3">
                <item.Icon className="text-pblue text-icon text-5xl lg:text-6xl" aria-hidden="true" />
                <span className="text-hlightGray item-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HomePage;
