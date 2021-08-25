import React from "react";
import { Link } from "gatsby";
import config from "../../config";
import Helmet from "react-helmet";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";
// import SearchBox from "../components/SearchBox";

const PaginationLink = (props) => {
  if (!props.test) {
    return (
      <Link to={`/blog/${props.url}`} className="button is-rounded">
        {props.text}
      </Link>
    );
  } else {
    return (
      <span disabled className="button is-rounded">
        {props.text}
      </span>
    );
  }
};

const BlogPage = (props) => {
  const {
    pageContext: { first, group, index, last },
  } = props;

  console.log(group, "this is group");

  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString() + "/";

  const websiteSchemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: config.siteUrl,
    name: config.siteTitle,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog | 0chain </title>
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchemaOrgJSONLD)}
        </script>
      </Helmet>

      {/* BANNER */}
      <div className="bg-gradient-to-br from-green-400 to-green-900 h-40vh grid grid-cols-1 text-white justify-center items-center">
        <h1 className=" grid pt-20 text-5xl font-black  text-white justify-center items-center">
          {"Blog"}
        </h1>
      </div>

      <section className="">
        <PostCard posts={group} />
        <section className="p-10">
          <div className="buttons is-centered">
            <PaginationLink
              test={first}
              url={previousUrl}
              text="Previous Page"
            />
            <PaginationLink test={last} url={nextUrl} text="Next Page" />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default BlogPage;
