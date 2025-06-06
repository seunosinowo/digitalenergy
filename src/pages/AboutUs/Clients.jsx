"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Building2, Users, Globe, Award, ChevronRight, Handshake } from "lucide-react"
import { Link } from "react-router-dom"

const clients = [
  {
    id: 1,
    name: "Nigerian National Petroleum Corporation",
    logo: "/src/assets/pic_10.png",
    description: "Leading energy company in Nigeria",
    category: "Energy"
  },
  {
    id: 2,
    name: "Shell Petroleum Development Company",
    logo: "/src/assets/pic_11.png",
    description: "Global energy and petrochemical company",
    category: "Energy"
  },
  {
    id: 3,
    name: "Total Energies",
    logo: "/src/assets/pic_12.png",
    description: "International oil and gas company",
    category: "Energy"
  }
]

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, Energy Solutions Ltd",
    content: "Digital Energy has transformed our operations with their innovative solutions.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Operations Director, Power Corp",
    content: "Their expertise in digital energy management is unmatched in the industry.",
    rating: 5
  }
]

const industries = [
  {
    name: "Oil & Gas",
    icon: Building2,
    description: "Upstream, midstream, and downstream operations",
    clients: 4
  },
  {
    name: "Power Generation",
    icon: Globe,
    description: "Renewable and conventional power solutions",
    clients: 3
  },
  {
    name: "Petrochemicals",
    icon: Award,
    description: "Chemical processing and manufacturing",
    clients: 2
  },
  {
    name: "Refining",
    icon: Users,
    description: "Crude oil processing and product distribution",
    clients: 2
  }
]

const Clients = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-16">
          {/* Enhanced Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="/src/assets/p77.jpg"
                alt="Our Clients"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] opacity-10" />
            </div>
            <div className="relative z-10 container mx-auto px-6 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block bg-blue-700/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6"
              >
                <p className="text-sm font-medium">Our Clients</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Trusted by <span className="text-orange-400">Industry Leaders</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                We're proud to partner with leading organizations in the energy sector,
                delivering innovative solutions that drive success.
              </motion.p>
            </div>
          </motion.div>

          {/* Clients Grid */}
          <div>
            <div className="text-center mb-12">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Our Clients
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg max-w-3xl mx-auto"
              >
                Leading organizations that trust us with their energy solutions
              </motion.p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {client.category}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h4>
                    <p className="text-gray-600 text-sm">{client.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white py-16 rounded-2xl">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  Client Testimonials
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 text-lg max-w-3xl mx-auto"
                >
                  What our clients say about working with us
                </motion.p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Partnership Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Handshake className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Partnership Approach</h4>
                <p className="text-gray-600 leading-relaxed">
                  We believe in building long-term partnerships with our clients, focusing on
                  understanding their unique needs and delivering tailored solutions. Our
                  collaborative approach ensures that we not only meet but exceed expectations,
                  driving mutual success in the energy sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
