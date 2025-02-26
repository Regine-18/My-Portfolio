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
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setState((prevState) => ({ ...prevState, isScrolled: window.scrollY > 50 }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
          state.isScrolled ? 'dark:bg-darkGradient bg-lightGradient text-white' : 'shadow-md'
        }`}
      >
        <div className="flex justify-between items-center max-w-5xl mx-auto px-7 sm:px-12 md:px-20">
          <button
            onClick={() => setState((prevState) => ({ ...prevState, isMenuOpen: !prevState.isMenuOpen }))}
            className="text-white md:hidden"
            aria-label={state.isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {state.isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars />}
          </button>
          <h1 className="text-white text-3xl font-bold mr-8 hidden lg:block">
            Reg
            <span className="italic inline-flex items-center">
              <FaPaintBrush className="text-blue mx-1 text-xs" style={{ width: '30px', height: '30px' }} />
            </span>
            ne
          </h1>
          <div className="hidden md:flex gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`nav-link text-white ${state.activeSection === item.name ? 'font-bold' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {mounted && (
            <button onClick={toggleTheme} className="ml-4 text-white">
              {theme === 'dark' ? <FiSun className="text-yellow-400" /> : <FiMoon />}
            </button>
          )}
        </div>
        {state.isMenuOpen && (
          <div
            className="fixed inset-0 opacity-50 z-40"
            onClick={() => setState((prevState) => ({ ...prevState, isMenuOpen: false }))}
          ></div>
        )}
        <div
          className={`md:hidden gap-2 py-6 flex flex-col items-center absolute top-0 left-0 bg-lightGradient dark:bg-darkGradient w-full h-auto transition-transform duration-300 ${
            state.isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`nav-link text-white ${state.activeSection === item.name ? 'font-bold' : ''}`}
              onClick={() => setState((prevState) => ({ ...prevState, isMenuOpen: false }))}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
