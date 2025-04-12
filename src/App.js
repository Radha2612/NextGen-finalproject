// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import Product from './components/Product';
// import Laptops from './components/Laptops';
// import Smartphones from './components/Smartphones';
// import Headphones from './components/Headphones';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/products" element={<Product />} />
//         <Route path="/laptops" element={<Laptops />} />
//         <Route path="/smartphones" element={<Smartphones />} />
//         <Route path="/headphones" element={<Headphones />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Product from './components/Product';
// import Laptops from './components/Laptops';
// import Smartphones from './components/Smartphones';
// import Headphones from './components/Headphones';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Product />} />
//         <Route path="/laptops" element={<Laptops />} />
//         <Route path="/smartphones" element={<Smartphones />} />
//         <Route path="/headphones" element={<Headphones />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Product from './components/Product';
// import Laptops from './components/Laptops';
// import Smartphones from './components/Smartphones';
// import Headphones from './components/Headphones';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignIn />} /> {/* Show SignIn as default */}
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/laptops" element={<Laptops />} />
//         <Route path="/smartphones" element={<Smartphones />} />
//         <Route path="/headphones" element={<Headphones />} />
//         <Route path="/signin" element={<SignIn />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Laptops from './components/Laptops';
import Smartphones from './components/Smartphones';
import Headphones from './components/Headphones';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
