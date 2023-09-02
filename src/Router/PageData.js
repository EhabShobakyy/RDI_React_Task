import React from "react";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import NatiqPage from "../Pages/NatiqPage";
const PagesData = [
  {
    path: "/",
    element: React.createElement(HomePage),
    title: "HomePage",
  },
  {
    path: "HomePage",
    element: React.createElement(HomePage),
    title: "HomePage",
  },
  {
    path: "AboutPage",
    element: React.createElement(AboutPage),
    title: "AboutPage",
  },
  {
    path: "NatiqPage",
    element: React.createElement(NatiqPage),
    title: "Natiq",
  },
];
export default PagesData;
