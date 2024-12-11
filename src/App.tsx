import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Home from "./components/Home";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
