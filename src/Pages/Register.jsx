import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Firebase";
import { toast, ToastContainer } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: Username });

      await setDoc(doc(db, "peoples", user.uid), {
        uid: user.uid,
        displayName: Username,
        email: user.email,
        createdAt: new Date(),
      });
     
      await setDoc(doc(db,"userChats",user.uid),{});
      
      
      toast.success("Registration successful! ✅");
      console.log("navigate to chat app");
      setTimeout(() => {
        console.log("inside timeout");
        
        navigate("/chat");
      }, 3000);
    } catch (error) {
      toast.error(error.code);
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <h1 className="welcome-text">Welcome</h1>
      <p className="subtitle">Create Your Account</p>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div className="input-box">
          <span className="icon">🔒</span>
          <input type="text" placeholder="Username" required autoFocus />
        </div>
        {/* Email Input */}
        <div className="input-box">
          <span className="icon">📧</span>
          <input type="email" placeholder="Email Id" required />
        </div>

        {/* Password Input */}
        <div className="input-box">
          <span className="icon">🔑</span>
          <input
            type={hide ? "text" : "password"}
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={() => setHide(!hide)}
            className="hide-btn"
          >
            {hide ? "🙉" : "🙈"}
          </button>
        </div>

        {/* Register Button */}
        <button type="submit" className="primary-button">
          Register
        </button>
      </form>

      {/* Login Link */}
      <p className="register-link">
        Already have an Account? <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default Register;
