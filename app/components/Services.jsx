'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { services } from '../constants/servicesData';

const Services = () => {
  const [state, setState] = useState({
    expandedIndex: null,
    swiperInstance: null,
    isMobile: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setState((prevState) => ({
        ...prevState,
        isMobile: window.innerWidth < 678,
      }));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleExpand = (index) => {
    setState((prevState) => ({
      ...prevState,
      expandedIndex: prevState.expandedIndex === index ? null : index,
    }));
  };

  return (
    <section>
    <div className="flex items-center justify-center md:h-screen" id="services">
      <div className="w-full max-w-7xl">
        <div className="section-title text-center">
          <h1 className="font-bold text-white">Services</h1>
          <h2>
            <span className="text-pblue">Sailing</span>
            <span className="text-pwhite">beyond</span>
            <span className="text-pblue">expectations</span>
          </h2>
        </div>
        {state.isMobile ? (
          <div className="flex flex-col space-y-4 px-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleExpand(index)}
                className={`p-4 bg-column-background shadow-md rounded-md flex flex-col items-center cursor-pointer transition-all duration-700`}
                style={{
                  height: state.expandedIndex === index ? '350px' : '300px',
                  transition: 'transform 1s ease-out, height 1s ease-out',
                }}
              >
                <div className="mb-4 text-pwhite">{service.icon}</div>
                <h3 className="mt-2 text-pwhite">{service.title}</h3>
                <p className="text-pblue text-center">{service.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col md:block relative">
            <div className="flex items-center justify-between">
              <button
                onClick={() => state.swiperInstance?.slidePrev()}
                className="text-2xl text-blue-500 hover:text-blue-700"
              >
                <FaArrowLeft size={30} className="rounded-full bg-seafoam w-10 h-10 py-2 flex items-center justify-center" />
              </button>
              <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                  678: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                onSwiper={(swiper) => setState((prevState) => ({ ...prevState, swiperInstance: swiper }))}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={service.id}>
                    <div
                      onClick={() => handleExpand(index)}
                      className={`p-4 bg-column-background shadow-md rounded-md flex flex-col items-center cursor-pointer transition-all duration-700`}
                      style={{
                        height: state.expandedIndex === index ? '350px' : '300px',
                        transition: 'transform 1s ease-out, height 1s ease-out',
                      }}
                    >
                      <div className="mb-4 text-pwhite">{service.icon}</div>
                      <h3 className="mt-2 text-pwhite">{service.title}</h3>
                      <p className="text-pblue text-center">{service.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => state.swiperInstance?.slideNext()}
                className="text-2xl text-blue-500 hover:text-blue-700"
              >
                <FaArrowRight size={30} className="rounded-full bg-seafoam w-10 h-10 py-2 flex items-center justify-center" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default Services;
