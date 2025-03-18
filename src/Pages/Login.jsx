import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Login = () => {
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);//search it on firbase documents 
      toast.success("Login Successful.");
      setTimeout(() => {
        navigate("/chat");
      }, 2000);
    } catch (error) {
      toast.error(error.code);
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <h1 className="welcome-text">Welcome</h1>
      <p className="subtitle">Login to your account</p>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="input-box">
          <span className="icon">📧</span>
          <input type="email" placeholder="Email" required autoFocus/>
        </div>

        {/* Password Input */}
        <div className="input-box">
          <span className="icon">🔑</span>
          <input type={hide ? "text" : "password"} placeholder="Password" required />
          <button type="button" onClick={() => setHide(!hide)} className="hide-btn">
            {hide ? "🙉" : "🙈"}
          </button>
        </div>

        {/* Login Button */}
        <button type="submit" className="primary-button">
          Login
        </button>
      </form>

      {/* Sign Up Link */}
      <p className="register-link">
        Don't have an account? <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};

export default Login;
