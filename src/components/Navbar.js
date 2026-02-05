import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar-wrapper">
        <Container className="navbar-inner">
          {/* LEFT LOGO */}
          <div className="nav-logo">
            <img src={require("../assets/Banner/LOGO SPF final.png")} alt="Logo" />
          </div>

          {/* DESKTOP MENU */}
          <ul className="nav-links">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          {/* RIGHT BUTTON */}
          <div className="nav-btn">
            <button>Get Quote</button>
          </div>

          {/* HAMBURGER (MOBILE) */}
          <div className="hamburger" onClick={() => setOpen(true)}>
            ☰
          </div>
        </Container>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setOpen(false)}>×</span>
        <NavLink to="/home" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </div>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
