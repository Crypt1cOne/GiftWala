import React from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
            <Heart className="h-5 w-5 text-gray-600 hover:text-rose-500 transition-colors duration-200" />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {product.subcategory}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            <button
              onClick={() => onViewDetails(product)}
              className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
            >
              <Eye className="h-4 w-4" />
              <span>View</span>
            </button>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-rose-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            <span className="text-sm text-gray-500">onwards</span>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-amber-400 rounded-full text-xs"></div>
            ))}
            <span className="text-sm text-gray-500 ml-1">(4.8)</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.sizes.slice(0, 3).map((size, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
              {size}
            </span>
          ))}
          {product.sizes.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
              +{product.sizes.length - 3}
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
          >
            Customize
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-200 text-sm font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};