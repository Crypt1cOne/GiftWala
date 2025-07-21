import { useState } from 'react';
import { CartItem, Product } from '../types';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, customization?: any) => {
    const cartItem: CartItem = {
      ...product,
      quantity: customization?.quantity || 1,
      selectedSize: customization?.selectedSize || product.sizes[0],
      selectedMaterial: customization?.selectedMaterial || product.materials[0],
      customImage: customization?.customImage
    };

    setCartItems(prev => {
      const existingItem = prev.find(item => 
        item.id === product.id && 
        item.selectedSize === cartItem.selectedSize &&
        item.selectedMaterial === cartItem.selectedMaterial
      );

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && 
          item.selectedSize === cartItem.selectedSize &&
          item.selectedMaterial === cartItem.selectedMaterial
            ? { ...item, quantity: item.quantity + cartItem.quantity }
            : item
        );
      }

      return [...prev, cartItem];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    getTotalItems,
    getTotalPrice
  };
};