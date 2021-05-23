import React from "react";
import PropTypes from "prop-types";
import TeamPageTemplate from "../../components/TeamPageTemplate";

const TeamPreview = ({ entry, widgetFor }) => {
  return (
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <TeamPageTemplate
            meta_title={entry.getIn(["data", "meta_title"])}
            meta_desc={entry.getIn(["data", "meta_description"])}
            title={entry.getIn(["data", "title"])}
            team={{
              team_title: entry.getIn(["data", "team", "team_title"]),
              member_name: entry.getIn(["data", "team", "member_name"]),
              member_image: entry.getIn(["data", "team", "member_image"]),
              member_linkedin: entry.getIn(["data", "team", "member_linkedin"]),
              member_bio: entry.getIn(["data", "team", "member_bio"]),
            }}
          />
        </div>
      </div>
    </div>
  );
};

TeamPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TeamPreview;
