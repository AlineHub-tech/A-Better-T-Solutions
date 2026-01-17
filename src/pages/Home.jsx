import { useEffect, useState } from "react";
// Don't forget to import Link from react-router-dom!
import { Link } from 'react-router-dom'; 
import services from "../data/Data";

export default function Home(){
  const texts = [
    "Graphic Design",
    "Web Development",
    "Branding Solutions",
    "Professional Printing",
    "Business Websites",
    "E-Commerce Platforms",
    "Creative Flyers",
    "Modern Logos",
    "ICT Services",
    "Photography", // Added missing comma here
    "Cyber cofe internet"
  ];

  const [index,setIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setIndex((prev)=>(prev+1)%texts.length);
    },2000);
    return ()=> clearInterval(interval);
  },[]);

  return(
    <>
      {/* HERO */}
      <section className="hero">
        <h1>
          Premium <span className="animate">{texts[index]}</span>
        </h1>
        <p>Digital & Creative Solutions That Grow Your Business</p>
        <a href="https://wa.me/250796023452" className="hero-btn">
          Start Your Project
        </a>
      </section>

      {/* SERVICES BY CATEGORY */}
      {services.map((group,i)=>(
        <section key={i} className="service-section">
          <h2>
            <i className={`fas ${group.icon}`}></i> {group.category}
          </h2>

          <div className="grid">
            {group.items.map((item,j)=>(
              // >>>>> TWAKUYEMO DIV TUGARURA LINK KUGIRA NGO IHUZE NA ROUTER <<<<<
              // Buri kadirishya kose ubu karakandwa:
              <Link 
                to={`/services/${encodeURIComponent(item.title)}`} 
                className="card-link" 
                key={j}
              >
                <div className="card">
                    <img src={item.img} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <p className="price">{item.price}</p>
                    {/* Twashyize buto muri Link, ubu yakora neza */}
                    <button className="btn">
                      View Details
                    </button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
