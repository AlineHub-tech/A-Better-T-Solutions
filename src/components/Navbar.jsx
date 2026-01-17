import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

export default function Navbar(){
  return(
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="A Better-T Solutions Logo"/>
        <span>A Better-T Solutions</span>
      </div>
      
      {/* Menu Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

