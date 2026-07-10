import { motion } from 'framer-motion'

function Fees() {
  const feeStructure = [
    {
      program: 'Nursery 1 (N1)',
      termFee: '45,000',
      registrationFee: '10,000',
      annualFee: '5,000',
    },
    {
      program: 'Nursery 2 (N2)',
      termFee: '50,000',
      registrationFee: '10,000',
      annualFee: '5,000',
    },
    {
      program: 'Pre-Primary (PP)',
      termFee: '55,000',
      registrationFee: '10,000',
      annualFee: '5,000',
    },
    {
      program: 'Lower Primary (Class 1-3)',
      termFee: '60,000',
      registrationFee: '15,000',
      annualFee: '5,000',
    },
    {
      program: 'Upper Primary (Class 4-6)',
      termFee: '70,000',
      registrationFee: '15,000',
      annualFee: '5,000',
    },
  ]

  const additionalFees = [
    { item: 'Transport (Optional)', price: '2,500 - 5,000/month' },
    { item: 'Lunch Program', price: '1,000/day' },
    { item: 'School Uniform', price: '3,500 - 5,000' },
    { item: 'Textbooks & Materials', price: '5,000 - 8,000' },
    { item: 'Sports Activities', price: '500/month' },
    { item: 'Extra Tuition', price: '1,500/week' },
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
            Fee Structure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-2xl mx-auto"
          >
            Transparent and affordable fee structure for quality education
          </motion.p>
        </div>
      </section>

      {/* Fee Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program Fee Structure</h2>
          <div className="overflow-x-auto">
            <motion.table
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Program</th>
                  <th className="px-6 py-4 text-right font-semibold">Term Fee (KES)</th>
                  <th className="px-6 py-4 text-right font-semibold">Registration (KES)</th>
                  <th className="px-6 py-4 text-right font-semibold">Annual (KES)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {feeStructure.map((fee, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">{fee.program}</td>
                    <td className="px-6 py-4 text-right text-gray-700">{fee.termFee}</td>
                    <td className="px-6 py-4 text-right text-gray-700">{fee.registrationFee}</td>
                    <td className="px-6 py-4 text-right text-gray-700">{fee.annualFee}</td>
                  </tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFees.map((fee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <h4 className="font-bold text-gray-900 mb-2">{fee.item}</h4>
                <p className="text-primary-600 font-semibold">{fee.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Payment Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Fees are payable per term</li>
                <li>• 3 terms per academic year</li>
                <li>• Payment due before school closes</li>
                <li>• Late payment penalties apply</li>
                <li>• Installment plans available</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Methods</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Bank Transfer</li>
                <li>• Mobile Money (M-Pesa)</li>
                <li>• Cheque</li>
                <li>• Direct Debit (Standing Order)</li>
                <li>• School Portal</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Fees
