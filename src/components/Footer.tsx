import { Mail, Phone, MapPin, Facebook, Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              {/* <Palette className="h-8 w-8 text-indigo-400" /> */}
              <span className="mr-2 text-xl font-semibold text-white">Arococo</span>
            </div>
            <p className="text-gray-400 mb-6">
              מובילים את הדור הבא של מעצבי פנים דרך חינוך מקצועי ומעשי
            </p>
            <div className="flex items-center space-x-reverse space-x-4">
              <a href="https://www.facebook.com/ARococoInteriorDesign?rdid=v1MmIumUkZ071EmI" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/arococodesign/?utm_source=qr&igsh=MWluMXhlYXpsNGtkNA%3D%3D" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://a-rococo.com/" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">קישורים מהירים</h3>
            <ul className="space-y-4">
              <li>
                <a href="#overview" className="text-gray-400 hover:text-indigo-400 transition-colors">סקירה כללית</a>
              </li>
              <li>
                <a href="#curriculum" className="text-gray-400 hover:text-indigo-400 transition-colors">תוכנית לימודים</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-indigo-400 transition-colors">גלריה</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">שאלות נפוצות</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">צור קשר</h3>
            <ul className="space-y-4">
            <li className="flex items-center">
              <Phone className="h-5 w-5 ml-3 text-indigo-400" />
              <a href="tel:0543094447" className="text-indigo-400">0543094447</a>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 ml-3 text-indigo-400" />
              <a href="mailto:alona@a-rococo.com" className="text-indigo-400">alona@a-rococo.com</a>
            </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 ml-3 text-indigo-400" />
                <span>משה סנה 20 פתח תקווה</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-white text-lg font-semibold mb-6">הירשמו לעדכונים</h3>
            <p className="text-gray-400 mb-4">
              קבלו עדכונים על קורסים חדשים וטיפים מקצועיים
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="כתובת אימייל"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-400 text-right"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                הרשמה לניוזלטר
              </button>
            </form>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Arococo. כל הזכויות שמורות.
            </p>
            <div className="flex space-x-reverse space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                תנאי שימוש
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                מדיניות פרטיות
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}