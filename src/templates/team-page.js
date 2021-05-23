import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import TeamPageTemplate from "../components/TeamPageTemplate";
import Layout from "../components/Layout";

const TeamPage = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "team-page" } } }
      ) {
        edges {
          node {
            frontmatter {
              meta_description
              meta_title
              title
              team {
                member_linkedin
                member_bio
                member_name
                team_title
                member_image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 150
                      quality: 90
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  console.log(
    data.allMarkdownRemark.edges[0].node.frontmatter,
    "something up from team"
  );

  const {
    title,
    meta_description,
    meta_title,
    team,
  } = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <Layout>
      <TeamPageTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        team={[...team]}
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
