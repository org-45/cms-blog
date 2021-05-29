import React from "react";
import { Link } from "gatsby";
import ProgressiveImageContainer from "../../components/ProgressiveImageContainer";
import useWindowSize from "/screenSize.js";
import { useDeviceDetect } from "/screenSize.js";

const PostCard = (props) => {
  const { width } = useWindowSize();
  const { isMobile } = useDeviceDetect();

  const { posts } = props;

  console.log(posts, "this is our posts");

  return width > 1300 || !isMobile ? (
    <LPostCard posts={posts} />
  ) : (
    <MPostCard posts={posts} />
  );
};

const MPostCard = ({ posts }) => (
  <div className="grid grid-cols-1 w-4/5 m-3">
    {posts
      .filter((post) => post.node.frontmatter.templateKey === "article-page")
      .map(({ node: post }) => (
        <section
          key={post.id}
          className="grid grid-cols-1 border h-auto w-full rounded-3 m-5"
        >
          <div className="h-30vh grid justify-center items-center ">
            {post.frontmatter.cover.childImageSharp === null ? (
              <img
                src={post.frontmatter.cover.publicURL}
                alt={post.frontmatter.title}
                max-height="150px"
                width="100%"
              />
            ) : (
              <ProgressiveImageContainer
                image={post.frontmatter.cover}
                alt={post.frontmatter.title}
              />
            )}
          </div>
          <p className="grid h-10vh">
            <Link
              className="grid font-black text-black underline text-center"
              to={post.fields.slug}
            >
              {post.frontmatter.title}
            </Link>

            <small className="grid justify-center items-center p-5">
              {post.frontmatter.date}
            </small>
          </p>
          <p className="grid justify-center items-center">
            <div className=" text-center">{post.excerpt}</div>

            <div className="grid justify-center items-center ">
              <Link className=" " to={post.fields.slug}>
                {`Keep Reading >>`}
              </Link>
            </div>
          </p>
        </section>
      ))}
  </div>
);

const LPostCard = ({ posts }) => (
  <div className="grid grid-cols-3 m-20 p-10 ">
    {posts
      .filter((post) => post.node.frontmatter.templateKey === "article-page")
      .map(({ node: post }) => (
        <div
          key={post.id}
          style={{ borderRadius: "1px" }}
          className="m-5 rounded-full"
        >
          <section className="p-2 grid border h-60vh  rounded-3 m-10">
            <div className="h-30vh grid justify-center items-center ">
              {post.frontmatter.cover.childImageSharp === null ? (
                <img
                  src={post.frontmatter.cover.publicURL}
                  alt={post.frontmatter.title}
                  max-height="150px"
                  width="100%"
                />
              ) : (
                <ProgressiveImageContainer
                  image={post.frontmatter.cover}
                  alt={post.frontmatter.title}
                />
              )}
            </div>
            <p className="grid h-5vh">
              <Link
                className="grid font-black text-black underline text-center"
                to={post.fields.slug}
              >
                {post.frontmatter.title}
              </Link>

              <small className="grid justify-center items-center p-5">
                {post.frontmatter.date}
              </small>
            </p>
            <p className="grid justify-center items-center">
              <div className=" text-center">{post.excerpt}</div>

              <div className="grid justify-center items-center ">
                <Link className=" " to={post.fields.slug}>
                  {`Keep Reading >>`}
                </Link>
              </div>
            </p>
          </section>
        </div>
      ))}
  </div>
);

export default PostCard;
