import React from "react";
import PropTypes from "prop-types";
import ResourcePageTemplate from "../../components/ResourcePageTemplate";

const ResourcePreview = ({ entry, widgetFor }) => {
  return (
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <ResourcePageTemplate
            cover={entry.getIn(["data", "cover"])}
            date={entry.getIn(["data", "date"])}
            meta_title={entry.getIn(["data", "meta_title"])}
            meta_desc={entry.getIn(["data", "meta_description"])}
            title={entry.getIn(["data", "title"])}
            resource={{
              resource_description: entry.getIn([
                "data",
                "resource",
                "resource_description",
              ]),
              resource_yt_thumbnail: entry.getIn([
                "data",
                "resource",
                "resource_yt_thumbnail",
              ]),
              resource_yt_link: entry.getIn([
                "data",
                "resource",
                "resource_yt_link",
              ]),
            }}
          />
        </div>
      </div>
    </div>
  );
};

ResourcePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ResourcePreview;
