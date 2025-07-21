import React from 'react';
import { Gift, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                GiftWala
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating memorable moments with personalized gifts. From custom mugs to photo frames, 
              we help you express your feelings through unique and meaningful presents.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Custom Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Personalized Mugs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Custom Keychains</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Photo Frames</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">MDF Items</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Wall Clocks</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rose-500" />
                <span className="text-gray-300">info@giftwala.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-500" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-rose-500" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-rose-500 text-white"
                />
                <button className="bg-rose-500 px-4 py-2 rounded-r-lg hover:bg-rose-600 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 GiftWala. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Return Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};