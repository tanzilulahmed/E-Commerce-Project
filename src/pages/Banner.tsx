import React from 'react'

const Banner = () => {
  return (
    <div>
     <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      {/* Background Image */}
      <img
        src="https://source.unsplash.com/random"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-semibold tracking-wide mb-4">Welcome to Our Website</h1>
        <p className="text-lg font-light">A little description about our services or products.</p>
      </div>
    </div>
    </div>
  )
}

export default Banner
