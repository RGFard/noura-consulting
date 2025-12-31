import React from "react";
import Layout from "./src/components/layout/Layout";

export const wrapPageElement = ({ element }) => (
  <Layout>{element}</Layout>
);

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="ga-script"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-REQJRGVSJ6"
    />,
    <script
      key="ga-inline"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-REQJRGVSJ6', {
            send_page_view: false
          });
        `,
      }}
    />,
  ]);
};
