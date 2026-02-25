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
      // Account: reza2011@gmail.com
      // src="https://www.googletagmanager.com/gtag/js?id=G-REQJRGVSJ6"
      
      // Account: reza.fard.00001@gmail.com
      src="https://www.googletagmanager.com/gtag/js?id=G-3X0VM1D6ZV"
    />,
    <script
      key="ga-inline"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3X0VM1D6ZV', {
            send_page_view: false
          });
        `,
      }}
    />,
  ]);
};
