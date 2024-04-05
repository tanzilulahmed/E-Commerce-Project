import React from 'react'

const productPage = () => {
  return (
    <>
 <div className='productpage flex p-8 h-screen'>
  {/* Left Side - Product Image and Similar Products */}
  <div className='left w-6/12 pr-8'>
    {/* Main Product Image */}
    <div className='img w-full mb-4'>
      <img src='https://picsum.photos/500/500' alt='' className='w-full h-50 object-cover mb-4' />
      <div className='text-center'>
        <a href='#' className='text-black-500  hover:text-blue-700'>View More Pictures <i class="ri-arrow-right-double-fill hover:text-blue-700"></i></a>
      </div>
    </div>
    
    {/* Similar Products Title */}
    <div className='text-xl font-semibold mb-4'>Similar Products</div>

    {/* More Similar Products */}
    <div className='similar-products flex flex-wrap justify-between'>
      <div className='similar-product w-1/4 mb-4'>
        <img src='https://picsum.photos/100/100' alt='' className='w-full h-full object-cover mb-2' />
        <div className='text-sm font-semibold'>Product 1</div>
      </div>
      <div className='similar-product w-1/4 mb-4'>
        <img src='https://picsum.photos/100/100' alt='' className='w-full h-full object-cover mb-2' />
        <div className='text-sm font-semibold'>Product 2</div>
      </div>
      <div className='similar-product w-1/4 mb-4'>
        <img src='https://picsum.photos/100/100' alt='' className='w-full h-full object-cover mb-2' />
        <div className='text-sm font-semibold'>Product 3</div>
      </div>
    </div>
  </div>

  {/* Right Side - Product Details */}
  <div className='right w-6/12 p-8'>
    <div className='title text-4xl mt-8 mb-4'>Product Title</div>
    
    {/* Discount Percent */}
    <div className='discount mb-4'>
      <span className='bg-red-500 text-white px-2 py-1 rounded'>
        27% Off
      </span>
    </div>
    
    <div className='price mt-4 text-3xl font-semibold'>
      <span className='text-gray-500 text-xl line-through mr-2'>$550</span>
      $401
    </div>
    
    <div className='desc mt-4 mb-8'>
      <p className='text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        non? Molestiae optio eius voluptas architecto repudiandae sed
        iusto deserunt! Doloribus mollitia praesentium vero sunt?
      </p>
    </div>

    {/* Ratings and Reviews */}
    <div className='ratings-reviews flex items-center mb-8'>
      
      
      {/* Quantity */}
      <div className='quantity flex items-center mr-4'>
        <button className='text-xl px-3 py-1 border rounded-l-xl focus:outline-none focus:border-pink-500'>
          -
        </button>
        <span className='px-3 py-1 border-t border-b'>
          1
        </span>
        <button className='text-xl px-3 py-1 border rounded-r-xl focus:outline-none focus:border-pink-500'>
          +
        </button>
      </div>

      {/* Wishlist and Buy Now Buttons */}
      <div className='wishlist-buy flex items-center'>
        <button className='wishlist bg-pink-100 p-3 text-sm rounded-full border-2 border-pink-200 mr-4 hover:bg-pink-200 hover:border-pink-300 transition duration-300'>
        Add to Wishlist  <span className='ri-heart-fill text-red-500 '></span> 
        </button>
        <button className='buy-now bg-blue-100 p-3 text-sm rounded-full border-2 border-blue-200 hover:bg-blue-200 hover:border-blue-300 transition duration-300'>
          Buy Now <i class="ri-shopping-cart-line"></i>
        </button>
      </div>
    </div>
    
    {/* Reviews Section */}
    <div className='reviews mt-8'>
      <div className='title text-2xl font-semibold mb-4'>Reviews</div>

      <div className='ratings mr-4'>
      
        <span className='text-xl text-gray-500 ml-2'>(3 Reviews)</span>
      </div>
      
      {/* Individual Review */}
      <div className='review mb-4'>
        <div className='user-rating flex items-center mb-2'>
          <span className='ri-star-fill text-yellow-400'></span>
          <span className='ri-star-fill text-yellow-400'></span>
          <span className='ri-star-fill text-yellow-400'></span>
          <span className='ri-star-line text-yellow-400'></span>
          <span className='ri-star-line text-yellow-400'></span>
          <span className='text-xs text-gray-500 ml-2'>by User 1</span>
        </div>
        <p className='text-gray-600'>
          "This product is amazing! Highly recommended!"
        </p>
      </div>

      <div className='review mb-4'>
        <div className='user-rating flex items-center mb-2'>
          <span className='ri-star-fill text-yellow-400'></span>
          <span className='ri-star-fill text-yellow-400'></span>
          <span className='ri-star-line text-yellow-400'></span>
          <span className='ri-star-line text-yellow-400'></span>
          <span className='ri-star-line text-yellow-400'></span>
          <span className='text-xs text-gray-500 ml-2'>by User 2</span>
        </div>
        <p className='text-gray-600'>
          "Good product, but could be better."
        </p>
      </div>

      {/* See More Reviews */}
      <div className='see-more mt-4'>
        <a href='#' className='text-black-500  hover:text-blue-700'>See More Reviews<i class="ri-arrow-right-double-fill"></i></a>
      </div>
    </div>
  </div>
</div>



    </>
  )
}

export default productPage
