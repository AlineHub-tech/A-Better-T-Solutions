import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar(){
  return(
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <span>A Better-T Solutions</span>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}