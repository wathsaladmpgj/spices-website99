"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  HeartIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  const stats = [
    { number: "5+", label: "Years of Excellence" },
    { number: "15+", label: "Farmer Suport" },
    { number: "7+", label: "Distributors" },
    { number: "2K+", label: "Happy Customers" },
  ];

  const team = [
    {
      name: "Mohamed Zarook",
      role: "Founder & CEO",
      bio: "Spice expert with 40+ years of experience in global sourcing",
      image: "👨‍💼",
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Quality Control",
      bio: "Food scientist ensuring every spice meets our premium standards",
      image: "👩‍🔬",
    },
    {
      name: "Chef Ahmed Hassan",
      role: "Culinary Director",
      bio: "Master chef specializing in authentic spice blends",
      image: "👨‍🍳",
    },
    {
      name: "Lisa Chen",
      role: "Sustainability Manager",
      bio: "Leading our eco-friendly sourcing and packaging initiatives",
      image: "👩‍🌾",
    },
  ];

  const certifications = [
    {
      name: "USDA Organic",
      description: "Certified organic spices meeting strict USDA standards",
      icon: <CheckCircleIcon className="h-8 w-8" />,
    },
    {
      name: "Fair Trade Certified",
      description: "Supporting fair wages and sustainable farming practices",
      icon: <HeartIcon className="h-8 w-8" />,
    },
    {
      name: "ISO 22000",
      description: "International food safety management certification",
      icon: <ShieldCheckIcon className="h-8 w-8" />,
    },
    {
      name: "SQF Certified",
      description: "Safe Quality Food program certification for excellence",
      icon: <StarIcon className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Banner */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About <span className="text-amber-400">SpiceWorld</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Bringing the world's finest spices to your kitchen since 1985. Our
              passion for quality and authentic flavors drives everything we do.
            </p>
          </motion.div>

          {/* Floating elements - hidden on mobile */}
          <div className="hidden sm:block absolute top-10 left-4 lg:left-10 w-16 lg:w-20 h-16 lg:h-20 bg-amber-400 rounded-full opacity-20 animate-float"></div>
          <div
            className="hidden sm:block absolute bottom-10 right-4 lg:right-10 w-12 lg:w-16 h-12 lg:h-16 bg-green-400 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4"
              >
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => {
                      const element = document.getElementById(`stat-${index}`);
                      if (element) {
                        const finalNumber = parseInt(
                          stat.number.replace(/\D/g, "")
                        );
                        const suffix = stat.number.replace(/\d/g, "");
                        let current = 0;
                        const increment = finalNumber / 50;
                        const timer = setInterval(() => {
                          current += increment;
                          if (current >= finalNumber) {
                            current = finalNumber;
                            clearInterval(timer);
                          }
                          element.textContent = Math.floor(current) + suffix;
                        }, 40);
                      }
                    }}
                  >
                    <span id={`stat-${index}`}>0</span>
                  </motion.span>
                </motion.div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story
              </h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019 by Mohamed Zarook, SpiceWorld began as a small
                  family business with a simple mission: to bring authentic,
                  premium-quality spices from around the world to kitchens
                  everywhere.
                </p>
                <p>
                  What started with a single spice shop has grown into a global
                  network of trusted farmers, suppliers, and partners. We've
                  maintained our commitment to quality while expanding our reach
                  to serve both home cooks and professional chefs worldwide.
                </p>
                <p>
                  Today, we're proud to offer over 15+ premium spices sourced
                  from more than 20 cities, each one carefully selected and
                  tested to meet our exacting standards for freshness, purity,
                  and flavor.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-400 to-green-500 rounded-2xl overflow-hidden">
                <img
                  src="our_store.jpg"
                  alt="SpiceWorld story - traditional spice shop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 bg-green-100 rounded-full opacity-60 animate-pulse-slow"></div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <HeartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To connect the world through authentic flavors by sourcing the
                finest spices directly from origin farms, supporting sustainable
                farming practices, and delivering uncompromising quality to
                kitchens around the globe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 sm:p-8 rounded-2xl"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <GlobeAltIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To be the world's most trusted spice company, recognized for our
                commitment to quality, sustainability, and cultural
                authenticity, while fostering connections between communities
                through the universal language of flavor.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Meet Our <span className="text-amber-500">Team</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate experts behind SpiceWorld's commitment to quality
              and authenticity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">
                  {member.image}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  {member.role}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Sustainability & Impact */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Sustainability & <span className="text-green-600">Impact</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
            We believe in doing business responsibly. Our sustainability
            initiatives focus on supporting farming communities,
            protecting the environment, and creating positive social
            impact.
              </p>
              <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-start space-x-2 sm:space-x-3">
              <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base">
                Carbon-neutral shipping and eco-friendly packaging
              </span>
            </li>
            <li className="flex items-start space-x-2 sm:space-x-3">
              <HeartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base">
                Fair trade partnerships with farming communities
              </span>
            </li>
            <li className="flex items-start space-x-2 sm:space-x-3">
              <UserGroupIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base">
                Educational programs for sustainable farming practices
              </span>
            </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-2xl overflow-hidden">
              <img
            src="sustanability.jpg"
            alt="Sustainable farming practices and eco-friendly initiatives"
            className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 bg-green-100 rounded-full opacity-60 animate-pulse-slow"></div>
          </motion.div>
            </div>
          </div>
        </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Experience{" "}
              <span className="text-amber-400">Premium Spices</span>?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust SpiceWorld for
              their culinary adventures
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="bg-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-amber-600 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Shop Our Spices
                  <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-green-600 transition-all duration-200 justify-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
