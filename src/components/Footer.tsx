
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Netzero RnD</h3>
                <p className="text-sm text-gray-400">Research & Development</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading sustainability research and development company focused on renewable energy, 
              e-mobility, and innovative solutions for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-green-400 transition-colors">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-green-400 transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-400" />
                <span className="text-gray-400 text-sm">info@netzero-rnd.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-400 text-sm">+254 (0) 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-green-400" />
                <span className="text-gray-400 text-sm">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Netzero Research and Development Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
