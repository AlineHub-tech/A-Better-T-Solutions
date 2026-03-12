import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 
import services from "../data/Data";
import "../styles/Store.css"; // Menya ko wahinduye izina rya CSS file
import { FaWhatsapp, FaShoppingCart, FaTag, FaInfoCircle } from "react-icons/fa";

export default function Store() {
  const [index, setIndex] = useState(0);
  const texts = [
    "Graphic Design", "Web Development", "Branding Solutions",
    "Professional Printing", "Business Websites", "ICT Services"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="store-page">
      {/* STORE HERO */}
      <section className="store-hero">
        <div className="hero-overlay">
          <span className="store-badge">Official Digital Store</span>
          <h1>
            Premium <span className="gold-text">{texts[index]}</span>
          </h1>
          <p>Explore our high-end digital services and professional branding solutions.</p>
          <div className="hero-trust">
            <div className="stars">★★★★★</div>
            <span>Trusted by 500+ Businesses</span>
          </div>
        </div>
      </section>

      {/* PRODUCT LISTINGS */}
      <main className="store-container">
        {services.map((group, i) => (
          <section key={i} className="store-group">
            <div className="group-header">
              <h2><i className={`fas ${group.icon}`}></i> {group.category}</h2>
              <div className="header-line"></div>
            </div>

            <div className="store-grid">
              {group.items.map((item, j) => (
                <div className="product-card" key={j}>
                  <div className="product-img-wrapper">
                    <img src={item.img} alt={item.title} loading="lazy" />
                    <div className="product-price-tag">{item.price}</div>
                  </div>

                  <div className="product-info">
                    <div className="category-label">
                      <FaTag className="tag-icon" /> {group.category}
                    </div>
                    <h3>{item.title}</h3>
                    <p className="product-desc">
                      High-quality {item.title} services designed to give your business a professional edge.
                    </p>
                    
                    <div className="product-footer">
                      <Link 
                        to={`/services/${encodeURIComponent(item.title)}`} 
                        className="btn-details-link"
                      >
                        <FaInfoCircle /> Details
                      </Link>
                      
                     <a 
  href={`https://whatsapp.com{encodeURIComponent("Hello A Better-T Solutions! I'm interested in ordering: " + item.title)}`} 
  className="btn-order"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp /> Order Now
</a>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
