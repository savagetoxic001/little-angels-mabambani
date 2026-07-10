import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

function About() {
  const features = [
    'Experienced and qualified teachers',
    'Modern learning facilities',
    'Holistic child development',
    'Safe and nurturing environment',
    'Competitive academic excellence',
    'Character and moral development',
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg shadow-xl h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <p className="text-lg font-semibold">School Campus Image</p>
                <p className="text-sm mt-2 opacity-75">Replace with actual image</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Little Angels</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Little Angels Mabambani is a leading educational institution committed to providing quality education and holistic development for children from early years through primary education.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Our mission is to nurture young minds, develop critical thinking skills, and foster a love for learning while maintaining strong moral and ethical values.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
