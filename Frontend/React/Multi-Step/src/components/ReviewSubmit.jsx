import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewSubmit = ({ formData }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    navigate('/');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Step 3: Review and Submit</h2>
      <div className="mb-4">
        <strong>First Name:</strong> {formData.firstName}
      </div>
      <div className="mb-4">
        <strong>Last Name:</strong> {formData.lastName}
      </div>
      <div className="mb-4">
        <strong>Address:</strong> {formData.address}
      </div>
      <div className="mb-4">
        <strong>City:</strong> {formData.city}
      </div>
      <div className="mb-4">
        <strong>Zip Code:</strong> {formData.zipCode}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewSubmit;
