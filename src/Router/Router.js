import React from "react";
import { Route, Routes } from "react-router-dom";
import pagesData from "../Router/PageData";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }) => {
    return React.createElement(Route, {
      key: title,
      path: `/${path}`,
      element: element,
    });
  });

  return React.createElement(Routes, null, pageRoutes);
};

export default Router;
