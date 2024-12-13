import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const productsData = [
  { id: 1, name: 'Product 1', price: 2000, image: '/images/picture1.jpg' },
  { id: 2, name: 'Product 2', price: 3000, image: '/images/picture2.jpg' },
  { id: 3, name: 'Product 2', price: 3500, image: '/images/picture4.jpg' },
  { id: 4, name: 'Product 3', price: 5000, image: '/images/picture3.jpg' },
  { id: 5, name: 'Product 4', price: 2500, image: '/images/c10.jpg' },
  { id: 6, name: 'Product 5', price: 5000, image: '/images/v1.jpg' },
  { id: 7, name: 'Product 6', price: 2000, image: '/images/v2.webp' },
  { id: 8, name: 'Product 7', price: 51000, image: '/images/sofa2.jpg' },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="ml-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
      {productsData.map((product) => (
        <div
          key={product.id}
          className="w-40 mx-auto flex flex-col p-2 border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-35 object-cover rounded-t-lg"
          />
          <div className="p-2 flex flex-col justify-between flex-grow">
            <h2 className="text-base font-semibold text-gray-800 truncate">{product.name}</h2>
            <p className="text-lg font-medium text-green-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 py-1 px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
