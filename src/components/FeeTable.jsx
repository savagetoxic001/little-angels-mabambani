import { motion } from 'framer-motion'

function FeeTable() {
  const fees = [
    { program: 'Nursery', term: '45,000', registration: '10,000' },
    { program: 'Pre-Primary', term: '55,000', registration: '10,000' },
    { program: 'Lower Primary', term: '60,000', registration: '15,000' },
    { program: 'Upper Primary', term: '70,000', registration: '15,000' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-auto"
    >
      <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-primary-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">Program</th>
            <th className="px-6 py-4 text-right font-semibold">Term Fee</th>
            <th className="px-6 py-4 text-right font-semibold">Registration</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {fees.map((fee, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-900">{fee.program}</td>
              <td className="px-6 py-4 text-right text-gray-700">{fee.term}</td>
              <td className="px-6 py-4 text-right text-gray-700">{fee.registration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}

export default FeeTable
