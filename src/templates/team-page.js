import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import TeamPageTemplate from "../components/TeamPageTemplate";
import Layout from "../components/Layout";

const TeamPage = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: { title, meta_title, meta_description, team },
      },
    },
  } = props;

  return (
    <Layout>
      <TeamPageTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        team={team}
      />
    </Layout>
  );
};

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TeamPage;

export const teamPageQuery = graphql`
  query TeamQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "team-page" } }) {
      frontmatter {
        meta_description
        meta_title
        title
        team {
          member_linkedin
          member_name
          team_title
          member_image {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1, height: 200)
            }
          }
        }
      }
    }
  }
`;
