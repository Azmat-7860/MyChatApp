import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="register-wrapper">
      {/* Logo */}
      <div className="app-logo">My Chat App</div>

      {/* Buttons */}
      <div className="button-group">
        <Link to="/login" className="primary-button">Login</Link>
        <Link to={"/register"} className="secondary-button">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
