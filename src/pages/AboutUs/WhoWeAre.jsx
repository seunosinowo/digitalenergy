"use client"

import { motion } from "framer-motion"
import { Users, Award, Clock, Building2, Target, Lightbulb, Heart, Shield } from "lucide-react"

const values = [
  {
    id: 1,
    title: 'Innovation',
    description: 'Pushing boundaries and embracing new technologies to transform the energy sector.',
    icon: Lightbulb
  },
  {
    id: 2,
    title: 'Sustainability',
    description: 'Committed to environmental responsibility and sustainable energy solutions.',
    icon: Heart
  },
  {
    id: 3,
    title: 'Integrity',
    description: 'Operating with transparency, honesty, and the highest ethical standards.',
    icon: Shield
  }
]

const stats = [
  { id: 1, number: 15, suffix: '+', label: 'Years Experience' },
  { id: 2, number: 500, suffix: '+', label: 'Projects Completed' },
  { id: 3, number: 100, suffix: '%', label: 'Client Satisfaction' },
  { id: 4, number: 50, suffix: '+', label: 'Team Members' }
]

const WhoWeAre = () => {
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
                src="/src/assets/pic_2.png"
                alt="About Us"
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
                <p className="text-sm font-medium">About Digital Energy</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Pioneering the Future of <span className="text-orange-400">Sustainable Energy</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Through innovation and technology, we're transforming the energy landscape
                to create a sustainable future for generations to come.
              </motion.p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values Section */}
          <div>
            <div className="text-center mb-12">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Our Core Values
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg max-w-3xl mx-auto"
              >
                The principles that guide our every decision and action
              </motion.p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white py-16 rounded-2xl">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 mb-4">
                    To revolutionize the energy sector through innovative digital solutions
                    that drive sustainability and efficiency.
                  </p>
                  <div className="w-8 h-0.5 bg-orange-400 rounded-full" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 mb-4">
                    To be the global leader in digital energy solutions, creating a sustainable
                    future powered by innovation and technology.
                  </p>
                  <div className="w-8 h-0.5 bg-orange-400 rounded-full" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre

