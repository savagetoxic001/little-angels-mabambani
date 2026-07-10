import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

function WhatsAppButton() {
  const phoneNumber = '254XXXXXXXXX' // Replace with actual number
  const message = 'Hello! I am interested in learning more about Little Angels Mabambani.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-40"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}

export default WhatsAppButton
