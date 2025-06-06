"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/src/assets/logo.png" alt="Digital Energy Logo" className="h-8 w-auto" />
              <span className="text-lg font-bold">Digital Energy</span>
            </div>
            <p className="text-blue-100 text-sm">
              Leading indigenous multi-diverse energy solutions company providing comprehensive services across the entire energy value chain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link to="/" className="block text-blue-100 hover:text-orange-500 transition-colors text-sm">
                  Home
                </Link>
                <Link to="/about" className="block text-blue-100 hover:text-orange-500 transition-colors text-sm">
                  About Us
                </Link>
                <Link to="/services" className="block text-blue-100 hover:text-orange-500 transition-colors text-sm">
                  Services
                </Link>
              </div>
              <div className="space-y-2">
                <Link to="/projects" className="block text-blue-100 hover:text-orange-500 transition-colors text-sm">
                  Projects
                </Link>
                <Link to="/oem" className="block text-blue-100 hover:text-orange-500 transition-colors text-sm">
                  OEM
                </Link>
                <Link to="/contact" className="block text-blue-100 hover:text-orange-500 transition-colors text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-blue-100 text-sm">
                  123 Energy Street, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-blue-100 text-sm">+234 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-blue-100 text-sm">info@digitalenergy.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-3">
        <div className="container mx-auto px-4">
          <div className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Digital Energy & Integrated Services Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
