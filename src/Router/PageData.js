import React from "react";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";

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
  // {
  //   path: "towels",
  //   element: React.createElement(Towels),
  //   title: "Towels",
  // },
];
export default PagesData;
