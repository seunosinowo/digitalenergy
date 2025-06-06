"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ServiceCard from "../../components/ServiceCard"
import {
  Wrench,
  ShoppingCart,
  Building,
  CheckCircle,
  Settings,
  Users,
  Monitor,
  GraduationCap,
  Fuel,
} from "lucide-react"

const services = [
  {
    id: "engineering",
    icon: Wrench,
    title: "Engineering Services",
    description:
      "Comprehensive engineering solutions from conceptual design to detailed engineering across all disciplines.",
    features: [
      "Conceptual Design and Feasibility Studies",
      "Front-End Engineering Design (FEED)",
      "Detail Engineering Design",
      "Process and Facilities Engineering",
      "Electrical, Instrumentation & Control Design",
      "Structural and Civil Engineering",
    ],
    color: "bg-orange-600",
  },
  {
    id: "procurement",
    icon: ShoppingCart,
    title: "Procurement Services",
    description: "Strategic sourcing and supply chain management with global reach and local expertise.",
    features: [
      "Vendor Selection & Qualification",
      "Specification Compliance",
      "Quality Assurance & Testing",
      "Logistics & Transportation",
      "Site Delivery Tracking",
      "Cost Optimization",
    ],
    color: "bg-blue-800",
  },
  {
    id: "construction",
    icon: Building,
    title: "Construction & Installation",
    description: "Full-scale construction services for onshore and offshore energy projects.",
    features: [
      "Civil, Structural & Mechanical Installation",
      "Pipeline Construction",
      "Tank Farm Construction",
      "Electrical & Instrumentation Works",
      "Modular Systems Installation",
      "Facility Upgrades",
    ],
    color: "bg-orange-600",
  },
  {
    id: "commissioning",
    icon: CheckCircle,
    title: "Commissioning & Start-up",
    description: "Ensuring systems are tested, verified, and fully operational according to specifications.",
    features: [
      "Pre-commissioning Activities",
      "Mechanical Completion",
      "Functional Testing",
      "System Integration",
      "Performance Validation",
      "Handover Documentation",
    ],
    color: "bg-blue-800",
  },
  {
    id: "operations",
    icon: Settings,
    title: "Operations & Maintenance",
    description: "Comprehensive O&M services to ensure optimal asset performance and reliability.",
    features: [
      "Preventive & Corrective Maintenance",
      "Asset Integrity Management",
      "Emergency Response",
      "Equipment Upgrades",
      "Performance Optimization",
      "24/7 Support Services",
    ],
    color: "bg-orange-600",
  },
  {
    id: "manpower",
    icon: Users,
    title: "Technical Manpower Supply",
    description: "Certified professionals for short and long-term assignments across all technical disciplines.",
    features: [
      "Electrical & Instrumentation Engineers",
      "Mechanical & Piping Engineers",
      "QA/QC Inspectors & Technicians",
      "IRATA-Certified Technicians",
      "Project Engineers",
      "HSE Officers & Supervisors",
    ],
    color: "bg-blue-800",
  },
  {
    id: "digital",
    icon: Monitor,
    title: "Digital Solutions & Automation",
    description: "Advanced automation and digital transformation solutions for intelligent operations.",
    features: [
      "PLC, SCADA & Control Systems",
      "Industrial Software Solutions",
      "IIOT Integration",
      "Remote Monitoring Systems",
      "Predictive Analytics",
      "Cybersecurity Implementation",
    ],
    color: "bg-orange-600",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training & Consultancy",
    description: "Capacity building and performance enhancement through structured training programs.",
    features: [
      "Technical & Safety Training",
      "Competency Development",
      "Management Systems Advisory",
      "ISO Standards Implementation",
      "Skills Assessment",
      "Leadership Development",
    ],
    color: "bg-blue-800",
  },
  {
    id: "trading",
    icon: Fuel,
    title: "Petroleum Products Trading",
    description: "Reliable supply and trading of petroleum products across Nigeria and West Africa.",
    features: [
      "Premium Motor Spirit (PMS)",
      "Automotive Gas Oil (AGO)",
      "Aviation Turbine Kerosene",
      "Supply Chain Management",
      "Quality Assurance",
      "Strategic Partnerships",
    ],
    color: "bg-orange-600",
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              Comprehensive energy solutions across the entire value chain, delivering innovation, quality, and
              excellence in every project we undertake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} showDetails={true} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your project requirements and discover how our comprehensive services can
              deliver value to your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact/quote">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg">
                  Request a Quote
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
