import { motion } from 'framer-motion'
import { Users, BookOpen, Award, Building2 } from 'lucide-react'

function Statistics() {
  const stats = [
    { icon: Users, label: 'Students', value: '500+' },
    { icon: BookOpen, label: 'Courses', value: '50+' },
    { icon: Award, label: 'Excellence Rate', value: '95%' },
    { icon: Building2, label: 'Years', value: '20+' },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white text-center mb-16">Our Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block mb-4 p-4 bg-white bg-opacity-20 rounded-full"
                >
                  <Icon size={48} />
                </motion.div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Statistics
