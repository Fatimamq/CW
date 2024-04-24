import React, { useState } from 'react';

function Tracking() {
  const [trackingId, setTrackingId] = useState('');
  const [isMapVisible, setIsMapVisible] = useState(false);

  // Function to generate a new tracking ID (dummy implementation)
  const generateTrackingId = () => {
    // Here you can call your backend API to generate a tracking ID
    const newTrackingId = Math.random().toString(36).substr(2, 9); // Dummy ID generation
    setTrackingId(newTrackingId);
  };

  const showMap = () => {
    // Here you can navigate to the map component or show/hide it as needed
    setIsMapVisible(true);
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-grow">
        <div className="h-full bg-cover bg-center" style={{ backgroundImage: "url('homepage.jpg')" }}>
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-bold mb-4">Tracking Services</h1>
            <h2 style={{color:'white' , fontWeight: 'bold'}}>Clear Waste keeps you connected with hassle-free tracking services. Stay updated on your waste management solutions effortlessly. Our intuitive platform ensures you're always in the know about collection schedules and progress. With Clear Waste, managing your waste has never been easier or more transparent.</h2>
            <br/>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={generateTrackingId}
            >
              Generate Tracking ID
            </button>
            {trackingId && (
              <div className="mb-4">
                <p className="font-bold">Your Tracking ID:</p>
                <p className="bg-gray-200 py-2 px-4 rounded">{trackingId}</p>
              </div>
            )}
            {trackingId && (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={showMap}
              >
                Track Here
              </button>
            )}
            {isMapVisible && (
              <div className="mt-8">
                {/* Your map component goes here */}
                <p>Map of Tracking</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracking;