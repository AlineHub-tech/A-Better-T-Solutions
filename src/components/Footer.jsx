import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane 
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* 1. COMPANY INFO */}
        <div className="footer-section brand-info">
          <h2 className="footer-logo">A BETTER-T <span>SOLUTIONS</span></h2>
          <p className="footer-desc">
            Leading digital agency in Kigali. We specialize in Graphic Design, 
            Web Development, and Branding solutions to grow your business.
          </p>
          <div className="social-grid">
            <a href="https://www.facebook.com/share/1CGmESiTA3/" target="_blank" className="social-box"><FaFacebookF /></a>
            <a href="https://www.instagram.com/a_li_ne97?igsh=dGs5MXVnbnpsbzIz" target="_blank" className="social-box"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/umugwaneza-aline-655146325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="social-box"><FaLinkedinIn /></a>
            <a href="https://github.com/AlineHub-tech" target="_blank" className="social-box"><FaGithub /></a>
          </div>
        </div>

        {/* 2. QUICK LINKS */}
        <div className="footer-section links">
          <h3 className="section-title">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/store">Our Store</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* 3. CONTACT INFO */}
        <div className="footer-section contact">
          <h3 className="section-title">Reach Us</h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="gold-icon" />
            <span>Kigali, Rwanda (Batsinda)</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="gold-icon" />
            <span>+250 796 023 452</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="gold-icon" />
            <span>abettertomorrowf@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaClock className="gold-icon" />
            <span>Mon-Sat: 8am - 9pm</span>
          </div>
        </div>

        {/* 4. NEWSLETTER */}
        <div className="footer-section newsletter">
          <h3 className="section-title">Newsletter</h3>
          <p>Join our community to get the latest tech updates.</p>
          <form className="sub-form">
            <input type="email" placeholder="Email Address" required />
            <button type="submit"><FaPaperPlane /></button>
          </form>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>&copy; {currentYear} <span>A Better-T Solutions</span>. All Rights Reserved.</p>
          <p className="dev-credit">Developed by <a href="https://byte-flow-ltd.vercel.app/">ByteFlow</a></p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span className="dot">•</span>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
