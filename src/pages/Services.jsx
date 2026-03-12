import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../data/Data";
import { FaCheckCircle, FaStar, FaQuoteLeft, FaRocket, FaShieldAlt, FaUsers, FaArrowRight } from "react-icons/fa";
import "../styles/Services.css";

export default function Services() {
  const testimonials = [
    { name: "Jean Paul", role: "CEO, TechRwanda", text: "A Better-T Solutions transformed our brand identity. Their web development team is top-notch!" },
    { name: "Aline Marie", role: "Manager, Fashion Hub", text: "The graphic designs they provided for our marketing campaign were world-class. Highly recommend!" },
    { name: "David K.", role: "Founder, Kigali Logistics", text: "Professional, fast, and reliable. They are the best ICT partners we've ever worked with." }
  ];

  return (
    <div className="services-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="services-hero">
        <div className="container">
          <span className="pro-tag">Our Expertise</span>
          <h1>Innovative Solutions for <br /><span className="gold-text">Modern Businesses</span></h1>
          <p>We provide a comprehensive suite of digital and creative services designed to propel your brand to the next level.</p>
        </div>
      </section>

      {/* 2. ALL SERVICES GRID (From Data.js) */}
      <section className="all-services-list">
        <div className="container">
          {servicesData.map((group, i) => (
            <div key={i} className="service-group-v2">
              <div className="group-header">
                <h2>{group.category}</h2>
                <div className="title-bar"></div>
              </div>
              <div className="services-grid-v2">
                {group.items.map((item, j) => (
                  <Link to={`/services/${encodeURIComponent(item.title)}`} className="service-item-card" key={j}>
                    <div className="icon-circle"><FaCheckCircle /></div>
                    <h4>{item.title}</h4>
                    <p>Premium quality {item.title} services tailored for excellence.</p>
                    <span className="learn-more">Learn More <FaArrowRight /></span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="why-choose-v2">
        <div className="container">
          <div className="choose-content">
            <div className="choose-text">
              <span className="pro-tag">Why Better-T?</span>
              <h2>Why Hundreds of Clients <br />Trust Our Agency</h2>
              <div className="choose-grid">
                <div className="choose-item">
                  <FaRocket className="gold-icon" />
                  <div>
                    <h4>Fast & Scalable</h4>
                    <p>We deliver high-performance results that grow with your business.</p>
                  </div>
                </div>
                <div className="choose-item">
                  <FaShieldAlt className="gold-icon" />
                  <div>
                    <h4>Secure & Reliable</h4>
                    <p>Your data and brand security are our top priorities.</p>
                  </div>
                </div>
                <div className="choose-item">
                  <FaUsers className="gold-icon" />
                  <div>
                    <h4>Expert Team</h4>
                    <p>Work with the most talented designers and developers in Kigali.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="choose-image">
               <div className="experience-box">
                  <h3>5+</h3>
                  <p>Years of Excellence</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="testimonials-v2">
        <div className="container">
          <div className="section-header-center">
            <span className="pro-tag">Testimonials</span>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t, k) => (
              <div className="testi-card" key={k}>
                <FaQuoteLeft className="quote-icon" />
                <p className="testi-text">{t.text}</p>
                <div className="testi-user">
                  <div className="user-stars">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
