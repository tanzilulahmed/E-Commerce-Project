import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, price }) => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({id:0, name: "", price: "", quantity: 0 });
  const [counter, setCounter] = useState(0); 

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
    alert("Prodct has been added to your cart");
  };

  const handleNavigate =()=>{
    navigate('/product-page')
  }

  const setLocalSto = (product) => {

    // getting existing products from local storage
    const existingProductsString = localStorage.getItem("products");
    let existingProducts = existingProductsString
      ? JSON.parse(existingProductsString)
      : [];
    
    const existingProductIndex = existingProducts.findIndex(
      (existingProduct) => existingProduct.id === product.id
    );
  
    if (existingProductIndex !== -1) {
      existingProducts[existingProductIndex].quantity += 1;
    } else {
      existingProducts = [...existingProducts, product];
    }
  
    localStorage.setItem("products", JSON.stringify(existingProducts));
  };
  
  useEffect(() => {
    const storedProductsString = localStorage.getItem("products");
    const storedProducts = storedProductsString
      ? JSON.parse(storedProductsString)
      : [];
  }, []);

  return (
    <div className="container sm:w-80 sm:h-auto w-40 h-auto bg-gray-100 m-auto sm:mb-10 mb-4 sm:pt-2 pt-1 sm:pb-6 pb-2 rounded-xl cursor-default shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105" >
      <div className="upperDiv  sm:w-11/12 sm:h-64 w-11/12 h-32 bg-pink-100 m-auto sm:my-2 rounded-xl" onClick={handleNavigate}>
        <div className="imgDiv w-full h-full pb-3"> 
        <img src='https://picsum.photos/400/400' alt='' /></div>
      </div>
      <div className="lowerDiv pt-10 sm:w-11/12 w-11/12 m-auto">
        <div className="title">
          <h1 className="sm:text-2xl text-sm">{name}</h1>
        </div>
        <div className="price-wishlist  flex place-content-between items-center sm:mb-2">
          <h2 className="price sm:text-xl text-xs">{price}</h2>
          <a href="">
            <i className="ri-heart-2-line w-1/3 sm:text-lg text-xs font-thin"></i>
          </a>
        </div>
        <div
          className="add-to-cart flex w-9/12 cursor-pointer bg-black justify-center items-center gap-4 text-white rounded-3xl sm:p-2 p-0.5 m-auto shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
          onClick={handleClick}
        >
          <a href="">
            <i className="ri-shopping-cart-fill sm:text-base text-xs font-thin "></i>
          </a>
          <h3 className="sm:text-lg text-xs" onClick={handleClick}>Add to cart</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;