"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Wrench, ShoppingCart, Building, CheckCircle, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/HeroSection"
import StatsSection from "@/components/StatsSection"
import { Link } from "react-router-dom"

const services = [
  {
    id: "engineering",
    icon: Wrench,
    title: "Engineering Services",
    description: "Conceptual, FEED & Detailed Design | Process & Piping | Civil & Structural | E&I Design",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    image: "/src/assets/pic_2.jpg"
  },
  {
    id: "procurement",
    icon: ShoppingCart,
    title: "Procurement Services",
    description: "Strategic Sourcing | Materials Management | Vendor Coordination | QA/QC Assurance",
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
    image: "/src/assets/pic_4.jpg"
  },
  {
    id: "construction",
    icon: Building,
    title: "Construction & Installation",
    description: "Pipeline Construction | Facility Upgrades | Tank Farms | Modular Systems Installation",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    image: "/src/assets/pic_5.jpg"
  },
  {
    id: "commissioning",
    icon: CheckCircle,
    title: "Commissioning & Start-up",
    description: "Pre-commissioning | Mechanical Completion | Functional Testing | Handover Documentation",
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
    image: "/src/assets/pic_6.png"
  },
  {
    id: "operations",
    icon: Settings,
    title: "Operations & Maintenance",
    description: "Routine Maintenance | Turnaround Support | Asset Integrity Management",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    image: "/src/assets/pic_8.png"
  },
  {
    id: "manpower",
    icon: Users,
    title: "Technical Manpower Supply",
    description: "Certified Personnel | Project Staffing | IRATA Technicians | Specialized Roles",
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
    image: "/src/assets/pic_9.png"
  },
]

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-950 text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/src/assets/pic_1.png')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-900/70" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
          <div className="max-w-4xl mx-auto lg:text-left flex flex-col items-center lg:items-start">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center lg:text-left"
            >
              <span className="block">Empowering Energy.</span>
              <span className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent">
                Delivering Excellence.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl text-center lg:text-left"
            >
              Leading indigenous multi-diverse energy solutions company providing comprehensive services across the entire energy value chain.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="relative group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl shadow-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/about"
                className="relative group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-white/10 backdrop-blur-sm border-2 border-orange-500 rounded-xl hover:bg-orange-500/20 transition-colors"
              >
                <span className="relative flex items-center">
                  Watch Video
                  <Play className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm text-blue-200 mb-2">Scroll to explore</span>
            <div className="w-8 h-12 rounded-full border-2 border-orange-400 flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 bg-orange-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                DIGITAL ENERGY & INTEGRATED SERVICES LIMITED (DEISL) is a leading indigenous multi-diverse energy
                solutions company, we provide comprehensive services across the entire energy value chain, from upstream
                through midstream to downstream.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We digitalize the complete energy lifecycle from consolidated EPCOM contracting services, trading of
                petroleum products, marine services, to product processing, storage, logistics, distribution, and
                compliance.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4">
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/src/assets/pic_14.jpg"
                  alt="About Digital Energy"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl z-10 shadow-xl" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl z-10 shadow-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Energy Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide integrated services across the entire energy value chain with technical excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <div className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-200 bg-white rounded-xl overflow-hidden flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div
                      className={`absolute top-4 left-4 ${service.color} rounded-xl p-3 shadow-md`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="text-blue-600 font-medium flex items-center group-hover:text-blue-800 transition-colors">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-16"
          >
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 text-lg shadow-lg">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/src/assets/pic_1.png')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/95 to-orange-600/95" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 -right-20 w-72 h-72 rounded-full bg-orange-600/90 blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-64 h-64 rounded-full bg-orange-300/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Power Your Next Project?
            </h2>
            <p className="text-xl text-orange-50/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Partner with Digital Energy for innovative, reliable, and sustainable energy solutions. Let's discuss how
              we can bring excellence to your next project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="relative group bg-gradient-to-r from-blue-900 to-blue-950 text-white px-8 py-4 text-lg shadow-lg">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                <span className="relative flex items-center">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}