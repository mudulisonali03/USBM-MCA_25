import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalInfo from './components/Personallnfo';
import AddressInfo from './components/AddressInfo';
import ReviewSubmit from './components/ReviewSubmit';
import './index.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
  });

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<PersonalInfo formData={formData} setFormData={setFormData} />} />
          <Route path="/address" element={<AddressInfo formData={formData} setFormData={setFormData} />} />
          <Route path="/review" element={<ReviewSubmit formData={formData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
