import React, { useEffect, useState } from 'react';
import servicesData from '../data/Data'; 
import '../sty.css'; 
import { useParams } from 'react-router-dom'; 

export default function ServiceDetailPage() {
  const { title: serviceTitleEncoded } = useParams(); 
  const serviceTitle = decodeURIComponent(serviceTitleEncoded || ''); 

  const [service, setService] = useState(null);

  useEffect(() => {
    const findService = () => {
      const foundItem = servicesData.flatMap(category => category.items).find(item => item.title === serviceTitle);
      if (foundItem) {
        setService(foundItem);
      } else {
        setService(null);
      }
    };

    findService();
  }, [serviceTitle]); 

  if (!service) {
    return <div className="loading-page">Service Details Not Found or Loading...</div>;
  }
  return (
    <div className="service-detail-page">
      <div className="detail-container">
        <div className="detail-image-wrapper">
          <img 
            src={service.img} 
            alt={service.title} 
            className="detail-image" 
          />
        </div>
        
        <div className="detail-content">
          <h1>{service.title}</h1>
          
          <p className="detail-price">
            Pricing: {service.price}
          </p>
          
          <div className="detail-description">
            <h2>Detailed Description:</h2>
            <p>{service.description}</p> 
          </div>

          <div className="detail-contact">
             <a href="https://wa.me" className="cta-btn">
                Request This Service via WhatsApp
             </a>
             <p>Or Call Us at +250 796 023 452</p>
          </div>
        </div>
      </div>
    </div>
  );
}
