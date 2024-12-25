import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-KPRXBVPB97");
};

export const logPageView = () => {
  ReactGA.send("pageview");
};