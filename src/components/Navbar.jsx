import { useState } from "react";
import {Link} from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
   <>
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-700">
          <Link to="/">Beauty Care</Link>
        </div>

   
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 text-base hover:text-purple-600 transition-all duration-300 transform hover:scale-110">Home</Link>
          <Link to="/products" className="text-gray-700 text-base hover:text-purple-600 transition-all duration-300 transform hover:scale-110">Products</Link>
          <Link to="/about" className="text-gray-700 text-base hover:text-purple-600 transition-all duration-300 transform hover:scale-110">About</Link>
          <Link to="/login" className="text-gray-700 text-base hover:text-purple-600 transition-all duration-300 transform hover:scale-110">Login</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link to="/" className="block py-2 text-gray-700 hover:text-purple-600">Home</Link>
          <Link to="/products" className="block py-2 text-gray-700 hover:text-purple-600">Products</Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-purple-600">About</Link>
          <Link to="/login" className="block py-2 text-gray-700 hover:text-purple-600">Login</Link>
        </div>
      )}
    </nav>
   </>
  )
}

export default Navbar