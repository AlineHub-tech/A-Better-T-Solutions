import React, { useState, useEffect } from "react";
// Hamagara Navbar na Footer zawe hano
// import Navbar from "../components/Navbar"; 
// import Footer from "../components/Footer";
import "../styles/Home.css";

export default function Home() {
  const [index, setIndex] = useState(0);
  const words = ["Graphic Design", "Web Development", "Branding Solutions", "ICT Consulting"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-wrapper">
      {/* <Navbar /> */}

      {/* --- HERO SECTION --- */}
      <section className="hero-v5">
        <div className="hero-container">
          <div className="hero-badge">
            <i className="fas fa-award"></i>
            <span>#1 Creative Agency in Rwanda</span>
          </div>
          
          <h1 className="hero-h1">
            Build Your Brand With <br />
            <span className="gold-gradient">{words[index]}</span>
          </h1>
          
          <p className="hero-p">
            Professional digital solutions tailored for your business growth. 
            From premium designs to secure web architectures.
          </p>

          <div className="hero-trust">
            <div className="stars-group">
              <i className="fas fa-star"></i><i className="fas fa-star"></i>
              <i className="fas fa-star"></i><i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>5.0 Rating | 100% Client Satisfaction</p>
          </div>

          <div className="hero-btns">
            <a href="#store" className="btn-primary-gold">Get Started Now</a>
            <a href="#about" className="btn-secondary-dark">View Services</a>
          </div>
        </div>
      </section>

      {/* --- FEATURES (WHY CHOOSE US) --- */}
      <section className="features-v5">
        <div className="section-title">
          <span className="tag">Why Choose Us</span>
          <h2>Our Core Excellence</h2>
        </div>
        
        <div className="feat-grid-v5">
          <div className="feat-box">
            <div className="feat-icon-bg"><i className="fas fa-bolt"></i></div>
            <h3>Super Fast Delivery</h3>
            <p>We respect your time. Every project is delivered within the agreed timeline.</p>
          </div>
          <div className="feat-box active-feat">
            <div className="feat-icon-bg"><i className="fas fa-gem"></i></div>
            <h3>Premium Quality</h3>
            <p>We provide high-end creative solutions that make your brand stand out.</p>
          </div>
          <div className="feat-box">
            <div className="feat-icon-bg"><i className="fas fa-headset"></i></div>
            <h3>24/7 Support</h3>
            <p>Our dedicated team is always available to assist you with any inquiries.</p>
          </div>
        </div>
      </section>

      {/* --- WHAT WE DO (SERVICES) --- */}
      <section className="what-we-do-v5">
        <div className="wwd-container">
          <div className="wwd-left">
            <span className="tag">What We Do</span>
            <h2>We Help Brands <br/> Grow Digitally</h2>
            <p>With years of experience, we provide a wide range of services to boost your business visibility.</p>
            <ul className="wwd-list">
              <li><i className="fas fa-check-circle"></i> Custom Web Engineering</li>
              <li><i className="fas fa-check-circle"></i> Professional Brand Identity</li>
              <li><i className="fas fa-check-circle"></i> High-Quality Printing</li>
            </ul>
          </div>
          <div className="wwd-right">
            <div className="wwd-card">
              <i className="fas fa-layer-group"></i>
              <h4>Branding</h4>
              <p>Professional logos & identity.</p>
            </div>
            <div className="wwd-card">
              <i className="fas fa-code"></i>
              <h4>Development</h4>
              <p>Modern & Secure websites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- AWARDS SECTION --- */}
      <section className="awards-v5">
        <div className="award-logo"><i className="fas fa-trophy"></i> Best Innovation 2024</div>
        <div className="award-logo"><i className="fas fa-medal"></i> Certified Agency</div>
        <div className="award-logo"><i className="fas fa-users"></i> 500+ Clients</div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
