import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import "../styles/Navbar.css";
import { 
  FaHome, 
  FaStore, 
  FaServicestack, 
  FaInfoCircle, 
  FaPhoneAlt, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="main-navbar">
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="logo-section" onClick={closeMenu}>
          <img src={Logo} alt="Logo" className="nav-logo-img" />
          <div className="logo-texts">
            <span className="brand-name">A BETTER-T</span>
            <span className="brand-sub">SOLUTIONS</span>
          </div>
        </Link>

        {/* MOBILE TOGGLE */}
        <div className="mobile-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAVIGATION LINKS */}
        <ul className={`nav-items ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              <FaHome className="nav-icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/store" onClick={closeMenu}>
              <FaStore className="nav-icon" /> Store
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              <FaServicestack className="nav-icon" /> Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              <FaInfoCircle className="nav-icon" /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} className="nav-contact-btn">
              <FaPhoneAlt className="nav-icon" /> Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
