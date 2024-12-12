// import { ArrowLeft, Calendar, Clock, MapPin, Wallet } from "lucide-react";

// export default function CourseDetails() {
//   const details = [
//     {
//       icon: <Calendar className="h-6 w-6" />,
//       title: "תאריך פתיחה",
//       value: "13 בינואר, 2024",
//       //   description: "משך הקורס: 12 שבועות"
//     },
//     {
//       icon: <Clock className="h-6 w-6" />,
//       title: "שעות",
//       value: "10:00-13:00",
//       //   description: ""
//     },
//     {
//       icon: <MapPin className="h-6 w-6" />,
//       title: "מיקום",
//       value: "ZOOM",
      
//     },
//     {
//       icon: <Wallet className="h-6 w-6" />,
//       title: "מחיר",
//       value: "₪429",
//       button: (
//         <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors inline-flex items-center justify-center">
//           <a
//             href="https://private.invoice4u.co.il/newsite/he/clearing/public/i4u-payment?ProductGuid=c95db62b-580d-4eee-9586-8310fec87b7c"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             להרשמה ותשלום
//           </a>
//           <ArrowLeft className="ml-3 h-5 w-5" />
//         </button>
//       ),
//         description:"*ניתן לקבל החזר מלא עד 72 שעות מתחילת הסדנה."
//     },
//   ];

//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             פרטי הקורס
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             כל המידע החשוב שצריך לדעת לפני ההרשמה
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {details.map((detail, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
//                 {detail.icon}
//               </div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">
//                 {detail.title}
//               </h3>
//               <p className="text-2xl font-bold text-indigo-600 mb-2">
//                 {detail.value}
//                 <p className="text-xl font-bold text-indigo-600 mt-2">{detail.button}</p>
//               </p>
//               <p className="text-gray-600">{detail.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//             דרישות מקדימות
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-4">
//                 נדרש:
//               </h4>
//               <ul className="space-y-3">
//                 <li className="flex items-center text-gray-600">
//                   <span className="w-2 h-2 bg-indigo-600 rounded-full ml-3"></span>
//                   יכולת עבודה עם מחשב ברמה בסיסית
//                 </li>
//                 <li className="flex items-center text-gray-600">
//                   <span className="w-2 h-2 bg-indigo-600 rounded-full ml-3"></span>
//                   חיבור אינטרנט יציב
//                 </li>

//                 <li className="flex items-center text-gray-600">
//                   <span className="w-2 h-2 bg-indigo-600 rounded-full ml-3"></span>
//                   מחברת + עט
//                 </li>
//               </ul>
//             </div>
//             {/* <div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-4">יתרון</h4>
//               <ul className="space-y-3">
//                 <li className="flex items-center text-gray-600">
//                   <span className="w-2 h-2 bg-green-600 rounded-full ml-3"></span>
//                   רקע בסיסי באמנות או עיצוב
//                 </li>
//                 <li className="flex items-center text-gray-600">
//                   <span className="w-2 h-2 bg-green-600 rounded-full ml-3"></span>
//                   ניסיון עם תוכנות עיצוב
//                 </li>
//                 <li className="flex items-center text-gray-600">
//                   <span className="w-2 h-2 bg-green-600 rounded-full ml-3"></span>
//                   הבנה בסיסית באדריכלות
//                 </li>
//               </ul>
//             </div> */}
//           </div>
//         </div>
//         <button></button>
//       </div>
//     </section>
//   );
// }


import { ArrowLeft, Calendar, Clock, MapPin, Wallet } from "lucide-react";

export default function CourseDetails() {
  const details = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "תאריך פתיחה",
      value: "13 בינואר, 2024",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "שעות",
      value: "10:00-13:00",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "מיקום",
      value: "ZOOM",
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "מחיר",
      value: "₪429",
      button: (
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors inline-flex items-center justify-center">
          <a
            href="https://private.invoice4u.co.il/newsite/he/clearing/public/i4u-payment?ProductGuid=c95db62b-580d-4eee-9586-8310fec87b7c"
            target="_blank"
            rel="noopener noreferrer"
          >
            להרשמה ותשלום
          </a>
          <ArrowLeft className="ml-3 h-5 w-5" />
        </button>
      ),
      description: "*ניתן לקבל החזר מלא עד 72 שעות מתחילת הסדנה.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            פרטי הקורס
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            כל המידע החשוב שצריך לדעת לפני ההרשמה
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 gap-4">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {detail.title}
                  </h3>
                  <p className="text-xl font-bold text-indigo-600">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {details[3].button && (
            <div className="mt-6 text-center">{details[3].button}</div>
          )}
          {details[3].description && (
            <p className="text-gray-600 mt-4 text-center">
              {details[3].description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
