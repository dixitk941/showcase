import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/" className="text-3xl md:text-4xl font-bold font-mono animate-pulse">
          Project Showcase
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <MenuIcon fontSize="large" />
          </button>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className="text-lg md:text-base hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110 hover:underline decoration-wavy"
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className="text-lg md:text-base hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110 hover:underline decoration-wavy"
          >
            Projects
          </Link>
          <Link 
            to="/timeline" 
            className="text-lg md:text-base hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110 hover:underline decoration-wavy"
          >
            Timeline
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-80">
            <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
              <CloseIcon fontSize="large" />
            </button>
            <nav className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold text-center mb-4 animate-bounce text-blue-500">
                Menu Madness! 🤪
              </h2>
              <Link 
                to="/" 
                className="text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 hover:underline decoration-wavy flex items-center"
                onClick={toggleMenu}
              >
                🏠 Home
              </Link>
              <Link 
                to="/projects" 
                className="text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 hover:underline decoration-wavy flex items-center"
                onClick={toggleMenu}
              >
                🏆 Projects
              </Link>
              <Link 
                to="/timeline" 
                className="text-lg text-black hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 hover:underline decoration-wavy flex items-center"
                onClick={toggleMenu}
              >
                ⏰ Timeline
              </Link>
            </nav>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-white opacity-10 -z-10" style={{ backgroundImage: "url('path/to/your/background-pattern.svg')" }}></div>
    </header>
  );
};

export default Header;
