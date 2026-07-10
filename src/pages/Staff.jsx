import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

function Staff() {
  const staff = [
    {
      id: 1,
      name: 'Dr. Jane Kipchoge',
      position: 'Principal',
      qualification: 'MEd, PhD Education',
      email: 'jane@littleangels.co.ke',
      phone: '+254 XXX XXX XXX',
      bio: '20+ years in education leadership',
    },
    {
      id: 2,
      name: 'Mr. James Omondi',
      position: 'Deputy Principal',
      qualification: 'MEd, BSc',
      email: 'james@littleangels.co.ke',
      phone: '+254 XXX XXX XXX',
      bio: '15+ years teaching experience',
    },
    {
      id: 3,
      name: 'Ms. Grace Wanjiru',
      position: 'Head of Academics',
      qualification: 'MEd, BSc Education',
      email: 'grace@littleangels.co.ke',
      phone: '+254 XXX XXX XXX',
      bio: 'Curriculum specialist',
    },
    {
      id: 4,
      name: 'Mr. David Kiplagat',
      position: 'Nursery Class Teacher',
      qualification: 'Diploma ECE',
      email: 'david@littleangels.co.ke',
      phone: '+254 XXX XXX XXX',
      bio: 'Early childhood development expert',
    },
    {
      id: 5,
      name: 'Ms. Emily Musyoka',
      position: 'Primary Class Teacher',
      qualification: 'BEd Primary',
      email: 'emily@littleangels.co.ke',
      phone: '+254 XXX XXX XXX',
      bio: 'Creative teaching methodologies',
    },
    {
      id: 6,
      name: 'Mr. Peter Langat',
      position: 'Sports & PE Teacher',
      qualification: 'BEd Physical Education',
      email: 'peter@littleangels.co.ke',
      phone: '+254 XXX XXX XXX',
      bio: 'Youth development coach',
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
            Our Staff
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-2xl mx-auto"
          >
            Dedicated educators committed to your child's success
          </motion.p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Profile Image Placeholder */}
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-48 flex items-center justify-center text-white text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">{member.name.charAt(0)}</div>
                    <p className="text-sm opacity-75">Staff Profile</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.qualification}</p>
                  <p className="text-sm text-gray-700 mb-4 italic">"{member.bio}"</p>
                  
                  {/* Contact */}
                  <div className="border-t pt-4 space-y-2">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700">
                      <Mail size={16} />
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700">
                      <Phone size={16} />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Staff
