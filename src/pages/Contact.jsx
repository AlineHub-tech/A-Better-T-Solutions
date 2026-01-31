import React from 'react';
import "../styles/Contact.css";
// Import Icons from react-icons/fa
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaStar, FaUsers, FaLightbulb, FaRocket, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaCheckCircle } from 'react-icons/fa';


export default function Contact() {
  return (
    <div className="contact-page">

      {/* HERO / GET IN TOUCH */}
      <section className="contact-hero">
        <h1>
          Get In <span>Touch</span>
        </h1>
        <p>
          Let’s collaborate to transform your ideas into powerful digital solutions.
        </p>
      </section>

      {/* CONTACT INFO (LOCATION, HOURS, PHONE, EMAIL) */}
      <section className="contact-info-section">
        <div className="info-grid">
          <div className="info-card">
            <FaPhone className="info-icon" />
            <h3>Phone Number</h3>
            <p>+250 796 023 452</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email Address</h3>
            <p>abettertomorrowf@gmail.com</p>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Office Location</h3>
            <p>Batsinda, Kigali, Rwanda</p>
          </div>

          <div className="info-card">
            <FaClock className="info-icon" />
            <h3>Business Hours</h3>
            <p>Mon – Sat | 8:30 AM – 9:00 PM</p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: FORM AND WHY CHOOSE US SIDE-BY-SIDE */}
      <section className="contact-main-content">
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Service Needed" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-why-choose">
          <h2>Why Choose Us</h2>
          <ul>
            <li><FaCheckCircle className="check-icon" /> Premium Quality & Modern Design</li>
            <li><FaCheckCircle className="check-icon" /> Fast Delivery & Respect for Deadlines</li>
            <li><FaCheckCircle className="check-icon" /> Client-Focused Approach</li>
            <li><FaCheckCircle className="check-icon" /> Innovative & Creative Solutions</li>
            <li><FaCheckCircle className="check-icon" /> Proven Excellence in the Market</li>
          </ul>
          
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-map-section">
        <h2>Our Location on Map</h2>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Batsinda,+Kigali,+Rwanda&output=embed"
          width="100%"
          height="450px"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* CTA: READY TO START YOUR JOURNEY? */}
      <section className="contact-cta">
        <FaRocket className="cta-icon-main" />
        <h2>Ready to Start Your Journey?</h2>
        <p>Let's collaborate to transform your ideas into powerful digital solutions that drive measurable results and accelerate your business growth.</p>
        <a href="https://wa.me/250796023452" className="cta-btn">
          Chat on WhatsApp Now
        </a>
      </section>

    </div>
  );
}
