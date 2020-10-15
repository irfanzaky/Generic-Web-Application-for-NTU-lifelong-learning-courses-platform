import React from "react";
import { Link } from "react-router-dom";

import ntulogo from "../images/ntu-logo.png";
const Navbar = ({ userInfo }) => {
  console.log("user info", userInfo);
  return (
    <div className="Navbar fixed">
      <div className="logo-container">
        <img src={ntulogo} className="navbar-image" alt="NTU logo" />
      </div>
      <div className="push">
        <Link to="/home" className="NavbarText">
          Home
        </Link>
      </div>

      <div>
        <Link to="/video" className="NavbarText">
          Certification
        </Link>
      </div>
      <div>
        {userInfo ? (
          <Link to="/myprofile" className="NavbarText">
            {userInfo.username}
          </Link>
        ) : (
          <Link to="/" className="NavbarText">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
