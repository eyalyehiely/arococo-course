import ReactGA from "react-ga4";

let timeout;

// Initialize GA with enhanced configuration
export const initGA = () => {
  ReactGA.initialize("G-KPRXBVPB97");
};

// Track pageview with enhanced user properties
export const logPageView = (userProperties) => {
  ReactGA.send({
    hitType: "pageview",
    ...userProperties
  });
};

// Track user demographics
export const setUserProperties = (properties) => {
  ReactGA.set({
    user_properties: {
      age: properties.age,
      gender: properties.gender,
      city: properties.city
    }
  });
};

// Track button clicks
export const trackButtonClick = (buttonId) => {
  ReactGA.event({
    category: "User Interaction",
    action: "Button Click",
    label: buttonId
  });
};

// Track specific buy button clicks
export const trackPurchaseIntent = () => {
  ReactGA.event({
    category: "Conversion",
    action: "Purchase Intent",
    label: "Buy Button Click"
  });
};

// Enhanced scroll depth tracking
export const trackScrollDepth = () => {
  const handleScroll = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      if ([25, 50, 75, 100].includes(scrollDepth)) {
        ReactGA.event({
          category: "User Interaction",
          action: "Scrolled",
          label: `${scrollDepth}%`,
        });
      }
    }, 200);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
};

// Track user location
export const getUserLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // You might want to use a reverse geocoding service here
        // to convert coordinates to city names in Israel
        ReactGA.event({
          category: "User Data",
          action: "Location Detected",
          label: `Lat: ${latitude}, Lng: ${longitude}`,
        });
      },
      (error) => {
        console.error(`Error fetching location: ${error.message}`);
        ReactGA.event({
          category: "User Data",
          action: "Location Error",
          label: error.message,
        });
      }
    );
  }
};