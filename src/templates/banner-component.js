import React from "react";
import { Alert } from "antd";
import { StaticQuery, graphql } from "gatsby";

const Banner2 = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          siteMetaDataQuery: site {
            siteMetadata {
              description
              siteUrl
              title
            }
          }
          bannerDataQuery: allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "banner-component" } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  bannerUrl
                  bannerInfo
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Alert
          message={
            <ActualBanner
              text={data.bannerDataQuery.edges[0].node.frontmatter.bannerInfo}
              url={data.bannerDataQuery.edges[0].node.frontmatter.bannerUrl}
            />
          }
          banner
          closable
          style={{
            backgroundColor: "grey",
          }}
        />
      )}
    />
  );
};

export default Banner2;

const ActualBanner = ({ text, url }) => (
  <div className="flex flex-row ">
    <div>{text}</div>
    <div>
      <a href={url} alt="banner hai ta" target="_blank" rel="noreferrer">
        Click Here...
      </a>
    </div>
  </div>
);
