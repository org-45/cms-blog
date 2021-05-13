// import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import config from "../../config";

// import ProductPageTemplate from "../components/ProductPageTemplate";
// import SE0 from "../components/SEO";

// import Layout from "../components/Layout";

// const ProductPage = (props) => {
//   const {
//     data: {
//       markdownRemark: {
//         fields: { slug },
//         frontmatter: {
//           title,
//           meta_title,
//           meta_description,
//           cover,
//           date,
//           product_description,
//           product_yt_thumbnail,
//           product_yt_link,
//         },
//       },
//     },
//   } = props;

//   let product = {};
//   product.heading = title;
//   product.description = product_description;
//   product.product_yt_link = product_yt_link;
//   product.product_yt_thumbnail = product_yt_thumbnail;

//   return (
//     <Layout>
//       <section className="section">
//         <SE0
//           title={title}
//           meta_title={meta_title}
//           meta_desc={meta_description}
//           cover={cover.publicURL}
//           slug={slug}
//           date={date}
//           siteTitleAlt={config.siteTitleAlt}
//           userName={config.userName}
//           siteTitle={config.siteTitle}
//           siteUrl={config.siteUrl}
//           siteFBAppID={config.siteFBAppID}
//           userTwitter={config.userTwitter}
//           pathPrefix={config.pathPrefix}
//         />
//         <div className="container content">
//           <div className="columns">
//             <div className="column is-10 is-offset-1">
//               <ProductPageTemplate
//                 cover={cover}
//                 meta_title={meta_title}
//                 meta_desc={meta_description}
//                 product={product}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// ProductPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
// };

// export default ProductPage;

// export const pageQuery = graphql`
//   query ProductByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id

//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         cover {
//           childImageSharp {
//             gatsbyImageData(quality: 72, layout: CONSTRAINED)
//           }
//           publicURL
//         }
//         meta_title
//         meta_description
//         product_yt_link
//         product_yt_thumbnail {
//           childImageSharp {
//             gatsbyImageData(
//               quality: 90
//               aspectRatio: 1
//               placeholder: BLURRED
//               layout: CONSTRAINED
//             )
//           }
//           publicURL
//         }
//         product_description
//       }
//     }
//   }
// `;
