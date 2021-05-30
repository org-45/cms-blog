import React from "react";
import Helmet from "react-helmet";

import PropTypes from "prop-types";

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import useWindowSize from "/screenSize.js";
import { useDeviceDetect } from "/screenSize.js";

const ProductPageTemplate = (props) => {
  const { width } = useWindowSize();
  const { isMobile } = useDeviceDetect();

  const { product } = props;

  const {
    meta_title,
    meta_description,
    product_description,
    product_yt_link,
    product_yt_thumbnail,
    title,
    cover,
  } = product;

  let prod = {};
  prod.heading = title;
  prod.description = product_description;
  prod.product_yt_link = product_yt_link;
  prod.product_yt_thumbnail = product_yt_thumbnail;

  return (
    <div>
      {/* HELMET */}
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>

      {/* BANNER */}
      <div
        style={{
          backgroundImage: `url( ${cover.publicURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="filter grayscale opacity h-40vh grid grid-cols-1 text-white font-black justify-center items-center"
      >
        <h1 className=" grid pt-20 text-4xl  justify-center items-center">
          {prod.heading}
        </h1>
        {width > 1300 || !isMobile ? (
          <p className=" grid text-xl text-center px-60">{meta_description}</p>
        ) : (
          <p className=" grid text-xl text-center p-10">{meta_description}</p>
        )}
      </div>
      {/* SHORT INTRO  */}
      {width > 1300 ? (
        <div className="grid grid-cols-12 h-50vh">
          <div className="col-span-9  grid  text-center justify-center items-center border rounded m-10 p-20">
            {prod.description}
          </div>
          <div className="col-span-3 grid justify-center items-center">
            <a
              href={prod.product_yt_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={getImage(prod.product_yt_thumbnail)}
                alt={"0chain products"}
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 h-auto">
          <div className=" grid justify-center items-center border rounded m-5 p-5">
            {prod.description}
          </div>
          <div className="m-5 p-5 grid justify-center items-center">
            <a
              href={prod.product_yt_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={getImage(prod.product_yt_thumbnail)}
                alt={"0chain products"}
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  prod: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    product_yt_link: PropTypes.string,
    product_yt_thumbnail: PropTypes.string,
  }),
};

export default ProductPageTemplate;
