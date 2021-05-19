import * as React from "react";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

//FooterTagsData

const Dropdowns = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterTagsQuery {
          allMarkdownRemark(filter: {}) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
              edges {
                node {
                  frontmatter {
                    slug
                    tags
                    templateKey
                    title
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        //first take top5 tags data
        const tagsData = data.allMarkdownRemark.group
          .sort((a, b) => b.totalCount - a.totalCount)
          .slice(0, 8);

        return (
          <header>
            <div className="justify-between items-center">
              <div className="flex flex-row text-white font-mono font-light items-center justify-center  space-x-6">
                {tagsData.map((tag, index) => {
                  return (
                    <Dropdown
                      overlay={
                        <div className=" bg-gray-200">
                          {tag.edges.map((edge, index) => (
                            <div>
                              <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                                {edge.node.frontmatter.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                      }
                      placement="topCenter"
                      arrow
                    >
                      <button
                        onClick={(e) => e.preventDefault()}
                        className="ant-dropdown-link"
                      >
                        {tag.fieldValue}
                        <DownOutlined />
                      </button>
                    </Dropdown>
                  );
                })}
              </div>
            </div>
          </header>
        );
      }}
    />
  );
};

export default Dropdowns;

/*

     <div className="hover:text-yellow-500">
              <Miners />
            </div>
            <div className="hover:text-yellow-500">
              <Blobbers />
            </div>
            <div className="hover:text-yellow-500">
              <Sharders />
            </div>
            <div className="hover:text-yellow-500">
              <ZCN />
            </div>
            <div className="hover:text-yellow-500">
              <ZBox />
            </div>
            <div className="hover:text-yellow-500">
              <Hash />
            </div>
            <div className="hover:text-yellow-500">
              <Blockchain />
            </div>


*/

//MINERS
const menuMiners = (
  <div className=" bg-gray-200">
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>
);

export const Miners = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Miners
      <DownOutlined />
    </button>
  </Dropdown>
);

export const Sharders = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Sharders
      <DownOutlined />
    </button>
  </Dropdown>
);
export const Blobbers = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Blobbers
      <DownOutlined />
    </button>
  </Dropdown>
);
export const ZCN = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      ZCN
      <DownOutlined />
    </button>
  </Dropdown>
);
export const Blockchain = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Blockchain
      <DownOutlined />
    </button>
  </Dropdown>
);
export const ZBox = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      ZBox
      <DownOutlined />
    </button>
  </Dropdown>
);
export const Hash = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Hash
      <DownOutlined />
    </button>
  </Dropdown>
);
