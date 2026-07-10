import { motion } from 'framer-motion'

function EventCalendar() {
  const events = [
    { date: '15 Mar', event: 'Sports Day', type: 'Event' },
    { date: '20 Mar', event: 'Parents Meeting', type: 'Meeting' },
    { date: '25 Mar', event: 'Academic Review', type: 'Review' },
    { date: '10 Apr', event: 'End of Term 1', type: 'Holiday' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-16">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-primary-600 font-bold text-2xl mb-2">{item.date}</div>
              <h4 className="font-bold text-gray-900 mb-2">{item.event}</h4>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold">
                {item.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventCalendar
