import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamPageTemplate = (props) => {
  const { title, meta_title, meta_description, team } = props;

  console.log(team, "our team data");

  //lets pre-process some data here
  const teamTitle = [];
  team.forEach((member, index) => {
    if (!teamTitle.includes(member.team_title)) {
      teamTitle.push(member.team_title);
    }
  });

  let teamMap = new Map();

  //TODO: need to remove the double loop

  team.forEach((member, index) => {
    teamTitle.forEach((title, index) => {
      if (title === member.team_title) {
        if (teamMap.has(title)) {
          const val = [...teamMap.get(title)];
          val.push(member);
          teamMap.set(title, val);
        } else {
          teamMap.set(title, [member]);
        }
      }
    });
  });

  console.log(teamMap, "this is the preprocessed teamMap");

  let teamArr = [];

  for (let itemm of teamMap.keys()) {
    teamArr.push(itemm);
  }

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>

      <div className="section">
        <h1 className="title">{title}</h1>
        <p className="is-size-5">{meta_description}</p>
      </div>

      <div className="content">
        {teamArr.map((key, index) => (
          <div className="">
            <div className="text-4xl">{key}</div>
            <div>
              {teamMap.get(key).map((val, index) => (
                <div>
                  <div>{val.member_name}</div>
                  <div>{val.member_linkedin}</div>
                  <div>
                    <GatsbyImage
                      image={getImage(val.member_image)}
                      alt={team + index}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
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
