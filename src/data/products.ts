import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'mugs',
    name: 'Mugs',
    subcategories: ['Simple', 'Heart Handle', 'Inner Colored', 'Magic Mugs', 'Travel Mugs'],
    icon: 'Coffee'
  },
  {
    id: 'keychains',
    name: 'Keychains',
    subcategories: ['Metal', 'Acrylic', 'Wooden', 'LED', 'Photo'],
    icon: 'Key'
  },
  {
    id: 'frames',
    name: 'Photo Frames',
    subcategories: ['Wooden', 'Metal', 'Acrylic', 'Digital', 'Collage'],
    icon: 'Frame'
  },
  {
    id: 'mdfs',
    name: 'MDF Items',
    subcategories: ['Wall Art', 'Desk Items', 'Decorative', 'Functional'],
    icon: 'Square'
  },
  {
    id: 'clocks',
    name: 'Wall Clocks',
    subcategories: ['Round', 'Square', 'Custom Shape', 'Digital Display'],
    icon: 'Clock'
  }
];

export const products: Product[] = [
  // Mugs
  {
    id: 'mug-simple-001',
    name: 'Classic White Mug',
    category: 'mugs',
    subcategory: 'Simple',
    price: 299,
    sizes: ['11oz', '15oz'],
    materials: ['Ceramic', 'Porcelain'],
    image: 'https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Perfect for your morning coffee or tea. High-quality ceramic mug with smooth finish.',
    features: ['Dishwasher safe', 'Microwave safe', 'Scratch resistant', 'Fade resistant printing']
  },
  {
    id: 'mug-heart-001',
    name: 'Heart Handle Love Mug',
    category: 'mugs',
    subcategory: 'Heart Handle',
    price: 399,
    sizes: ['11oz'],
    materials: ['Ceramic'],
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Romantic heart-shaped handle mug, perfect for expressing love and affection.',
    features: ['Unique heart handle', 'Premium ceramic', 'Gift box included', 'Dishwasher safe']
  },
  {
    id: 'mug-magic-001',
    name: 'Color Changing Magic Mug',
    category: 'mugs',
    subcategory: 'Magic Mugs',
    price: 499,
    sizes: ['11oz'],
    materials: ['Ceramic with Thermochromic Coating'],
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Magical mug that reveals your photo when hot liquid is poured. Amazing gift idea!',
    features: ['Color changing effect', 'Heat sensitive coating', 'Surprise reveal', 'Special gift packaging']
  },
  
  // Keychains
  {
    id: 'keychain-metal-001',
    name: 'Premium Metal Photo Keychain',
    category: 'keychains',
    subcategory: 'Metal',
    price: 199,
    sizes: ['Small (3x2cm)', 'Medium (4x3cm)'],
    materials: ['Stainless Steel', 'Aluminum'],
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Durable metal keychain with laser engraving. Perfect for keys and bags.',
    features: ['Laser engraved', 'Rust resistant', 'Durable chain', 'Premium finish']
  },
  {
    id: 'keychain-acrylic-001',
    name: 'Crystal Clear Acrylic Keychain',
    category: 'keychains',
    subcategory: 'Acrylic',
    price: 149,
    sizes: ['Small (3x3cm)', 'Medium (4x4cm)', 'Large (5x5cm)'],
    materials: ['Acrylic'],
    image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Crystal clear acrylic keychain with vibrant photo printing. Lightweight and elegant.',
    features: ['Crystal clear', 'UV printing', 'Lightweight', 'Scratch resistant']
  },

  // Photo Frames
  {
    id: 'frame-wooden-001',
    name: 'Elegant Wooden Photo Frame',
    category: 'frames',
    subcategory: 'Wooden',
    price: 599,
    sizes: ['4x6 inch', '5x7 inch', '8x10 inch', '11x14 inch'],
    materials: ['Pine Wood', 'Oak Wood', 'Bamboo'],
    image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Beautiful handcrafted wooden frame with personalized engraving options.',
    features: ['Handcrafted wood', 'Custom engraving', 'Glass protection', 'Stand included']
  },
  {
    id: 'frame-digital-001',
    name: 'Smart Digital Photo Frame',
    category: 'frames',
    subcategory: 'Digital',
    price: 2999,
    sizes: ['7 inch', '10 inch', '15 inch'],
    materials: ['Plastic', 'Metal Frame'],
    image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=500',
    description: 'Modern digital frame with slideshow functionality. Perfect for displaying multiple memories.',
    features: ['HD display', 'WiFi connectivity', 'Remote control', 'Multiple format support']
  },

  // MDF Items
  {
    id: 'mdf-wall-001',
    name: 'Personalized MDF Wall Art',
    category: 'mdfs',
    subcategory: 'Wall Art',
    price: 799,
    sizes: ['8x10 inch', '12x16 inch', '16x20 inch'],
    materials: ['MDF Board'],
    image: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Custom MDF wall art with high-quality printing. Perfect for home decoration.',
    features: ['High-quality MDF', 'Vibrant printing', 'Ready to hang', 'Custom design']
  },
  {
    id: 'mdf-desk-001',
    name: 'MDF Desk Photo Stand',
    category: 'mdfs',
    subcategory: 'Desk Items',
    price: 399,
    sizes: ['Small (4x6 inch)', 'Medium (6x8 inch)'],
    materials: ['MDF Board'],
    image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Elegant desk photo stand made from premium MDF. Perfect for office or home.',
    features: ['Stable base', 'Premium MDF', 'Easy to clean', 'Custom printing']
  },

  // Wall Clocks
  {
    id: 'clock-round-001',
    name: 'Personalized Round Wall Clock',
    category: 'clocks',
    subcategory: 'Round',
    price: 899,
    sizes: ['8 inch', '10 inch', '12 inch'],
    materials: ['MDF', 'Acrylic', 'Glass'],
    image: 'https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Beautiful round wall clock with your personalized photo. Functional and decorative.',
    features: ['Silent movement', 'Battery operated', 'Custom photo printing', 'Wall mounting kit']
  },
  {
    id: 'clock-square-001',
    name: 'Modern Square Wall Clock',
    category: 'clocks',
    subcategory: 'Square',
    price: 999,
    sizes: ['8x8 inch', '10x10 inch', '12x12 inch'],
    materials: ['MDF', 'Metal', 'Acrylic'],
    image: 'https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Contemporary square wall clock with modern design. Perfect for modern homes.',
    features: ['Modern design', 'Precision movement', 'Easy installation', 'Durable materials']
  }
];