import { useEffect, useState } from "react";
import profile from "../assets/profile.png";
// Import Icons from react-icons
import "../styles/About.css";
import { FaStar, FaClock, FaUsers, FaLightbulb, FaPalette, FaCode, FaCamera, FaFileWord, FaPrint, FaChartLine, FaDesktop, FaIdCard, FaHandsHelping, FaEye, FaBullseye, FaRocket, FaCheckCircle } from 'react-icons/fa';


export default function About() {
  return (
    <div className="about-page">

      {/* HERO / PROVEN EXCELLENCE */}
      <section className="about-hero">
        <div className="hero-badge">Proven Excellence</div>
        <h1>
          About <span>TechFlow</span>
        </h1>
        <p>
          We are a creative & technology-driven company helping businesses
          and individuals build strong digital presence.
        </p>
      </section>

      {/* WHO WE ARE / WHAT DRIVES US */}
      <section className="about-section">
        <div className="about-text">
          <h2>What Drives Us</h2>
          <p>
           TechFlow is a Kigali-based creative agency specializing
            in Graphic Design, Web Development, ICT Solutions, Microsoft Office
            services and Professional Photography. We also offer comprehensive Cyber Cafe services.
          </p>
          <p>
            We focus on delivering high-quality, modern and impactful digital
            solutions that help our clients grow, attract customers and stand
            out in a competitive market.
          </p>
        </div>

        <div className="about-image">
          <img src={profile} alt="Founder Umugwaneza Aline" />
          <div className="founder-info">
            <h3>Founder: Umugwaneza Aline</h3>
            <p>
              Email: 
              <a href="mailto:umugwanezaaline@77gmail.com"> 
                umugwanezaaline@77gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* BUILT ON PURPOSE (VISION & MISSION) */}
      <section className="vision-mission">
        <h2>Built on Purpose</h2>
        <div className="vm-grid">
            <div className="vm-card">
                <FaEye className="vm-icon"/>
                <h3>Our Vision</h3>
                <p>To be the leading digital solutions provider in East Africa, recognized for innovation and excellence in service delivery.</p>
            </div>
            <div className="vm-card">
                <FaBullseye className="vm-icon"/>
                <h3>Our Mission</h3>
                <p>To empower local businesses with cutting-edge technology and creative strategies that ensure sustainable growth and global competitiveness.</p>
            </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2>Why Choose Us</h2>

        <div className="why-grid">
          <div className="why-card">
            <FaStar className="why-icon"/>
            <h3>Premium Quality</h3>
            <p>We deliver professional, clean and modern designs.</p>
          </div>

          <div className="why-card">
            <FaClock className="why-icon"/>
            <h3>Fast Delivery</h3>
            <p>We respect deadlines and deliver on time.</p>
          </div>

          <div className="why-card">
            <FaUsers className="why-icon"/>
            <h3>Client Focused</h3>
            <p>Your satisfaction is our top priority.</p>
          </div>

          <div className="why-card">
            <FaLightbulb className="why-icon"/>
            <h3>Creative Ideas</h3>
            <p>We bring innovative and creative solutions.</p>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE (SERVICES SUMMARY) */}
      <section className="about-services">
        <h2>Our Expertise</h2>

        <div className="about-service-grid">
          <div><FaPalette /> Graphic Design</div>
          <div><FaCode /> Web Development</div>
          <div><FaCamera /> Photography</div>
          <div><FaFileWord /> Microsoft Office</div>
          <div><FaPrint /> Printing Services</div>
          <div><FaChartLine /> ICT Solutions</div>
          <div><FaDesktop /> Cyber Cafe Services</div> 
          <div><FaIdCard /> NIDA Services (IDs)</div> 
        </div>
      </section>

      {/* CTA: Ready to Transform Your Vision? */}
      <section className="about-cta">
        <FaRocket className="cta-icon-main" />
        <h2>Ready to Transform Your Vision?</h2>
        <p>Let's collaborate to transform your ideas into powerful digital solutions that drive measurable results and accelerate your business growth.</p>
        <a href="https://wa.me" className="cta-btn">
          Contact Us Now
        </a>
      </section>

    </div>
  );
}

