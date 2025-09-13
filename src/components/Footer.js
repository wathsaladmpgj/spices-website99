"use client";

import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "Facebook",
      img:"/facebook.jpeg",
      href: "https://www.facebook.com/share/15ackMYNaw/" 
    },
    {
      name: "Instagram",
      img:"/instagram.jpeg",
      href: "https://www.instagram.com/moons_products13?igsh=YzljYTk1ODg3Zg==",
    },
    { name: "WhatsApp",
      img:"/whatsapp.png",
      href: "https://wa.me/+94720484945" 
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Distributors", href: "/distributors" },
  ];

  const productCategories = [
    { name: "Chilli Products", href: "/products?categories=chilli" },
    { name: "Curry & Masala Powders", href: "/products?categories=curry" },
    { name: "Whole Spices", href: "/products?categories=whole" },
    { name: "Spice Powders", href: "/products?categories=spice" },
    { name: "Tea & Coffee", href: "/products?categories=tea" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Moonsproduct</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Premium quality spices sourced from around the world. Bringing
              authentic flavors to your kitchen since 2019.
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
                <span>moonsproductsco@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-yellow">
              Quick Links
            </h3>
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
            <h3 className="text-lg font-semibold mb-4 text-primary-yellow">
              Products
            </h3>
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
            <h3 className="text-lg font-semibold mb-4 text-primary-yellow">
              Business Hours
            </h3>
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

            <h4 className="text-md font-semibold mb-3 text-primary-yellow">
              Follow Us
            </h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-primary-green rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">
                    <img
                      src={social.img}
                      alt={social.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 items-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm items-center">
              © {currentYear} MoonsProducts™. All rights reserved. Powered by{" "}
              <a
                href="https://intelligenpro.com/"
                className="text-blue-500 hover:underline"
              >
                IntelliGenPro
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
