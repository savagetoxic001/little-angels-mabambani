import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Mrs. Angela Kipchoge',
      role: 'Parent',
      text: 'Little Angels has been a wonderful experience for our daughter. The teachers are caring and professional. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mr. David Omondi',
      role: 'Parent',
      text: 'My son has improved tremendously in his academics and confidence. The holistic approach to education is excellent.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ms. Lucy Wanjiru',
      role: 'Parent',
      text: 'Best investment for our child\'s future. The school maintains high standards and our kids love going to school.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white text-center mb-4">What Parents Say</h2>
        <p className="section-subtitle text-primary-100 text-center">Testimonials from our satisfied parents</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-primary-200 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
