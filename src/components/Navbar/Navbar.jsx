import React from "react";
import NavbarLogo from "./NavBarLogoBlack.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img className="navbar-logo" src={NavbarLogo} alt="..." />
        </Link>
        <ul className="links">
          <li className="link-names">
            <Link to="/products">Products</Link>
          </li>
          <li className="link-names">
            <Link to="/about">About</Link>
          </li>
          <li className="link-names">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
