
import { useEffect, useState } from "react";
import "../sty.css";
export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>
          About <span>A Better-T Solutions</span>
        </h1>
        <p>
          We are a creative & technology-driven company helping businesses
          and individuals build strong digital presence.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            A Better-T Solutions is a Kigali-based creative agency specializing
            in Graphic Design, Web Development, ICT Solutions, Microsoft Office
            services and Professional Photography.
          </p>
          <p>
            We focus on delivering high-quality, modern and impactful digital
            solutions that help our clients grow, attract customers and stand
            out in a competitive market.
          </p>
        </div>

        <div className="about-image">
          <img src="https://source.unsplash.com/600x450/?creative,agency" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2>Why Choose Us</h2>

        <div className="why-grid">
          <div className="why-card">
            <i className="fas fa-star"></i>
            <h3>Premium Quality</h3>
            <p>We deliver professional, clean and modern designs.</p>
          </div>

          <div className="why-card">
            <i className="fas fa-clock"></i>
            <h3>Fast Delivery</h3>
            <p>We respect deadlines and deliver on time.</p>
          </div>

          <div className="why-card">
            <i className="fas fa-users"></i>
            <h3>Client Focused</h3>
            <p>Your satisfaction is our top priority.</p>
          </div>

          <div className="why-card">
            <i className="fas fa-lightbulb"></i>
            <h3>Creative Ideas</h3>
            <p>We bring innovative and creative solutions.</p>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="process">
        <h2>Our Working Process</h2>

        <div className="process-grid">
          <div className="process-step">
            <span>01</span>
            <h4>Consultation</h4>
            <p>Understanding your needs and goals.</p>
          </div>

          <div className="process-step">
            <span>02</span>
            <h4>Planning</h4>
            <p>Creating a clear roadmap for your project.</p>
          </div>

          <div className="process-step">
            <span>03</span>
            <h4>Design & Development</h4>
            <p>Building modern and functional solutions.</p>
          </div>

          <div className="process-step">
            <span>04</span>
            <h4>Delivery</h4>
            <p>Launching and supporting your project.</p>
          </div>
        </div>
      </section>

      {/* SERVICES SUMMARY */}
      <section className="about-services">
        <h2>What We Do</h2>

        <div className="about-service-grid">
          <div><i className="fas fa-palette"></i> Graphic Design</div>
          <div><i className="fas fa-code"></i> Web Development</div>
          <div><i className="fas fa-camera"></i> Photography</div>
          <div><i className="fas fa-file-word"></i> Microsoft Office</div>
          <div><i className="fas fa-print"></i> Printing Services</div>
          <div><i className="fas fa-chart-line"></i> ICT Solutions</div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Let’s Build Something Great Together</h2>
        <a href="https://wa.me/250796023452" className="cta-btn">
          Contact Us Now
        </a>
      </section>

    </div>
  );
}
