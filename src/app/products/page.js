"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const itemsPerPage = 12;

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Organic Turmeric Powder",
      category: "ground",
      price: 12.99,
      originalPrice: 15.99,
      rating: 4.9,
      reviews: 127,
      image: "home_card2.jpg",
      description: "Premium golden turmeric with anti-inflammatory properties",
      origin: "India",
      isOrganic: true,
      isBestseller: true,
      inStock: true,
    },
    {
      id: 2,
      name: "Himalayan Pink Salt",
      category: "salt",
      price: 8.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 203,
      image: "home_card3.jpg",
      description: "Pure, unrefined salt from the pristine Himalayan mountains",
      origin: "Pakistan",
      isOrganic: false,
      isBestseller: true,
      inStock: true,
    },
    {
      id: 3,
      name: "Garam Masala Blend",
      category: "blends",
      price: 15.99,
      originalPrice: null,
      rating: 5.0,
      reviews: 89,
      image: "home_card1.jpg",
      description: "Authentic Indian spice blend with complex aromatic flavors",
      origin: "India",
      isOrganic: true,
      isBestseller: false,
      inStock: true,
    },
    {
      id: 4,
      name: "Ceylon Cinnamon Sticks",
      category: "whole",
      price: 18.99,
      originalPrice: 22.99,
      rating: 4.7,
      reviews: 156,
      image: "home_card2.jpg",
      description: "True Ceylon cinnamon with delicate, sweet flavor",
      origin: "Sri Lanka",
      isOrganic: true,
      isBestseller: false,
      inStock: true,
    },
    {
      id: 5,
      name: "Smoked Paprika",
      category: "ground",
      price: 11.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 94,
      image: "home_card1.jpg",
      description: "Intensely smoky Spanish paprika for authentic flavors",
      origin: "Spain",
      isOrganic: false,
      isBestseller: false,
      inStock: true,
    },
    {
      id: 6,
      name: "Black Peppercorns",
      category: "whole",
      price: 14.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 178,
      image: "home_card4.jpg",
      description: "Premium Tellicherry peppercorns with bold, complex heat",
      origin: "India",
      isOrganic: true,
      isBestseller: true,
      inStock: false,
    },
    {
      id: 7,
      name: "Mediterranean Herb Blend",
      category: "blends",
      price: 13.99,
      originalPrice: 16.99,
      rating: 4.5,
      reviews: 67,
      image: "home_card2.jpg",
      description: "Classic blend of oregano, thyme, rosemary, and basil",
      origin: "Greece",
      isOrganic: true,
      isBestseller: false,
      inStock: true,
    },
    {
      id: 8,
      name: "Star Anise Pods",
      category: "whole",
      price: 16.99,
      originalPrice: null,
      rating: 4.4,
      reviews: 45,
      image: "home_card4.jpg",
      description: "Aromatic star-shaped pods with licorice-like flavor",
      origin: "China",
      isOrganic: false,
      isBestseller: false,
      inStock: true,
    },
    {
      id: 9,
      name: "Curry Powder",
      category: "blends",
      price: 12.49,
      originalPrice: null,
      rating: 4.7,
      reviews: 112,
      image: "home_card4.jpg",
      description: "Aromatic curry blend perfect for Indian cuisine",
      origin: "India",
      isOrganic: true,
      isBestseller: false,
      inStock: true,
    },
    {
      id: 10,
      name: "Vanilla Beans",
      category: "whole",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.9,
      reviews: 87,
      image: "home_card3.jpg",
      description: "Premium Madagascar vanilla beans with rich aroma",
      origin: "Madagascar",
      isOrganic: true,
      isBestseller: true,
      inStock: true,
    },
    {
      id: 11,
      name: "Chili Powder",
      category: "ground",
      price: 9.99,
      originalPrice: null,
      rating: 4.3,
      reviews: 156,
      image: "home_card1.jpg",
      description: "Medium heat chili powder for everyday cooking",
      origin: "Mexico",
      isOrganic: false,
      isBestseller: false,
      inStock: true,
    },
    {
      id: 12,
      name: "Cardamom Pods",
      category: "whole",
      price: 21.99,
      originalPrice: 25.99,
      rating: 4.8,
      reviews: 73,
      image: "home_card3.jpg",
      description: "Aromatic green cardamom pods with sweet, floral notes",
      origin: "Guatemala",
      isOrganic: true,
      isBestseller: false,
      inStock: true,
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "whole", label: "Whole Spices" },
    { value: "ground", label: "Ground Spices" },
    { value: "blends", label: "Spice Blends" },
    { value: "salt", label: "Salts" },
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-10", label: "Under $10" },
    { value: "10-15", label: "$10 - $15" },
    { value: "15-20", label: "$15 - $20" },
    { value: "20+", label: "$20+" },
  ];

  const sortOptions = [
    { value: "name", label: "Name A-Z" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "bestseller", label: "Best Sellers" },
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesPrice =
        priceRange === "all" ||
        (() => {
          const [min, max] = priceRange
            .split("-")
            .map((p) => (p === "+" ? Infinity : parseInt(p)));
          return product.price >= min && (max ? product.price <= max : true);
        })();

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "bestseller":
          return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium <span className="text-amber-500">Spices</span> Collection
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of authentic spices sourced from
              around the world
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                <FunnelIcon className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>

            <div
              className={`space-y-6 ${
                showFilters ? "block" : "hidden lg:block"
              }`}
            >
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search spices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.value} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {category.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value={range.value}
                        checked={priceRange === range.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setPriceRange("all");
                  setSortBy("name");
                }}
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Results Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-gray-600">
                Showing {startIndex + 1}-
                {Math.min(startIndex + itemsPerPage, filteredProducts.length)}{" "}
                of {filteredProducts.length} products
              </p>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {paginatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative"
                >
                  <div className="aspect-square bg-gradient-to-br from-amber-50 to-green-50 flex items-center justify-center relative overflow-hidden">
                    {product.image.endsWith(".jpg") ? (
                      <img
                        src={`${product.image}`}
                        alt={product.name}
                        className="w-full h-full object-cover "
                      />
                    ) : (
                      <div className="text-6xl">{product.image}</div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {product.description}
                    </p>

                    <p className="text-xs text-gray-500 mb-3">
                      Origin: {product.origin}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <StarIcon className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="text-sm text-gray-600">
                          {product.rating}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-left justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-green-600">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!product.inStock}
                        className="px-4 py-2 rounded-full font-medium transition-colors duration-200 
                            bg-amber-400 text-white hover:bg-amber-500"
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? "bg-green-600 text-white"
                          : "border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setPriceRange("all");
                  }}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
