import React, { useState } from 'react';

const Share = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Share
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Share Options</h2>
            <p>Share via:</p>
            <div className="flex mt-2">
              {/* Add your share options/icons here */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                Facebook
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Twitter
              </button>
            </div>
            <button className="mt-4" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
