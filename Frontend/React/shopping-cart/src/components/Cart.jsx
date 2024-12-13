import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productId, e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity >= 1) {
      updateQuantity(productId, quantity);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border-b border-gray-300">
              <div className="flex items-center space-x-4">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price} x {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {/* Quantity Input */}
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                  className="w-16 p-2 border rounded-md text-center"
                />
                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center font-semibold text-xl">
            <p>Total:</p>
            <p>${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
