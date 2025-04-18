// components/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 10 ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Image 
                src="/images/logo.png" 
                alt="Webbiify Infotech Logo" 
                width={160} 
                height={60} 
                className="h-10 animate-pulse" 
              />
            </a>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#home">
            <a className="text-blue-900 hover:text-blue-600 transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="#services">
            <a className="text-blue-900 hover:text-blue-600 transition-colors duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="#about">
            <a className="text-blue-900 hover:text-blue-600 transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="#portfolio">
            <a className="text-blue-900 hover:text-blue-600 transition-colors duration-300 relative group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="#contact">
            <a className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Contact Us
            </a>
          </Link>
        </nav>
        
        <button 
          className="md:hidden text-blue-900 text-2xl" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#home">
              <a className="text-blue-900 hover:text-blue-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</a>
            </Link>
            <Link href="#services">
              <a className="text-blue-900 hover:text-blue-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Services</a>
            </Link>
            <Link href="#about">
              <a className="text-blue-900 hover:text-blue-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>About</a>
            </Link>
            <Link href="#portfolio">
              <a className="text-blue-900 hover:text-blue-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            </Link>
            <Link href="#contact">
              <a className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 text-center" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
