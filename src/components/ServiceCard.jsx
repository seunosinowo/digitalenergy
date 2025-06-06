"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
            {service.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default ServiceCard
