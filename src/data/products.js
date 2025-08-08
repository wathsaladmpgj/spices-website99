export const products = [
  {
    id: 1,
    name: "Organic Turmeric Powder",
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
    name: "Himalayan Pink Salt",
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
    name: "Garam Masala Blend",
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
    name: "Ceylon Cinnamon Sticks",
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
    detailedDescription: "Traditional Spanish smoked paprika (Pimentón de la Vera) with an intense smoky flavor. Slowly smoked over oak wood fires, this paprika adds depth and complexity to any dish.",
    origin: "Spain",
    isOrganic: false,
    isBestseller: false,
    inStock: true,
    weightOptions: [
      { weight: "75g", price: 11.99 },
      { weight: "150g", price: 19.99 },
      { weight: "300g", price: 35.99 }
    ]
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
    detailedDescription: "Premium Tellicherry black peppercorns from India's Malabar Coast. These peppercorns offer bold, complex heat with fruity undertones. Perfect for seasoning meats, vegetables, and creating fresh ground pepper.",
    origin: "India",
    isOrganic: true,
    isBestseller: true,
    inStock: true,
    weightOptions: [
      { weight: "100g", price: 14.99 },
      { weight: "200g", price: 26.99 },
      { weight: "500g", price: 59.99 }
    ]
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
    detailedDescription: "A classic Mediterranean herb blend featuring oregano, thyme, rosemary, and basil. This aromatic mixture brings the flavors of the Mediterranean to your kitchen, perfect for grilled meats, vegetables, and pasta dishes.",
    origin: "Greece",
    isOrganic: true,
    isBestseller: false,
    inStock: true,
    weightOptions: [
      { weight: "50g", price: 10.99 },
      { weight: "100g", price: 13.99 },
      { weight: "200g", price: 24.99 }
    ]
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
    detailedDescription: "Beautiful star-shaped pods from China with an intense licorice-like flavor. Essential for Asian cooking, especially Chinese five-spice powder and Vietnamese pho. Also excellent for mulled wine and baking.",
    origin: "China",
    isOrganic: false,
    isBestseller: false,
    inStock: true,
    weightOptions: [
      { weight: "50g", price: 16.99 },
      { weight: "100g", price: 29.99 },
      { weight: "200g", price: 54.99 }
    ]
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
    detailedDescription: "A fragrant blend of turmeric, coriander, cumin, fenugreek, and other aromatic spices. This curry powder brings authentic Indian flavors to your dishes and is perfect for making traditional curries, marinades, and rice dishes.",
    origin: "India",
    isOrganic: true,
    isBestseller: false,
    inStock: true,
    weightOptions: [
      { weight: "75g", price: 12.49 },
      { weight: "150g", price: 21.99 },
      { weight: "300g", price: 39.99 }
    ]
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
    detailedDescription: "Grade A Madagascar vanilla beans with an intense, sweet aroma and complex flavor profile. Perfect for baking, making vanilla extract, or adding to desserts. Each bean is plump and oily, indicating premium quality.",
    origin: "Madagascar",
    isOrganic: true,
    isBestseller: true,
    inStock: true,
    weightOptions: [
      { weight: "2 beans", price: 24.99 },
      { weight: "5 beans", price: 54.99 },
      { weight: "10 beans", price: 99.99 }
    ]
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
    detailedDescription: "A versatile blend of ground chilies with medium heat level. Perfect for adding warmth and depth to Mexican dishes, barbecue rubs, and everyday cooking. Made from carefully selected dried chilies for consistent flavor.",
    origin: "Mexico",
    isOrganic: false,
    isBestseller: false,
    inStock: true,
    weightOptions: [
      { weight: "100g", price: 9.99 },
      { weight: "250g", price: 19.99 },
      { weight: "500g", price: 34.99 }
    ]
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
    detailedDescription: "Premium green cardamom pods from Guatemala with an intensely aromatic, sweet, and floral flavor. Known as the 'Queen of Spices', cardamom is essential for chai, Indian sweets, and Scandinavian baking.",
    origin: "Guatemala",
    isOrganic: true,
    isBestseller: false,
    inStock: true,
    weightOptions: [
      { weight: "50g", price: 21.99 },
      { weight: "100g", price: 39.99 },
      { weight: "200g", price: 69.99 }
    ]
  },
];

export const categories = [
  { value: "all", label: "All Catagory" },
  { value: "chilli", label: "Chilli Product" },
  { value: "curry", label: "Curry & Masala Powders" },
  { value: "whole", label: "Whole Spices" },
  { value: "spice", label: "Spice Powers" },
  { value: "tea", label: "Tea & Coffee" },
];
