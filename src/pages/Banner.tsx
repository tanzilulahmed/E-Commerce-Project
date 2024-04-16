import React from 'react';

const Banner = () => {
  return (
    <div 
      className="relative h-64 md:h-80 lg:h-96 xl:h-112 2xl:h-128"
      style={{ backgroundColor: '#00FF00' }} // Green color code
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-semibold tracking-wide mb-4">Welcome to GROW</h1>
        <p className="text-lg font-light">Harvesting Nature's Bounty, Delivered to Your Doorstep</p>
      </div>
    </div>
  );
}

export default Banner;

