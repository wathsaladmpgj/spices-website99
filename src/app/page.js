"use client";

import { motion } from "framer-motion";
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
      name: "Organic Turmeric Powder",
      price: "$12.99",
      image: "home_card1.jpg",
      rating: 4.9,
      description: "Premium golden turmeric with anti-inflammatory properties",
    },
    {
      name: "Himalayan Pink Salt",
      price: "$8.99",
      image: "home_card2.jpg",
      rating: 4.8,
      description: "Pure, unrefined salt from the pristine Himalayan mountains",
    },
    {
      name: "Garam Masala Blend",
      price: "$15.99",
      image: "home_card3.jpg",
      rating: 5.0,
      description: "Authentic Indian spice blend with complex aromatic flavors",
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <div
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
            </div>

            <div
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
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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
                      {product.price}
                    </span>
                    <button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-amber-400 text-white px-4 py-2 rounded-full font-medium hover:bg-amber-500 transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
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
              </div>
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
                <a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <span className="text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
