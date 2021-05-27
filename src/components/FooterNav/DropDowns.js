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
            <div className="flex flex-row flex-wrap  text-white font-mono font-light items-center justify-center">
              {tagsData.map((tag, index) => {
                return (
                  <Dropdown
                    overlay={
                      <div className=" bg-gray-200 p-5">
                        {tag.edges.map((edge, index) => (
                          <div className="m-5">
                            <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                              {edge.node.frontmatter.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    }
                    placement="topCenter"
                    arrow
                    className="p-3"
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
          </header>
        );
      }}
    />
  );
};

export default Dropdowns;
