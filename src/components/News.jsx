import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Annual Sports Day - A Great Success',
      excerpt: 'Our annual sports day was a wonderful celebration of athletic talent and school spirit.',
      date: '2024-03-15',
      category: 'Events',
    },
    {
      id: 2,
      title: 'New Science Laboratory Inauguration',
      excerpt: 'We are excited to announce the opening of our state-of-the-art science laboratory.',
      date: '2024-03-10',
      category: 'Facilities',
    },
    {
      id: 3,
      title: 'Academic Excellence Awards Ceremony',
      excerpt: 'Celebrating our high-achieving students in the 2024 academic year.',
      date: '2024-03-05',
      category: 'Achievements',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">Latest News</h2>
        <p className="section-subtitle">Stay updated with latest news and announcements</p>

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
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 h-48 flex items-center justify-center text-white">
                <p className="text-center font-semibold">{news.title.substring(0, 20)}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold mb-3">
                  {news.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {news.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.excerpt}</p>

                <div className="border-t pt-4 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(news.date).toLocaleDateString()}
                  </span>
                  <ArrowRight size={16} className="text-primary-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
