import { useState } from 'react'
import { motion } from 'framer-motion'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, title: 'Campus View', category: 'Campus' },
    { id: 2, title: 'Classroom Activity', category: 'Academics' },
    { id: 3, title: 'Sports Day', category: 'Events' },
    { id: 4, title: 'Library', category: 'Facilities' },
    { id: 5, title: 'Science Lab', category: 'Academics' },
    { id: 6, title: 'Playground', category: 'Facilities' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">School Gallery</h2>
        <p className="section-subtitle">Explore the vibrant life at Little Angels Mabambani</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
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
  )
}

export default Gallery
