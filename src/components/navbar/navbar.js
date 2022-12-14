import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContact">
        <div className="navbarContact-left">
          <h2>CALL NOW</h2>
          <img src={`https://file.rendit.io/n/9aYpwiOT1Tv78owUF3wS.svg`} />
          <h2>+44 7391 0235 75</h2>
        </div>
        <div className="navbarContact-right">
          <img src={`https://file.rendit.io/n/g8lITgz4M3ubHpWHVPxn.svg`} />
          <p1>Mon-Sat 08:00 - 18:00</p1>
          <img src={`https://file.rendit.io/n/BueyfwmlGXmqFk1csi1M.svg`} />
          <p1>cs@fujiiryoki.uk</p1>
        </div>
      </div>
      <div className="navbarContent">
        <a href="">
          <img src={logo} className="logo" />
        </a>
        <div>
          <p1 className='dropdown'>Massage Chairs</p1>
          <p1 className='dropdown'>Monthly Sales</p1>
          <p1>Showroom London</p1>
          <p1>Who we are?</p1>
          <p1>Contact Us</p1>
          <p1>Blog</p1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
