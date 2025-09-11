'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { 
  TruckIcon,
  CurrencyDollarIcon,
  UsersIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function Distributors() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    location: '',
    annualVolume: '',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        businessType: '',
        location: '',
        annualVolume: '',
        experience: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  const benefits = [
    {
      icon: <CurrencyDollarIcon className="h-8 w-8" />,
      title: "Competitive Wholesale Pricing",
      description: "Tiered pricing structure with volume discounts up to 40% off retail prices"
    },
    {
      icon: <TruckIcon className="h-8 w-8" />,
      title: "Flexible Shipping Options",
      description: "Free shipping on orders over $500, expedited delivery, and custom logistics solutions"
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: "Dedicated Account Management",
      description: "Personal account manager to handle orders, questions, and business development"
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: "Marketing Support",
      description: "Product training, marketing materials, and promotional support for your business"
    }
  ];

  const pricingTiers = [
    {
      tier: "Starter",
      minimum: "$500",
      discount: "15%",
      features: [
        "15% discount on all products",
        "Free shipping on orders $500+",
        "Monthly payment terms",
        "Basic marketing materials"
      ]
    },
    {
      tier: "Professional",
      minimum: "$2,500",
      discount: "25%",
      features: [
        "25% discount on all products",
        "Free shipping on all orders",
        "45-day payment terms",
        "Custom packaging options",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      tier: "Enterprise",
      minimum: "$10,000",
      discount: "40%",
      features: [
        "40% discount on all products",
        "Priority shipping and handling",
        "60-day payment terms",
        "Private labeling available",
        "Custom product development",
        "Exclusive territory rights"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Mediterranean Gourmet Foods",
      location: "California, USA",
      testimonial: "SpiceWorld's wholesale program has been instrumental in our growth. Their quality is unmatched and their support team is always responsive.",
      rating: 5,
      volume: "Enterprise Partner",
      logo: "🏪"
    },
    {
      name: "Chef's Corner Supply",
      location: "Texas, USA", 
      testimonial: "We've been working with SpiceWorld for 3 years. Their competitive pricing and reliable delivery keep our restaurant clients happy.",
      rating: 5,
      volume: "Professional Partner",
      logo: "👨‍🍳"
    },
    {
      name: "Organic Market Co.",
      location: "New York, USA",
      testimonial: "The organic spice selection is amazing. Our customers love the quality and our margins are healthy with their wholesale pricing.",
      rating: 5,
      volume: "Professional Partner", 
      logo: "🛒"
    }
  ];

  const clients = [
    { name: "Restaurant Group International", type: "Restaurant Chain" },
    { name: "Gourmet Foods Inc.", type: "Food Distributor" },
    { name: "Organic Market Co.", type: "Retail Chain" },
    { name: "Chef Supply Solutions", type: "Food Service" },
    { name: "Spice & Everything Nice", type: "Specialty Store" },
    { name: "Global Foods Distribution", type: "Import/Export" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Partner with <span className="text-amber-400">SpiceWorld</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Join our exclusive distributor network and offer your customers 
                the world's finest spices with attractive wholesale pricing and 
                comprehensive business support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#registration"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-600 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Become a Partner
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#pricing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200 inline-flex items-center justify-center"
                >
                  View Pricing
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-white/10 rounded-3xl backdrop-blur-sm p-12 flex items-center justify-center">
                <div className="text-9xl">🤝</div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-amber-500">SpiceWorld</span> as Your Partner?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've been building successful partnerships with distributors, restaurants, 
              and retailers worldwide for over 35 years. Our comprehensive program is 
              designed to help your business grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-green-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bulk <span className="text-green-600">Pricing</span> Tiers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our tiered pricing structure rewards larger volume purchases with better margins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white border-2 rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-green-500 shadow-2xl scale-105' 
                    : 'border-gray-200 shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {tier.discount} OFF
                  </div>
                  <p className="text-gray-600">Minimum order: {tier.minimum}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    tier.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-green-600">Partners</span> Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from successful partners who've grown their businesses with SpiceWorld
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.logo}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1">
                      {testimonial.volume}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-amber-400">Partnership</span>?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful partners worldwide and start offering 
              premium spices to your customers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#registration"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-600 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Apply Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200 inline-flex items-center justify-center"
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
