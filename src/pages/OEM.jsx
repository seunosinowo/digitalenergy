"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { CheckCircle, Award, Globe, Users } from "lucide-react"

const oemPartners = [
  {
    name: "Global Energy Solutions",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Leading manufacturer of pipeline equipment and valves",
    products: ["Pipeline Valves", "Control Systems", "Safety Equipment"],
  },
  {
    name: "TechFlow Industries",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Specialized in flow measurement and control technologies",
    products: ["Flow Meters", "Pressure Sensors", "Control Valves"],
  },
  {
    name: "PowerGen Equipment",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Power generation and electrical equipment manufacturer",
    products: ["Generators", "Transformers", "Switchgear"],
  },
  {
    name: "Marine Solutions Ltd",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Marine and offshore equipment specialist",
    products: ["Marine Engines", "Navigation Systems", "Safety Equipment"],
  },
]

const benefits = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "All OEM products come with manufacturer warranties and quality certifications",
  },
  {
    icon: Award,
    title: "Certified Partners",
    description: "We work only with certified and reputable OEM manufacturers",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access to international OEM partners and their latest technologies",
  },
  {
    icon: Users,
    title: "Technical Support",
    description: "Comprehensive technical support and training from OEM experts",
  },
]

export default function OEM() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">OEM Partnerships</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Strategic partnerships with leading Original Equipment Manufacturers to deliver cutting-edge solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* OEM Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">OEM Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Digital Energy maintains strategic partnerships with leading Original Equipment Manufacturers (OEMs)
                worldwide to ensure our clients have access to the latest technologies and highest quality equipment for
                their energy projects.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our OEM partnerships enable us to provide comprehensive solutions that include equipment supply,
                installation, commissioning, and ongoing support services. We work closely with manufacturers to ensure
                optimal performance and reliability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through these partnerships, we offer competitive pricing, technical expertise, and warranty support that
                gives our clients confidence in their investment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/src/assets/pic_10.jpg"
                  alt="OEM Equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our OEM Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of working with our certified OEM partners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our OEM Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted partnerships with leading manufacturers worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {oemPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-12 w-auto mr-4" />
                      <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Products:</h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.products.map((product, productIndex) => (
                          <span
                            key={productIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need OEM Equipment or Support?</h2>
            <p className="text-xl text-secondary-100 mb-8 leading-relaxed">
              Contact us to discuss your OEM requirements and discover how our partnerships can benefit your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white">Request Quote</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary-500">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
