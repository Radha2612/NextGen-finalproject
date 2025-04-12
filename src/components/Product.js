// import React from 'react';
// import '../Product.css'; // Create a new CSS file for the product page

// const Product = () => {
//   const products = [
//     {
//       id: 1,
//       name: 'Laptop',
//       price: 80000,
//       image: '/laptop.jpg',
//       description: 'High-performance laptop with 16GB RAM and 512GB SSD.',
//     },
//     {
//       id: 2,
//       name: 'Smartphone',
//       price: 25000,
//       image: '/phone.jpg',
//       description: 'Latest smartphone with 128GB storage and 48MP camera.',
//     },
//     {
//       id: 3,
//       name: 'Headphones',
//       price: 5000,
//       image: '/headphone.jpg',
//       description: 'Noise-cancelling headphones with 20-hour battery life.',
//     },
//   ];

//   return (
//     <div className="product-container">
//       <h2>Products</h2>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <h3>{product.name}</h3>
//             <p className="product-price"><sup>₹</sup>{product.price}</p>
//             <p className="product-description">{product.description}</p>
//             <button className="product-button">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Product.css';

// const Product = () => {
//   const navigate = useNavigate();

//   const categories = [
//     {
//       id: 1,
//       name: 'Laptops',
//       startingPrice: 80000,
//       image: '/images/laptop.jpg',
//     },
//     {
//       id: 2,
//       name: 'Smartphones',
//       startingPrice: 25000,
//       image: '/images/phone.jpg',
//     },
//     {
//       id: 3,
//       name: 'Headphones',
//       startingPrice: 5000,
//       image: '/images/headphone.jpg',
//     },
//   ];

//   const handleCategoryClick = (categoryId) => {
//     if (categoryId === 1) {
//       navigate('/laptops');
//     } else if (categoryId === 2) {
//       navigate('/smartphones');
//     } else if (categoryId === 3) {
//       navigate('/headphones');
//     }
//   };

//   return (
//     <div className="product-container">
//       <h2>Categories</h2>
//       <div className="category-grid">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="category-card"
//             onClick={() => handleCategoryClick(category.id)}
//           >
//             <img src={category.image} alt={category.name} className="category-image" />
//             <h3>{category.name}</h3>
//             <p className="category-price">
//               Starting at <sup>₹</sup>
//               {category.startingPrice.toLocaleString('en-IN')}
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className="auth-links">
//         <p>
//           Already have an account? <a href="/signin">Sign In</a>
//         </p>
//         <p>
//           Don't have an account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Product;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import '../Product.css';

const Product = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Laptops',
      startingPrice: 80000,
      image: '/images/laptop.jpg',
    },
    {
      id: 2,
      name: 'Smartphones',
      startingPrice: 25000,
      image: '/images/phone.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      startingPrice: 5000,
      image: '/images/headphone.jpg',
    },
  ];

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 1) {
      navigate('/laptops');
    } else if (categoryId === 2) {
      navigate('/smartphones');
    } else if (categoryId === 3) {
      navigate('/headphones');
    }
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="product-container">
        <h2>Categories</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category.id)}
            >
              <img src={category.image} alt={category.name} className="category-image" />
              <h3>{category.name}</h3>
              <p className="category-price">
                Starting at <sup>₹</sup>
                {category.startingPrice.toLocaleString('en-IN')}
              </p>
            </div>
          ))}
        </div>
        <div className="auth-links">
          <p>
            Already have an account? <a href="/signin">Sign In</a>
          </p>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;