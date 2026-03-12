import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="contact-hero">
        <div className="container">
          <span className="pro-tag">Get In Touch</span>
          <h1>Let's Build Something <br /> <span className="gold-text">Great Together</span></h1>
          <p>Have a project in mind or just want to say hi? We'd love to hear from you.</p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section className="contact-content">
        <div className="container grid-contact">
          
          {/* LEFT SIDE: INFO */}
          <div className="contact-info-card">
            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div className="info-text">
                <h4>Call Us</h4>
                <p>+250 796 023 452</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-text">
                <h4>Email Us</h4>
                <p>abettertomorrowf@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-text">
                <h4>Visit Us</h4>
                <p>Kigali, Rwanda (Batsinda)</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaClock /></div>
              <div className="info-text">
                <h4>Working Hours</h4>
                <p>Mon - Sat: 8:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="whatsapp-box">
              <h4>Direct Chat</h4>
              <p>For faster response, chat with our experts on WhatsApp.</p>
              <a href="https://wa.me" className="btn-wa">
                <FaWhatsapp /> Chat Now
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="contact-form-card">
            <h3 className="form-title">Send Us a Message</h3>
            <form className="pro-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="e.g. John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="example@mail.com" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select>
                  <option>Graphic Design</option>
                  <option>Web Development</option>
                  <option>Store Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
