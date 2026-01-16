import React from "react";
import { Link } from "react-router-dom"; 
import "../Styles/Footer.css"; 

export default function Footer(){
  const currentYear = new Date().getFullYear();

  return(
    <footer className="site-footer">
      <div className="content-section footer-content">
        <div className="footer-column">
          <h3>A Better-T Solutions</h3>
          <p>
            Leading digital solutions provider in Kigali, Rwanda. We turn your ideas into a strong digital presence.
          </p>
          <div className="socials">
            <a href="https://www.facebook.com/share/15erRQdApJ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/better_t_solutions?igsh=cDR5aHVnbXhjY2dp" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/umugwaneza-aline-655146325" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
             <a href="https://github.com/AlineHub-tech" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> Kigali, Rwanda (Kagugu)</p>
          <p><i className="fas fa-phone"></i> +250 796 023 452</p>
          <p><i className="fas fa-envelope"></i> abettertomorrowf@gmail.com</p>
          <p><i className="fas fa-clock"></i> Mon-Sat: 8am - 6pm</p>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} A Better-T Solutions. All Rights Reserved.</p>
        <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
