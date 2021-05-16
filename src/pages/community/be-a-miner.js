import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import CommunityPageTemplate from "../../components/CommunityPageTemplate";

const BeaMinerPage = ({ data }) => {
  console.log(data, "data");

  const title = data.site.siteMetadata.title;
  const BeaMinerData = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <Layout>
      <Helmet title={`0Box ||  ${title} `} />

      <CommunityPageTemplate community={BeaMinerData} />
    </Layout>
  );
};
export default BeaMinerPage;

export const BeaMinerPageQuery = graphql`
  query BeaMinerQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Be a miner" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            templateKey
            community_description
            community_yt_link
            community_yt_thumbnail {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  aspectRatio: 1
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
              publicURL
            }
            meta_title
            meta_description
            cover {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  quality: 50
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
