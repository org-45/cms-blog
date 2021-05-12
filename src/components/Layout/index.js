import React from "react";
import Helmet from "react-helmet";
import "../../assets/sass/styles.sass";
import config from "../../../config";
import Banner2 from "../Banner2";
import NavBar2 from "../NavBar2";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <>
      <div>
        <Helmet
          htmlAttributes={{
            lang: `en`,
          }}
          title={config.siteTitle}
          meta={[
            {
              name: `description`,
              content: config.siteDescription,
            },
            {
              name: `viewport`,
              content: `width=device-width, initial-scale=1`,
            },
            {
              name: `msapplication-TileColor`,
              content: config.themeColor,
            },
            {
              name: `theme-color`,
              content: config.themeColor,
            },
          ]}
          link={[
            {
              rel: `apple-touch-icon`,
              href: `/icons/apple-touch-icon.png`,
              sizes: `180x180`,
            },
            {
              rel: `icon`,
              type: `image/png`,
              href: `/favicon-32x32.png`,
              sizes: `32x32`,
            },
            {
              rel: `icon`,
              type: `image/png`,
              href: `/favicon-16x16.png`,
              sizes: `16x16`,
            },
            {
              rel: `mask-icon`,
              href: `/icons/safari-pinned-tab.svg`,
              color: config.themeColor,
            },
          ]}
        />
        <Banner2 />
        <div className="sticky top-0 z-50">
          <NavBar2 />
        </div>
        <div className="relative">{props.children}</div>
        <Footer copyright={config.copyright} />
      </div>
    </>
  );
};

export default Layout;
