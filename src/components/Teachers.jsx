import { motion } from 'framer-motion'

function Teachers() {
  const teachers = [
    {
      id: 1,
      name: 'Mr. James Omondi',
      subject: 'Mathematics',
      experience: '10+ years',
    },
    {
      id: 2,
      name: 'Ms. Grace Wanjiru',
      subject: 'English',
      experience: '8+ years',
    },
    {
      id: 3,
      name: 'Mr. David Kiplagat',
      subject: 'Science',
      experience: '12+ years',
    },
    {
      id: 4,
      name: 'Ms. Emily Musyoka',
      subject: 'Social Studies',
      experience: '7+ years',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">Our Teachers</h2>
        <p className="section-subtitle">Experienced educators dedicated to your child's success</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all text-center"
            >
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-48 flex items-center justify-center text-white">
                <p className="text-4xl font-bold opacity-75">{teacher.name.charAt(0)}</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-1">{teacher.name}</h4>
                <p className="text-primary-600 font-semibold text-sm mb-2">{teacher.subject}</p>
                <p className="text-gray-600 text-sm">{teacher.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teachers
