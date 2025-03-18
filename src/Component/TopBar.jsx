import React from "react";

const TopBar = ({ userData }) => {

  return (
    <div className="topbar">
      <div className="user-info">
        <div className="text-info">
          <span className="user-name text-capitalize">{userData.user?.displayName}</span>
        </div>
      </div>
      <div className="icons">
        <span className="icon">🔍</span>
        <span className="icon">📞</span>
        <span className="icon">⋮</span>
      </div>
    </div>
  );
};

export default TopBar;
