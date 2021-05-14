import React from "react";
import PropTypes from "prop-types";
import CommunityPageTemplate from "../../components/CommunityPageTemplate";

const CommunityPreview = ({ entry, widgetFor }) => {
  return (
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <CommunityPageTemplate
            cover={entry.getIn(["data", "cover"])}
            date={entry.getIn(["data", "date"])}
            meta_title={entry.getIn(["data", "meta_title"])}
            meta_desc={entry.getIn(["data", "meta_description"])}
            title={entry.getIn(["data", "title"])}
            community={{
              community_description: entry.getIn([
                "data",
                "community",
                "community_description",
              ]),
              community_yt_thumbnail: entry.getIn([
                "data",
                "community",
                "community_yt_thumbnail",
              ]),
              community_yt_link: entry.getIn([
                "data",
                "community",
                "community_yt_link",
              ]),
            }}
          />
        </div>
      </div>
    </div>
  );
};

CommunityPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CommunityPreview;
