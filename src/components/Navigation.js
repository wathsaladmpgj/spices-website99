'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Distributors', href: '/distributors' },
    { name: 'Farmer Support', href: '/farmerSupport' },
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="bg-white/95 backdrop-blur-none md:backdrop-blur-sm sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-yellow to-primary-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-800">MooN's Products</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative py-2 px-3 rounded-lg hover:bg-green-50 transform hover:scale-105"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 transition-transform duration-300 rotate-0 hover:rotate-90" />
              ) : (
                <Bars3Icon className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-green-100 mobile-nav-fast">
            <div className="py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transition-all duration-300 touch-manipulation relative group rounded-lg mx-2 my-1"
                  onClick={closeMenu}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
