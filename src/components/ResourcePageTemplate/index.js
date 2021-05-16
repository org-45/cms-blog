import React from "react";
import Helmet from "react-helmet";

import PropTypes from "prop-types";

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const ResourcePageTemplate = (props) => {
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
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>

      <div className="bg-gray-800 h-40vh grid grid-cols-1 text-white">
        <h1 className="pt-40 pl-80 text-4xl text-white">{reso.heading}</h1>
        <p className=" pl-80 text-xl">{meta_description}</p>
      </div>

      <div>
        <div>{reso.description}</div>
        <div>
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
