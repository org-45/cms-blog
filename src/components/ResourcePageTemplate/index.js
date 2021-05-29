import React from "react";
import Helmet from "react-helmet";

import PropTypes from "prop-types";

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import useWindowSize from "/screenSize.js";
import { useDeviceDetect } from "/screenSize.js";

const ResourcePageTemplate = (props) => {
  const { width } = useWindowSize();
  const { isMobile } = useDeviceDetect();

  const { resource } = props;

  const {
    meta_title,
    meta_description,
    resource_description,
    resource_yt_link,
    resource_yt_thumbnail,
    title,
  } = resource;

  let reso = {};
  reso.heading = title;
  reso.description = resource_description;
  reso.resource_yt_link = resource_yt_link;
  reso.resource_yt_thumbnail = resource_yt_thumbnail;

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
          {reso.heading}
        </h1>
        <p className=" grid text-xl text-center">{meta_description}</p>
      </div>
      {/* SHORT INTRO  */}
      {width > 1300 || !isMobile ? (
        <div className="grid grid-cols-12 h-50vh">
          <div className="col-span-9  grid justify-center items-center border rounded m-10 p-20">
            {reso.description}
          </div>
          <div className="col-span-3 grid justify-center items-center">
            <a
              href={reso.resource_yt_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={getImage(reso.resource_yt_thumbnail)}
                alt={"0chain products"}
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 h-auto">
          <div className=" grid justify-center items-center border rounded m-5 p-5">
            {reso.description}
          </div>
          <div className="grid justify-center items-center m-5 p-5">
            <a
              href={reso.resource_yt_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={getImage(reso.resource_yt_thumbnail)}
                alt={"0chain products"}
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
ResourcePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  reso: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    resource_yt_link: PropTypes.string,
    resource_yt_thumbnail: PropTypes.string,
  }),
};

export default ResourcePageTemplate;
