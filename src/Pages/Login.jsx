import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [hide,setHide] = useState(false);
  return (
    <div className="login-container">
      <h1 className="welcome-text">Welcome</h1>
      <p className="subtitle">Login to your create account</p>

      {/* Username Input */}
      <div className="input-box">
        <span className="icon">🔒</span>
        <input type="text" placeholder="Username" />
      </div>

      {/* Password Input */}
      <div className="input-box">
        <span className="icon">🔑</span>
        <input type={hide ? "text" : "password"} placeholder="Password" />
        <button onClick={()=> setHide(!hide)} className="hide-btn">{hide ? "🙉" : "🙈"}</button>
      </div>

     
      {/* Login Button */}
      <button className="primary-button">Login</button>

      {/* Sign Up Link */}
      <p className="register-link">
        Don't have an Account? <Link to={"/register"} >Register</Link>
      </p>
    </div>
  );
};

export default Login;
