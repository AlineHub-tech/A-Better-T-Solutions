import { useEffect, useState } from "react";
import "../sty.css";
export default function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <h1>
          Contact <span>Us</span>
        </h1>
        <p>
          Get in touch with A Better T Solutions and let’s grow your business
          together.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">
        <div className="info-card">
          <i className="fas fa-phone"></i>
          <h3>Phone</h3>
          <p>+250 796 023 452</p>
        </div>

        <div className="info-card">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>abettertomorrowf@gmail.com</p>
        </div>

        <div className="info-card">
          <i className="fas fa-location-dot"></i>
          <h3>Location</h3>
          <p>Kigali, Rwanda</p>
        </div>

        <div className="info-card">
          <i className="fas fa-clock"></i>
          <h3>Working Hours</h3>
          <p>Mon – Sat | 8:00 AM – 6:00 PM</p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Service Needed" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* MAP */}
      <section className="contact-map">
        <h2>Our Location</h2>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Kagugu,+Kigali,+Rwanda&output=embed"
        ></iframe>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Need Fast Response?</h2>
        <a href="https://wa.me/250796023452" className="cta-btn">
          Chat on WhatsApp
        </a>
      </section>

    </div>
  );
}