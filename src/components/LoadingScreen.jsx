import { motion } from 'framer-motion'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-primary-600 to-primary-800 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 mx-auto mb-6 border-4 border-white border-t-transparent rounded-full"
        />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-bold"
        >
          Little Angels Mabambani
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white opacity-75 mt-2"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingScreen
