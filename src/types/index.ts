export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  sizes: string[];
  materials: string[];
  image: string;
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedMaterial: string;
  customImage?: File;
}

export interface Category {
  id: string;
  name: string;
  subcategories: string[];
  icon: string;
}