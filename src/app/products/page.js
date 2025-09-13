"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { products, categories } from "../../data/products";
import { WHATSAPP_CONFIG } from "../../config/whatsapp";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  
  // Modal states
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 12;

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

  // Modal functions
  const openProductModal = (product) => {
    try {
      console.log("Attempting to open modal for product:", product.name);
      setSelectedProduct(product);
      
      // Handle weight options
      if (product.weightOptions && product.weightOptions.length > 0) {
        console.log("Setting weight options:", product.weightOptions[0]);
        setSelectedWeight(product.weightOptions[0].weight);
        setSelectedPrice(product.weightOptions[0].originalPrice);
        setSelectedPrice(product.weightOptions[0].price);
      } else {
        console.log("No weight options, using defaults");
        setSelectedWeight("100g"); // Default weight
        setSelectedPrice(product.price);
      }
      
      console.log("Opening modal...");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error opening modal:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setSelectedWeight(null);
    setSelectedPrice(null);
  };

  const handleWeightChange = (weight, price) => {
    setSelectedWeight(weight);
    setSelectedPrice(price);
  };

  const sendToWhatsApp = () => {
    console.log("WhatsApp button clicked");
    console.log("Selected product:", selectedProduct?.name);
    console.log("Selected weight:", selectedWeight);
    console.log("Selected price:", selectedPrice);
    
    if (!selectedProduct || !selectedPrice) {
      console.error("Missing required data for WhatsApp");
      return;
    }
    
    try {
      const weight = selectedWeight || "100g";
      const message = WHATSAPP_CONFIG.messageTemplate(
        selectedProduct.name,
        weight,
        selectedPrice
      );
      
      console.log("Generated message:", message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
      console.log("WhatsApp URL:", whatsappUrl);
      
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.error("Error sending to WhatsApp:", error);
    }
  };

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
            <div className="space-y-6">
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
                  onClick={() => openProductModal(product)}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative cursor-pointer"
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
                          Rs:{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            Rs:{product.originalPrice}
                          </span>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!product.inStock}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log("Button clicked for:", product.name);
                          openProductModal(product);
                        }}
                        className="px-4 py-2 rounded-full font-medium transition-colors duration-200  
                            bg-amber-400 text-white hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {product.inStock ? "View Details" : "Out of Stock"}
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

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            // Close modal if clicking on backdrop
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-green-50 rounded-xl overflow-hidden">
                  {selectedProduct.image.endsWith(".jpg") ? (
                    <img
                      src={`${selectedProduct.image}`}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-8xl">
                      {selectedProduct.image}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProduct.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        <StarIcon className="h-5 w-5 text-amber-400 fill-current" />
                        <span className="text-lg font-medium">{selectedProduct.rating}</span>
                        <span className="text-gray-500">({selectedProduct.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {selectedProduct.detailedDescription || selectedProduct.description}
                  </p>

                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Origin: {selectedProduct.origin}</span>
                    {selectedProduct.isOrganic && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        Organic
                      </span>
                    )}
                  </div>

                  {/* Weight Selection */}
                  {selectedProduct.weightOptions && selectedProduct.weightOptions.length > 0 ? (
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-3">
                        Select Weight:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProduct.weightOptions.map((option) => (
                          <button
                            key={option.weight}
                            onClick={() => handleWeightChange(option.weight, option.price,option.originalPrice)}
                            className={`p-3 border-2 rounded-lg text-center transition-colors ${
                              selectedWeight === option.weight
                                ? "border-green-500 bg-green-50 text-green-700"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="font-medium">{option.weight}</div>
                            <div className="flex gap-3">
                              <div className="text-sm text-gray-600">Rs:{option.price}</div>
                              <div className="text-sm text-gray-500 line-through">Rs:{option.originalPrice}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-3">
                        Weight: 100g (Standard)
                      </label>
                    </div>
                  )}

                  {/* Price Display */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-medium">Total Price:</span>
                      <span className="text-2xl font-bold text-green-600">
                        Rs:{selectedPrice}
                      </span>
                    </div>

                    {/* WhatsApp Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={sendToWhatsApp}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                      </svg>
                      <span>Order via WhatsApp</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <Footer />
    </div>
  );
}
