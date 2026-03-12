import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppFloat.css";

export default function WhatsAppFloat() {
  return (
    <div className="wa-float-container">
      {/* Akantu k'inyandiko kagaragara iyo umuntu akojejeho imbeba (Tooltip) */}
      <span className="wa-tooltip">Chat with us</span>
      
      <a 
        className="whatsapp-float-btn" 
        href="https://wa.me! I'm interested in your services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <div className="pulse-ring"></div>
        <FaWhatsapp className="wa-icon" />
      </a>
    </div>
  );
}
