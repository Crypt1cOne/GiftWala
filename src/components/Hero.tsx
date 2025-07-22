import React from 'react';
import { Gift, Star, Heart, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fadeInUp">
            <div className="flex justify-center lg:justify-start items-center space-x-2 mb-6">
              <Gift className="h-8 w-8 text-rose-500 animate-bounce" />
              <span className="text-rose-600 font-medium text-lg">Personalized Gifts</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Make Every
              <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                Gift Special
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Create memorable moments with our wide range of personalized gifts. 
              From custom mugs to photo frames, make every gift unique and meaningful.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Shop Now
              </button>
              <button className="border-2 border-rose-500 text-rose-500 px-8 py-3 rounded-lg font-semibold hover:bg-rose-500 hover:text-white transition-all duration-200">
                View Catalog
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center group">
                <div className="bg-white rounded-full p-3 mx-auto mb-2 shadow-md group-hover:shadow-lg transition-shadow duration-200 w-fit">
                  <Star className="h-6 w-6 text-amber-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">Premium Quality</p>
              </div>
              <div className="text-center group">
                <div className="bg-white rounded-full p-3 mx-auto mb-2 shadow-md group-hover:shadow-lg transition-shadow duration-200 w-fit">
                  <Heart className="h-6 w-6 text-rose-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">Made with Love</p>
              </div>
              <div className="text-center group">
                <div className="bg-white rounded-full p-3 mx-auto mb-2 shadow-md group-hover:shadow-lg transition-shadow duration-200 w-fit">
                  <Zap className="h-6 w-6 text-emerald-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">Fast Delivery</p>
              </div>
            </div>
          </div>

          {/* Right content - Image showcase */}
          <div className="relative animate-fadeInUp delay-300">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Personalized Mug"
                    className="w-full h-40 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Custom Keychain"
                    className="w-full h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 delay-100"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Photo Frame"
                    className="w-full h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 delay-200"
                  />
                  <img 
                    src="https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Wall Clock"
                    className="w-full h-40 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 delay-300"
                  />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
              New!
            </div>
            <div className="absolute bottom-4 -left-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
              Free Design
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-orange-200 rounded-full opacity-20 animate-float delay-2000"></div>
      </div>
    </div>
  );
};