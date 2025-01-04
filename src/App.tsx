import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Home from "./components/Home";
import {
  initGA,
  logPageView,
  trackScrollDepth,
  getUserLocation,
  setUserProperties,
  trackPurchaseIntent
} from "./analytics.js";

function App() {
  const { pathname } = useLocation();
  const [userProperties, setUserPropertiesState] = useState({
    age: null,
    gender: null,
    city: null
  });

  // Initialize GA and get location once
  useEffect(() => {
    initGA();
    getUserLocation();
  }, []);

  // Handle route changes and scroll tracking
  useEffect(() => {
    window.scrollTo(0, 0);
    logPageView(userProperties);
    
    const cleanup = trackScrollDepth();
    return () => cleanup();
  }, [pathname, userProperties]);

  // Example of how to collect user properties
  const handleUserDataCollection = (data) => {
    const properties = {
      age: data.age,
      gender: data.gender,
      city: data.city
    };
    
    setUserPropertiesState(properties);
    setUserProperties(properties);
  };

  // Example of tracking buy button clicks
  const handleBuyClick = () => {
    trackPurchaseIntent();
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home onBuyClick={handleBuyClick} />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>

      {/* Example form for collecting user data */}
      <UserDataForm onSubmit={handleUserDataCollection} />
    </>
  );
}

export default App;