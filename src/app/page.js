"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState("");
  const features = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Premium Quality",
      description:
        "Hand-picked spices sourced directly from origin farms worldwide",
    },
    {
      icon: <TruckIcon className="h-8 w-8" />,
      title: "Fast Delivery",
      description:
        "Quick and secure delivery to your doorstep within 2-3 business days",
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: "Upcountry sources",
      description: "Authentic spices from the highlands of Sri Lanka.",
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8" />,
      title: "Quality Assured",
      description:
        "Rigorous testing ensures freshness and purity in every package",
    },
  ];

  const featuredProducts = [
    {
    id: 1,
    name: "Curry Powder",
    category: "chilli",
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.9,
    reviews: 127,
    image: "home_card2.jpg",
    description: "Premium golden turmeric with anti-inflammatory properties",
    detailedDescription: "Our premium organic turmeric powder is sourced from the fertile soils of India. Rich in curcumin, this golden spice offers powerful anti-inflammatory and antioxidant properties. Perfect for curries, golden milk, and health-conscious cooking.",
    origin: "India",
    isOrganic: true,
    isBestseller: true,
    inStock: true,
    weightOptions: [
      { weight: "50g", price: 8.99 },
      { weight: "100g", price: 12.99 },
      { weight: "250g", price: 24.99 },
      { weight: "500g", price: 39.99 }
    ]
  },
    {
    id: 2,
    name: "Meat Curry Masala",
    category: "salt",
    price: 8.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 203,
    image: "home_card3.jpg",
    description: "Pure, unrefined salt from the pristine Himalayan mountains",
    detailedDescription: "Harvested from ancient sea salt deposits in the Himalayan mountains, this pink salt is rich in minerals and offers a subtle, complex flavor. Perfect for finishing dishes or everyday cooking.",
    origin: "Pakistan",
    isOrganic: false,
    isBestseller: true,
    inStock: true,
    weightOptions: [
      { weight: "100g", price: 8.99 },
      { weight: "250g", price: 16.99 },
      { weight: "500g", price: 28.99 },
      { weight: "1kg", price: 45.99 }
    ]
  },
    {
    id: 3,
    name: "Biriyani Masala",
    category: "blends",
    price: 15.99,
    originalPrice: null,
    rating: 5.0,
    reviews: 89,
    image: "home_card1.jpg",
    description: "Authentic Indian spice blend with complex aromatic flavors",
    detailedDescription: "A traditional blend of warming spices including cardamom, cinnamon, cloves, and black pepper. This aromatic mixture adds depth and complexity to curries, rice dishes, and roasted meats.",
    origin: "India",
    isOrganic: true,
    isBestseller: false,
    inStock: true,
    weightOptions: [
      { weight: "50g", price: 12.99 },
      { weight: "100g", price: 15.99 },
      { weight: "200g", price: 28.99 }
    ]
  },
  {
    id: 4,
    name: "Fish Curry Masala",
    category: "whole",
    price: 18.99,
    originalPrice: 22.99,
    rating: 4.7,
    reviews: 156,
    image: "home_card2.jpg",
    description: "True Ceylon cinnamon with delicate, sweet flavor",
    detailedDescription: "Authentic Ceylon cinnamon sticks from Sri Lanka, known for their delicate, sweet flavor and thin bark. Perfect for infusing teas, mulled wine, or adding to desserts and savory dishes.",
    origin: "Sri Lanka",
    isOrganic: true,
    isBestseller: false,
    inStock: true,
    weightOptions: [
      { weight: "50g", price: 15.99 },
      { weight: "100g", price: 18.99 },
      { weight: "200g", price: 32.99 }
    ]
  },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Chef",
      content:
        "The quality of spices from SpiceWorld is exceptional. My dishes have never tasted better!",
      rating: 5,
    },
    {
      name: "Chef Martinez",
      role: "Restaurant Owner",
      content:
        "We've been using SpiceWorld for our restaurant for 3 years. Consistent quality every time.",
      rating: 5,
    },
    {
      name: "Emma Chen",
      role: "Food Blogger",
      content:
        "Their organic collection is amazing. You can really taste the difference in freshness.",
      rating: 5,
    },
  ];

  const whyChooseUs = [
    "Strong partnerships with trusted farmers across Sri Lanka",
    "Strict quality control to ensure freshness and purity",
    "Sustainable and eco-friendly packaging practices",
    "Expert culinary guidance and recipes",
    "Competitive wholesale pricing",
    "24/7 customer support",
  ];

  // Function to calculate price based on weight
  const getWeightPrice = (weight) => {
    const basePrice = parseFloat(selectedProduct?.price?.replace('$', '') || 0);
    const weightMultipliers = {
      '50g': 1,
      '100g': 1.8,
      '250g': 4.2,
      '500g': 7.5,
      '1kg': 14
    };
    return (basePrice * (weightMultipliers[weight] || 1)).toFixed(2);
  };

  // Function to send order to WhatsApp
  const sendToWhatsApp = () => {
    if (!selectedProduct || !selectedWeight) return;
    
    let price = '0.00';
    
    // Use weightOptions if available, otherwise calculate based on base price
    if (selectedProduct.weightOptions) {
      const option = selectedProduct.weightOptions.find(opt => opt.weight === selectedWeight);
      price = option ? option.price.toFixed(2) : '0.00';
    } else {
      // Fallback calculation for products without weightOptions
      const basePrice = selectedProduct.price || 12.99;
      const weightMultipliers = {
        '100g': 1,
        '250g': 2.2,
        '500g': 4.5
      };
      price = (basePrice * (weightMultipliers[selectedWeight] || 1)).toFixed(2);
    }
    
    const message = `Hi! I'd like to order:

Product: ${selectedProduct.name}
Weight: ${selectedWeight}
Price: Rs:${price}
${selectedProduct.origin ? `Origin: ${selectedProduct.origin}` : ''}
${selectedProduct.isOrganic ? 'Organic: Yes' : ''}

Please let me know about availability and delivery options.`;

    const phoneNumber = "+94711519402"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center  bg-no-repeat"
          style={{
            backgroundImage: "url('/home_card2.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white/70 to-green-50/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Premium
              <span className="text-green-600 block">Spices</span>
              <span className="text-amber-500">Worldwide</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover authentic flavors from around the globe. Our premium
              spices bring restaurant-quality taste to your home kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-200 inline-flex items-center"
                >
                  Shop Now
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-200"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Spice Elements */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-amber-400 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute top-1/3 right-1/4 w-12 h-12 bg-green-500 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-orange-500 rounded-full opacity-15 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-1">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img
                    src="home_card4.jpg"
                    alt="SpiceWorld heritage and quality"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-60 animate-pulse-slow"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-green-600">5+ Years</span> of Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2019, SpiceWorld has been proudly delivering authentic Sri
                Lankan spices straight from local farms to your kitchen. We're
                passionate about preserving traditional flavors while
                maintaining the highest quality standards.
              </p>
              <ul className="space-y-3 mb-8">
                {whyChooseUs.slice(0, 3).map((reason, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 inline-flex items-center"
              >
                Learn More About Us
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
            >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-amber-500">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular spices, loved by home cooks and
            professional chefs alike
          </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-green-50 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
              </div>
              <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <div className="flex items-center space-x-1">
                <StarIcon className="h-4 w-4 text-amber-400 fill-current" />
                <span className="text-sm text-gray-600">
              {product.rating}
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">
                Rs:{product.price}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-400 text-white px-4 py-2 rounded-full font-medium hover:bg-amber-500 transition-colors duration-200"
              >
                View details
              </motion.button>
            </div>
              </div>
            </motion.div>
          ))}
            </div>

            <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center"
          >
            View All Products
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
            </div>
          </div>

          {/* Product Modal */}
          <AnimatePresence>
            {selectedProduct && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                >
            <div className="relative">
              <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
              </button>
              
              <div className="aspect-video bg-gradient-to-br from-amber-50 to-green-50 overflow-hidden rounded-t-2xl">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
              </div>
              
              <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
              <div className="flex items-center space-x-2">
                <StarIcon className="h-5 w-5 text-amber-400 fill-current" />
                <span className="text-gray-600">{selectedProduct.rating}</span>
                {selectedProduct.reviews && (
                  <span className="text-sm text-gray-500">({selectedProduct.reviews} reviews)</span>
                )}
              </div>
            </div>

            {/* Product badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProduct.isOrganic && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Organic
                </span>
              )}
              {selectedProduct.isBestseller && (
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Bestseller
                </span>
              )}
              {selectedProduct.origin && (
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Origin: {selectedProduct.origin}
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-6">
              {selectedProduct.detailedDescription || selectedProduct.description}
            </p>
            
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Select Weight:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(selectedProduct.weightOptions || [
                  { weight: '100g', price: selectedProduct.price || 12.99 },
                  { weight: '250g', price: (selectedProduct.price || 12.99) * 2.2 },
                  { weight: '500g', price: (selectedProduct.price || 12.99) * 4.5 }
                ]).map((option) => (
                  <button
                    key={option.weight}
                    onClick={() => setSelectedWeight(option.weight)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                      selectedWeight === option.weight
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="font-semibold text-lg">{option.weight}</div>
                    <div className="text-sm text-gray-600">${option.price.toFixed(2)}</div>
                  </button>
                ))}
              </div>
            </div>
            
            {selectedWeight && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">Total Price:</span>
                  <span className="text-2xl font-bold text-green-600">
                    Rs:{(() => {
                      if (!selectedProduct || !selectedWeight) return '0.00';
                      
                      // Use weightOptions if available, otherwise calculate based on base price
                      if (selectedProduct.weightOptions) {
                        const option = selectedProduct.weightOptions.find(opt => opt.weight === selectedWeight);
                        return option ? option.price.toFixed(2) : '0.00';
                      } else {
                        // Fallback calculation for products without weightOptions
                        const basePrice = selectedProduct.price || 12.99;
                        const weightMultipliers = {
                          '100g': 1,
                          '250g': 2.2,
                          '500g': 4.5
                        };
                        return (basePrice * (weightMultipliers[selectedWeight] || 1)).toFixed(2);
                      }
                    })()}
                  </span>
                </div>
              </div>
            )}
            
            <div className="flex gap-4">
             
              <button
                onClick={sendToWhatsApp}
                disabled={!selectedWeight}
                className={`flex-1 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                  selectedWeight
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                </svg>
                <span>Order via WhatsApp</span>
              </button>
            </div>
              </div>
            </div>
          </motion.div>
              </div>
            )}
          </AnimatePresence>
        </section>

        {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose SpiceWorld?</h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              We're committed to bringing you the finest spices with unmatched
              quality and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-amber-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-amber-500">Customers</span> Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Bar */}
      <section className="py-8 bg-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
              Follow us for recipes & cooking tips!
            </h3>
            <div className="flex space-x-4">
              {["📘", "📷", "🐦", "💼"].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <span className="text-xl">{icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
