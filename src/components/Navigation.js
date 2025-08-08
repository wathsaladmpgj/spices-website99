'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
                  className={`transition-all duration-300 font-medium relative py-2 px-3 rounded-lg transform hover:scale-105 ${
                    pathname === item.href
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-100 rounded-full ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></span>
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
                <XMarkIcon className="h-6 w-6 transition-transform duration-20 rotate-0 hover:rotate-90" />
              ) : (
                <Bars3Icon className="h-6 w-6 transition-transform duration-20" />
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
                  className={`block px-4 py-3 mx-2 my-1 rounded-lg transition-all duration-300 touch-manipulation relative group overflow-hidden ${
                    pathname === item.href
                      ? 'text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/30 transform scale-105'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:shadow-md'
                  }`}
                  onClick={closeMenu}
                >
                  {/* Background animation effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-10"></div>
                  
                  {/* Content with enhanced highlighting */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-medium transition-transform duration-300 group-hover:translate-x-1">
                      {item.name}
                    </span>
                    
                    {/* Active page indicator */}
                    {pathname === item.href && (
                      <div className="w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
                    )}
                    
                    {/* Hover arrow for non-active pages */}
                    {pathname !== item.href && (
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-green-600 font-bold">
                        →
                      </span>
                    )}
                  </div>
                  
                  {/* Bottom highlight line */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 rounded-full ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-6'
                  }`}></span>
                </Link>
              ))}
            </div>
            
            {/* Bottom accent gradient */}
            <div className="h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-30"></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
