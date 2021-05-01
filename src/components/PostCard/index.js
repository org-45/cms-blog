import React from "react";
import { Link } from "gatsby";
import ProgressiveImageContainer from "../../components/ProgressiveImageContainer";
const PostCard = (props) => {
  const { posts } = props;

  return (
    <div className="columns is-multiline">
      {posts
        .filter((post) => post.node.frontmatter.templateKey === "article-page")
        .map(({ node: post }) => (
          <div
            key={post.id}
            className="column is-4"
            style={{ borderRadius: "1px" }}
          >
            <section className="section">
              <div className="has-text-centered">
                <ProgressiveImageContainer
                  image={post.frontmatter.cover.publicURL}
                  alt={post.frontmatter.title}
                />
              </div>
              <p>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </section>
          </div>
        ))}
    </div>
  );
};

export default PostCard;
