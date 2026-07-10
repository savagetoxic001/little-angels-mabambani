import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Annual Sports Day - A Great Success',
      excerpt: 'Our annual sports day was a wonderful celebration of athletic talent and school spirit.',
      date: '2024-03-15',
      author: 'Admin',
      category: 'Events',
      image: 'Sports Day',
    },
    {
      id: 2,
      title: 'New Science Laboratory Inauguration',
      excerpt: 'We are excited to announce the opening of our state-of-the-art science laboratory.',
      date: '2024-03-10',
      author: 'Principal',
      category: 'Facilities',
      image: 'Lab Opening',
    },
    {
      id: 3,
      title: 'Academic Excellence Awards Ceremony',
      excerpt: 'Celebrating our high-achieving students in the 2024 academic year.',
      date: '2024-03-05',
      author: 'Admin',
      category: 'Achievements',
      image: 'Awards',
    },
    {
      id: 4,
      title: 'Environmental Awareness Week',
      excerpt: 'Students participate in tree planting and environmental conservation activities.',
      date: '2024-02-28',
      author: 'Green Club',
      category: 'Activities',
      image: 'Environment',
    },
    {
      id: 5,
      title: 'Teacher Professional Development Workshop',
      excerpt: 'Our teaching staff undergoes continuous training in modern pedagogy and technology.',
      date: '2024-02-20',
      author: 'Admin',
      category: 'Staff',
      image: 'Workshop',
    },
    {
      id: 6,
      title: 'Cultural Festival Celebration',
      excerpt: 'Students showcase diverse cultural traditions and talents through performances.',
      date: '2024-02-15',
      author: 'Admin',
      category: 'Events',
      image: 'Culture',
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
            School News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-2xl mx-auto"
          >
            Latest updates and announcements from Little Angels Mabambani
          </motion.p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-48 flex items-center justify-center text-white overflow-hidden">
                  <p className="text-center font-semibold">{news.image}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold">
                      {news.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.excerpt}</p>

                  {/* Footer */}
                  <div className="border-t pt-4 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(news.date).toLocaleDateString()}
                      </span>
                    </div>
                    <ArrowRight size={16} className="text-primary-600" />
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

export default News
