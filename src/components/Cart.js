import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../Product.css';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="product-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="product-grid">
          {cartItems.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <h3>{item.name}</h3>
              <p className="product-price">
                <sup>₹</sup>
                {item.price.toLocaleString('en-IN')}
              </p>
              <p className="product-description">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
