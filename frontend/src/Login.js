import React, { useState } from 'react';
import './LoginPage.css';
import Register from './Register'; // Import Register component

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToRegister, setRedirectToRegister] = useState(false); // Initialize redirectToRegister state variable

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegisterClick = () => {
    setRedirectToRegister(true); // Set redirectToRegister to true when Register button is clicked
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Handle login
  };

  if (redirectToRegister) {
    return <Register />; // Render Register component if redirectToRegister is true
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
        <button type="button" onClick={handleRegisterClick}>Don't have an account? Register</button> {/* Change the Register button to a regular button */}
      </form>
    </div>
  );
};

export default LoginPage;
