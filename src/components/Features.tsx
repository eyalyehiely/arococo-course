import { Compass, MessageCircleMore, Users, Gem } from 'lucide-react';

const features = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "דינאמיות",
    description: "מאפשר לעבוד בסביבה מגוונת, לנהל פרויקט ולהשפיע על חיי בעל הנכס."
  },
  {
    icon: <MessageCircleMore className="h-6 w-6" />,
    title: "קשרים",
    description: "הזדמנויות לבניית קשרים עם לקוחות, ספקים ובעלי מקצוע שונים."
  },
  {
    icon: <Gem className="h-6 w-6" />,
    title: "הנחיית מומחים",
    description: "למדו ממעצבים מנוסים ואנשי מקצוע בתעשייה"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "אישי",
    description: "קידום אישי ומקצועי המאפשר צמיחה אישית והעשרת הידע."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50" id="overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            למה לבחור בקורס שלנו ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            התוכנית המקיפה שלנו משלבת ידע תיאורטי עם ניסיון מעשי
            כדי להכין אתכם לקריירה מוצלחת בעיצוב פנים.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}