"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Shield, FileCheck, Star, BadgeCheck } from "lucide-react"

const certifications = [
  {
    name: "ISO 9001:2015",
    category: "Quality Management",
    description: "International standard for quality management systems ensuring consistent quality in all our operations.",
    icon: CheckCircle,
    image: "/src/assets/certifications/iso9001.jpg",
    year: "2023",
    validity: "Valid until 2026"
  },
  {
    name: "ISO 14001:2015",
    category: "Environmental Management",
    description: "Standard for effective environmental management systems and sustainable practices.",
    icon: Shield,
    image: "/src/assets/certifications/iso14001.jpg",
    year: "2023",
    validity: "Valid until 2026"
  },
  {
    name: "ISO 45001:2018",
    category: "Occupational Health & Safety",
    description: "International standard for occupational health and safety management systems.",
    icon: Shield,
    image: "/src/assets/certifications/iso45001.jpg",
    year: "2023",
    validity: "Valid until 2026"
  },
  {
    name: "API Q1",
    category: "Oil & Gas Quality",
    description: "American Petroleum Institute quality management system certification for oil and gas operations.",
    icon: CheckCircle,
    image: "/src/assets/certifications/api.jpg",
    year: "2023",
    validity: "Valid until 2026"
  },
  {
    name: "ASME Certification",
    category: "Engineering Standards",
    description: "American Society of Mechanical Engineers certification for engineering excellence.",
    icon: Award,
    image: "/src/assets/certifications/asme.jpg",
    year: "2023",
    validity: "Valid until 2026"
  },
  {
    name: "NUPRC Certification",
    category: "Local Compliance",
    description: "Nigerian Upstream Petroleum Regulatory Commission certification for local operations.",
    icon: FileCheck,
    image: "/src/assets/certifications/nuprc.jpg",
    year: "2023",
    validity: "Valid until 2026"
  },
]

const achievements = [
  {
    id: 1,
    year: "2023",
    title: "Excellence in Innovation",
    description: "Recognized for pioneering digital energy solutions"
  },
  {
    id: 2,
    year: "2022",
    title: "Best Energy Company",
    description: "Awarded for outstanding service delivery"
  },
  {
    id: 3,
    year: "2021",
    title: "Sustainability Champion",
    description: "Recognized for environmental initiatives"
  }
]

const OurCertifications = () => {
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
                src="/src/assets/p88.png"
                alt="Certifications"
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
                <p className="text-sm font-medium">Our Certifications</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Excellence Through <span className="text-orange-400">Certification</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Our commitment to quality, safety, and environmental responsibility is validated
                through internationally recognized certifications and standards.
              </motion.p>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <div>
            <div className="text-center mb-12">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Our Certifications
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg max-w-3xl mx-auto"
              >
                Internationally recognized standards that validate our commitment to excellence
              </motion.p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <cert.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-gray-600">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Timeline */}
          <div className="bg-gradient-to-br from-blue-50 to-white py-16 rounded-2xl">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  Recent Achievements
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 text-lg max-w-3xl mx-auto"
                >
                  Recognition of our commitment to excellence and innovation
                </motion.p>
              </div>
              <div className="max-w-4xl mx-auto">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-8 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                    <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-blue-200 last:hidden" />
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-sm font-medium text-blue-600 mb-2">{achievement.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quality Commitment */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Quality Commitment</h4>
                <p className="text-gray-600 leading-relaxed">
                  We maintain rigorous quality control processes and continuously improve our systems
                  to ensure the highest standards in all our operations. Our certifications are not
                  just badges of honor but a testament to our unwavering commitment to excellence
                  and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurCertifications
