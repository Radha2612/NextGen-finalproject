// import React from 'react';
// import '../Product.css';

// const Headphones = () => {
//   const headphones = [
//     {
//       id: 1,
//       name: 'boat Rockerz 450',
//       price: 5000,
//       image: '/images/headphone1.jpg',
//       description: 'Noise-cancelling headphones with 20-hour battery life.',
//     },
//     {
//       id: 2,
//       name: 'apple AirPods Pro',
//       price: 7000,
//       image: '/images/headphone2.jpg',
//       description: 'Wireless headphones with 30-hour battery life.',
//     },
//     {
//       id: 3,
//       name: 'Sony WH-1000XM4',
//       price: 9000,
//       image: '/images/headphone3.jpg',
//       description: 'Over-ear headphones with 25-hour battery life.',
//     },
//     {
//       id: 4,
//       name: 'JBL Tune 125TWS',
//       price: 6000,
//       image: '/images/headphone4.jpg',
//       description: 'In-ear headphones with 15-hour battery life.',
//     },
//     {
//       id: 5,
//       name: 'bose QuietComfort 35 II',
//       price: 8000,
//       image: '/images/headphone5.jpg',
//       description: 'Bluetooth headphones with 40-hour battery life.',
//     },
//     {
//       id: 6,
//       name: 'Sennheiser HD 450BT',
//       price: 6000,
//       image: '/images/headphone6.jpg',
//       description: 'Bluetooth headphones with 30-hour battery life.',
//     },
//     {
//       id: 7,
//       name: 'bose SoundLink II',
//       price: 10000,
//       image: '/images/headphone7.jpg',
//       description: 'Bluetooth headphones with 20-hour battery life.',
//     },
//     {
//       id: 8,
//       name: 'samsung Galaxy Buds+',
//       price: 7000,
//       image: '/images/headphone8.jpg',
//       description: 'Bluetooth headphones with 20-hour battery life.',
//     },
//   ];

//   return (
//     <div className="product-container">
//       <h2>Headphones</h2>
//       <div className="product-grid">
//         {headphones.map((headphone) => (
//           <div key={headphone.id} className="product-card">
//             <img src={headphone.image} alt={headphone.name} className="product-image" />
//             <h3>{headphone.name}</h3>
//             <p className="product-price">
//               <sup>₹</sup>
//               {headphone.price.toLocaleString('en-IN')}
//             </p>
//             <p className="product-description">{headphone.description}</p>
//             <button className="product-button">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Headphones;

import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../Product.css';

const Headphones = () => {
  const { addToCart } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems([...addedItems, item.id]);
  };

  const headphones = [
    {
      id: 1,
      name: 'boat Rockerz 450',
      price: 5000,
      image: '/images/headphone1.jpg',
      description: 'Noise-cancelling headphones with 20-hour battery life.',
    },
    {
      id: 2,
      name: 'apple AirPods Pro',
      price: 7000,
      image: '/images/headphone2.jpg',
      description: 'Wireless headphones with 30-hour battery life.',
    },
    {
      id: 3,
      name: 'Sony WH-1000XM4',
      price: 9000,
      image: '/images/headphone3.jpg',
      description: 'Over-ear headphones with 25-hour battery life.',
    },
    {
      id: 4,
      name: 'JBL Tune 125TWS',
      price: 6000,
      image: '/images/headphone4.jpg',
      description: 'In-ear headphones with 15-hour battery life.',
    },
    {
      id: 5,
      name: 'bose QuietComfort 35 II',
      price: 8000,
      image: '/images/headphone5.jpg',
      description: 'Bluetooth headphones with 40-hour battery life.',
    },
    {
      id: 6,
      name: 'Sennheiser HD 450BT',
      price: 6000,
      image: '/images/headphone6.jpg',
      description: 'Bluetooth headphones with 30-hour battery life.',
    },
    {
      id: 7,
      name: 'bose SoundLink II',
      price: 10000,
      image: '/images/headphone7.jpg',
      description: 'Bluetooth headphones with 20-hour battery life.',
    },
    {
      id: 8,
      name: 'samsung Galaxy Buds+',
      price: 7000,
      image: '/images/headphone8.jpg',
      description: 'Bluetooth headphones with 20-hour battery life.',
    },
  ];

  return (
    <div className="product-container">
      <h2>Headphones</h2>
      <Link to="/cart" className="cart-link">Go to Cart</Link>
      <div className="product-grid">
        {headphones.map((headphone) => (
          <div key={headphone.id} className="product-card">
            <img src={headphone.image} alt={headphone.name} className="product-image" />
            <h3>{headphone.name}</h3>
            <p className="product-price">
              <sup>₹</sup>
              {headphone.price.toLocaleString('en-IN')}
            </p>
            <p className="product-description">{headphone.description}</p>
            <button className="product-button" onClick={() => handleAddToCart(headphone)}>
              {addedItems.includes(headphone.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headphones;
