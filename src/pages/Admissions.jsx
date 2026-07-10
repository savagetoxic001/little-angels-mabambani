import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Admissions() {
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
            Admissions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-2xl mx-auto"
          >
            Join the Little Angels family and give your child the best education
          </motion.p>
        </div>
      </section>

      {/* Admission Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Birth certificate (certified copy)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Medical report and vaccination cards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>School report (if transferring)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Parent/Guardian identification</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <span>Completed admission form</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Process</h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Application', desc: 'Submit completed application form' },
                  { step: '02', title: 'Assessment', desc: 'Child undergoes assessment' },
                  { step: '03', title: 'Interview', desc: 'Parent-guardian interview' },
                  { step: '04', title: 'Confirmation', desc: 'Admission confirmation' },
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start the application process today and give your child the opportunity to learn and grow in a nurturing environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a href="#" className="btn-outline">
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions
