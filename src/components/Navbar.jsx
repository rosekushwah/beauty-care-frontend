import { useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/logo.png'
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-base transition-all duration-300 transform hover:scale-110 ${
      isActive ? 'text-[#5a4b41] font-semibold' : 'text-gray-700 hover:text-[#5a4b41]'
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block py-2 transition-all duration-300 ${
      isActive ? 'text-[#5a4b41] font-semibold' : 'text-gray-700 hover:text-[#5a4b41]'
    }`;

  // Close menu after mobile link click
  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#5a4b41]">
          <NavLink to="/" onClick={handleMobileLinkClick}><img src={logo} alt="logo" className="w-12 md:w-15 lg:w-18" /></NavLink>
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/products" className={linkClasses}>Products</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/login" className={linkClasses}>Login</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-[#5a4b41]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <NavLink to="/" className={mobileLinkClasses} onClick={handleMobileLinkClick}>Home</NavLink>
          <NavLink to="/products" className={mobileLinkClasses} onClick={handleMobileLinkClick}>Products</NavLink>
          <NavLink to="/about" className={mobileLinkClasses} onClick={handleMobileLinkClick}>About</NavLink>
          <NavLink to="/login" className={mobileLinkClasses} onClick={handleMobileLinkClick}>Login</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
