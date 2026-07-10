import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, title: 'Campus View', category: 'Campus' },
    { id: 2, title: 'Classroom Activity', category: 'Academics' },
    { id: 3, title: 'Sports Day', category: 'Events' },
    { id: 4, title: 'Library', category: 'Facilities' },
    { id: 5, title: 'Science Lab', category: 'Academics' },
    { id: 6, title: 'Playground', category: 'Facilities' },
    { id: 7, title: 'Assembly', category: 'Events' },
    { id: 8, title: 'Art Class', category: 'Academics' },
    { id: 9, title: 'School Gate', category: 'Campus' },
  ]

  const categories = ['All', 'Campus', 'Academics', 'Facilities', 'Events']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title text-white"
          >
            School Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-2xl mx-auto"
          >
            Explore the vibrant life at Little Angels Mabambani
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all h-64"
              >
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <p className="text-lg font-semibold">{image.title}</p>
                    <p className="text-sm opacity-75">{image.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-96 flex items-center justify-center text-white">
              <div className="text-center">
                <p className="text-2xl font-semibold">{selectedImage.title}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Category: {selectedImage.category}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-full btn-primary"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Gallery
