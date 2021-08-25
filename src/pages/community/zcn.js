import React from "react";
// import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import CommunityPageTemplate from "../../components/CommunityPageTemplate";

const ZCN = ({ data }) => {
  console.log(data, "data");

  const title = data.site.siteMetadata.title;
  const ForumData = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <Layout>
      <Helmet title={`0Box ||  ${title} `} />

      <CommunityPageTemplate community={ForumData} />
    </Layout>
  );
};
export default ZCN;

export const ZCNQuery = graphql`
  query ForumQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(filter: { frontmatter: { title: { eq: "ZCN" } } }) {
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
