// import React from 'react';
// import '../Product.css';

// const Laptops = () => {
//   const laptops = [
//     {
//       id: 1,
//       name: 'Lenovo intel core i3',
//       price: 80000,
//       image: '/images/laptop1.jpg',
//       description: 'High-performance laptop with 16GB RAM and 512GB SSD.',
//     },
//     {
//       id: 2,
//       name: 'HP intel core i5',
//       price: 90000,
//       image: '/images/laptop2.jpg',
//       description: 'Ultra-slim laptop with 8GB RAM and 256GB SSD.',
//     },
//     {
//       id: 3,
//       name: 'Dell intel core i7',
//       price: 100000,
//       image: '/images/laptop3.jpg',
//       description: 'Gaming laptop with 32GB RAM and 1TB SSD.',
//     },
//     {
//       id: 4,
//       name: 'Asus intel core i9',
//       price: 85000,
//       image: '/images/laptop4.jpg',
//       description: 'Business laptop with 16GB RAM and 512GB SSD.',
//     },
//     {
//       id: 5,
//       name: 'Acer intel core i5',
//       price: 85000,
//       image: '/images/laptop5.jpg',
//       description: 'Convertible laptop with 12GB RAM and 512GB SSD.',
//     },
//     {
//       id: 6,
//       name: 'HP intel core i7',
//       price: 97000,
//       image: '/images/laptop6.jpg',
//       description: 'Convertible laptop with 12GB RAM and 512GB SSD.',
//     },
//     {
//       id: 7,
//       name: 'Lenovo intel core i9',
//       price: 85000,
//       image: '/images/laptop7.jpg',
//       description: 'Convertible laptop with 12GB RAM and 512GB SSD.',
//     },
//     {
//       id: 8,
//       name: 'Dell intel core i3',
//       price: 98000,
//       image: '/images/laptop8.jpg',
//       description: 'Convertible laptop with 12GB RAM and 512GB SSD.',
//     },
//   ];

//   return (
//     <div className="product-container">
//       <h2>Laptops</h2>
//       <div className="product-grid">
//         {laptops.map((laptop) => (
//           <div key={laptop.id} className="product-card">
//             <img src={laptop.image} alt={laptop.name} className="product-image" />
//             <h3>{laptop.name}</h3>
//             <p className="product-price">
//               <sup>₹</sup>
//               {laptop.price.toLocaleString('en-IN')}
//             </p>
//             <p className="product-description">{laptop.description}</p>
//             <button className="product-button">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Laptops;

import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../Product.css';

const Laptops = () => {
  const { addToCart } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems([...addedItems, item.id]);
  };

  const laptops = [
    {
      id: 1,
      name: 'Dell XPS 13',
      price: 95000,
      image: '/images/laptop1.jpg',
      description: 'Compact and powerful laptop with 16GB RAM and 512GB SSD.',
    },
    {
      id: 2,
      name: 'MacBook Air M1',
      price: 85000,
      image: '/images/laptop2.jpg',
      description: 'Apple’s M1 chip with 8GB RAM and 256GB storage.',
    },
    {
      id: 3,
      name: 'HP Spectre x360',
      price: 115000,
      image: '/images/laptop3.jpg',
      description: '2-in-1 laptop with Intel Core i7 and 16GB RAM.',
    },
    {
      id: 4,
      name: 'Lenovo ThinkPad X1 Carbon',
      price: 120000,
      image: '/images/laptop4.jpg',
      description: 'Business laptop with high-end performance and durability.',
    },
    {
      id: 5,
      name: 'Asus ROG Zephyrus G14',
      price: 140000,
      image: '/images/laptop5.jpg',
      description: 'Gaming laptop with AMD Ryzen 9 and 16GB RAM.',
    },
    {
      id: 6,
      name: 'Acer Swift 3',
      price: 55000,
      image: '/images/laptop6.jpg',
      description: 'Budget-friendly laptop with Intel Core i5 and 8GB RAM.',
    },
    {
      id: 7,
      name: 'Microsoft Surface Laptop 4',
      price: 95000,
      image: '/images/laptop7.jpg',
      description: 'Sleek laptop with Intel Core i7, 16GB RAM, and 512GB SSD.',
    },
    {
      id: 8,
      name: 'Razer Blade 15',
      price: 160000,
      image: '/images/laptop8.jpg',
      description: 'High-performance gaming laptop with 32GB RAM and RTX 3080.',
    },
  ];

  return (
    <div className="product-container">
      <h2>Laptops</h2>
      <Link to="/cart" className="cart-link">Go to Cart</Link>
      <div className="product-grid">
        {laptops.map((laptop) => (
          <div key={laptop.id} className="product-card">
            <img src={laptop.image} alt={laptop.name} className="product-image" />
            <h3>{laptop.name}</h3>
            <p className="product-price">
              <sup>₹</sup>
              {laptop.price.toLocaleString('en-IN')}
            </p>
            <p className="product-description">{laptop.description}</p>
            <button className="product-button" onClick={() => handleAddToCart(laptop)}>
              {addedItems.includes(laptop.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
