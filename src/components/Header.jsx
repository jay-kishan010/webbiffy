// components/Header.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Services", "About", "Portfolio", "Contact"];

  return (
    <header className="fixed top-0 z-50 w-full bg-white backdrop-blur-sm shadow-sm bg-opacity-30">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="Webbiify Infotech Logo" 
            width={40} 
            height={8} 
            className="animate-logo-float"
          />
          <h1 className="text-2xl font-bold text-[#03223F] whitespace-nowrap">Webbiify Infotech</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#0a1e36] font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#3d7ce5] after:transition-all hover:text-[#3d7ce5] hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="text-2xl md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 shadow-md backdrop-blur-sm">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
                className="text-[#0a1e36] text-lg font-medium hover:text-[#3d7ce5] transition"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
