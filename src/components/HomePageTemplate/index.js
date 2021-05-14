import React from "react";
import Helmet from "react-helmet";
import Offerings from "../Offerings";
import Testimonials from "../Testimonials";
import PropTypes from "prop-types";
import Carousel from "../Carousel";

// import someGif from "../../../src/assets/images/source.gif";
import gitPng from "../../assets/images/gh-mobile.png";
import gitVideo from "../../assets/videos/gh-mobile.h264.mp4";

import zchainLooper from "../../assets/videos/0chain_looper.mp4";
import elephantsVid from "../../assets/videos/elephants-dream.webm";
import sampleVideo from "../../assets/videos/github-2.mp4";

const HomePageTemplate = (props) => {
  const {
    title,
    heading,
    description,
    offerings,
    meta_title,
    meta_description,
    testimonials,
  } = props;

  const carouselData = {};
  console.log(offerings.blurbs, "this is our offerings");
  carouselData.offerings = offerings.blurbs;
  carouselData.frontCarousel = { heading, description };

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      {/*       <div>{title}</div> */}
      <Carousel carouselData={carouselData} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div>
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                  <Offerings gridItems={offerings.blurbs} />
                  <h2 className="has-text-weight-semibold is-size-2">
                    Testimonials
                  </h2>
                  <Testimonials testimonials={testimonials} />

                  {/* <img src={someGif} alt="gif testing" /> */}

                  <video
                    autoPlay
                    loop
                    muted
                    poster={gitPng}
                    src={gitVideo}
                    width={400}
                    height={800}
                    type="video/mp4"
                  ></video>

                  <div>
                    <video
                      autoPlay
                      loop
                      muted
                      src={zchainLooper}
                      className="h-screen w-screen"
                      type="video/mp4"
                    ></video>
                  </div>

                  <video
                    autoPlay
                    loop
                    muted
                    src={elephantsVid}
                    width={800}
                    height={600}
                    type="video/webm"
                  ></video>
                  <video
                    autoPlay
                    loop
                    muted
                    src={sampleVideo}
                    className="h-screen w-screen"
                    type="video/mp4"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
};

export default HomePageTemplate;
