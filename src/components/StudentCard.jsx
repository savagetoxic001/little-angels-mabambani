import { motion } from 'framer-motion'
import { Card } from 'lucide-react'

function StudentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">Student Card</h3>
        <Card className="text-primary-600" size={24} />
      </div>
      <p className="text-gray-600 text-sm">
        Digital student identification and progress tracking card
      </p>
    </motion.div>
  )
}

export default StudentCard
