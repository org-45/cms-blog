import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import useWindowSize from "/screenSize.js";

export default function LandingBlogs() {
  const { width } = useWindowSize();

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
  const medium_cdn_m = "https://cdn-images-1.medium.com/max/200/";
  const medium_slug = "https://medium.com/0chain/";

  return width > 1300 ? (
    <LLandingBlog medium_cdn={medium_cdn} medium_slug={medium_slug} d={data} />
  ) : (
    <MLandingBlog
      medium_cdn_m={medium_cdn_m}
      medium_slug={medium_slug}
      d={data}
    />
  );
}

const LLandingBlog = (props) => {
  const { medium_cdn, medium_slug } = props;
  const data = props.d;

  return (
    <div className="h-100vh grid grid-cols-1">
      <div className="text-6xl font-black grid items-center justify-start pl-40 ">
        <h3>Blogs and News</h3>
      </div>
      <div className="grid grid-cols-3 items-center justify-center">
        {data.allMediumPost.edges.map((edge, index) => (
          <div className="grid justify-center items-center ">
            <div className=" transform hover:scale-110 motion-reduce:transform-none  w-3/5 grid justify-self-center self-center bg-gray-100 border-solid border-4 border-green-100 p-5">
              <a
                href={medium_slug + edge.node.slug + "-" + edge.node.medium_id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="font-bold text-black text-xl p-3 text-center">
                  {edge.node.title}
                </div>
              </a>

              <div className=" ">
                <a
                  href={
                    medium_slug + edge.node.slug + "-" + edge.node.medium_id
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={medium_cdn + edge.node.virtuals.previewImage.imageId}
                    alt="medium"
                  />
                </a>
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
      </div>
    </div>
  );
};

const MLandingBlog = (props) => {
  const { medium_cdn_m, medium_slug } = props;
  const data = props.d;
  return (
    <div className="h-100vh grid grid-cols-1">
      <h3 className="text-3xl m-5 font-black grid text-center">
        Blogs and News
      </h3>
      <div className="grid grid-cols-1 items-center justify-center">
        {data.allMediumPost.edges.slice(0, 2).map((edge, index) => (
          <div className=" p-3  transform hover:scale-110 motion-reduce:transform-none  w-4/5 grid justify-self-center self-center bg-gray-100 border-solid border-4 border-green-100">
            <a
              href={medium_slug + edge.node.slug + "-" + edge.node.medium_id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="font-bold text-black text-center">
                {edge.node.title.slice(0, 45)}
                {"..."}
              </div>
            </a>

            <div className="grid justify-center items-center">
              <a
                href={medium_slug + edge.node.slug + "-" + edge.node.medium_id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={medium_cdn_m + edge.node.virtuals.previewImage.imageId}
                  alt="medium"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 ">
              <div className="grid  justify-self-center self-center font-bold">
                {edge.node.firstPublishedAt}
              </div>
              <div className="grid  justify-self-center self-center font-bold">
                {edge.node.author.name}
              </div>
            </div>
            <div className=" text-center">
              {edge.node.virtuals.subtitle.slice(0, 80)}
              {"..."}
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
      </div>
    </div>
  );
};
