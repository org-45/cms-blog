import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function LandingBlogs() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMediumPost(sort: { fields: createdAt, order: DESC }, limit: 3) {
        edges {
          node {
            author {
              name
              imageId
              twitterScreenName
              userId
            }
            title
            firstPublishedAt(difference: "")
            medium_id
            slug
            id
            virtuals {
              tags {
                name
              }
              metaDescription
              previewImage {
                imageId
              }
              subtitle
            }
          }
        }
      }
    }
  `);

  const medium_cdn = "https://cdn-images-1.medium.com/max/400/";
  const medium_slug = "https://medium.com/0chain/";

  return (
    <div className="">
      <div className="text-4xl">
        <h3>Blogs and News</h3>
      </div>
      <div className="flex flex-row">
        {data.allMediumPost.edges.map((edge, index) => (
          <div className="p-5 ">
            <div className="flex flex-col w-3/5 ">
              <a
                href={medium_slug + edge.node.slug + "-" + edge.node.medium_id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>{edge.node.title}</div>
              </a>
              <div>{edge.node.firstPublishedAt}</div>
              <div>{edge.node.author.name}</div>
              <div>
                <img
                  src={medium_cdn + edge.node.virtuals.previewImage.imageId}
                  alt="medium"
                />
              </div>
              <div>{edge.node.virtuals.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <a>See in medium</a>
        <Link to="/team">Team</Link>
      </div>
    </div>
  );
}

/* 



             `${medium_cdn}${edge.node.virtuals.previewImage.imageId}`
            
            */
