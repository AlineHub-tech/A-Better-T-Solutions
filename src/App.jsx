import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles.css";

function App() {
  return (
    <Router>
      {/* TOP NAVBAR */}
      <Navbar />

      {/* MAIN ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* WHATSAPP FLOAT */}
      <WhatsAppFloat />

      {/* FOOTER */}
      <Footer />
    </Router>
  );
}

export default App;