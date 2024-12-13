import React from 'react';
import { useAuth } from '../auth';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Welcome, {user?.username}!</h1>
      <button onClick={logout} className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;