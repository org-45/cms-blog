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

      {/* BANNER */}
      <div className="bg-gray-900 h-40vh grid grid-cols-1 text-white justify-center items-center">
        <h1 className=" grid pt-20 text-6xl font-black  text-white justify-center items-center">
          {title}
        </h1>
        <p className=" grid text-xl justify-center items-center">
          {meta_description}
        </p>
      </div>

      <div className="  grid p-20 justify-center items-center">
        <div>{""}</div>
        {teamArr.map((key, index) => (
          <div className=" grid  justify-center items-center bg-gray-100 m-30">
            <div className="text-5xl font-black  p-10 grid justify-center items-center  text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-900">
              {key}
            </div>
            <div className="grid grid-cols-2  justify-center items-center">
              {teamMap.get(key).map((val, index) => (
                <div className="grid p-10  justify-center items-center ">
                  <div className="grid p-5 font-black justify-center items-center underline">
                    <a
                      href={val.member_linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black "
                    >
                      {val.member_name}
                    </a>
                  </div>
                  <div className="grid text-center p-2 w-60">
                    {val.member_bio}
                  </div>

                  <div className="justify-center items-center p-2 grid">
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
        <div>{""}</div>
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
      member_bio: PropTypes.string,
    })
  ),
};

export default TeamPageTemplate;
