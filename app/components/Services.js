'use client';
import React, { useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaCode, FaPaintBrush, FaMobileAlt, FaPenNib } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Designing and developing responsive websites that deliver seamless user experiences.',
      icon: <FaCode size={40} />,
    },
    {
      id: 2,
      title: 'Graphic Design',
      description: 'Crafting creative and professional designs for branding, marketing, and digital content.',
      icon: <FaPaintBrush size={40} />,
    },
    {
      id: 3,
      title: 'App Development',
      description: 'Creating intuitive and feature-rich mobile applications tailored to your needs.',
      icon: <FaMobileAlt size={40} />,
    },
    {
      id: 4,
      title: 'Content Writing',
      description: 'Delivering well-crafted and engaging content to effectively communicate your message.',
      icon: <FaPenNib size={40} />,
    },
    {
      id: 5,
      title: 'Editing',
      description: 'Delivering well-crafted and engaging content to effectively communicate your message.',
      icon: <FaPenNib size={40} />,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle expansion
  };

  return (
    <div className="flex items-center justify-center md:h-screen" id="services">
      <div className="w-full max-w-7xl">
        <div className="section-title text-center">
          <h1 className="font-bold text-white">Services</h1>
          <h2 className="text-pblue">
            <span className="text-pblue">Sailing </span>
            <span className="text-pwhite">beyond </span>
            <span className="text-pblue">expectations</span>
          </h2>
        </div>

        {/* Show carousel on desktop and tablets with responsive settings */}
        <div className="hidden md:block relative">
          <div className="flex items-center justify-between">
            {/* Left Button */}
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="mr-2 text-2xl text-blue-500 hover:text-blue-700"
            >
              <FaArrowLeft size={30} className="rounded-full bg-seafoam w-10 h-10 py-2 flex items-center justify-center" />
            </button>

            {/* Swiper Carousel */}
            <Swiper
              slidesPerView={2} // Default is 2 items per view
              spaceBetween={20}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: '#prevButton',
                nextEl: '#nextButton',
              }}
              breakpoints={{
                678: {
                  slidesPerView: 2, // For screens 678px and larger, show 2 items per view
                },
                1024: {
                  slidesPerView: 3, // For screens larger than 1024px, show 4 items per view
                },
              }}
              className="flex justify-center"
              onSwiper={setSwiperInstance} // Save swiper instance to state
            >
              {services.map((service, index) => (
                <SwiperSlide key={service.id}>
                  <div
                    onClick={() => handleExpand(index)}
                    className={`p-4 bg-column-background shadow-md rounded-md flex flex-col justify-center items-center cursor-pointer transition-all duration-700 ease-in-out`}
                    style={{
                      height: expandedIndex === index ? '350px' : '300px',
                      transition: 'transform 1s ease-out, height 1s ease-out, opacity 0.5s ease-out',
                    }}
                  >
                    <div className="mb-4 text-pwhite">{service.icon}</div>
                    <h3 className="service-title mt-2 text-pwhite">{service.title}</h3>
                    <p className="text-pblue text-center">{service.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Right Button */}
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="ml-2 text-2xl text-blue-500 hover:text-blue-700"
            >
              <FaArrowRight size={30} className="rounded-full bg-seafoam w-10 h-10 py-2 flex items-center justify-center" />
            </button>
          </div>

          {/* Pagination */}
          <div className="swiper-pagination absolute bottom-0 w-full text-center py-4">
          </div>
        </div>

        {/* Show grid layout on mobile */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleExpand(index)}
              className={`p-4 bg-column-background shadow-md rounded-md flex flex-col justify-center items-center cursor-pointer transition-all duration-700 ease-in-out`}
              style={{
                height: expandedIndex === index ? '350px' : '330px',
                transition: 'transform 1s ease-out, height 1s ease-out, opacity 0.5s ease-out',
              }}
            >
              <div className="mb-4 text-pwhite">{service.icon}</div>
              <h3 className="service-title mt-2 text-pwhite">{service.title}</h3>
              <p className="text-pblue text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
