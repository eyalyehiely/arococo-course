import ReactGA from "react-ga4";
let timeout;

export const initGA = () => {
  ReactGA.initialize("G-KPRXBVPB97");
};

export const logPageView = () => {
  ReactGA.send("pageview");
};

export const trackScrollDepth = () => {
  const handleScroll = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      if ([25, 50, 75, 100].includes(scrollDepth)) {
        console.log(`Scroll Depth Reached: ${scrollDepth}%`); // Debug log
        ReactGA.event({
          category: "User Interaction",
          action: "Scrolled",
          label: `${scrollDepth}%`,
        });
      }
    }, 200); // Debounce scroll tracking by 200ms
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll); // Clean up listener
  };
};

export const getUserLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`User Location: Latitude ${latitude}, Longitude ${longitude}`);

        ReactGA.event({
          category: "User Data",
          action: "Fetched Location",
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
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};