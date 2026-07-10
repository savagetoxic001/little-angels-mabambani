import { motion } from 'framer-motion'
import { Users, BookOpen, Users2, Briefcase } from 'lucide-react'

function Programs() {
  const programs = [
    {
      icon: Users,
      title: 'Nursery',
      age: '3-4 years',
      description: 'Play-based learning with focus on social and emotional development',
      features: ['Language Development', 'Motor Skills', 'Social Skills', 'Creative Play'],
    },
    {
      icon: BookOpen,
      title: 'Pre-Primary',
      age: '4-5 years',
      description: 'Foundation for literacy and numeracy with play-based activities',
      features: ['Early Literacy', 'Numeracy Basics', 'Science Exploration', 'Arts & Crafts'],
    },
    {
      icon: Users2,
      title: 'Lower Primary',
      age: '6-8 years',
      description: 'Comprehensive curriculum covering all core subjects and skills',
      features: ['English', 'Mathematics', 'Science', 'Social Studies', 'PE', 'Arts'],
    },
    {
      icon: Briefcase,
      title: 'Upper Primary',
      age: '9-12 years',
      description: 'Advanced academics with focus on critical thinking and problem-solving',
      features: ['Advanced Academics', 'STEM', 'Languages', 'Leadership Skills', 'Career Awareness'],
    },
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
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-2xl mx-auto"
          >
            Comprehensive educational programs for every stage of childhood
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 text-center">
                    <Icon size={48} className="mx-auto mb-2" />
                    <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
                    <p className="text-primary-100">{program.age}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Key Features:</p>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Curriculum Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4">100%</div>
              <p className="text-lg text-gray-700">Teacher-Student Interaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4">95%</div>
              <p className="text-lg text-gray-700">Student Success Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4">50+</div>
              <p className="text-lg text-gray-700">Learning Outcomes</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
