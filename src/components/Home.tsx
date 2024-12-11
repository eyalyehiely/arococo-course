import ZigzagContent from './ZigzagContent';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from './Footer';
import CourseDetails from './CourseDetails';

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ZigzagContent />
      <CourseDetails />
      <Footer />
    </div>
  );
}

export default Home;
