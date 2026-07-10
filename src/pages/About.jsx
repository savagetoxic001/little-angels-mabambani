import { motion } from 'framer-motion'
import { CheckCircle, Users, Lightbulb, Heart } from 'lucide-react'

function About() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'We strive for academic excellence and continuous improvement in all areas',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community of students, parents, and educators',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and educational technology',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Providing a safe, nurturing environment for every child to thrive',
    },
  ]

  const timeline = [
    { year: '2004', event: 'School Founded' },
    { year: '2010', event: 'Expansion to Primary Level' },
    { year: '2015', event: 'Modern Facilities Upgraded' },
    { year: '2020', event: 'Digital Learning Platform Launched' },
  ]

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
            About Little Angels Mabambani
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-2xl mx-auto"
          >
            Dedicated to nurturing excellence and developing tomorrow's leaders
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide quality, holistic education that develops intellectually sharp, morally upright, and socially responsible individuals who can contribute positively to society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-secondary-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution recognized for academic excellence, innovative teaching methods, and the production of well-rounded individuals equipped with skills for the 21st century.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary-100 rounded-full">
                      <Icon className="text-primary-600" size={32} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{item.year}</span>
                </div>
                <p className="text-gray-700 font-semibold">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
