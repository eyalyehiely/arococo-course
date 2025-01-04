import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Home from "./components/Home";
import { initGA, logPageView, trackScrollDepth, getUserLocation } from "./analytics";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    initGA(); // Initialize GA
    getUserLocation(); // Log user location once on app load
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    logPageView(); // Log pageview on route change

    const cleanup = trackScrollDepth(); // Track scroll depth
    return () => cleanup(); // Clean up scroll listener
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;