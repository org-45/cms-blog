import React from "react";
// import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ProductPageTemplate from "../../components/ProductPageTemplate";

const ZWalletPage = ({ data }) => {
  console.log(data, "data");

  const title = data.site.siteMetadata.title;
  const ZWalletData = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <Layout>
      <Helmet title={`0Chain Net |  ${title} `} />

      <ProductPageTemplate product={ZWalletData} />
    </Layout>
  );
};
export default ZWalletPage;

export const ZWalletPageQuery = graphql`
  query ZWalletQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(filter: { frontmatter: { title: { eq: "0Wallet" } } }) {
      edges {
        node {
          frontmatter {
            title
            banner_info
            banner_title
            templateKey
            product_description
            product_yt_link
            product_yt_thumbnail {
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
