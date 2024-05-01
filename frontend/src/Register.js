import React, { useState } from 'react';
import './RegisterPage.css';
import Login from './Login'; // Import LoginPage component

const Register = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false); // Initialize redirectToLogin state variable

  const handleLoginClick = () => {
    setRedirectToLogin(true); // Set redirectToLogin to true when Login link is clicked
  };

  if (redirectToLogin) {
    return <Login />; // Render LoginPage component if redirectToLogin is true
  }

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <button type="button" onClick={handleLoginClick}>Login</button></p> {/* Change the Login link to a button and add an onClick event handler */}
    </div>
  );
};

export default Register;
