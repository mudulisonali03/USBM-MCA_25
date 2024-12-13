import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';


const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-600 text-black p-4 text-center text-xl">
          E-Commerce Store
        </header>
        <ProductGrid />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
