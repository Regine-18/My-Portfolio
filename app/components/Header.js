'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaBars, FaTimes, FaPaintBrush } from 'react-icons/fa';
import useThemeToggle from './ThemeToggle'; // Import custom hook

const Header = () => {
  const { theme, toggleTheme, mounted } = useThemeToggle(); // Use the custom hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const navLinks = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about-me' },
    { name: 'Skills', link: '#skills' },
    { name: 'Services', link: '#services' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Contact', link: '#contact' },
  ];

  // This effect will only run on the client
  useEffect(() => {

    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      updateActiveSection(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Ensure theme is only applied after the component is mounted (avoid hydration issues)
  useEffect(() => {
    if (windowWidth >= 768) setIsMenuOpen(false);
  }, [windowWidth]);

  const updateActiveSection = (scrollY) => {
    navLinks.forEach((item) => {
      const section = document.querySelector(item.link);
      if (section) {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(item.name);
        }
      }
    });
  };


  if (!mounted) return null; // Avoid rendering until mounted

  return (
    <header>
      <nav
        className={`nav-container fixed top-0 z-50 w-full p-4 transition-all duration-300 ${
          isScrolled ? 'dark:bg-darkGradient bg-lightGradient' : 'shadow-md'
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 h-full relative">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <FaTimes className="absolute top-2 left-2 text-2xl z-50" />
            ) : (
              <FaBars />
            )}
          </button>

          {/* Logo */}
          <h1 className="text-pwhite text-3xl font-bold mr-8 hidden md:block">
            Reg
            <span className="italic inline-flex items-center">
              <FaPaintBrush className="text-pblue mx-1 text-xs" style={{ width: '30px', height: '30px' }} />
            </span>
            ne
          </h1>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex md:space-x-6 lg:space-x-12 items-center gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`nav-link text-white ${activeSection === item.name ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Night Mode Toggle */}
          {!isMenuOpen && (
            <button onClick={toggleTheme} className="text-white lg:ml-12 ml-8">
            {theme === 'dark' ? <FiSun className="text-yellow-400" /> : <FiMoon />}
          </button>
          )}
        </div>

        {/* Mobile Menu Items */}
        <div
          className={`md:hidden absolute top-0 left-0 right-0 bg-dark-mode overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'h-screen' : 'h-0'
          }`}
        >
          <div className="flex flex-col items-start mt-16">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="block ml-6 text-white hover:text-gray-300 mb-2"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking
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
