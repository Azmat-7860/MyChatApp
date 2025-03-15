import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [hide,setHide] = useState(false);
  return (
    <div className="login-container">
      <h1 className="welcome-text">Welcome</h1>
      <p className="subtitle">Create Your Account</p>

      {/* Username Input */}
      <div className="input-box">
        <span className="icon">🔒</span>
        <input type="text" placeholder="Username" />
      </div>
      {/* Username Input */}
      <div className="input-box">
        <span className="icon">📧</span>
        <input type="email" placeholder="Email Id" />
      </div>

      {/* Password Input */}
      <div className="input-box">
        <span className="icon">🔑</span>
        <input type={hide ? "text" : "password"} placeholder="Password" />
        <button onClick={()=> setHide(!hide)} className="hide-btn">{hide ? "🙉" : "🙈"}</button>
      </div>

     
      {/* Login Button */}
      <button className="primary-button">Register</button>

      {/* Sign Up Link */}
      <p className="register-link">
        Already have an Account? <Link to={"/login"} >Login</Link>
      </p>
    </div>
  );
};

export default Register;
