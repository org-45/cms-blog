import React from "react";
import PropTypes from "prop-types";
import HomePageTemplate from "../../components/HomePageTemplate";

const HomePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(["data", "offerings", "blurbs"]);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const entryTestimonials = entry.getIn(["data", "testimonials"]);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  const entryPartnersLogoArray = entry.getIn(["data", "partners_logo_array"]);
  const partners_logo_array = entryPartnersLogoArray
    ? entryPartnersLogoArray.toJS()
    : [];

  return (
    <HomePageTemplate
      title={entry.getIn(["data", "title"])}
      meta_title={entry.getIn(["data", "meta_title"])}
      meta_description={entry.getIn(["data", "meta_description"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
      offerings={{ blurbs }}
      testimonials={testimonials}
      partners_logo_array={partners_logo_array}
    />
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomePagePreview;
