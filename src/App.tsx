import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { CartSidebar } from './components/CartSidebar';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { useCart } from './hooks/useCart';
import { Product } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    getTotalItems
  } = useCart();

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const handleProductView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product, customization?: any) => {
    addToCart(product, customization);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />
      
      <Hero />
      
      <Categories
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory ? 'Filtered Products' : 'Featured Products'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {selectedCategory 
                ? `Showing ${filteredProducts.length} products${searchQuery ? ` for "${searchQuery}"` : ''}`
                : 'Discover our most popular personalized gifts'
              }
            </p>
          </div>
          
          <ProductGrid
            products={filteredProducts}
            onViewDetails={handleProductView}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      <Footer />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

export default App;