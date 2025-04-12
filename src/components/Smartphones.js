// import React from 'react';
// import '../Product.css';

// const Smartphones = () => {
//   const smartphones = [
//     {
//       id: 1,
//       name: 'Samsung Galaxy S21',
//       price: 25000,
//       image: '/images/phone1.jpg',
//       description: 'Latest smartphone with 128GB storage and 48MP camera.',
//     },
//     {
//       id: 2,
//       name: 'oneplus 9 Pro',
//       price: 30000,
//       image: '/images/phone2.jpg',
//       description: 'Flagship smartphone with 256GB storage and 64MP camera.',
//     },
//     {
//       id: 3,
//       name: 'Xiaomi Redmi Note 10',
//       price: 40000,
//       image: '/images/phone3.jpg',
//       description: 'Budget smartphone with 64GB storage and 32MP camera.',
//     },
//     {
//       id: 4,
//       name: 'Samsung Galaxy Z Flip 3',
//       price: 35000,
//       image: '/images/phone4.jpg',
//       description: '5G smartphone with 128GB storage and 108MP camera.',
//     },
//     {
//       id: 5,
//       name: 'Xiaomi Mi 11',
//       price: 28000,
//       image: '/images/phone5.jpg',
//       description: 'Mid-range smartphone with 128GB storage and 48MP camera.',
//     },
//     {
//       id: 6,
//       name: 'oppo Reno 5 Pro',
//       price: 29000,
//       image: '/images/phone6.jpg',
//       description: 'Mid-range smartphone with 128GB storage and 48MP camera.',
//     },
//     {
//       id: 7,
//       name: 'realme 8 Pro',
//       price: 26000,
//       image: '/images/phone7.jpg',
//       description: 'Mid-range smartphone with 128GB storage and 48MP camera.',
//     },
//     {
//       id: 8,
//       name: 'oneplus Nord 2',
//       price: 29000,
//       image: '/images/phone8.jpg',
//       description: 'Mid-range smartphone with 128GB storage and 48MP camera.',
//     },
    
//   ];

//   return (
//     <div className="product-container">
//       <h2>Smartphones</h2>
//       <div className="product-grid">
//         {smartphones.map((smartphone) => (
//           <div key={smartphone.id} className="product-card">
//             <img src={smartphone.image} alt={smartphone.name} className="product-image" />
//             <h3>{smartphone.name}</h3>
//             <p className="product-price">
//               <sup>₹</sup>
//               {smartphone.price.toLocaleString('en-IN')}
//             </p>
//             <p className="product-description">{smartphone.description}</p>
//             <button className="product-button">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Smartphones;


import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../Product.css';

const Smartphones = () => {
  const { addToCart } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems([...addedItems, item.id]);
  };

  const smartphones = [
    {
      id: 1,
      name: 'Samsung Galaxy S21',
      price: 25000,
      image: '/images/phone1.jpg',
      description: 'Latest smartphone with 128GB storage and 48MP camera.',
    },
    {
      id: 2,
      name: 'iPhone 13',
      price: 70000,
      image: '/images/phone2.jpg',
      description: 'Apple smartphone with A15 chip and dual-camera system.',
    },
    {
      id: 3,
      name: 'OnePlus 9 Pro',
      price: 50000,
      image: '/images/phone3.jpg',
      description: 'Flagship phone with Snapdragon 888 and Fluid AMOLED display.',
    },
    {
      id: 4,
      name: 'Xiaomi Mi 11X',
      price: 28000,
      image: '/images/phone4.jpg',
      description: 'Mid-range phone with high refresh rate display.',
    },
    {
      id: 5,
      name: 'Realme GT Neo 2',
      price: 32000,
      image: '/images/phone5.jpg',
      description: 'Gaming phone with AMOLED screen and fast charging.',
    },
    {
      id: 6,
      name: 'Google Pixel 6',
      price: 60000,
      image: '/images/phone6.jpg',
      description: 'Google’s own Android experience with Tensor chip.',
    },
    {
      id: 7,
      name: 'Motorola Edge 30',
      price: 27000,
      image: '/images/phone7.jpg',
      description: 'Lightweight 5G phone with P-OLED display.',
    },
    {
      id: 8,
      name: 'Vivo V21',
      price: 29000,
      image: '/images/phone8.jpg',
      description: 'Selfie-centric phone with OIS front camera.',
    },
  ];

  return (
    <div className="product-container">
      <h2>Smartphones</h2>
      <Link to="/cart" className="cart-link">Go to Cart</Link>
      <div className="product-grid">
        {smartphones.map((phone) => (
          <div key={phone.id} className="product-card">
            <img src={phone.image} alt={phone.name} className="product-image" />
            <h3>{phone.name}</h3>
            <p className="product-price">
              <sup>₹</sup>
              {phone.price.toLocaleString('en-IN')}
            </p>
            <p className="product-description">{phone.description}</p>
            <button className="product-button" onClick={() => handleAddToCart(phone)}>
              {addedItems.includes(phone.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smartphones;
