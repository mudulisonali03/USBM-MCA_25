// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup logic, you should replace it with real authentication
    if (username && password) {
      navigate('/login');
    }
  };

  return (
    <div className="w-full min-h-screen text-center p-8 bg-white shadow-md rounded-lg mx-4">
      <h2 className="text-3xl font-bold text-green-600">Sign Up</h2>
      <form className="max-w-md mx-auto mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg">Username:</label>
          <input
            type="text"
            className="p-2 w-full border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Password:</label>
          <input
            type="password"
            className="p-2 w-full border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
