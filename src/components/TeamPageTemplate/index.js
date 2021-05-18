import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const TeamPageTemplate = (props) => {
  const { title, meta_title, meta_description, team } = props;

  console.log(team, "team sections");

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      {title}
      <div className="content"></div>
    </div>
  );
};
TeamPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  team: PropTypes.arrayOf(
    PropTypes.shape({
      team_title: PropTypes.string,
      member_name: PropTypes.string,
      member_linkedin: PropTypes.string,
      member_image: PropTypes.string,
    })
  ),
};

export default TeamPageTemplate;
