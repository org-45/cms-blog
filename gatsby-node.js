const _ = require("lodash");
const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;

  console.log(node, "here is our node");

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (
        Object.prototype.hasOwnProperty.call(node.frontmatter, "slug") &&
        Object.prototype.hasOwnProperty.call(node.frontmatter, "cover") &&
        Object.prototype.hasOwnProperty.call(node.frontmatter, "tags")
      ) {
        slug = `/blog/${_.kebabCase(node.frontmatter.slug)}`;
      } else if (
        Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
      ) {
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.dir === "") {
        slug = `/`;
      } else {
        slug = `/${parsedFilePath.dir}/`;
      }
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    quality: 50
                    placeholder: BLURRED
                    layout: CONSTRAINED
                  )
                }
                publicURL
              }
              tags
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const postsAndPages = result.data.allMarkdownRemark.edges;

    // Post pages:
    let posts = [];
    // Iterate through each post/page, putting all found posts (where templateKey = article-page) into `posts`
    postsAndPages.forEach((edge) => {
      if (_.isMatch(edge.node.frontmatter, { templateKey: "article-page" })) {
        posts = posts.concat(edge);
      }
    });

    //ProductPages
    // let products = [];
    // postsAndPages.forEach((edge) => {
    //   if (_.isMatch(edge.node.frontmatter, { templateKey: "product-page" })) {
    //     products = products.concat(edge);
    //   }
    // });

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: "src/templates/blog.js",
      pageLength: 6, // This is optional and defaults to 10 if not used
      pathPrefix: "blog", // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    });
    postsAndPages.forEach((edge) => {
      const id = edge.node.id;
      if (
        edge.node.fields.slug !== "banner-component" &&
        edge.node.frontmatter.templateKey !== "product-page"
      ) {
        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
          },
        });
      }
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    postsAndPages.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      });
    });
  });
};

// Make product pages
// products.forEach((product) => {
//   const productPath = `/products/${_.kebabCase(product)}/`;

//   createPage({
//     path: productPath,
//     component: path.resolve(`src/templates/product-page.js`),
//     context: {
//       tag,
//     },
//   });
// });

//here we can make updates to products pages from the field values of the cms
// we do need to keep the md section intact based on the md section our
// pages section or say a tempalte from a product page will be updated
//once a match is foundcwe will send need to be eriesanged values via the
// hoc or similar kind of components

//moreover in the specific pages templates we will listen for the values with
//graph ql queries

//but first we  will only make a static pages for the pages section

//so yeah after making the /0Box page static
// I WILL be making the dynamic version of it where nodejscode from gatsby-node is
//used
