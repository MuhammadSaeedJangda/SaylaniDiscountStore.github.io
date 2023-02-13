import React, { useState } from "react";
import "./Navbar.css";
import { FaFacebookSquare,FaInstagramSquare, FaYoutubeSquare,} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Route, Routes } from "react-router-dom";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
        <img  src='../Logo.png' alt="logo" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                src="../SearchForm"
                target="_blank">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                src="../ShoppingCart"
                target="_blank">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                src="../UserForm"
                target="_blank">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;