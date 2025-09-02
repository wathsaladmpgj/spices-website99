'use client';

import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Distributors', href: '/distributors' },
  ];

  const productCategories = [
    { name: 'Whole Spices', href: '/products?category=whole' },
    { name: 'Ground Spices', href: '/products?category=ground' },
    { name: 'Spice Blends', href: '/products?category=blends' },
    { name: 'Organic Spices', href: '/products?category=organic' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-yellow to-primary-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">SpiceWorld</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Premium quality spices sourced from around the world. 
              Bringing authentic flavors to your kitchen since 1985.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPinIcon className="h-4 w-4 text-primary-yellow" />
                <span>217/B,1,Baduwatta,Eheliyagoda</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <PhoneIcon className="h-4 w-4 text-primary-yellow" />
                <span>077 9201422</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <EnvelopeIcon className="h-4 w-4 text-primary-yellow" />
                <span>moonsproductsc@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-yellow">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-yellow">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-yellow">Business Hours</h3>
            <div className="space-y-1 text-sm text-gray-300 mb-6">
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-4 w-4 text-primary-yellow" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="ml-6">
                <span>Saturday: 9:00 AM - 4:00 PM</span>
              </div>
              <div className="ml-6">
                <span>Sunday: Closed</span>
              </div>
            </div>
            
            <h4 className="text-md font-semibold mb-3 text-primary-yellow">Follow Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-primary-green rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} SpiceWorld. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-yellow text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-yellow text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary-yellow text-sm transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
