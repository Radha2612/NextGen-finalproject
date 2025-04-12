// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add authentication logic here
//     console.log('Signing in with:', email, password);
//     navigate('/products'); // Redirect to product page after sign-in
//   };

//   return (
//     <div className="signin-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign In</button>
//       </form>
//       <p>
//         Don't have an account? <a href="/signup">Sign Up</a>
//       </p>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Auth.css'; // Create a new CSS file for authentication pages

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing in with:', email, password);
    navigate('/product');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
      <h1>ClickCart</h1>
      <p>Discover, Shop, Repeat</p>
        <h2><u>Sign In</u></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>
        <p className="auth-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;