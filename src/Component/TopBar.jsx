import React, { useContext } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { ModelContext } from "../Context/ModelContext";


const TopBar = ({ userData }) => {
// const {model,setModel} = useContext(AuthContext)
 const{onOpen} = useContext(ModelContext);

  return (
    <div className="topbar">
      <div className="icons" >
        <span className="icon" onClick={onOpen}><MdOutlineDoubleArrow size={"40px"}/></span>
       
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
