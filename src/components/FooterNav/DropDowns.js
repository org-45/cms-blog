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
