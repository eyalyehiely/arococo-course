import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 py-8 mt-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-center mb-6">מדיניות פרטיות</h1>
        <section className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            כללי: בעת שימוש בדף הנחיתה נאסף מידע עליך. חלק מהמידע מזהה אותך באופן
            אישי, כלומר בשמך ובכתובתך, זהו המידע שאתה מוסר ביודעין בעת מילוי
            הטופס. חלק מהמידע אינו מזהה אותך אישית ואינו נשמר ביחד עם פרטיך. זהו
            מידע סטטיסטי ומצטבר. לדוגמה: העמודים שבהם צפית, מהיכן הגעת לעמוד,
            כתובת האינטרנט (IP) שממנה פנית ועוד.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-4">מאגר המידע</h2>
          <p className="mb-4">
            חלק מהנתונים שנאספו יישמרו במאגר המידע של סטודיו ארוקוקו ובאחריותו.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-4">השימוש במידע</h2>
          <p className="mb-4">
            השימוש במידע שנאסף ייעשה רק על פי מדיניות פרטיות זו או על פי הוראות כל
            דין, על מנת:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>ליצור עמך קשר למטרת רישום לקורס</li>
            <li>לעדכן אותך בפעילויות נוספות</li>
            <li>לשלוח דיוור ישיר אלקטרוני</li>
          </ul>
          <p className="mb-4">
            סטודיו ארוקוקו מעוניין לשלוח אליך מדי פעם בדואר אלקטרוני מידע על
            פעילותו. מידע כזה ישוגר אליך רק אם נתת הסכמה מפורשת לכך, ובכל עת תוכל
            לבטל את הסכמתך.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-4">Cookies</h2>
          <p className="mb-4">
            אתר סטודיו ארוקוקו משתמש ב"עוגיות" (Cookies) לצורך תפעולם השוטף
            והתקין, ובכלל זה כדי לאסוף נתונים סטטיסטיים אודות השימוש באתר, לאימות
            פרטים, כדי להתאים את האתר להעדפותיך האישיות ולצורכי אבטחת מידע.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;