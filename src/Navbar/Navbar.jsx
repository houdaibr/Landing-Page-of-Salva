import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarComponents";
import "@fontsource/poppins";
/*{nav ? logo : logo1} 
import logo from "../Assets/Images/icon.svg";
import logo1 from "../Assets/Images/LOGO1.svg";*/
import "./Navbar.css";
import logo from "../assets/Logo.svg";
const NavbarComponent = () => {
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showsidebar = () => {
    if (window.innerWidth > 768) {
      setClick(false);
    }
  };

  const showNavbar = () => {
    if (window.scrollY > 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    showsidebar();
  }, []);

  window.addEventListener("resize", showsidebar);
  window.addEventListener("scroll", showNavbar);
  return (
    <div className="nav">
      <Nav className={nav && "activess"}>
        <NavLink to="/">
          <img className="img" src={logo} alt="logo" />
          <span className="Salva"> Salva</span>
        </NavLink>
        <Bars onClick={handleClick} />
        <NavMenu>
          

          <a href="#Home">Home</a>
          <a href="#Product">Product</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact-us</a>
          <a href="#FAQ">FAQ</a>
          
        </NavMenu>
        {click && (
          <div className="">
            <ul className="nav-menu active">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Nav>
    </div>
  );
};

export default NavbarComponent;
