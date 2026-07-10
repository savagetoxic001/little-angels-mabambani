import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">LA</span>
              </div>
              <h3 className="font-bold text-lg">Little Angels</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Providing quality education and nurturing young minds for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-primary-400">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/fees" className="text-gray-400 hover:text-white transition-colors">
                  Fees
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-gray-400 hover:text-white transition-colors">
                  Staff
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-primary-400">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">Mabambani, Kenya</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-primary-400" />
                <p className="text-gray-400">+254 XXX XXX XXX</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-primary-400" />
                <p className="text-gray-400">info@littleangels.co.ke</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Little Angels Mabambani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
