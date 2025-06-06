"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import WhoWeAre from "./pages/AboutUs/WhoWeAre"
import OurGovernance from "./pages/AboutUs/OurGovernance"
import OurHistory from "./pages/AboutUs/OurHistory"
import OurCertifications from "./pages/AboutUs/OurCertifications"
import EventGallery from "./pages/AboutUs/EventGallery"
import Clients from "./pages/AboutUs/Clients"
import ContactUs from "./pages/ContactUs/ContactUs"
import Services from "./pages/Services/Services"
import Projects from "./pages/Projects"
import OEM from "./pages/OEM"
import Career from "./pages/Career"
import "./index.css"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about">
              <Route path="who-we-are" element={<WhoWeAre />} />
              <Route path="governance" element={<OurGovernance />} />
              <Route path="history" element={<OurHistory />} />
              <Route path="certifications" element={<OurCertifications />} />
              <Route path="gallery" element={<EventGallery />} />
              <Route path="clients" element={<Clients />} />
            </Route>
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/oem" element={<OEM />} />
            <Route path="/careers" element={<Career />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
