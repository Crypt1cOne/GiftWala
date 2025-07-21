import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  cartItemsCount, 
  onCartClick, 
  onSearchChange, 
  searchQuery 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                GiftWala
              </h1>
            </div>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">Home</a>
              <a href="#categories" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">Categories</a>
              <a href="#products" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">Products</a>
              <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">About</a>
              <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">Contact</a>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200"
                placeholder="Search for personalized gifts..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-rose-600 transition-colors duration-200">
              <Heart className="h-6 w-6" />
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-rose-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-rose-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <div className="relative mb-3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500"
                  placeholder="Search for gifts..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-all duration-200">Home</a>
              <a href="#categories" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-all duration-200">Categories</a>
              <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-all duration-200">Products</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-all duration-200">About</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-all duration-200">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};