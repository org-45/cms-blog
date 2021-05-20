import React from "react";
import Helmet from "react-helmet";
import Offerings from "../Offerings";
import Testimonials from "../Testimonials";
import PropTypes from "prop-types";
import Carousel from "../Carousel";
import StatsShow from "../StatsShow";
import Partners from "../Partners";
import ProductSlide from "../ProductSlide";
import Roadmap from "../Roadmap";
import LandingBlogs from "../LandingBlogs";

const HomePageTemplate = (props) => {
  const {
    title,
    heading,
    description,
    offerings,
    meta_title,
    meta_description,
    testimonials,
    partners_logo_array,
  } = props;

  const carouselData = {};
  console.log(offerings.blurbs, "this is our offerings");
  carouselData.offerings = offerings.blurbs;
  carouselData.frontCarousel = { heading, description };

  const partnersLogoArray = [...partners_logo_array];

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      <Carousel carouselData={carouselData} />
      <StatsShow />
      <ProductSlide />
      <Roadmap />
      <LandingBlogs />
      <Partners partnersData={partnersLogoArray} />
    </div>
  );
};
HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  partners_logo_array: PropTypes.array,
};

export default HomePageTemplate;
