import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, price }) => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({ id: 0, name: "", price: "", quantity: 0 });
  const [counter, setCounter] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    const updatedProduct = {
      id: id,
      name: name,
      price: price,
      quantity: counter + 1,
    };
    setCounter(counter + 1);
    setProduct(updatedProduct);
    setLocalSto(updatedProduct);
    setShowPopup(true);
    setTimeout(() => { 
      setShowPopup(false);
    }, 2000);
  };

  const handleNavigate = () => {
    navigate('/product-page');
  }

  const setLocalSto = (product) => {
    const existingProductsString = localStorage.getItem("products");
    let existingProducts = existingProductsString ? JSON.parse(existingProductsString) : [];

    const existingProductIndex = existingProducts.findIndex((existingProduct) => existingProduct.id === product.id);

    if (existingProductIndex !== -1) {
      existingProducts[existingProductIndex].quantity += 1;
    } else {
      existingProducts = [...existingProducts, product];
    }

    localStorage.setItem("products", JSON.stringify(existingProducts));
  };

  useEffect(() => {
    const storedProductsString = localStorage.getItem("products");
    const storedProducts = storedProductsString ? JSON.parse(storedProductsString) : [];
  }, []);

  return (
    <div className="container w-full h-auto bg-gray-100 m-4 p-4 flex rounded-none cursor-default shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 relative">
      <div className="imgDiv w-2/3 h-auto bg-pink-100 relative overflow-hidden" onClick={handleNavigate}>
        <img className="object-cover w-full h-full" src='https://picsum.photos/400/400' alt='' />
        {showPopup && (
          <div className="popup absolute top-0 right-1 bg-green-500 text-white p-2 rounded-md">
            Added to cart
          </div>
        )}
      </div>
      <div className="contentDiv w-1/3 p-4">
        <div className="title mb-2">
          <h1 className="text-lg font-semibold">{name}</h1>
        </div>
        <div className="description mb-2">
          <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="price mb-4">
          <h2 className="text-2xl font-bold">{price}</h2>
        </div>
        <div className="rating mb-2">
          <span className="ri-star-fill text-yellow-400"></span>
          <span className="ri-star-fill text-yellow-400"></span>
          <span className="ri-star-fill text-yellow-400"></span>
          <span className="ri-star-line text-yellow-400"></span>
          <span className="ri-star-line text-yellow-400"></span>
          <p className="text-xs text-gray-500 ml-1">(3)</p>
        </div>
        <div className="reviews mb-2">
          <span className="ri-chat-3-fill text-blue-500"></span>
          <p className="text-xs text-gray-500 ml-1">(5 Reviews)</p>
        </div>
        <div className="add-to-cart flex justify-center items-center">
          <button 
            className="bg-blue-500 text-white p-2 rounded-md w-24 text-center hover:bg-blue-600 hover:shadow-lg transition duration-300 transform hover:scale-105"
            onClick={handleClick}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
