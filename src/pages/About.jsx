import React from "react";
// Twahinduye FaTarget tuyigira FaBullseye kuko ariyo iri muri library
import { FaEye, FaBullseye, FaGem, FaAward, FaUsers, FaLightbulb } from "react-icons/fa";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <span className="pro-tag">Our Story</span>
          <h1>Empowering Businesses Through <br /> <span className="gold-text">Creative Innovation</span></h1>
          <p className="hero-p">
            A Better-T Solutions is a leading digital agency in Kigali, dedicated to 
            transforming ideas into powerful digital experiences.
          </p>
        </div>
      </section>

      {/* 2. INTRO / WHO WE ARE */}
      <section className="who-we-are">
        <div className="container grid-2">
          <div className="intro-image">
            <div className="experience-badge">
              <h2>5+</h2>
              <p>Years of Excellence</p>
            </div>
          </div>
          <div className="intro-text">
            <span className="pro-tag">Who We Are</span>
            <h2>Your Partner in Digital <br /> Transformation</h2>
            <p>
              Founded with a passion for excellence, we have grown into a multi-disciplinary 
              agency specializing in Graphic Design, Web Development, and ICT Consulting. 
              We don't just provide services; we build long-term partnerships that drive growth.
            </p>
            <div className="mini-stats">
              <div className="stat-item"><h4>100%</h4> <p>Satisfaction</p></div>
              <div className="stat-item"><h4>500+</h4> <p>Projects Done</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="vision-mission">
        <div className="container grid-2">
          <div className="vm-card">
            <div className="vm-icon"><FaBullseye /></div>
            <h3>Our Mission</h3>
            <p>
              To provide world-class digital and creative solutions that empower 
              entrepreneurs and organizations to reach their full potential through 
              innovation and quality craftsmanship.
            </p>
          </div>
          <div className="vm-card">
            <div className="vm-icon"><FaEye /></div>
            <h3>Our Vision</h3>
            <p>
              To be the leading digital transformation hub in Africa, recognized 
              for excellence, integrity, and the ability to turn complex challenges 
              into simple, elegant digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="core-values">
        <div className="container">
          <div className="section-header-center">
            <span className="pro-tag">Our Values</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <FaGem className="gold-icon" />
              <h4>Quality</h4>
              <p>We never compromise. Every pixel and line of code is crafted to perfection.</p>
            </div>
            <div className="value-item">
              <FaLightbulb className="gold-icon" />
              <h4>Innovation</h4>
              <p>We embrace new technologies to keep your business ahead of the competition.</p>
            </div>
            <div className="value-item">
              <FaAward className="gold-icon" />
              <h4>Integrity</h4>
              <p>Transparency and honesty are the foundations of every relationship we build.</p>
            </div>
            <div className="value-item">
              <FaUsers className="gold-icon" />
              <h4>Collaboration</h4>
              <p>Your vision is our priority. We work closely with you to achieve your goals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
