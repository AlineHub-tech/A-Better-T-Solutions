import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import "../styles/Navbar.css";

// Icons zisanzwe cyane zishoboka muri react-icons/fa
// Twahinduye FaCircleInfo na FaGears kugira ngo dukoreshe izisanzwe (FaInfoCircle, FaCog)
import { FaHome, FaCog, FaInfoCircle, FaPhone, FaBars, FaTimes, FaCaretDown } from "react-icons/fa";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="A Better-T Solutions Logo" className="logo-img" />
        <span className="logo-text">ByteFlow</span>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links */}
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => {setIsMenuOpen(false); setIsServicesOpen(false);}}>
          <FaHome className="nav-icon" /> Home
        </Link>
        
        {/* Services Dropdown */}
      
            <Link to="/services" onClick={() => {setIsMenuOpen(false); setIsServicesOpen(false);}}>
          <FaCaretDown className="nav-icon" /> Services
        </Link>

        <Link to="/about" onClick={() => {setIsMenuOpen(false); setIsServicesOpen(false);}}>
          <FaInfoCircle className="nav-icon" /> About Us
        </Link>
        <Link to="/contact" onClick={() => {setIsMenuOpen(false); setIsServicesOpen(false);}}>
          <FaPhone className="nav-icon" /> Contact
        </Link>
      </div>
    </nav>
  );
}


