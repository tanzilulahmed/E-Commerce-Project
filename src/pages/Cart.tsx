import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        let totalPrice = 0;

        storedProducts.forEach(product => {
            let price = parseFloat(product.price.replace('Rs ', ''));
            let qty = product.quantity;
            let totalPriceForProduct = price * qty;
            totalPrice += totalPriceForProduct;
        });

        // Apply discount if promo code is valid
        if (promoCode === 'DISCOUNT10') {
            setDiscount((totalPrice * 10) / 100);
            totalPrice = totalPrice - discount;
        }

        // Set the cart count to localStorage
        localStorage.setItem('cartCount', storedProducts.length.toString());

        setTotalPrice(totalPrice);
        setProducts(storedProducts);
    }, [promoCode]);

    const handleQuantityChange = (index, newQty) => {
        let updatedProducts = [...products];
        updatedProducts[index].quantity = newQty;
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    };

    const handleRemoveItem = (index) => {
        let updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    };

    const tax = ((totalPrice * 18) / 100).toFixed(2);
    const finalTotal = (parseFloat(totalPrice) + parseFloat(tax) - discount).toFixed(2);

    return (
        <>
            <div className='checkoutPage w-full h-auto bg-yellow-50 flex flex-col items-center'>
                <h1 className='text-center mt-6 text-4xl pb-8 font-semibold text-gray-800'><i className="ri-shopping-bag-line"></i> MY CART</h1>

                <div className='cartPage w-full max-w-7xl h-auto bg-yellow-100 flex flex-wrap justify-between p-8 rounded-lg shadow-lg'>

                    {/* Left Side - Products */}
                    <div className='leftSection w-full md:w-7/12 h-auto bg-white p-6 rounded-lg mb-8 md:mb-0 shadow-md hover:shadow-xl transition duration-500 '>
                        <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Your Items</h2>

                        {products.map((product, index) => (
                            <div key={index} className='item bg-gray-100 h-auto flex justify-between mb-4 items-center p-4 rounded-lg shadow-md hover:shadow-xl transition duration-500 transform hover:scale-105'>
                                <div className='img w-1/5 md:w-1/4 h-full bg-yellow-400 flex justify-center items-center'>
                                    <img src='https://picsum.photos/200/200' alt={product.name} className='object-cover w-full h-full rounded-lg' />
                                </div>
                                <div className='info w-2/5 md:w-2/4 ml-4'>
                                    <h3 className='font-semibold text-lg text-gray-800'>{product.name}</h3>
                                    <p className='text-sm text-gray-600'>{product.stock ? `In Stock` : `Out of Stock`}</p>
                                </div>
                                <div className='price w-1/5 md:w-1/4 flex flex-col items-end'>
                                    <div>Price: {product.price}</div>
                                    <div>Total: Rs {(parseFloat(product.price.replace('Rs ', '')) * product.quantity).toFixed(2)}</div>
                                    <div className='flex items-center'>
                                        <span className='mr-2'>Qty:</span>
                                        <select
                                            value={product.quantity}
                                            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                            className='border p-1 rounded-md'
                                        >
                                            {[...Array(10).keys()].map((qty) => (
                                                <option key={qty} value={qty + 1}>{qty + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveItem(index)}
                                        className='text-red-500 mt-2'
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Price Summary */}
                    <div className='rightSection w-full md:w-4/12 h-auto  bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-500 '>
                        <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Order Summary</h2>

                        <div className='priceSummary flex flex-col w-full bg-white h-auto  rounded-lg p-4 mb-6'>
                            {products.map((product, index) => (
                                <div key={index} className='flex justify-between items-center mt-2 mb-2'>
                                    <div className='title text-gray-700'>{product.name}</div>
                                    <div className='price font-semibold text-lg text-gray-800'>Rs {(parseFloat(product.price.replace('Rs ', '')) * product.quantity).toFixed(2)}</div>
                                </div>
                            ))}

                            <div className='flex justify-between items-center mt-4 mb-4 border-t border-gray-300'>
                                <div className='title text-gray-700'>Subtotal</div>
                                <div className='price font-semibold text-lg text-gray-800'>Rs {totalPrice.toFixed(2)}</div>
                            </div>
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <div className='title text-gray-700'>Tax (18%)</div>
                                <div className='price font-semibold text-lg text-gray-800'>Rs {tax}</div>
                            </div>
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <div className='title text-gray-700'>Discount</div>
                                <div className='price font-semibold text-lg text-gray-800'>Rs {discount.toFixed(2)}</div>
                            </div>
                            <div className='flex justify-between items-center mt-4 mb-4 border-t border-gray-300'>
                                <div className='title text-gray-700'>Total</div>
                                <div className='price font-semibold text-lg text-gray-800'>Rs {finalTotal}</div>
                            </div>
                        </div>

                        <div className='flex flex-col w-full'>
                            <div className='flex justify-between items-center mb-4'>
                                <input
                                    type='text'
                                    placeholder='Enter Promo Code'
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className='border p-2 rounded-md w-3/4'
                                />
                                <button 
                                    className='bg-blue-500 text-white p-2 rounded-md w-1/4 text-center'
                                    onClick={() => setPromoCode('DISCOUNT10')}
                                >
                                    Apply
                                </button>
                            </div>
                            <button className='checkoutButton w-full m-auto mt-4 bg-red-500 p-3 flex rounded items-center justify-center text-white font-semibold shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105'>
                                <p>Proceed to Checkout</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
