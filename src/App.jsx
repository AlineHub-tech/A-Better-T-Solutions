import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";   
import ServiceDetailPage from './components/ServiceDetailPage';
import Services from './pages/Services';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// 1. Hamagara Store hano (Niba iri muri pages folder)
import Store from "./pages/Store"; 

import "./styles.css";

function App() {
  return (
    <Router>
       <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 2. Shira hano umurongo (Route) wa Store */}
        <Route path="/store" element={<Store />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:title" element={<ServiceDetailPage />} />
      </Routes>
      
      <WhatsAppFloat />
      <Footer />
    </Router>
  );
}

export default App;
