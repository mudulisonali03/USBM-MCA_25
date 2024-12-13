// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="w-full min-h-screen text-center p-8 bg-white shadow-md rounded-lg mx-4">
      <h2 className="text-3xl font-bold text-green-600">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="mt-4 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {cart.map(product => (
            <div key={product.id} className="border p-4 rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-700">${product.price}</p>
              <button 
                className="mt-2 bg-red-600 text-white py-2 px-4 rounded-md"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
