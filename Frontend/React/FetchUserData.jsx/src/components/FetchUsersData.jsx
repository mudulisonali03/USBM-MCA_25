// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchUsersData = () => {
  const [usersdata, setUsersdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsersData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsersdata(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Fetch and Display Users Data</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {usersdata.map(user => (
          <div key={user.id} className="bg-slate-200 border-2 border-black p-4 rounded-lg shadow-md">
            <p className="font-semibold">Id:
             <span className="font-normal">{user.id}</span>
            </p>
            <p className="font-semibold">Name: 
            <span className="font-normal">{user.name}</span>
            </p>
            <p className="font-semibold"> Username:
             <span className="font-normal">{user.username}</span>
            </p>
            <p className="font-semibold"> Email:
             <span className="font-normal">{user.email}</span>
            </p>
            <div className="mt-2">
              <p className="font-semibold">Address:</p>
              <p className="ml-2">City: 
              <span className="font-normal">{user.address.city}</span>
              </p>
              <p className="ml-2">Street: 
              <span className="font-normal">{user.address.street}</span>
              </p>
              <p className="ml-2">Zipcode: 
              <span className="font-normal">{user.address.zipcode}</span>
              </p>
            </div>
            <p className="font-semibold">Phone:
             <span className="font-normal">{user.phone}</span>
             </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchUsersData;
