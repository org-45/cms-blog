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
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>

      <div className="section">
        <h1 className="title">{prod.heading}</h1>
        <p className="is-size-5">{meta_description}</p>
      </div>

      <div>
        <div>{prod.description}</div>
        <div dangerouslySetInnerHTML={{ __html: prod.product_yt_link }} />
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
