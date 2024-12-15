import { Mail, Phone, Facebook, Instagram, Globe } from "lucide-react";
import newLogoWhite from "../images/newLogoWhite.jpeg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <NavLink to="/">
                <img
                  src={newLogoWhite}
                  alt="logo"
                  className="h-12 w-25 text-indigo-600"
                />
              </NavLink>
            </div>
            <p className="text-gray-400 mb-6">
              מובילים את הדור הבא של מעצבי פנים דרך חינוך מקצועי ומעשי
            </p>
            <div className="flex items-center space-x-reverse space-x-4">
              <a
                href="https://www.facebook.com/ARococoInteriorDesign?rdid=v1MmIumUkZ071EmI"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/arococodesign/?utm_source=qr&igsh=MWluMXhlYXpsNGtkNA%3D%3D"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://a-rococo.com/"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">צור קשר</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 ml-3 text-indigo-400" />
                <a href="tel:0543094447" className="text-indigo-400">
                  0543094447
                </a>
                <a href="tel:0544313444" className="text-indigo-400">
                  0544313444
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 ml-3 text-indigo-400" />
                <a href="mailto:alona@a-rococo.com" className="text-indigo-400">
                  alona@a-rococo.com
                </a>
                <a
                  href="mailto:revital@a-rococo.com"
                  className="text-indigo-400"
                >
                  revital@a-rococo.com
                </a>
              </li>
            </ul>
          </div>
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
              <a
                href="/privacy"
                className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
              >
                מדיניות פרטיות
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} | Made by{" "}
              <a
                href="https://portfolio-production-7b0f.up.railway.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400"
              >
                Eyal Yehiely
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}