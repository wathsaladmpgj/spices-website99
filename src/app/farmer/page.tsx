"use client";

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

export default function FarmerSupport() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 flex items-center justify-center bg-gradient-to-br from-green-100 to-amber-50">
        <img
          src="/sustanability.jpg"
          alt="Farmer Support"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 drop-shadow-lg">
            Empowering Farmers
          </h1>
          <p className="text-lg text-green-800 max-w-xl mx-auto">
            We believe in supporting local farmers to build a sustainable future for Sri Lanka's spice industry.
          </p>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-green-50 rounded-xl shadow-md p-8"
        >
          <h2 className="text-2xl font-bold text-green-900 mb-4">Our Farmer Support Initiatives</h2>
          <ul className="list-disc pl-6 text-green-800 space-y-2 mb-6">
            <li>Fair pricing and direct trade with local farmers</li>
            <li>Training programs for sustainable farming practices</li>
            <li>Access to modern equipment and organic certification</li>
            <li>Community development and education support</li>
            <li>Guaranteed purchase agreements for quality crops</li>
          </ul>
          <p className="text-green-700 mb-4">
            We work hand-in-hand with farmers to ensure they receive the support, resources, and recognition they deserve. Our mission is to uplift rural communities and promote ethical, sustainable agriculture.
          </p>
        </motion.div>

        {/* Farmer Image & Supply Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow p-6"
        >
          <img
            src="/farmer.jpg"
            alt="Sri Lankan Farmer"
            className="w-64 h-64 object-cover rounded-full border-4 border-green-200 shadow-md mb-6 md:mb-0"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-green-900 mb-2">How Farmers Give Spices to Us</h3>
            <p className="text-green-800 mb-2">
              Our trusted network of farmers handpick and deliver the freshest spices directly to our facilities. We ensure every batch is ethically sourced, fairly traded, and meets our high standards for quality and sustainability.
            </p>
            <ul className="list-disc pl-6 text-green-700 space-y-1">
              <li>Farmers harvest spices at peak freshness</li>
              <li>Spices are carefully sorted and packed by the farmers</li>
              <li>We collect spices directly from farmer communities</li>
              <li>Each delivery is checked for quality and authenticity</li>
              <li>Farmers receive prompt payment and ongoing support</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-amber-400 py-10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-white mb-4"
          >
            Are you a farmer interested in joining our network?
          </motion.h3>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-50 transition-colors duration-200"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
