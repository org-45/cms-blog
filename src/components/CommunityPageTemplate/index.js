import React from "react";
import Helmet from "react-helmet";

import PropTypes from "prop-types";

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const CommunityPageTemplate = (props) => {
  const { community } = props;

  const {
    meta_title,
    meta_description,
    community_description,
    community_yt_link,
    community_yt_thumbnail,
    title,
  } = community;

  let reso = {};
  reso.heading = title;
  reso.description = community_description;
  reso.community_yt_link = community_yt_link;
  reso.community_yt_thumbnail = community_yt_thumbnail;

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
          {title}
        </h1>
        <p className=" grid text-xl justify-center items-center">
          {meta_description}
        </p>
      </div>
      {/* SHORT INTRO  */}
      <div className="grid grid-cols-12 h-auto">
        <div className="col-span-9  grid justify-center items-center border rounded m-10 p-20">
          {reso.description}
        </div>
        <div className="col-span-3 grid justify-center items-center p-5">
          <a
            href={reso.community_yt_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              image={getImage(reso.community_yt_thumbnail)}
              alt={"0chain products"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

CommunityPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  reso: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    community_yt_link: PropTypes.string,
    community_yt_thumbnail: PropTypes.string,
  }),
};

export default CommunityPageTemplate;
