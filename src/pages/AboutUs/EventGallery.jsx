"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Users, MapPin, Clock, Image as ImageIcon, Maximize2 } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Energy Innovation Summit 2023",
    date: "March 15-17, 2023",
    location: "Lagos, Nigeria",
    image: "/src/assets/pic_6.png",
    description: "A gathering of industry leaders to discuss the future of energy technology."
  },
  {
    id: 2,
    title: "Sustainable Energy Conference",
    date: "June 8-10, 2023",
    location: "Abuja, Nigeria",
    image: "/src/assets/pic_7.png",
    description: "Exploring sustainable energy solutions for Africa's future."
  },
  {
    id: 3,
    title: "Digital Energy Workshop",
    date: "September 20-22, 2023",
    location: "Port Harcourt, Nigeria",
    image: "/src/assets/pic_8.png",
    description: "Hands-on training in digital energy management systems."
  }
]

const upcomingEvents = [
  {
    id: 1,
    title: "Energy Tech Expo 2024",
    date: "January 15-17, 2024",
    location: "Lagos, Nigeria",
    description: "Showcasing the latest innovations in energy technology"
  },
  {
    id: 2,
    title: "Green Energy Forum",
    date: "February 20-22, 2024",
    location: "Abuja, Nigeria",
    description: "Focusing on renewable energy solutions"
  }
]

const galleryImages = [
  {
    id: 1,
    src: "/src/assets/pic_1.png",
    alt: "Energy Infrastructure",
    category: "Infrastructure"
  },
  {
    id: 2,
    src: "/src/assets/pic_2.png",
    alt: "Solar Power Installation",
    category: "Renewable Energy"
  },
  {
    id: 3,
    src: "/src/assets/pic_3.png",
    alt: "Wind Farm",
    category: "Renewable Energy"
  },
  {
    id: 4,
    src: "/src/assets/pic_4.png",
    alt: "Smart Grid Technology",
    category: "Technology"
  },
  {
    id: 5,
    src: "/src/assets/pic_5.png",
    alt: "Energy Distribution",
    category: "Infrastructure"
  },
  {
    id: 6,
    src: "/src/assets/pic_6.png",
    alt: "Power Plant",
    category: "Infrastructure"
  },
  {
    id: 7,
    src: "/src/assets/pic_7.png",
    alt: "Energy Storage",
    category: "Technology"
  },
  {
    id: 8,
    src: "/src/assets/pic_8.png",
    alt: "Smart Metering",
    category: "Technology"
  },
  {
    id: 9,
    src: "/src/assets/pic_9.png",
    alt: "Grid Modernization",
    category: "Infrastructure"
  },
  {
    id: 10,
    src: "/src/assets/pic_10.png",
    alt: "Smart Grid Operations",
    category: "Technology"
  },
  {
    id: 11,
    src: "/src/assets/pic_11.png",
    alt: "Renewable Energy Plant",
    category: "Renewable Energy"
  },
  {
    id: 12,
    src: "/src/assets/pic_12.png",
    alt: "Energy Distribution Network",
    category: "Infrastructure"
  }
]

const categories = [
  { id: "all", name: "All" },
  { id: "infrastructure", name: "Infrastructure" },
  { id: "renewable", name: "Renewable Energy" },
  { id: "technology", name: "Technology" }
]

const EventGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-12">
          {/* Enhanced Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="/src/assets/pic_14.png"
                alt="Photo Gallery"
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
                <p className="text-sm font-medium">Our Gallery</p>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Capturing <span className="text-orange-400">Energy Excellence</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-blue-100 max-w-3xl leading-relaxed"
              >
                Explore our collection of images showcasing our projects, infrastructure,
                and commitment to energy innovation.
              </motion.p>
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-blue-600"
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onClick={() => setSelectedImage(image)}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <button 
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Maximize2 className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                  <div className="inline-block bg-blue-600/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs text-white mb-1">
                    {image.category}
                  </div>
                  <h3 className="text-white text-sm font-medium truncate">{image.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={closeLightbox}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-5xl w-full"
                  onClick={e => e.stopPropagation()}
                >
                  {/* Close button in top-right corner */}
                  <button
                    className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
                    onClick={closeLightbox}
                  >
                    <X className="w-8 h-8" />
                  </button>

                  {/* Close button overlay on image */}
                  <button
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
                    onClick={closeLightbox}
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-white text-sm mb-1">{selectedImage.category}</div>
                    <h3 className="text-white font-medium">{selectedImage.alt}</h3>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default EventGallery
