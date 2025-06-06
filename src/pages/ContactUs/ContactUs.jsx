"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardContent } from "../../components/ui/card"
import { ArrowRight, FileText, Users, Handshake, MessageSquare } from "lucide-react"

const contactOptions = [
  {
    title: "Request a Quote",
    description: "Get a detailed quote for your project requirements",
    icon: FileText,
    href: "/contact/quote",
    color: "bg-primary-500",
  },
  {
    title: "Vendor Registration",
    description: "Register as a vendor to work with Digital Energy",
    icon: Users,
    href: "/contact/vendor",
    color: "bg-secondary-500",
  },
  {
    title: "Become Our Partner",
    description: "Explore partnership opportunities with our company",
    icon: Handshake,
    href: "/contact/partner",
    color: "bg-primary-500",
  },
  {
    title: "General Contact",
    description: "Get in touch for general inquiries and information",
    icon: MessageSquare,
    href: "/contact/form",
    color: "bg-secondary-500",
  },
]

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Get in touch with our team to discuss your energy solutions needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the option that best fits your needs and we'll get back to you promptly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={option.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 ${option.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <option.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors flex items-center">
                        {option.title}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </h3>
                      <p className="text-gray-600 text-lg">{option.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
