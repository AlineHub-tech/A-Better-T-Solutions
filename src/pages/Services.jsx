import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Services.css"
import { 
  FaPalette, FaCode, FaLaptopCode, FaVideo, 
  FaCamera, FaBullhorn, FaWifi, FaCheckCircle, 
  FaQuoteLeft, FaRocket, FaBuilding, FaTools
} from 'react-icons/fa';

// ... (services data remains the same)
const services = [
  { title: "Graphic Design", icon: <FaPalette />, desc: "Professional logos, flyers, and branding solutions that capture your brand essence.", tools: ["Photoshop", "Illustrator", "InDesign"] },
  { title: "Website Development", icon: <FaCode />, desc: "Building high-performance, responsive websites tailored to your business needs.", tools: ["React", "Node.js", "WordPress"] },
  { title: "ICT Consulting", icon: <FaLaptopCode />, desc: "Expert advice on IT infrastructure, networking, and digital strategy.", tools: ["Cisco", "Security Audits"] },
  { title: "Videography", icon: <FaVideo />, desc: "Professional video production and editing for commercials and events.", tools: ["Premiere Pro", "After Effects"] },
  { title: "Photography", icon: <FaCamera />, desc: "Professional photography for products, corporate events, and personal branding.", tools: ["DSLR", "Lighting", "Retouching"] },
  { title: "Content Creation", icon: <FaBullhorn />, desc: "Engaging digital content to grow your audience and increase engagement.", tools: ["SEO", "Copywriting", "Social Media"] },
  { title: "Cyber Cafe Internet", icon: <FaWifi />, desc: "Reliable, high-speed internet services and business center support.", tools: ["High Speed", "Secure PCs"] }
];

const testimonialsData = [
  { id: 1, name: "Jean Paul", title: "CEO of TechLink", quote: "The web development team exceeded my expectations. Professional and fast!" },
  { id: 2, name: "Alice M.", title: "Marketing Manager", quote: "Their graphic design work gave our brand a new life. Amazing creativity!" },
  { id: 3, name: "David K.", title: "Operations Director", quote: "Best ICT consulting in Kigali. They fixed our network issues permanently." },
  { id: 4, name: "Fanny U.", title: "Startup Founder", quote: "A better T solutions provided excellent branding support for our new venture!" },
];


export default function Services() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonialsData[currentTestimonialIndex];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex => 
        (prevIndex + 1) % testimonialsData.length
      );
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="services-container">
      {/* HERO SECTION ... */}
      <header className="services-hero">
        <div className="hero-badge">OUR SERVICES</div>
        <h1>Transforming businesses through <span>Innovative Technology</span></h1>
        <p>Expert development, creative design, and strategic digital transformation services trusted by industry leaders.</p>
      </header>

      {/* SERVICES GRID SECTION ... */}
      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="tools-list-header">
                <FaTools className="tools-icon" />
                <span>Tools We Use:</span>
              </div>
              <ul className="tools-list">
                {s.tools.map((tool, index) => (
                    <li key={index}><FaCheckCircle className="check" /> {tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US & INDUSTRY LEADERS */}
      <section className="why-choose">
        <div className="why-content">
          <div className="industry-badge"><FaBuilding /> Trusted by Industry Leaders</div>
          <h2>Why Choose ByteFlow?</h2>
          <p>We blend expertise with client-focused solutions to deliver measurable results.</p>
          <div className="client-logos">
            <span>TechLink</span><span>BrandA</span><span>Kivu</span><span>SolutionX</span>
          </div>
        </div>
      </section>


      {/* TESTIMONIAL SLIDER (FADE ANIMATION) */}
      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-display-wrapper">
          
          {/* We only render the current testimonial, and CSS handles the fade */}
          <div key={currentTestimonial.id} className="testimonial-fade-card">
              <FaQuoteLeft className="quote" />
              <p>"{currentTestimonial.quote}"</p>
              <h5>{currentTestimonial.name}</h5>
              <p className="testimonial-title">{currentTestimonial.title}</p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-box">
          <FaRocket className="rocket-icon" />
          <h2>Ready to Transform Your Vision?</h2>
          <p>Let's build something amazing together. Contact us today.</p>
          <a href="https://wa.me" className="cta-btn">Get Started Now</a>
        </div>
      </section>
    </div>
  );
}


