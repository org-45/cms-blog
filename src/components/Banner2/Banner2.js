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
          type="info"
          banner
          closable
          style={{
            backgroundImage: "linear-gradient(to right,#17243b,#4c6975)",
            height: "40px",
          }}
        />
      )}
    />
  );
};

export default Banner2;

const ActualBanner = ({ text, url }) => (
  <div className="flex font-light opacity-50  justify-center items-center flex-row font-ubuntu-mono text-2xl ">
    <div className="text-xl text-white p-2">{text}</div>
    <div className="p-3">
      <a
        href={url}
        alt="banner hai ta"
        target="_blank"
        rel="noreferrer"
        className="text-white"
      >
        <button className="underline">{"Click Here"}</button>
      </a>
    </div>
  </div>
);
