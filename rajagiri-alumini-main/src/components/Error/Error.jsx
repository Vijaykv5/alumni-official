import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! 404 - Page Not Found</h1>
        <p className="text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <button className=' my-3 py-2 px-4 bg-black text-white rounded-md ' onClick={()=>{navigate('/')}}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default Error;
