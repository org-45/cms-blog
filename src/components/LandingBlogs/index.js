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
    <div className="h-100vh grid grid-cols-1">
      <div className="text-4xl grid items-center justify-start pl-40 ">
        <h3>Blogs and News</h3>
      </div>
      <div className="grid grid-cols-3 items-center justify-center">
        {data.allMediumPost.edges.map((edge, index) => (
          <div className="grid justify-center items-center ">
            <div className=" w-3/5 grid justify-self-center self-center bg-gray-100 border-solid border-4 border-green-100 p-5">
              <a
                href={medium_slug + edge.node.slug + "-" + edge.node.medium_id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold text-xl p-3 text-center">
                  {edge.node.title}
                </div>
              </a>

              <div>
                <img
                  src={medium_cdn + edge.node.virtuals.previewImage.imageId}
                  alt="medium"
                />
              </div>
              <div className="grid grid-cols-2 p-3">
                <div className="grid  justify-self-center self-center font-bold">
                  {edge.node.firstPublishedAt}
                </div>
                <div className="grid  justify-self-center self-center font-bold">
                  {edge.node.author.name}
                </div>
              </div>
              <div className="p-3 text-center">
                {edge.node.virtuals.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid items-center justify-start pl-40 ">
        <a
          href="https://medium.com/0chain"
          target="_blank"
          rel="noopener noreferrer"
        >{`See in medium >>`}</a>
        <Link to="/team">Team</Link>
      </div>
    </div>
  );
}

/* 



             `${medium_cdn}${edge.node.virtuals.previewImage.imageId}`
            
            */
