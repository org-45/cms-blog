import React from "react";
import Helmet from "react-helmet";

import PropTypes from "prop-types";

const ProductPageTemplate = (props) => {
  const { title, meta_title, meta_description, product } = props;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h1 className="title">{title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  {product.heading}
                  <p className="is-size-5">{product.description}</p>
                </div>
                <div>
                  {product.product_yt_thumbnail}
                  {product.product_yt_link}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
ProductPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  product: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    product_yt_link: PropTypes.string,
    product_yt_thumbnail: PropTypes.string,
  }),
};

export default ProductPageTemplate;
