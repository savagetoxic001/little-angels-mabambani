import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useForm } from 'react-hook-form'

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    alert('Message sent successfully! We will contact you soon.')
    reset()
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">Get In Touch</h2>
        <p className="section-subtitle">We would love to hear from you</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-600">Mabambani, Kenya</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                <Phone className="text-primary-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                <p className="text-gray-600">+254 XXX XXX XXX</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                <Mail className="text-primary-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600">info@littleangels.co.ke</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                {...register('email', { required: 'Email is required' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                placeholder="Your message here..."
                rows="4"
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
