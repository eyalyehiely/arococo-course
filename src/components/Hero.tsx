import { ArrowLeft } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80"
          alt="Interior Design Studio"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          סדנה למתחילים בנושא קשרי לקוחות ושינויי דיירים
          </h1>
          <p className="text-xl text-gray-200 mb-8">
          מתאם קשרי לקוחות ושינויי דיירים הינו איש הקשר המחבר בין הקבלן לבין בעל הנכס משלב התוכניות ועד שלב בחירת החומרים. 
          </p>
          <p className="text-xl text-gray-200 mb-8">
            ZOOM | 13.01.2025 | 10:00-13:00
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors inline-flex items-center justify-center">
              <a href="https://private.invoice4u.co.il/newsite/he/clearing/public/i4u-payment?ProductGuid=c95db62b-580d-4eee-9586-8310fec87b7c">התחילו את המסע</a> 
              <ArrowLeft className="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}