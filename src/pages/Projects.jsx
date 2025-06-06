"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Lagos Pipeline Infrastructure Project",
    description: "Major pipeline construction and installation project spanning 150km across Lagos State",
    location: "Lagos, Nigeria",
    duration: "18 months",
    team: "120+ professionals",
    status: "Completed",
    image: "/placeholder.svg?height=300&width=400",
    category: "Pipeline Construction",
  },
  {
    id: 2,
    title: "Port Harcourt Refinery Upgrade",
    description: "Comprehensive refinery modernization and capacity enhancement project",
    location: "Port Harcourt, Rivers State",
    duration: "24 months",
    team: "200+ professionals",
    status: "Ongoing",
    image: "/placeholder.svg?height=300&width=400",
    category: "Refinery Upgrade",
  },
  {
    id: 3,
    title: "Offshore Platform Installation",
    description: "Installation and commissioning of offshore production platform",
    location: "Niger Delta",
    duration: "12 months",
    team: "80+ professionals",
    status: "Completed",
    image: "/placeholder.svg?height=300&width=400",
    category: "Offshore Installation",
  },
  {
    id: 4,
    title: "Gas Processing Facility",
    description: "Design and construction of natural gas processing facility",
    location: "Warri, Delta State",
    duration: "20 months",
    team: "150+ professionals",
    status: "Completed",
    image: "/placeholder.svg?height=300&width=400",
    category: "Gas Processing",
  },
  {
    id: 5,
    title: "Tank Farm Development",
    description: "Construction of petroleum products storage tank farm",
    location: "Calabar, Cross River State",
    duration: "15 months",
    team: "90+ professionals",
    status: "Ongoing",
    image: "/placeholder.svg?height=300&width=400",
    category: "Storage Infrastructure",
  },
  {
    id: 6,
    title: "Digital Automation Project",
    description: "Implementation of SCADA and control systems for oil & gas facility",
    location: "Abuja, FCT",
    duration: "8 months",
    team: "40+ professionals",
    status: "Completed",
    image: "/placeholder.svg?height=300&width=400",
    category: "Digital Solutions",
  },
]

export default function Projects() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Showcasing our expertise through successful project deliveries across Nigeria's energy sector
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that demonstrate our capabilities and commitment to
              excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-500 text-white text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 text-white text-sm rounded-full ${
                          project.status === "Completed" ? "bg-green-500" : "bg-blue-500"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2 text-primary-500" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2 text-primary-500" />
                        {project.team}
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us bring our expertise and proven track record to your next energy project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white">Request a Quote</Button>
              <Button
                variant="outline"
                className="border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
