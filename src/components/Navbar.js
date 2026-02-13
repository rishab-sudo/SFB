import React, { useState } from "react";
import GetQuotePopup from "../components/GetQuotePopup";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showQuote, setShowQuote] = useState(false);


  return (
    <>
      <div className="navbar-wrapper">
        <Container className="navbar-inner">
          {/* LEFT LOGO */}
          <div className="nav-logo">
            <img src={require("../assets/logo22.png")} alt="Logo" />
          </div>

          {/* DESKTOP MENU */}
          <ul className="nav-links">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>

            {/* DROPDOWN */}
<li
  className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}
  onMouseEnter={() => setDropdownOpen(true)}
  onMouseLeave={() => setDropdownOpen(false)}
>
  <span className="nav-dropdown-title">
    Products & Solutions <span className="dropdown-arrow">▾</span>
  </span>

  <ul className={`nav-dropdown-menu ${dropdownOpen ? "show" : ""}`}>
    <li><NavLink to="/products/pp-fabric">PP Fabric</NavLink></li>
    <li><NavLink to="/products/pp-bags">PP Bags</NavLink></li>
    <li><NavLink to="/products/monolayer-films">Monolayer Films</NavLink></li>
    <li><NavLink to="/products/multifilament-yarn">Multifilament Yarn</NavLink></li>
    <li><NavLink to="/products/reprocess-granules">Reprocess Granules</NavLink></li>
  </ul>
</li>


            <li><NavLink to="/industry">Industries</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          {/* RIGHT BUTTON */}
      <div className="nav-btn">
  <button onClick={() => setShowQuote(true)}>Get Quote</button>
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

        {/* MOBILE DROPDOWN */}
        <div className="mobile-dropdown">
          <span
            className="mobile-dropdown-title"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Products & Solutions
          </span>

          {dropdownOpen && (
   <div className="mobile-dropdown-menu">
  <NavLink to="/products/pp-fabric" onClick={() => setOpen(false)}>PP Fabric</NavLink>
  <NavLink to="/products/pp-bags" onClick={() => setOpen(false)}>PP Bags</NavLink>
  <NavLink to="/products/monolayer-films" onClick={() => setOpen(false)}>Monolayer Films</NavLink>
  <NavLink to="/products/multifilament-yarn" onClick={() => setOpen(false)}>Multifilament Yarn</NavLink>
  <NavLink to="/products/reprocess-granules" onClick={() => setOpen(false)}>Reprocess Granules</NavLink>
</div>

          )}
        </div>

        <NavLink to="/industry" onClick={() => setOpen(false)}>Industries</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </div>

      {/* OVERLAY */}
<GetQuotePopup open={showQuote} onClose={() => setShowQuote(false)} />

    </>
  );
};

export default Navbar;
