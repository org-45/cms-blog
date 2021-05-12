import React from "react";
import _ from "lodash";
import { GatsbyImage } from "gatsby-plugin-image";

const ProgressiveImageContainer = ({ image, alt, className }) =>
  typeof image === "string" ? (
    <img className={className} src={image} alt={alt} />
  ) : _.get(image, ["childImageSharp", "fluid"]) ? (
    <GatsbyImage
      image={_.get(image, ["childImageSharp", "fluid"])}
      className={className}
      alt={alt} />
  ) : (
    <img
      className={className}
      src={_.get(image, ["publicURL"], "")}
      alt={alt}
    />
  );

export default ProgressiveImageContainer;
