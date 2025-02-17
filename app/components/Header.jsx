'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaBars, FaTimes, FaPaintBrush } from 'react-icons/fa';
import useThemeToggle from './ThemeToggle'; 
import { navLinks } from '../constants/navLinks';

const Header = () => {
  const { theme, toggleTheme, mounted } = useThemeToggle();
  const [state, setState] = useState({
    isMenuOpen: false,
    activeSection: '',
    isScrolled: false,
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  // Handle resizing and scrolling
  useEffect(() => {
    const handleResize = () => {
      setState((prevState) => ({ ...prevState, windowWidth: window.innerWidth }));
    };

    const handleScroll = () => {
      setState((prevState) => ({ ...prevState, isScrolled: window.scrollY > 50 }));
      updateActiveSection(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (state.windowWidth >= 768) {
      setState((prevState) => ({ ...prevState, isMenuOpen: false }));
    }
  }, [state.windowWidth]);

  const updateActiveSection = (scrollY) => {
    navLinks.forEach((item) => {
      const section = document.querySelector(item.link);
      if (section) {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setState((prevState) => ({ ...prevState, activeSection: item.name }));
        }
      }
    });
  };


  return (
    <header>
      <nav
        className={`nav-container fixed top-0 z-50 w-full p-4 transition-all duration-300 ${
          state.isScrolled ? 'dark:bg-darkGradient bg-lightGradient' : 'shadow-md'
        }`}
      >
        <div className="flex justify-between items-center max-w-5xl mx-auto px-4 h-full relative">
          <button
            onClick={() => setState((prevState) => ({ ...prevState, isMenuOpen: !prevState.isMenuOpen }))}
            className="text-white md:hidden"
            aria-label={state.isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {state.isMenuOpen ? (
              <FaTimes className="absolute top-2 left-2 text-2xl z-50" />
            ) : (
              <FaBars />
            )}
          </button>
          <h1 className="text-pwhite text-3xl font-bold mr-8 hidden md:block">
            Reg
            <span className="italic inline-flex items-center">
              <FaPaintBrush className="text-pblue mx-1 text-xs" style={{ width: '30px', height: '30px' }} />
            </span>
            ne
          </h1>
          <div className="hidden md:flex md:space-x-6 lg:space-x-12 items-center gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`nav-link text-white ${state.activeSection === item.name ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {!state.isMenuOpen && (
            <button onClick={toggleTheme} className="text-white lg:ml-12 ml-8">
              {theme === 'dark' ? <FiSun className="text-yellow-400" /> : <FiMoon />}
            </button>
          )}
        </div>
        <div
          className={`md:hidden absolute top-0 left-0 right-0 bg-dark-mode overflow-hidden transition-all duration-500 ${
            state.isMenuOpen ? 'h-screen' : 'h-0'
          }`}
        >
          <div className="flex flex-col items-start mt-16">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="block ml-6 text-white hover:text-gray-300 mb-2"
                onClick={() => setState((prevState) => ({ ...prevState, isMenuOpen: false }))}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
