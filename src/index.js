import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";
import App from "./App";

// Initialize Google Analytics
ReactGA.initialize("G-KBX2FNWKL1"); // Replace with your actual tracking ID

// Track initial page load
const trackPageView = (location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
};

ReactDOM.render(
  <Router>
    <App trackPageView={trackPageView} />
  </Router>,
  document.getElementById("root")
);

// Initial page view
trackPageView(window.location);
