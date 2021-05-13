import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import ResourcePageTemplate from "../../components/ResourcePageTemplate";

const WhitepaperPage = ({ data }) => {
  console.log(data, "data");

  const title = data.site.siteMetadata.title;
  const WhitepaperData = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <Layout>
      <Helmet title={`0Box ||  ${title} `} />

      <ResourcePageTemplate resource={WhitepaperData} />
    </Layout>
  );
};
export default WhitepaperPage;

export const WhitepaperPageQuery = graphql`
  query WhitepaperQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Whitepaper" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            templateKey
            resource_description
            resource_yt_link
            resource_yt_thumbnail {
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
