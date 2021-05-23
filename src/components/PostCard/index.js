import React from "react";
import { Link } from "gatsby";
import ProgressiveImageContainer from "../../components/ProgressiveImageContainer";
const PostCard = (props) => {
  const { posts } = props;

  return (
    <div className="grid grid-cols-3 ">
      {posts
        .filter((post) => post.node.frontmatter.templateKey === "article-page")
        .map(({ node: post }) => (
          <div
            key={post.id}
            style={{ borderRadius: "1px" }}
            className="m-5 rounded-full"
          >
            <section className="p-2 grid border h-60vh  rounded-3">
              <div className="h-30vh grid justify-center items-center ">
                <ProgressiveImageContainer
                  image={post.frontmatter.cover.publicURL}
                  alt={post.frontmatter.title}
                />
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
};

export default PostCard;
