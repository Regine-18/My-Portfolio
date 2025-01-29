'use client';
import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => (
  <div className="w-full max-w-full text-center h-screen flex justify-center flex-col px-10">
    <div className="section-title">
      <h1 className="font-bold text-white">Contact</h1>
      <h2 className="">
        <span className="text-pblue">Make a</span>
        <span className="italic text-white"> splash</span>
      </h2>
    </div>
    <p className="text-white mb-8">
      <span className="text-pblue">Should you have a project or inquiry, please feel free to connect</span> — I&#39;m here to help navigate the tides of your vision!
    </p>

    <div className="my-6">
      <h1 className="text-white">Email</h1>
      <p className="text-white">reginegalanaga97@gmail.com</p>

      <h1 className="text-white mt-4">Ready to dive in?</h1>
      <button className="mt-4 px-6 py-3 bg-seafoam text-white text-lg font-semibold rounded-full hover:bg-pwhite transition transform hover:scale-105">
        Hire me
      </button>

      <h1 className="text-white mt-8">Let&#39;s connect</h1>
      <div className="social-icons flex justify-center space-x-6 mt-4">
        {[FaInstagram, FaFacebook, FaTwitter, FaLinkedin].map((Icon, index) => (
          <a
            key={index}
            href={`https://www.${Icon.name.toLowerCase()}.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pblue hover:text-pblue transition transform"
            aria-label={`Follow me on ${Icon.name}`} // Accessibility improvement
          >
            <Icon size={35} />
          </a>
        ))}
      </div>

      <p className="text-pwhite my-12 mb-3" id="copy-right">
        Designed in <span className="text-pblue italic">Figma</span>, developed in <span className="text-pblue italic">Visual Studio Code</span> with
        <span className="text-pblue italic"> Next.js</span> and <span className="text-pblue italic">Tailwind CSS</span>, 
        and deployed on <span className="text-pblue italic">Vercel</span>
      </p>
    </div>
  </div>
);

export default Contact;
