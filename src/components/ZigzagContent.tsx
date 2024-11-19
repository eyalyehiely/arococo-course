import staffImage from '../images/staff.jpeg';
import projectImage from '../images/project.avif';
import livingRoom from '../images/livingRoom.jpeg'
import constructions from '../images/constructions.jpg'

const sections = [
  {
    title: "מי אנחנו ?",
    description: "סטודיו ארוקוקו הוקם בשנת 2003 על ידי בוגרות הטכניון אלונה יחיאלי ורויטל הוד-ייני והינו בעל נסיון של 20 שנה בתחום.הסטודיו מספק שירותי מיקור חוץ (outsourcing) מקצועיים למספר קבלנים ויזמים בתחום הבניה ומייעץ בתחום תכנון, עיצוב, שינויי דיירים וקשרי לקוחות.",
    image: staffImage,
    alt: "עיצוב פנים מודרני"
  },
  {
    title: "עבודה מול דיירים",
    description: "דיירים אשר רכשו דירה מצפים לקבל שירות מצויין ומענה לכל שאלה ובעיה.כאן מתאמי שינויי דיירים וקשרי לקוחות נכנסים לפעולה ומהווים את הקשר בין הקבלן והשטח לבין הדייר.כיצד מתמודדים עם בעיות ? כיצד מעבירים את המידע ? כיצד שומרים על קשר עם הדייר וממנפים את העבודה מולו?תשובות בסדנה",
    image:livingRoom ,
    alt: "עיצוב פנים מודרני"
  },
  {
    title: "כיצד להתניע פרוייקט",
    description: "איך מתחילים לטפל בדיירים אשר רכשו דירה? איך מתנהלים מול ספקי פרוייקט? איך מועבר מידע לקבלן? איך עושים בקרה? כל אלו ועוד נדבר בסדנה ונענה על השאלות.",
    image: projectImage,
    alt: "פרוייקט"
  },
  {
    title: "כיצד מתמחרים שינויים",
    description: "שינויים אשר מבוצעים במסגרת בניית דירה כרוכים בתשלום. כיצד מתמחרים את השינוי? כיצד מתייחסים לכל שינוי ובאיזה שלב הוא מבוצע? בסדנה ניתן מענה ודוגמאות לכל נושא התמחור.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
    alt: "אווירה פנימית"
  },
  {
    title: "כלים לבקרה ומעקב",
    description: "כל פעילות אשר מבוצעת מול דיירי פרוייקט נמדדת ונבדקת. עלינו בתור מתאמי שינויי דיירים לבקר ולדווח על ההתקדמות, בעיות, תשלומים וכו. ",
    image: constructions,
    alt: "תכנון פרויקטים"
  }
];

export default function ZigzagContent() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-32 last:mb-0`}
          >
            {/* Text Content */}
            <div className="flex-1 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {section.description}
              </p>
            </div>
            
            {/* Image */}
            <div className="flex-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-l from-indigo-600 to-purple-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity blur-lg"></div>
                <img
                  src={section.image}
                  alt={section.alt}
                  className="relative rounded-xl w-full h-[400px] object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}