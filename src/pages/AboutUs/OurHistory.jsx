"use client"
import { motion } from "framer-motion"
import { Clock, Award, Users, Building2, Target, Lightbulb } from "lucide-react"

const milestones = [
  {
    id: 1,
    year: "2010",
    title: "Company Foundation",
    description: "Digital Energy was established with a vision to transform the energy sector.",
    icon: Building2
  },
  {
    id: 2,
    year: "2015",
    title: "Expansion",
    description: "Expanded operations to multiple regions and established key partnerships.",
    icon: Target
  },
  {
    id: 3,
    year: "2018",
    title: "Innovation Hub",
    description: "Launched our innovation center to drive technological advancement.",
    icon: Lightbulb
  },
  {
    id: 4,
    year: "2020",
    title: "Global Recognition",
    description: "Received international recognition for sustainable energy solutions.",
    icon: Award
  },
  {
    id: 5,
    year: "2023",
    title: "Digital Transformation",
    description: "Completed major digital transformation initiatives.",
    icon: Users
  }
]

const achievements = [
  {
    id: 1,
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered energy solutions across various sectors"
  },
  {
    id: 2,
    number: "50+",
    label: "Team Members",
    description: "Growing team of energy and technology experts"
  },
  {
    id: 3,
    number: "15+",
    label: "Years Experience",
    description: "Decades of industry expertise and innovation"
  }
]

const OurHistory = () => {
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
                src="/src/assets/p7.jpg"
                alt="Our History"
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
                <p className="text-sm font-medium">Our History</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                A Legacy of <span className="text-orange-400">Innovation</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                From our founding to becoming a leader in digital energy solutions,
                we've maintained our commitment to innovation and excellence.
              </motion.p>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <p className="text-gray-900 font-medium mb-2">{achievement.label}</p>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white py-16 rounded-2xl">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  Our Journey Through Time
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 text-lg max-w-3xl mx-auto"
                >
                  Key milestones that shaped our growth and success
                </motion.p>
              </div>
              <div className="max-w-4xl mx-auto">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-8 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                    <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-blue-200 last:hidden" />
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <milestone.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600 mb-1">{milestone.year}</div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Legacy Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Legacy</h4>
                <p className="text-gray-600 leading-relaxed">
                  Over the years, we've built a reputation for excellence and innovation in the energy sector.
                  Our journey has been marked by continuous growth, technological advancement, and a steadfast
                  commitment to sustainable energy solutions. Today, we stand as a testament to the power of
                  vision, perseverance, and innovation in transforming the energy landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurHistory
