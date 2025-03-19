import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, Check } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedToCart, setAddedToCart] = useState<number[]>([]);
  
  const products: Product[] = [
    {
      id: 1,
      name: "Huey The Helicopter - Hardcover",
      description: "Premium hardcover edition with gold-embossed details",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "books"
    },
    {
      id: 2,
      name: "Huey The Helicopter - Paperback",
      description: "Affordable paperback edition for everyday reading",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      category: "books"
    },
    {
      id: 3,
      name: "Huey The Helicopter - Audiobook",
      description: "Narrated by award-winning voice actor, 45 minutes",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "digital"
    },
    {
      id: 4,
      name: "Huey Plush Toy",
      description: "Soft, huggable 12-inch plush helicopter toy",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "merchandise"
    },
    {
      id: 5,
      name: "Adventure Bundle",
      description: "Hardcover book, plush toy, and activity book",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "bundles"
    },
    {
      id: 6,
      name: "Huey Activity Book",
      description: "Coloring pages, puzzles, and games featuring Huey",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
      category: "books"
    },
  ];
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'books', name: 'Books' },
    { id: 'digital', name: 'Digital' },
    { id: 'merchandise', name: 'Merchandise' },
    { id: 'bundles', name: 'Bundles' },
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
    
  const handleAddToCart = (productId: number) => {
    setAddedToCart([...addedToCart, productId]);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setAddedToCart(addedToCart.filter(id => id !== productId));
    }, 2000);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Shop Huey's Collection</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of books and merchandise featuring Huey The Helicopter
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="p-2 bg-white rounded-full mx-1 hover:bg-primary-50 transition-colors">
                    <Eye className="h-5 w-5 text-primary-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full mx-1 hover:bg-primary-50 transition-colors">
                    <Heart className="h-5 w-5 text-primary-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary-700">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      addedToCart.includes(product.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                    }`}
                  >
                    {addedToCart.includes(product.id) ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;