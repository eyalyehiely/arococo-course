import { Menu, X, Palette } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* <Palette className="h-8 w-8 text-indigo-600" /> */}
            <span className="mr-2 text-xl font-semibold">Arococo</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {/* <a href="#overview" className="text-gray-700 hover:text-indigo-600 transition-colors">סקירה כללית</a>
            <a href="#curriculum" className="text-gray-700 hover:text-indigo-600 transition-colors">תוכנית לימודים</a>
            <a href="#gallery" className="text-gray-700 hover:text-indigo-600 transition-colors">גלריה</a> */}
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              הרשמה עכשיו
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            {/* <a href="#overview" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">סקירה כללית</a>
            <a href="#curriculum" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">תוכנית לימודים</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">גלריה</a> */}
            <button className="w-full mt-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
              <a href="https://private.invoice4u.co.il/newsite/he/clearing/public/i4u-payment?ProductGuid=c95db62b-580d-4eee-9586-8310fec87b7c">הרשמה עכשיו</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}