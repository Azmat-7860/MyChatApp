import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { SlLogout } from "react-icons/sl";
import { auth } from "../Firebase";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { signInUser } = useContext(AuthContext);
  // const firstName = signInUser.displayName.split(" ")[0];
  return (
    <div className="navbar-container">
      <div className="d-flex justify-content-between w-100">
        <h2 className="brand-title m-0 mt-2">You & Me</h2>
        <button onClick={() => signOut(auth)} className="logout-btn">
          <SlLogout size={"20px"} />
        </button>
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
