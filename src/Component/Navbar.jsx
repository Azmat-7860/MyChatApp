import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { SlLogout } from "react-icons/sl";
import { auth } from "../Firebase";
import { AuthContext } from "../Context/AuthContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Navbar = () => {
  const { signInUser,model,setModel } = useContext(AuthContext);
  // const firstName = signInUser.displayName.split(" ")[0];
  return (
    <div className="navbar-container">
      <div className="d-flex justify-content-between w-100">
        <h2 className="brand-title m-0 mt-2">You & Me</h2>
        <button onClick={() => signOut(auth)} className="logout-btn">
          {/* <SlLogout size={"20px"} /> */}
          Logout
        </button>
        <div className="icons mt-2" style={{color: " #7f8c8d"}} onClick={()=> setModel(!model)}>
          <AiOutlineCloseCircle size={"30px"}/>
        </div>
      </div>

      <marquee behavior="alternate" direction="">
        <h4 className="username m-0 mt-1 text-capitalize">
          Welcome {signInUser.displayName}
        </h4>
      </marquee>
    </div>
  );
};

export default Navbar;
