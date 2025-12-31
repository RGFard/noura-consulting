// gatsby-browser.js
import React from "react";
import Layout from "./src/components/layout/Layout";

export const wrapPageElement = ({ element }) => (
  <Layout>{element}</Layout>
);

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== "production") return;

  if (!window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: location.pathname + location.search,
  });
};
