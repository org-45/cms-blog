import React from "react";
import PropTypes from "prop-types";
import ProductPageTemplate from "../../components/ProductPageTemplate";

const ProductPreview = ({ entry, widgetFor }) => {
  return (
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <ProductPageTemplate
            cover={entry.getIn(["data", "cover"])}
            date={entry.getIn(["data", "date"])}
            meta_title={entry.getIn(["data", "meta_title"])}
            meta_desc={entry.getIn(["data", "meta_description"])}
            title={entry.getIn(["data", "title"])}
            slug={entry.getIn(["data", "slug"])}
            product={{
              product_description: entry.getIn([
                "data",
                "product",
                "product_description",
              ]),
              product_yt_thumbnail: entry.getIn([
                "data",
                "product",
                "product_yt_thumbnail",
              ]),
              product_yt_link: entry.getIn([
                "data",
                "product",
                "product_yt_link",
              ]),
            }}
          />
        </div>
      </div>
    </div>
  );
};

ProductPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProductPreview;
