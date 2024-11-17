import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
// import Curriculum from './components/Curriculum';
import ZigzagContent from './components/ZigzagContent';
import Footer from './components/Footer';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ZigzagContent />
      <CourseDetails/>
      <Footer />
    </div>
  );
}

export default App;