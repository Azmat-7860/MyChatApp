import React, { useContext } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";

const TopBar = ({ userData }) => {
const {model,setModel} = useContext(AuthContext)
  return (
    <div className="topbar">
      <div className="icons" >
        <span className="icon" onClick={() => setModel(!model)}><MdOutlineDoubleArrow size={"40px"}/></span>
       
      </div>
      <div className="user-info">
        <div className="text-info">
          <span className="user-name fs-5 text-capitalize">{userData.user?.displayName || "⬅ Select the User"}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
