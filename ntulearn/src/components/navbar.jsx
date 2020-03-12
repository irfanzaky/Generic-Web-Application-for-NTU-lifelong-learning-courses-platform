import React, { Component } from "react";
import { Link } from "react-router-dom";
import ntulogo from "../images/ntu-logo.png";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="Navbar fixed">
        <div class="logo-container">
          <img src={ntulogo} class="navbar-image" alt="NTU logo" />
        </div>
        <div className="push">
          <Link to="/" className="NavbarText">
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
  }
}

export default Navbar;
