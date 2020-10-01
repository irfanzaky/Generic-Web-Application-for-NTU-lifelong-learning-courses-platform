import React from "react";
import { Link } from "react-router-dom";

import ntulogo from "../images/ntu-logo.png";
const Navbar = () => {
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
        <Link to="/course" className="NavbarText">
          Course
        </Link>
      </div>
      <div>
        <Link to="/video" className="NavbarText">
          Certification
        </Link>
      </div>
      <div>
        <Link to="/myprofile" className="NavbarText">
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
