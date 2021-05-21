import React from "react";
import Helmet from "react-helmet";

import PropTypes from "prop-types";

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const ProductPageTemplate = (props) => {
  const { product } = props;

  const {
    meta_title,
    meta_description,
    product_description,
    product_yt_link,
    product_yt_thumbnail,
    title,
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
      <div className="bg-gray-900 h-40vh grid grid-cols-1 text-white justify-center items-center">
        <h1 className=" grid pt-20 text-4xl text-white justify-center items-center">
          {prod.heading}
        </h1>
        <p className=" grid text-xl justify-center items-center">
          {meta_description}
        </p>
      </div>
      {/* SHORT INTRO  */}
      <div className="grid grid-cols-12 h-auto">
        <div className="col-span-9  grid justify-center items-center border rounded m-10 p-20">
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
