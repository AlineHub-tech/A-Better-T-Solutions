import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import servicesData from '../data/Data'; 
import { FaWhatsapp, FaPhoneAlt, FaArrowLeft, FaCheckCircle, FaTag } from "react-icons/fa";
import '../styles/ServiceDetail.css'; 

export default function ServiceDetailPage() {
  const { title: serviceTitleEncoded } = useParams(); 
  const serviceTitle = decodeURIComponent(serviceTitleEncoded || ''); 
  const [service, setService] = useState(null);

  useEffect(() => {
    const foundItem = servicesData
      .flatMap(category => category.items)
      .find(item => item.title === serviceTitle);
    setService(foundItem || null);
    window.scrollTo(0, 0); // Kugaruka hejuru page ifungutse
  }, [serviceTitle]);

  if (!service) {
    return (
      <div className="error-page">
        <h2>Service Not Found</h2>
        <Link to="/store" className="back-home-btn">Back to Store</Link>
      </div>
    );
  }

  return (
    <div className="detail-page-wrapper">
      <div className="container">
        {/* Akantu ko gusubira inyuma */}
        <Link to="/store" className="back-link">
          <FaArrowLeft /> Back to Store
        </Link>

        <div className="detail-grid">
          {/* 1. IFOTO (LEFT SIDE) */}
          <div className="detail-image-section">
            <div className="image-card">
              <img src={service.img} alt={service.title} />
              <div className="category-tag-float">
                <FaTag /> Premium Service
              </div>
            </div>
          </div>

          {/* 2. UBUSOBANURO (RIGHT SIDE) */}
          <div className="detail-info-section">
            <span className="pro-badge">Digital Excellence</span>
            <h1>{service.title}</h1>
            
            <div className="price-container">
              <span className="label">Investment:</span>
              <span className="value">{service.price}</span>
            </div>

            <div className="description-box">
              <h3><FaCheckCircle className="gold-icon" /> Service Overview</h3>
              <p>{service.description || "Professional digital solution tailored to enhance your brand's presence and business efficiency with high-quality standards."}</p>
              
              <ul className="benefit-list">
                <li><FaCheckCircle /> High-Resolution Results</li>
                <li><FaCheckCircle /> 24/7 Professional Support</li>
                <li><FaCheckCircle /> Custom Tailored Designs</li>
              </ul>
            </div>

            <div className="booking-card">
              <h4>Ready to Start?</h4>
              <p>Contact our experts to discuss your project requirements.</p>
              <div className="action-buttons">
                <a 
                  href={`https://wa.me, I'm interested in: ${service.title}`} 
                  className="whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> Order on WhatsApp
                </a>
                <a href="tel:+250796023452" className="call-btn">
                  <FaPhoneAlt /> +250 796 023 452
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
